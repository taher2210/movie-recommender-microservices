from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.deps import get_current_user_id
from app.models import Watchlist, Favorite, History
from app.schemas import MovieItem

router = APIRouter(prefix="/user", tags=["User"])


# WATCHLIST

@router.post("/watchlist")
def add_to_watchlist(
    movie: MovieItem,
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    item = Watchlist(
        user_id=user_id,
        movie_id=movie.movie_id,
        title=movie.title,
        poster_url=movie.poster_url
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return item


@router.get("/watchlist")
def get_watchlist(
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    return db.query(Watchlist).filter(
        Watchlist.user_id == user_id
    ).all()


@router.delete("/watchlist/{movie_id}")
def delete_watchlist(
    movie_id: int,
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    item = db.query(Watchlist).filter(
        Watchlist.user_id == user_id,
        Watchlist.movie_id == movie_id
    ).first()

    if item:
        db.delete(item)
        db.commit()

    return {"message": "Removed from watchlist"}


# FAVORITES

@router.post("/favorites")
def add_to_favorites(
    movie: MovieItem,
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    item = Favorite(
        user_id=user_id,
        movie_id=movie.movie_id,
        title=movie.title,
        poster_url=movie.poster_url
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return item


@router.get("/favorites")
def get_favorites(
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    return db.query(Favorite).filter(
        Favorite.user_id == user_id
    ).all()


@router.delete("/favorites/{movie_id}")
def delete_favorite(
    movie_id: int,
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    item = db.query(Favorite).filter(
        Favorite.user_id == user_id,
        Favorite.movie_id == movie_id
    ).first()

    if item:
        db.delete(item)
        db.commit()

    return {"message": "Removed from favorites"}


# HISTORY

@router.post("/history")
def add_to_history(
    movie: MovieItem,
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    item = History(
        user_id=user_id,
        movie_id=movie.movie_id,
        title=movie.title,
        poster_url=movie.poster_url
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return item


@router.get("/history")
def get_history(
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    return db.query(History).filter(
        History.user_id == user_id
    ).all()