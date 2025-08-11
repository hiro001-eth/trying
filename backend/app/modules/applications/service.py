from .repository import ApplicationRepository
from .schemas import ApplicationCreate

class ApplicationService:
    def __init__(self, repository: ApplicationRepository = Depends()):
        self.repository = repository

    async def create_application(self, application: ApplicationCreate):
        return await self.repository.create(application)
