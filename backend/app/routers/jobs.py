from fastapi import APIRouter, Depends, HTTPException
from typing import List
from ..services.job_service import JobService
from ..schemas.job_schemas import Job, JobCreate
from ..dependencies import get_job_service

router = APIRouter()

@router.get("/", response_model=List[Job])
async def read_jobs(job_service: JobService = Depends(get_job_service)):
    return await job_service.get_jobs()

@router.post("/", response_model=Job)
async def create_job(job: JobCreate, job_service: JobService = Depends(get_job_service)):
    return await job_service.create_job(job)

@router.get("/{job_id}", response_model=Job)
async def read_job(job_id: int, job_service: JobService = Depends(get_job_service)):
    db_job = await job_service.get_job(job_id)
    if db_job is None:
        raise HTTPException(status_code=404, detail="Job not found")
    return db_job

@router.put("/{job_id}", response_model=Job)
async def update_job(job_id: int, job: JobCreate, job_service: JobService = Depends(get_job_service)):
    return await job_service.update_job(job_id, job)

@router.delete("/{job_id}", response_model=Job)
async def delete_job(job_id: int, job_service: JobService = Depends(get_job_service)):
    return await job_service.delete_job(job_id)
