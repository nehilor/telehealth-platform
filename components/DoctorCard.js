export default function DoctorCard({ doctor }) {
      return (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src={doctor.image || '/default-avatar.png'}
                alt={doctor.name}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialty}</p>
              <p className="text-sm text-gray-500">{doctor.location}</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold">${doctor.price}/hr</span>
              <span className="text-sm text-gray-500">{doctor.rating} ⭐</span>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              onClick={() => {/* Open booking modal */}}
            >
              Book Appointment
            </button>
          </div>
        </div>
      )
    }
