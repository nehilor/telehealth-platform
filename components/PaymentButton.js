import { useEffect, useState } from 'react'
    import { loadScript } from '@paypal/paypal-js'

    export default function PaymentButton({ amount, description, onSuccess, onError }) {
      const [paypalLoaded, setPaypalLoaded] = useState(false)

      useEffect(() => {
        loadScript({ 
          'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: 'USD'
        })
          .then(() => setPaypalLoaded(true))
          .catch(err => console.error('Failed to load PayPal', err))
      }, [])

      const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount,
              currency_code: 'USD'
            },
            description: description
          }]
        })
      }

      const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
          onSuccess(details)
        })
      }

      return (
        <div>
          {paypalLoaded && (
            <div className="mt-4">
              <div id="paypal-button-container"></div>
            </div>
          )}
        </div>
      )
    }
