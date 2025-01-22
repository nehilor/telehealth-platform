import Link from 'next/link'

    export default function HeroSection() {
      return (
        <div className="relative bg-blue-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-75"></div>
          <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Your Health, Our Priority
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
                Experience world-class healthcare from the comfort of your home. 
                Connect with top specialists anytime, anywhere.
              </p>
              <div className="mt-10 space-x-4">
                <Link
                  href="/auth/signup"
                  className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get Started
                </Link>
                <Link
                  href="/doctors"
                  className="inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Find a Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
