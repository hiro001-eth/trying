from pydantic import BaseModel, EmailStr

class ApplicationBase(BaseModel):
    job_id: int
    candidate_name: str
    email: EmailStr
    phone: str
    resume_url: str
    status: str

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: int

    class Config:
        orm_mode = True
