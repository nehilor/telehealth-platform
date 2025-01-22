export default function DoctorProfileCard({ doctor }) {
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center space-x-6">
              <img 
                className="h-24 w-24 rounded-full"
                src={doctor.image}
                alt={doctor.name}
              />
              <div>
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <p className="text-gray-600">{doctor.specialty}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-700">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold">About</h3>
                <p className="text-gray-600">{doctor.bio}</p>
              </div>
              <div>
                <h3 className="font-semibold">Specializations</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {doctor.specializations.map((spec, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
