import { useState } from 'react'
    import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'

    export default function ResetPasswordPage() {
      const router = useRouter()
      const { token } = router.query
      const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
      })

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
                  New Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Reset Password
              </button>
            </form>
          </div>
        </Layout>
      )
    }
