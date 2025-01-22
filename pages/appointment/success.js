import Layout from '../../components/Layout'

    export default function AppointmentSuccess() {
      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Appointment Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Your appointment has been successfully booked. You will receive a confirmation email with all the details.
              </p>
              <div className="space-x-4">
                <a
                  href="/dashboard"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Go to Dashboard
                </a>
                <a
                  href="/doctors"
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Book Another Appointment
                </a>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
