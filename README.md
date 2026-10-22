# Backend Ledger – Bank Authentication System Model

A backend application built using **Node.js, Express.js, and MongoDB** that provides user registration, login, JWT-based authentication, and account creation.

## 🚀 Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Authentication middleware for protected routes
- Account creation linked to authenticated users
- MongoDB database integration using Mongoose
- Cookie-based token handling

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **JWT** – Authentication tokens
- **bcryptjs** – Password hashing
- **dotenv** – Environment variable management

## 📁 Project Structure

```text
Backend-Ledger/
├── server.js
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── account.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── account.model.js
│   └── routes/
│       ├── auth.routes.js
│       └── account.routes.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/sumitshrivastava2007/Backend-Ledger-Bank-Authentication-System.git
cd Backend-Ledger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the placeholder values with your own MongoDB connection string and a strong, private JWT secret.

### 4. Start the server

```bash
node server.js
```

The server runs on `http://localhost:3000`.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in an existing user |
| POST | `/api/accounts/` | Create an account (authentication required) |

### Example: User Registration

**POST** `/api/auth/register`

Request body:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "your_password"
}
```

### Example: User Login

**POST** `/api/auth/login`

Request body:

```json
{
  "email": "rahul@example.com",
  "password": "your_password"
}
```

### Example: Create an Account

**POST** `/api/accounts/`

Requires a valid authentication token, supplied through the supported cookie or Bearer authorization header.

## 🔐 Security

- Passwords are hashed before being stored.
- JWTs are used to authenticate users.
- Protected routes verify authentication before processing requests.
- Environment variables are used to store sensitive configuration.

## 🎯 Learning Objectives

This project helped me practise:

- REST API development
- Node.js and Express.js
- MongoDB and Mongoose
- Authentication and authorization fundamentals
- Middleware and request-response handling
- Asynchronous JavaScript

## 📌 Future Improvements

- Add account retrieval, updating, and closing endpoints.
- Implement transaction history, deposits, and withdrawals.
- Add request validation and centralized error handling.
- Improve cookie security and authentication handling.
- Add automated API tests.

## 👨‍💻 Author

**Sumit Shrivastava**

A backend development learning project focused on authentication and account management.
