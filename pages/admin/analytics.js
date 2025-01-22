import Layout from '../../components/Layout'
    import AppointmentAnalytics from '../../components/AppointmentAnalytics'

    const mockData = [
      { month: 'Jan', count: 120 },
      { month: 'Feb', count: 150 },
      { month: 'Mar', count: 180 },
      { month: 'Apr', count: 200 },
      { month: 'May', count: 220 },
      { month: 'Jun', count: 250 }
    ]

    export default function AnalyticsPage() {
      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <AppointmentAnalytics data={mockData} />
          </div>
        </Layout>
      )
    }
