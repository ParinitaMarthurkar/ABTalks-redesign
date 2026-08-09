from sqlalchemy import Column, Integer, String

from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Text


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    current_day = Column(Integer, default=1)
    total_days = Column(Integer, default=60)
    streak = Column(Integer, default=0)
    completion = Column(Integer, default=0)
    standing = Column(String, default="Top 100%")


class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    challenge_day = Column(Integer, nullable=False)
    github_url = Column(String, nullable=False)
    linkedin_url = Column(String, nullable=False)
    notes = Column(Text)
    completed = Column(Boolean, default=True)
