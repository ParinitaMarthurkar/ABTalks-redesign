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


class SubmissionBase(BaseModel):
    challenge_day: int
    github_url: str
    linkedin_url: str
    notes: str | None = None


class SubmissionCreate(SubmissionBase):
    pass


class Submission(SubmissionBase):
    id: int
    completed: bool

    class Config:
        from_attributes = True
