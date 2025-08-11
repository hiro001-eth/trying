from fastapi import APIRouter, Depends, HTTPException
from typing import List
from .schemas import Job, JobCreate
from .service import JobService

router = APIRouter()

@router.get("/jobs", response_model=List[Job])
async def read_jobs(service: JobService = Depends()):
    return await service.get_all_jobs()

@router.post("/jobs", response_model=Job)
async def create_job(job: JobCreate, service: JobService = Depends()):
    return await service.create_job(job)
