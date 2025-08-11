from fastapi import APIRouter, Depends, HTTPException
from typing import List
from ..services.application_service import ApplicationService
from ..schemas.application_schemas import Application, ApplicationCreate
from ..dependencies import get_application_service

router = APIRouter()

@router.get("/", response_model=List[Application])
async def read_applications(application_service: ApplicationService = Depends(get_application_service)):
    return await application_service.get_applications()

@router.post("/", response_model=Application)
async def create_application(application: ApplicationCreate, application_service: ApplicationService = Depends(get_application_service)):
    return await application_service.create_application(application)

@router.get("/{application_id}", response_model=Application)
async def read_application(application_id: int, application_service: ApplicationService = Depends(get_application_service)):
    db_application = await application_service.get_application(application_id)
    if db_application is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return db_application
