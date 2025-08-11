from .services.auth_service import AuthService
from .services.job_service import JobService
from .services.application_service import ApplicationService

def get_auth_service() -> AuthService:
    return AuthService()

def get_job_service() -> JobService:
    return JobService()

def get_application_service() -> ApplicationService:
    return ApplicationService()
