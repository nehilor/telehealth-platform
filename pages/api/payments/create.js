import paypal from '@paypal/checkout-server-sdk'
    import { NextResponse } from 'next/server'

    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET

    const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
    const client = new paypal.core.PayPalHttpClient(environment)

    export async function POST(request) {
      const { amount, description } = await request.json()

      const orderRequest = new paypal.orders.OrdersCreateRequest()
      orderRequest.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: amount
          },
          description: description
        }]
      })

      try {
        const response = await client.execute(orderRequest)
        return NextResponse.json({ id: response.result.id })
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
      }
    }
