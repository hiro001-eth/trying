from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGO_URI: str = "mongodb://localhost:27017/udaan_agencies"
    REDIS_URL: str = "redis://localhost:6379/0"
    SECRET_KEY: str = "a_very_secret_key_for_jwt_and_sessions"
    ARGON2_SECRET: str = "another_secret_for_hashing"
    MINIO_URL: str = "http://localhost:9000"
    MINIO_ACCESS_KEY: str = "minioadmin"
    MINIO_SECRET_KEY: str = "minioadmin"
    MINIO_BUCKET: str = "udaan-media"
    NEXT_PUBLIC_API_URL: str = "http://localhost:8000/api"
    NEXT_PUBLIC_WS_URL: str = "ws://localhost:8000/ws"
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "INFO"

    class Config:
        env_file = ".env"

settings = Settings()
