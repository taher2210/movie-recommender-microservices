# Movie Recommender Microservices

A microservices based movie discovery and recommendation platform built with FastAPI, Supabase PostgreSQL, JWT authentication, and TMDB integration.

This project is designed as a production style backend architecture rather than a monolithic student CRUD application. The idea is to simulate how modern scalable applications separate authentication, user state, metadata handling, and recommendation logic into independent services.

The platform allows users to search movies, discover metadata, manage personal collections, and eventually receive intelligent personalized recommendations.

## Current Features

### Authentication Service

The authentication microservice acts as the identity provider for the platform.

Implemented functionality:

- User registration
- User login
- Password hashing using Argon2
- JWT access token generation
- JWT refresh token generation
- Protected authenticated routes
- Cross service token validation

This service is responsible for issuing secure tokens that are consumed by other microservices.

Running locally:

```text
http://127.0.0.1:8000
```

---

### User Service

The user service manages user specific movie interactions.

Implemented functionality:

- Add movies to watchlist
- Retrieve watchlist
- Remove movies from watchlist
- Add movies to favorites
- Retrieve favorites
- Remove movies from favorites
- Store viewing history
- Retrieve viewing history

JWT authentication is enforced for protected routes.

Movie metadata such as title and poster URLs are stored for faster retrieval and simpler frontend rendering.

Running locally:

```text
http://127.0.0.1:8001
```

---

### Metadata Service

The metadata service integrates with TMDB.

Implemented functionality:

- Movie autocomplete search
- Movie details retrieval
- Trailer and video retrieval
- Cast and credits retrieval
- Poster URL generation

Autocomplete currently supports live suggestions.

Example:

```text
int
```

returns:

```text
Interstellar
Inside Out
Interview with the Vampire
```

Running locally:

```text
http://127.0.0.1:8002
```

---

## Architecture

Current architecture:

```text
Frontend (planned)
        ↓
Auth Service
User Service
Metadata Service
```

Responsibilities are intentionally separated.

Authentication logic remains isolated.

User specific state remains independent from external APIs.

Movie metadata is handled by a dedicated service instead of mixing API logic inside frontend or user management code.

This makes the architecture cleaner, more scalable, and easier to extend.

---

## Tech Stack

Backend:

- FastAPI
- SQLAlchemy
- Supabase PostgreSQL
- JWT Authentication
- Argon2 Password Hashing
- TMDB API
- httpx
- Pydantic

Frontend (planned):

- React
- Vite
- Tailwind CSS
- Axios
- React Router

Deployment (planned):

- Railway / Render for backend services
- Vercel for frontend

---

## Project Structure

```text
movie-recommender-microservices/
│
├── auth-service/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
├── user-service/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
├── metadata-service/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
└── frontend/ (planned)
```

---

## API Overview

### Auth Service Endpoints

Register user:

```http
POST /auth/register
```

Login:

```http
POST /auth/login
```

Get current user:

```http
GET /auth/me
```

---

### User Service Endpoints

Watchlist:

```http
POST /user/watchlist
GET /user/watchlist
DELETE /user/watchlist/{movie_id}
```

Favorites:

```http
POST /user/favorites
GET /user/favorites
DELETE /user/favorites/{movie_id}
```

History:

```http
POST /user/history
GET /user/history
```

---

### Metadata Service Endpoints

Autocomplete search:

```http
GET /tmdb/autocomplete?query=int
```

Movie details:

```http
GET /tmdb/movie/{movie_id}
```

Movie trailers:

```http
GET /tmdb/movie/{movie_id}/videos
```

Movie cast:

```http
GET /tmdb/movie/{movie_id}/credits
```

---

## Planned Features

### Frontend Application

A full React based movie application with:

- Login and registration pages
- Live autocomplete search
- Movie detail pages
- Trailer playback
- Watchlist management
- Favorites management
- Viewing history
- Responsive UI
- Modern streaming platform inspired design

---

### API Gateway

Current frontend architecture would directly call multiple services.

Current:

```text
frontend → auth-service
frontend → user-service
frontend → metadata-service
```

Planned:

```text
frontend → api-gateway → internal services
```

Benefits:

- centralized routing
- simplified frontend API access
- authentication forwarding
- request aggregation
- easier scaling

---

### Recommendation Engine

Recommendation logic will be implemented as a dedicated microservice.

Planned recommendation approaches:

- Content based filtering
- Collaborative filtering
- Hybrid recommendation systems
- Personalized user recommendations

Future endpoints may include:

```http
GET /recommend/user/{user_id}
GET /recommend/movie/{movie_id}
```

This service will consume user activity and metadata to generate recommendations.

---

### Additional Improvements

Planned engineering enhancements:

- Docker containerization
- Docker Compose local orchestration
- Redis caching
- Rate limiting
- API Gateway authentication middleware
- Service health checks
- Centralized logging
- CI/CD pipelines
- Kubernetes deployment
- Monitoring dashboards

---

## Local Development

Clone repository:

```bash
git clone https://github.com/your-username/movie-recommender-microservices.git
cd movie-recommender-microservices
```

Run auth service:

```bash
cd auth-service
./venv/bin/python -m uvicorn app.main:app --reload --port 8000
```

Run user service:

```bash
cd user-service
./venv/bin/python -m uvicorn app.main:app --reload --port 8001
```

Run metadata service:

```bash
cd metadata-service
./venv/bin/python -m uvicorn app.main:app --reload --port 8002
```

---

## Current Progress

Completed:

✅ Authentication service  
✅ User service  
✅ Metadata service with TMDB integration  
✅ Live movie autocomplete  

In progress:

⬜ Frontend application  
⬜ API gateway  
⬜ Recommendation microservice  
⬜ Deployment pipeline  
⬜ Production infrastructure  

---

## Vision

The end goal is to build a full movie discovery platform where users can:

- authenticate securely
- discover movies through live search
- explore trailers and cast information
- maintain personal watchlists
- track movie history
- save favorites
- receive personalized recommendations

The architecture is intentionally designed to resemble real production microservice systems rather than a single tightly coupled application.
