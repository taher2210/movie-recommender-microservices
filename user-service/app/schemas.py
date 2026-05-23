from pydantic import BaseModel
from datetime import datetime


class MovieItem(BaseModel):
    movie_id: int
    title: str
    poster_url: str | None = None


class MovieResponse(MovieItem):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True