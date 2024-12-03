from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime




db = SQLAlchemy()


class Event(db.Model):
    __tablename__ = 'event_data'
    
    id = db.Column(db.Integer, primary_key=True)
    event_name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    start_datetime = db.Column(db.DateTime, nullable=False)
    end_datetime = db.Column(db.DateTime, nullable=False)
    event_type = db.Column(db.String(10), nullable=False, check_constraint="event_type IN ('online', 'offline')")
    location = db.Column(db.String(255), nullable=False)


class User(db.Model):
    __tablename__ = 'user_data'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    hpsw = db.Column(db.String(255), nullable=False)
    is_admin = db.Column(db.Integer, default=0)
    time = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, password):
        self.hpsw = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hpsw, password)