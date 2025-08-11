from pydantic import BaseModel, EmailStr

class ApplicationBase(BaseModel):
    job_id: str
    candidate_name: str
    email: EmailStr
    phone: str

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: str

    class Config:
        orm_mode = True
