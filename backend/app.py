from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://myuser:mypassword@db:5432/vuepy'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Определение модели User
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))

def init_db():
    with app.app_context():
        db.create_all()

        # Проверка, если таблица пуста, вставляем начальные данные
        if User.query.count() == 0:
            user1 = User(name='John Doe')
            user2 = User(name='Jane Doe')
            db.session.add(user1)
            db.session.add(user2)
            db.session.commit()

# Вызов функции для инициализации базы данных
init_db()

# Роуты для работы с данными
@app.route('/api/data', methods=['GET'])
def get_data():
    users = User.query.all()
    return jsonify({'data': [{'id': user.id, 'name': user.name} for user in users]})

@app.route('/api/data', methods=['POST'])
def post_data():
    received_data = request.get_json()

    if not received_data or 'name' not in received_data:
        return jsonify({'error': 'Field "name" is required'}), 400

    new_user = User(name=received_data['name'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Data inserted', 'data': {'id': new_user.id, 'name': new_user.name}})

@app.route('/api/data', methods=['DELETE'])
def delete_data():
    received_data = request.get_json()

    user = User.query.get(received_data['id'])
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'Data deleted'})
    return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
