from sqlalchemy.orm import Session
import models
import schemas


def get_user(db: Session):
    return db.query(models.User).first()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        name=user.name,
        current_day=user.current_day,
        total_days=user.total_days,
        streak=user.streak,
        completion=user.completion,
        standing=user.standing,
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user
