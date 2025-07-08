class Config:
    SECRET_KEY = "supersecretkey"
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:eod--2003@localhost:5432/kva_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
