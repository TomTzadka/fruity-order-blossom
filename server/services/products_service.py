import json
import os


def load_products():
    data_path = os.path.join(os.path.dirname(__file__), '../data/products.json')
    with open(data_path) as f:
        return json.load(f)


def get_all_products(category=None, featured=None):
    products = load_products()

    if category and category != 'all':
        products = [p for p in products if p['category'] == category]

    if featured == 'true':
        products = [p for p in products if p.get('featured') is True]

    return products


def get_product_by_id(product_id):
    products = load_products()
    return next((p for p in products if p['id'] == product_id), None)