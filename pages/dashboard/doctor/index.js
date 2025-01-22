import { useSession } from 'next-auth/react'
    import Layout from '../../components/Layout'
    import Subscribe from './subscribe'

    export default function DoctorDashboard() {
      const { data: session } = useSession()

      // Check if doctor has active subscription
      const hasSubscription = false

      return (
        <Layout>
          {hasSubscription ? (
            <div>Doctor Dashboard Content</div>
          ) : (
            <Subscribe />
          )}
        </Layout>
      )
    }
