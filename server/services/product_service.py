from extensions import db
from models.product import Product

def get_all_products():
    return [p.to_dict() for p in Product.query.all()]
