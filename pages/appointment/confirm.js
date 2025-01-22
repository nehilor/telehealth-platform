import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'

    export default function ConfirmAppointment() {
      const router = useRouter()
      const { doctor, date, time } = router.query

      const handleConfirm = async () => {
        // Implement booking confirmation logic
        router.push('/appointment/success')
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Confirm Appointment</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold">Date & Time</h2>
                  <p>{new Date(date).toLocaleDateString()} at {time}</p>
                </div>
                <div>
                  <h2 className="font-semibold">Doctor</h2>
                  <p>Dr. Sarah Johnson</p>
                </div>
                <div>
                  <h2 className="font-semibold">Consultation Fee</h2>
                  <p>$150</p>
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => router.back()}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm & Pay
                </button>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
