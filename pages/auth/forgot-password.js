import { useState } from 'react'
    import Link from 'next/link'
    import Layout from '../../components/Layout'

    export default function ForgotPasswordPage() {
      const [email, setEmail] = useState('')

      const handleSubmit = async (e) => {
        e.preventDefault()
        // Implement password reset logic
      }

      return (
        <Layout>
          <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-500">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Layout>
      )
    }
