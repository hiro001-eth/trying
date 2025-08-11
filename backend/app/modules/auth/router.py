from fastapi import APIRouter, Depends
from .service import AuthService, get_current_user
from .schemas import UserCreate, User

router = APIRouter()

@router.post("/register", response_model=User)
async def register(user_in: UserCreate, service: AuthService = Depends()):
    return await service.register(user_in)

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), service: AuthService = Depends()):
    return await service.login(form_data.username, form_data.password)

@router.get("/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
