import { useState } from 'react'
    import Layout from '../../../components/Layout'
    import PaymentButton from '../../../components/PaymentButton'

    const subscriptionPlans = [
      {
        id: 'monthly',
        name: 'Monthly Subscription',
        price: 99,
        description: 'Access to all platform features for 1 month'
      },
      {
        id: 'quarterly',
        name: 'Quarterly Subscription',
        price: 249,
        description: 'Access to all platform features for 3 months'
      },
      {
        id: 'annual',
        name: 'Annual Subscription',
        price: 899,
        description: 'Access to all platform features for 1 year'
      }
    ]

    export default function Subscribe() {
      const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[0])

      const handlePaymentSuccess = (details) => {
        console.log('Payment successful:', details)
        // Handle successful payment (update user subscription status, etc.)
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Choose a Subscription Plan</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map(plan => (
                <div
                  key={plan.id}
                  className={`p-6 border rounded-lg ${
                    selectedPlan.id === plan.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                  <div className="mt-4 text-2xl font-bold">
                    ${plan.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PaymentButton
                amount={selectedPlan.price}
                description={selectedPlan.description}
                onSuccess={handlePaymentSuccess}
              />
            </div>
          </div>
        </Layout>
      )
    }
