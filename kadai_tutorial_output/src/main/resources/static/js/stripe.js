const stripe = Stripe('pk_test_51R1TiZ02UVqeRIuhQhC5Oqkh8F914nrxZtuW0CRNiCRAcnYG6SejAXln708qNabEHiv81RE7W7pkjkNWJQaGzhoB00X4IPuuke');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
 });
 