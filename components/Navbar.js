import Link from 'next/link'
    import { signOut } from 'next-auth/react'

    export default function Navbar({ session }) {
      return (
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  TeleHealth+
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">
                  Services
                </Link>
                <Link href="/doctors" className="text-gray-700 hover:text-blue-600">
                  Doctors
                </Link>
                {session ? (
                  <>
                    <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">
                      Login
                    </Link>
                    <Link 
                      href="/auth/signup" 
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      )
    }
