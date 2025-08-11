from fastapi import APIRouter, Depends
from .service import ApplicationService
from .schemas import ApplicationCreate, Application

router = APIRouter()

@router.post("/applications", response_model=Application)
async def create_application(application: ApplicationCreate, service: ApplicationService = Depends()):
    return await service.create_application(application)
