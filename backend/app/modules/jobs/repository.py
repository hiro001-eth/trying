from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId
from .schemas import JobCreate, Job

class JobRepository:
    def __init__(self, db: AsyncIOMotorDatabase = Depends(get_db)):
        self.collection = db.jobs

    async def get_all(self):
        return await self.collection.find().to_list(100)

    async def create(self, job: JobCreate):
        job_dict = job.dict()
        result = await self.collection.insert_one(job_dict)
        job_dict["_id"] = result.inserted_id
        return job_dict
