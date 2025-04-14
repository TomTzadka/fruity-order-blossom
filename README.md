
# Fruity Order Blossom 🍓🍍🍊

Online Fruit Ordering System  
Frontend - React + Vite  
Backend - Flask  
Database - PostgreSQL  
Dockerized Environment

---

## Development Setup

### Prerequisites:
- Docker
- Docker Compose
- Node.js (for local frontend development)

---

## Project Structure:
```
fruity-order-blossom/
│
├── server/         ← Flask API
│   ├── .env        ← Backend Environment Variables
│
├── client/         ← React Frontend
│   ├── .env        ← Frontend Environment Variables
│
├── docker-compose.yml
└── volumes:        ← PostgreSQL Data Storage
```

---

## Environment Variables:

### server/.env:
```env
FLASK_ENV=development
DB_HOST=db
DB_NAME=fruity_db
DB_USER=fruity_user
DB_PASS=fruity_pass
```

### client/.env:
```env
VITE_API_URL=http://localhost:5000
```

---

## Run the Project:

```bash
# Build and start all services
sudo docker compose up -d --build

# Backend logs
sudo docker compose logs backend -f

# Frontend logs
sudo docker compose logs frontend -f

# Run Migrations
sudo docker compose exec backend flask db upgrade
```

---

## Access URLs:

| Service  | URL                    | Description        |
|----------|------------------------|-------------------|
| Frontend | http://localhost:8080  | Web Application   |
| Backend  | http://localhost:5000  | REST API          |
| Database | localhost:5432         | PostgreSQL DB     |

---

## Database Management:

```bash
# Connect to PostgreSQL
sudo docker compose exec db psql -U fruity_user fruity_db
```

---

## Common Commands:

### Stop all services:
```bash
sudo docker compose down
```

### Clean all containers, images, and volumes:
```bash
sudo docker system prune -af
sudo docker volume prune -f
```

---

## Future Improvements:
- Payment System
- Authentication
- Admin Dashboard
- Inventory Management
- Production Deployment with Nginx & Gunicorn

---
Fruity Order Blossom

An interactive fruit ordering web application built with React (Vite) frontend, Flask backend, and PostgreSQL database using Docker.

Live Demo

https://tomtzadka.github.io/fruity-order-blossom/

Note: If you see a 404 error on page load - click the Home button in the navbar to navigate correctly.

Project Structure

fruity-order-blossom/
├── client/     # React + Vite frontend
├── server/     # Flask backend
├── docker-compose.yml
├── .env        # Root env for Docker

Installation & Running Locally

1. Clone the repository

git clone https://github.com/TomTzadka/fruity-order-blossom.git
cd fruity-order-blossom

2. Docker Up

sudo docker compose up -d --build

3. Migrate DB

sudo docker compose exec backend flask db upgrade

Frontend: http://localhost:8080Backend API: http://localhost:5000

Deploy to GitHub Pages (Frontend Only)

Navigate to client/:

cd client
yarn install
yarn deploy

Make sure your vite.config.ts has:

base: '/fruity-order-blossom/'

Environment Variables

Root .env (Docker Compose):

POSTGRES_USER=fruity_user
POSTGRES_PASSWORD=fruity_pass
POSTGRES_DB=fruity_db

client/.env (Vite frontend):

VITE_API_URL=http://localhost:5000

Tech Stack

Frontend: React, Vite, TailwindCSS

Backend: Python, Flask, SQLAlchemy, Alembic

DB: PostgreSQL

DevOps: Docker, GitHub Pages

Notes

The production backend is not deployed yet.

GitHub Pages serves only the frontend static files.

Always run docker compose down when rebuilding environment.

