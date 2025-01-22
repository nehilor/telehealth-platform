import { useRouter } from 'next/router'
    import Layout from '../../../components/Layout'
    import DoctorVerification from '../../../components/DoctorVerification'

    const mockDoctor = {
      id: '1',
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      licenseNumber: '123456789',
      verificationStatus: 'pending',
      documents: [
        {
          type: 'Medical License',
          url: '/sample-license.pdf'
        },
        {
          type: 'ID Proof',
          url: '/sample-id.jpg'
        }
      ]
    }

    export default function DoctorVerificationPage() {
      const router = useRouter()
      const { id } = router.query

      const handleVerify = async (doctorId, action) => {
        // Implement API call to update verification status
        console.log(`Verifying doctor ${doctorId} with action: ${action}`)
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <DoctorVerification 
              doctor={mockDoctor}
              onVerify={handleVerify}
            />
          </div>
        </Layout>
      )
    }
