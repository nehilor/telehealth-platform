import Link from 'next/link'

    export default function Footer() {
      return (
        <footer className="bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4">TeleHealth+</h3>
                <p className="text-gray-400">
                  Revolutionizing healthcare through technology
                </p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link href="/doctors" className="text-gray-400 hover:text-white">Find a Doctor</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/auth/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
                  <li><Link href="/auth/login" className="text-gray-400 hover:text-white">Login</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">Email: info@telehealth.com</p>
                <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} TeleHealth+. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )
    }
