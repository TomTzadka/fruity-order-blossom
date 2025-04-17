import stripe
import os

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def create_payment_intent(amount):
    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='usd',
            automatic_payment_methods={"enabled": True},
        )
        return {"client_secret": intent.client_secret}
    except Exception as e:
        return {"error": f"Stripe Error: {str(e)}"}

# def create_payment_intent(amount):
#     # demo
#     if amount <= 0:
#         return {"error": "Invalid amount"}

#     return {
#         "client_secret": f"mock_client_secret_for_{amount}",
#         "amount": amount,
#         "currency": "usd",
#         "status": "succeeded"
#     }
