from pydantic import BaseModel
from typing import Optional

class JobBase(BaseModel):
    title: str
    description: Optional[str] = None
    country: str
    job_type: str

class JobCreate(JobBase):
    pass

class Job(JobBase):
    id: str

    class Config:
        orm_mode = True
