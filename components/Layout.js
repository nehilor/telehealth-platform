import { useSession } from 'next-auth/react'
    import Link from 'next/link'
    import Navbar from './Navbar'
    import Footer from './Footer'

    export default function Layout({ children }) {
      const { data: session } = useSession()

      return (
        <div className="flex flex-col min-h-screen">
          <Navbar session={session} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      )
    }
