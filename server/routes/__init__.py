from routes.products import products_bp
from routes.orders import orders_bp
from routes.auth import auth_bp

def register_routes(app):
    app.register_blueprint(products_bp, url_prefix='/api/products')
    app.register_blueprint(orders_bp, url_prefix='/api/orders')
    app.register_blueprint(auth_bp, url_prefix='/api')
