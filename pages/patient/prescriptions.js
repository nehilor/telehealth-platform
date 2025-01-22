import Layout from '../../components/Layout'
    import PrescriptionCard from '../../components/PrescriptionCard'

    const mockPrescriptions = [
      {
        id: '1',
        doctor: 'Dr. Sarah Johnson',
        date: '2023-10-20',
        medications: [
          {
            name: 'Paracetamol',
            dosage: '500mg',
            frequency: 'Every 6 hours'
          },
          {
            name: 'Ibuprofen',
            dosage: '400mg',
            frequency: 'Every 8 hours'
          }
        ],
        fileUrl: '/prescriptions/prescription-2023-10-20.pdf'
      },
      // Add more prescriptions
    ]

    export default function PrescriptionsPage() {
      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-8">Prescriptions</h1>
            <div className="space-y-4">
              {mockPrescriptions.map(prescription => (
                <PrescriptionCard 
                  key={prescription.id} 
                  prescription={prescription} 
                />
              ))}
            </div>
          </div>
        </Layout>
      )
    }
