from pydantic import BaseModel

class JobBase(BaseModel):
    title: str
    country: str
    job_type: str
    description: str
    status: str
    contact_email: str

class JobCreate(JobBase):
    pass

class Job(JobBase):
    id: int

    class Config:
        orm_mode = True
