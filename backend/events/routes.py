from flask import Blueprint, request, jsonify
from models import Event, db




events_blueprint = Blueprint('events', __name__)


@events_blueprint.route('/get_event', methods=['GET'])
def get_event():
    events = Event.query.all()
    return jsonify([{
        'id': event.id,
        'event_name': event.event_name,
        'description': event.description,
        'start_datetime': event.start_datetime,
        'end_datetime': event.end_datetime,
        'event_type': event.event_type,
        'location': event.location
    } for event in events])


@events_blueprint.route('/create_event', methods=['POST'])
def create_event():
    data = request.json
    try:
        event = Event(
            event_name=data['event_name'],
            description=data['description'],
            start_datetime=data['start_datetime'],
            end_datetime=data['end_datetime'],
            event_type=data['event_type'],
            location=data['location']
        )
        db.session.add(event)
        db.session.commit()
        return jsonify({'message': 'Событие создано!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400


@events_blueprint.route('/update_event/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    data = request.json
    event_name = data.get('event_name')
    description = data.get('description')
    start_datetime = data.get('start_datetime')
    end_datetime = data.get('end_datetime')
    event_type = data.get('event_type')
    location = data.get('location')
    
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'error': 'Событие не найдено'}), 404
    
    if event_name:
        event.event_name = event_name
    
    if description:
        event.description = description
    
    if start_datetime:
        event.start_datetime = start_datetime
    
    if end_datetime:
        event.end_datetime = end_datetime
    
    if event_type:
        event.event_type = event_type
    
    if location:
        event.location = location
    
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
    return jsonify({'error': 'Event not found'}), 404