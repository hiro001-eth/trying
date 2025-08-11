from fastapi import FastAPI
from .routers import auth, jobs, applications

app = FastAPI()

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(jobs.router, prefix="/api/jobs", tags=["jobs"])
app.include_router(applications.router, prefix="/api/applications", tags=["applications"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Udaan Agencies API"}
