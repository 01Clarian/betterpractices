import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_qaRrnC4RhTRiVsZsn3uaiIYx00FYBecz6x'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }
    
    return (
        <StripeCheckout
        label='Pay Now'
        name='Better Practices Ltd.'
        billingAddress
        shippingAddress
        image='https://i-love-png.com/images/computer-hardware-notebook-icon.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton