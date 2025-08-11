from .repository import JobRepository
from .schemas import JobCreate

class JobService:
    def __init__(self, repository: JobRepository = Depends()):
        self.repository = repository

    async def get_all_jobs(self):
        return await self.repository.get_all()

    async def create_job(self, job: JobCreate):
        return await self.repository.create(job)
