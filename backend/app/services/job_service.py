from ..prisma import prisma
from ..schemas.job_schemas import JobCreate

class JobService:
    async def get_jobs(self):
        return await prisma.job.find_many()

    async def create_job(self, job: JobCreate):
        return await prisma.job.create(data=job.dict())

    async def get_job(self, job_id: int):
        return await prisma.job.find_unique(where={"id": job_id})

    async def update_job(self, job_id: int, job: JobCreate):
        return await prisma.job.update(where={"id": job_id}, data=job.dict())

    async def delete_job(self, job_id: int):
        return await prisma.job.delete(where={"id": job_id})
