from .product_routes import product_bp
from .customer_routes import customer_bp
from .order_routes import order_bp

def register_routes(app):
    app.register_blueprint(product_bp)
    app.register_blueprint(customer_bp)
    app.register_blueprint(order_bp)
