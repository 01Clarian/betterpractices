import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_qaRrnC4RhTRiVsZsn3uaiIYx00FYBecz6x'
    
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
    
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