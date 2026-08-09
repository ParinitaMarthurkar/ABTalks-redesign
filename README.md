# ABTalks Redesign

A modern, mobile-first redesign of ABTalks built for ViCodathon 2026.

## Problem Statement

Redesign the ABTalks platform to provide a better experience for students participating in the 60-day challenge.

## Features

- Modern mobile-first UI (390px optimized)
- Responsive landing page
- Interactive dashboard
- Daily challenge page
- Submission checklist
- GitHub & LinkedIn submission tracking
- Progress tracking
- Achievement system
- Smooth animations
- FastAPI backend
- PostgreSQL database

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL

## Project Structure

```
src/
backend/
public/
docs/
```

## Running Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Future Improvements

- User Authentication
- Leaderboards
- Notifications
- Real-time progress sync
- AI-powered challenge recommendations

## Author
Parinita Marthurkar