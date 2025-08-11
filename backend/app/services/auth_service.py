from ..prisma import prisma
from ..schemas.auth_schemas import UserCreate
from ..security import get_password_hash, verify_password

class AuthService:
    async def get_user_by_email(self, email: str):
        return await prisma.user.find_unique(where={"email": email})

    async def create_user(self, user: UserCreate):
        hashed_password = get_password_hash(user.password)
        return await prisma.user.create(
            data={
                "name": user.name,
                "email": user.email,
                "password_hash": hashed_password,
                "role_id": 2  # Default to hr-manager
            }
        )

    async def authenticate_user(self, email: str, password: str):
        user = await self.get_user_by_email(email)
        if not user:
            return None
        if not verify_password(password, user.password_hash):
            return None
        return user
