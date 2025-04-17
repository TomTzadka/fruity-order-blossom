
# 🍓 Fruity Order Blossom

A full-stack fruit ordering web app built with **React (Vite)**, **Flask**, **PostgreSQL**, and **Stripe** integration.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/TomTzadka/fruity-order-blossom.git
cd fruity-order-blossom
```

### 2. Create Environment Variables

Create `.env` files in `client` and `server` directories:

#### `client/.env`:
```
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

#### `server/.env`:
```
STRIPE_SECRET_KEY=sk_test_...
```

### 3. Run the App (Docker)

```bash
sudo docker compose up --build -d
```

Access:
- Frontend: http://localhost:8080
- Backend API: http://localhost:5000/api

---

## 🧪 API Overview

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/products`        | Get all products             |
| GET    | `/api/products/:id`    | Get product by ID            |
| POST   | `/api/orders`          | Create new order             |
| GET    | `/api/orders`          | List all orders              |
| GET    | `/api/orders/:id`      | Get single order             |
| POST   | `/api/login`           | Admin login (demo)           |
| POST   | `/api/payments/create-intent` | Create Stripe payment intent |

---

## 🧾 Admin Login

Use the following credentials:
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

---

## 🌐 Deploy Frontend to GitHub Pages

From the `client` folder:

```bash
yarn deploy
```

Ensure `package.json` includes:

```json
"homepage": "https://<username>.github.io/fruity-order-blossom",
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
}
```

---

## ⚠️ Notes

- Stripe is currently in test mode.
- Credit card numbers must use Stripe test data (e.g. `4242 4242 4242 4242`).
- Make sure to keep all API keys safe!

---