from flask import Blueprint, request, jsonify
from models import Event, Category, Tag, EventTag, EventFile, db




events_blueprint = Blueprint('events', __name__)


@events_blueprint.route('/get_events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([{
        'id': event.id,
        'event_name': event.event_name,
        'description': event.description,
        'start_datetime': event.start_datetime.isoformat(),
        'end_datetime': event.end_datetime.isoformat(),
        'location': event.location,
        'event_type': event.event_type,
        'participant_limit': event.participant_limit,
        'category': event.category.name if event.category else None,
        'tags': [tag.name for tag in event.tags],
        'files': [{'file_name': file.file_name, 'file_type': file.file_type} for file in event.files]
    } for event in events])


@events_blueprint.route('/create_event', methods=['POST'])
def create_event():
    data = request.json
    try:
        category = Category.query.filter_by(name=data.get('category')).first()
        if not category:
            return jsonify({'error': 'Категория не найдена'}), 400

        event = Event(
            event_name=data['event_name'],
            description=data['description'],
            start_datetime=data['start_datetime'],
            end_datetime=data['end_datetime'],
            location=data['location'],
            event_type=data['event_type'],
            participant_limit=data['participant_limit'],
            category_id=category.id
        )

        tags = data.get('tags', [])
        for tag_name in tags:
            tag = Tag.query.filter_by(name=tag_name).first()
            if not tag:
                tag = Tag(name=tag_name)
                db.session.add(tag)
            event.tags.append(tag)

        db.session.add(event)
        db.session.commit()
        return jsonify({'message': 'Событие создано!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400


@events_blueprint.route('/update_event/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    data = request.json
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'error': 'Событие не найдено'}), 404

    if 'event_name' in data:
        event.event_name = data['event_name']
    if 'description' in data:
        event.description = data['description']
    if 'start_datetime' in data:
        event.start_datetime = data['start_datetime']
    if 'end_datetime' in data:
        event.end_datetime = data['end_datetime']
    if 'location' in data:
        event.location = data['location']
    if 'event_type' in data:
        event.event_type = data['event_type']
    if 'participant_limit' in data:
        event.participant_limit = data['participant_limit']
    if 'category' in data:
        category = Category.query.filter_by(name=data['category']).first()
        if not category:
            return jsonify({'error': 'Категория не найдена'}), 400
        event.category_id = category.id

    if 'tags' in data:
        event.tags = []
        for tag_name in data['tags']:
            tag = Tag.query.filter_by(name=tag_name).first()
            if not tag:
                tag = Tag(name=tag_name)
                db.session.add(tag)
            event.tags.append(tag)

    try:
        db.session.commit()
        return jsonify({'message': 'Данные события успешно обновлены'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@events_blueprint.route('/delete_event/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    event = Event.query.get(event_id)
    if event:
        db.session.delete(event)
        db.session.commit()
        return jsonify({'message': 'Событие успешно удалено'}), 200
    return jsonify({'error': 'Событие не найдено'}), 404


@events_blueprint.route('/upload_file/<int:event_id>', methods=['POST'])
def upload_file(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'error': 'Событие не найдено'}), 404

    file_name = request.form.get('file_name')
    file_data = request.form.get('file_data')
    file_type = request.form.get('file_type')

    if not file_name or not file_data or not file_type:
        return jsonify({'error': 'Пропущены обязательные поля'}), 400

    try:
        file = EventFile(
            event_id=event_id,
            file_name=file_name,
            file_data=file_data,
            file_type=file_type
        )
        db.session.add(file)
        db.session.commit()
        return jsonify({'message': 'Файл успешно загружен'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@events_blueprint.route('/delete_file/<int:file_id>', methods=['DELETE'])
def delete_file(file_id):
    file = EventFile.query.get(file_id)
    if file:
        db.session.delete(file)
        db.session.commit()
        return jsonify({'message': 'Файл успешно удален'}), 200
    return jsonify({'error': 'Файл не найден'}), 404