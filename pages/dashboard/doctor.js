import { useSession } from 'next-auth/react'
    import Layout from '../../components/Layout'
    import AppointmentCalendar from '../../components/AppointmentCalendar'
    import EarningsSummary from '../../components/EarningsSummary'
    import AppointmentList from '../../components/AppointmentList'

    const mockAppointments = [
      {
        id: 1,
        patientName: 'John Doe',
        date: '2023-11-15',
        time: '10:00 AM',
        type: 'Video Consultation',
        status: 'pending',
        price: 150
      },
      // Add more mock appointments
    ]

    export default function DoctorDashboard() {
      const { data: session } = useSession()
      const [selectedTab, setSelectedTab] = useState('upcoming')
      const [earningsPeriod, setEarningsPeriod] = useState('month')

      const filteredAppointments = mockAppointments.filter(app => {
        if (selectedTab === 'upcoming') return app.status === 'pending' || app.status === 'confirmed'
        if (selectedTab === 'past') return app.status === 'completed' || app.status === 'cancelled'
        return true
      })

      const totalEarnings = mockAppointments
        .filter(app => app.status === 'completed')
        .reduce((sum, app) => sum + app.price, 0)

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>

            <EarningsSummary 
              totalEarnings={totalEarnings}
              earningsPeriod={earningsPeriod}
              setEarningsPeriod={setEarningsPeriod}
            />

            <AppointmentList 
              appointments={filteredAppointments}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
        </Layout>
      )
    }
