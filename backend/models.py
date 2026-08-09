from sqlalchemy import Column, Integer, String

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    current_day = Column(Integer, default=1)
    total_days = Column(Integer, default=60)
    streak = Column(Integer, default=0)
    completion = Column(Integer, default=0)
    standing = Column(String, default="Top 100%")
