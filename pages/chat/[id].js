import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'
    import ChatWindow from '../../components/ChatWindow'

    export default function ChatPage() {
      const router = useRouter()
      const { id } = router.query

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg h-[600px]">
              <ChatWindow roomId={id} />
            </div>
          </div>
        </Layout>
      )
    }
