# Movie Recommender Microservices

A microservices-based movie recommendation platform built with FastAPI, machine learning, JWT authentication, and React.

## Architecture

This project is split into independent services so each component can be developed, deployed, and scaled separately.

Services planned:

- auth-service
- recommendation-service
- trailer-service
- user-service
- gateway
- frontend

---

## Auth Service

The auth service is responsible for user authentication and identity management.

Current features:

- User registration
- User login
- JWT access token generation
- JWT refresh token generation
- Protected user profile endpoint
- Secure password hashing
- PostgreSQL user storage

### Tech Stack

- FastAPI
- Supabase PostgreSQL
- SQLAlchemy
- Pydantic
- Argon2 password hashing
- JWT authentication
- Python-Jose

### API Endpoints

#### Register User

Creates a new user account.

**POST**

`/auth/register`

Example request:

```json
{
  "username": "taher",
  "email": "taher@example.com",
  "password": "mypassword123"
}
```

---

#### Login User

Authenticates a user and returns JWT tokens.

**POST**

`/auth/login`

Example request:

```json
{
  "email": "taher@example.com",
  "password": "mypassword123"
}
```

Example response:

```json
{
  "access_token": "jwt_token_here",
  "refresh_token": "jwt_refresh_token_here",
  "token_type": "bearer"
}
```

---

#### Current User

Returns authenticated user details using JWT authentication.

**GET**

`/auth/me`

Requires Authorization header with bearer token.

Example response:

```json
{
  "id": "user_uuid",
  "username": "taher",
  "email": "taher@example.com",
  "is_active": true,
  "created_at": "2026-05-23T12:00:00"
}
```

---

## Authentication Flow

1. User registers with username, email, and password
2. Password is securely hashed using Argon2
3. User logs in with credentials
4. Auth service verifies credentials
5. JWT access and refresh tokens are generated
6. Protected endpoints validate JWT tokens
7. Authenticated user data is returned

---

## Folder Structure

```text
movie-recommender-microservices
├── auth-service
│   ├── app
│   │   ├── auth.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── deps.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── main.py
│   │   └── routes
│   │       └── auth_routes.py
│   ├── requirements.txt
│   └── Dockerfile
```

---

## Next Services

Planned implementation:

- Movie recommendation inference service
- Trailer metadata service
- Watchlist and user preferences service
- API gateway
- React frontend
