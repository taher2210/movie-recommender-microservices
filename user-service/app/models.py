from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.database import Base


class Watchlist(Base):
    __tablename__ = "watchlist"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    movie_id = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    poster_url = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Favorite(Base):
    __tablename__ = "favorites"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    movie_id = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    poster_url = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    movie_id = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    poster_url = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())