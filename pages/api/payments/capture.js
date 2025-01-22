import paypal from '@paypal/checkout-server-sdk'
    import { NextResponse } from 'next/server'

    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET

    const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
    const client = new paypal.core.PayPalHttpClient(environment)

    export async function POST(request) {
      const { orderID } = await request.json()

      const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID)
      captureRequest.requestBody({})

      try {
        const response = await client.execute(captureRequest)
        return NextResponse.json(response.result)
      } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
      }
    }
