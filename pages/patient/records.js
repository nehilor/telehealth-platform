import Link from 'next/link'
    import Layout from '../../components/Layout'
    import MedicalRecordCard from '../../components/MedicalRecordCard'

    const mockRecords = [
      {
        id: '1',
        title: 'Annual Checkup Report',
        date: '2023-10-15',
        description: 'Complete blood work and physical examination results',
        fileUrl: '/reports/checkup-2023.pdf'
      }
    ]

    export default function MedicalRecordsPage() {
      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Medical Records</h1>
              <Link 
                href="/patient/upload-record"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Upload New Record
              </Link>
            </div>
            <div className="space-y-4">
              {mockRecords.map(record => (
                <MedicalRecordCard key={record.id} record={record} />
              ))}
            </div>
          </div>
        </Layout>
      )
    }
