import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'
    import VideoCall from '../../components/VideoCall'
    import MedicalRecords from '../../components/MedicalRecords'

    export default function ConsultationPage() {
      const router = useRouter()
      const { id } = router.query
      const [records, setRecords] = useState([])

      const handleUpload = async (file) => {
        // Implement file upload logic
        const newRecord = {
          name: file.name,
          url: URL.createObjectURL(file),
          date: new Date().toLocaleDateString()
        }
        setRecords([...records, newRecord])
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Consultation Room</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <VideoCall roomId={id} />
              </div>
              <div>
                <MedicalRecords 
                  records={records} 
                  onUpload={handleUpload} 
                />
              </div>
            </div>
          </div>
        </Layout>
      )
    }
