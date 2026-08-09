from database import Base, engine
import models
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi import Depends
import schemas

import crud
from database import get_db
Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="ABTalks API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ab-talks-redesign-lyart.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to ABTalks API",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }


@app.get("/challenge/today")
def today_challenge():
    return {
        "day": 12,
        "title": "Responsive Dashboard",
        "difficulty": "Medium",
        "estimatedTime": "25 mins",
        "description": "Design and build a responsive dashboard that works seamlessly across mobile devices while maintaining clean layouts and reusable components.",
        "requirements": [
            "Mobile-first",
            "Responsive Layout",
            "Reusable Components",
            "Accessibility",
        ],
        "resources": [
            {
                "title": "Tailwind CSS",
                "url": "https://tailwindcss.com/docs",
            },
            {
                "title": "CSS Grid Guide",
                "url": "https://css-tricks.com/snippets/css/complete-guide-grid/",
            },
            {
                "title": "Flexbox Guide",
                "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            },
        ],
        "skills": [
            "Responsive Design",
            "CSS Grid",
            "Flexbox",
            "Component Architecture",
        ],
    }


@app.get("/user")
def get_user(db: Session = Depends(get_db)):
    user = crud.get_user(db)

    if user is None:
        user = crud.create_user(
            db,
            schemas.UserCreate(
                name="Parinita",
                current_day=12,
                total_days=60,
                streak=11,
                completion=20,
                standing="Top 12%",
            ),
        )

    return {
        "name": user.name,
        "currentDay": user.current_day,
        "totalDays": user.total_days,
        "streak": user.streak,
        "completion": user.completion,
        "standing": user.standing,
        "nextMilestone": {
            "title": "15 Day Streak",
            "daysRemaining": 3,
        },
    }


@app.post("/submission")
def create_submission(
    submission: schemas.SubmissionCreate,
    db: Session = Depends(get_db),
):
    return crud.create_submission(db, submission)


@app.get("/submission/{day}")
def get_submission(day: int, db: Session = Depends(get_db)):
    submission = crud.get_submission_by_day(db, day)

    if submission is None:
        return {"message": "No submission found"}

    return submission


@app.get("/progress")
def get_progress():
    return {
        "achievements": [
            "7 Day Streak",
            "First Submission",
            "Portfolio Builder",
        ],
        "recentActivity": [
            {
                "type": "GitHub",
                "timestamp": "2 hours ago",
            },
            {
                "type": "LinkedIn",
                "timestamp": "Yesterday",
            },
        ],
    }
