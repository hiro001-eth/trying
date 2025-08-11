from ..users.service import UserService
from .schemas import UserCreate
from ...security import get_password_hash

class AuthService:
    def __init__(self, user_service: UserService = Depends()):
        self.user_service = user_service

    async def register(self, user_in: UserCreate):
        hashed_password = get_password_hash(user_in.password)
        user = await self.user_service.create_user(user_in, hashed_password)
        return user
