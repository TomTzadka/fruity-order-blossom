# Fruity Order Blossom 🍉

A fruit ordering system built with React, Flask & Docker.

## Tech Stack
- Frontend: React + Vite
- Backend: Flask REST API
- Docker & Docker Compose
- Auto Reload for development (React & Flask)
- Data stored in JSON files on the backend

---

## Development Setup

### Prerequisites
- Docker installed
- Docker Compose (or `docker.compose` if installed via snap)

---

## Quick Start

1. Add your user to the docker group (only once):
```bash
sudo usermod -aG docker $USER
reboot


fruity-order-blossom/
│
├── client/    --> React Frontend
├── server/    --> Flask Backend
├── docker-compose.yml
├── start.sh   --> run all
└── README.md
