import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'
    import DoctorProfileCard from '../../components/DoctorProfileCard'
    import AppointmentCalendar from '../../components/AppointmentCalendar'

    const mockDoctor = {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: '/doctor1.jpg',
      rating: 4.8,
      reviews: 120,
      bio: 'Board-certified cardiologist with 10+ years of experience...',
      specializations: ['Cardiology', 'Heart Failure', 'Arrhythmia'],
      availability: ['09:00', '10:00', '11:00', '14:00', '15:00']
    }

    export default function DoctorProfile() {
      const router = useRouter()
      const { id } = router.query

      const handleBookAppointment = (slot) => {
        console.log('Booking appointment:', slot)
        router.push(`/appointment/confirm?doctor=${id}&date=${slot.date.toISOString()}&time=${slot.time}`)
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <DoctorProfileCard doctor={mockDoctor} />
              </div>
              <div>
                <AppointmentCalendar 
                  availability={mockDoctor.availability}
                  onSelectSlot={handleBookAppointment}
                />
              </div>
            </div>
          </div>
        </Layout>
      )
    }
