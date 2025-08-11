from motor.motor_asyncio import AsyncIOMotorDatabase
from .schemas import ApplicationCreate

class ApplicationRepository:
    def __init__(self, db: AsyncIOMotorDatabase = Depends(get_db)):
        self.collection = db.applications

    async def create(self, application: ApplicationCreate):
        application_dict = application.dict()
        result = await self.collection.insert_one(application_dict)
        application_dict["_id"] = result.inserted_id
        return application_dict
