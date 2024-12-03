from flask import Flask
from flask_cors import CORS
from models import db  # Импорт объекта db и моделей
from events.routes import events_blueprint
from auth.routes import auth_blueprint


app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@localhost:5432/itam_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(events_blueprint, url_prefix='/api/events')
app.register_blueprint(auth_blueprint, url_prefix='/api/auth')


if __name__ == '__main__':
    app.run(debug=True)