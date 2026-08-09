from pydantic import BaseModel


class UserBase(BaseModel):
    name: str
    current_day: int
    total_days: int
    streak: int
    completion: int
    standing: str


class UserCreate(UserBase):
    pass


class User(UserBase):
    id: int

    class Config:
        from_attributes = True
