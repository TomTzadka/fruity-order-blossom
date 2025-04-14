import json
import os
import datetime

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'orders.json')


def load_orders():
    if not os.path.exists(DATA_PATH):
        with open(DATA_PATH, 'w') as f:
            json.dump([], f)

    with open(DATA_PATH) as f:
        return json.load(f)


def save_orders(orders):
    with open(DATA_PATH, 'w') as f:
        json.dump(orders, f, indent=2)


def create_new_order(order_data):
    orders = load_orders()

    order_id = f"ORD{len(orders) + 1:04d}"
    order_data['id'] = order_id
    order_data['status'] = 'pending'
    order_data['createdAt'] = datetime.datetime.now().isoformat()

    # Remove sensitive card data
    if 'payment' in order_data and 'card' in order_data['payment']:
        order_data['payment']['card'] = {
            'last4': order_data['payment']['card'].get('last4', '')
        }

    orders.append(order_data)
    save_orders(orders)
    return order_id


def get_all_orders():
    return load_orders()


def get_order_by_id(order_id):
    orders = load_orders()
    return next((o for o in orders if o['id'] == order_id), None)
