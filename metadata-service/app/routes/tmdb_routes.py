from fastapi import APIRouter
import httpx

from app.config import TMDB_TOKEN

router = APIRouter(prefix="/tmdb", tags=["TMDB"])

BASE_URL = "https://api.themoviedb.org/3"

HEADERS = {
    "Authorization": f"Bearer {TMDB_TOKEN}",
    "accept": "application/json"
}


@router.get("/autocomplete")
async def autocomplete(query: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/search/movie",
            headers=HEADERS,
            params={
                "query": query,
                "page": 1
            }
        )

    data = response.json()

    results = []

    for movie in data.get("results", [])[:8]:
        results.append({
            "id": movie["id"],
            "title": movie["title"],
            "poster_url": (
                f"https://image.tmdb.org/t/p/w200{movie['poster_path']}"
                if movie.get("poster_path")
                else None
            ),
            "year": (
                movie["release_date"][:4]
                if movie.get("release_date")
                else None
            )
        })

    return results


@router.get("/movie/{movie_id}")
async def get_movie(movie_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/movie/{movie_id}",
            headers=HEADERS
        )

    return response.json()


@router.get("/movie/{movie_id}/videos")
async def get_trailers(movie_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/movie/{movie_id}/videos",
            headers=HEADERS
        )

    return response.json()


@router.get("/movie/{movie_id}/credits")
async def get_cast(movie_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/movie/{movie_id}/credits",
            headers=HEADERS
        )

    return response.json()