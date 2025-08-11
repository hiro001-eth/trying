from ..prisma import prisma
from ..schemas.application_schemas import ApplicationCreate

class ApplicationService:
    async def get_applications(self):
        return await prisma.application.find_many()

    async def create_application(self, application: ApplicationCreate):
        return await prisma.application.create(data=application.dict())

    async def get_application(self, application_id: int):
        return await prisma.application.find_unique(where={"id": application_id})
