def verify_admin_credentials(email, password):
    # Static admin credentials (demo)
    if email == 'tomtzadka@gmail.com' and password == '1234':
        return {"token": "demo_admin_token", "success": True}
    return {"error": "Invalid credentials", "success": False}
