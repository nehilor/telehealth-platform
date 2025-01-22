import { useState } from 'react'
    import Layout from '../../components/Layout'
    import DoctorCard from '../../components/DoctorCard'
    import AppointmentModal from '../../components/AppointmentModal'

    const mockDoctors = [
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        location: 'New York, NY',
        price: 150,
        rating: 4.8,
        availability: ['09:00', '10:00', '11:00', '14:00'],
        image: '/doctor1.jpg'
      },
      // Add more mock doctors
    ]

    export default function PatientDashboard() {
      const [selectedDoctor, setSelectedDoctor] = useState(null)

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Find a Doctor</h1>
            
            {/* Search Filters */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Specialty</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="">All Specialties</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    {/* Add more specialties */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    placeholder="City or ZIP"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="">Any Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Doctors List */}
            <div className="space-y-4">
              {mockDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBook={() => setSelectedDoctor(doctor)}
                />
              ))}
            </div>

            {/* Appointment Modal */}
            {selectedDoctor && (
              <AppointmentModal
                doctor={selectedDoctor}
                onClose={() => setSelectedDoctor(null)}
              />
            )}
          </div>
        </Layout>
      )
    }
