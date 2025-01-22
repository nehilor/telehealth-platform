export default function AppointmentItem({ appointment }) {
      const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-blue-100 text-blue-800',
        completed: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800'
      }

      return (
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{appointment.patientName}</h3>
              <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
              <p className="text-sm text-gray-500">Type: {appointment.type}</p>
            </div>
            <div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[appointment.status]}`}>
                {appointment.status}
              </span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            {appointment.status === 'pending' && (
              <>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Confirm
                </button>
                <button className="text-sm text-red-600 hover:text-red-700">
                  Cancel
                </button>
              </>
            )}
            {appointment.status === 'confirmed' && (
              <button className="text-sm text-green-600 hover:text-green-700">
                Mark as Completed
              </button>
            )}
          </div>
        </div>
      )
    }
