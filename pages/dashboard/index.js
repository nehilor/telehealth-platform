import { useSession } from 'next-auth/react'
    import Layout from '../../components/Layout'
    import PatientDashboard from './patient'
    import DoctorDashboard from './doctor'
    import AdminDashboard from './admin'

    export default function Dashboard() {
      const { data: session } = useSession()

      return (
        <Layout>
          {session?.user?.role === 'patient' && <PatientDashboard />}
          {session?.user?.role === 'doctor' && <DoctorDashboard />}
          {session?.user?.role === 'admin' && <AdminDashboard />}
        </Layout>
      )
    }
