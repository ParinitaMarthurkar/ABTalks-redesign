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


def create_submission(db: Session, submission: schemas.SubmissionCreate):

    existing = (
        db.query(models.Submission)
        .filter(models.Submission.challenge_day == submission.challenge_day)
        .first()
    )

    if existing:
        return existing

    db_submission = models.Submission(
        challenge_day=submission.challenge_day,
        github_url=submission.github_url,
        linkedin_url=submission.linkedin_url,
        notes=submission.notes,
        completed=True,
    )

    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)

    return db_submission


def get_submission_by_day(db: Session, day: int):
    return (
        db.query(models.Submission)
        .filter(models.Submission.challenge_day == day)
        .first()
    )
