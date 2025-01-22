import { signIn } from 'next-auth/react'
    import { useRouter } from 'next/router'
    import Layout from '../../components/Layout'

    export default function SignIn() {
      const router = useRouter()

      const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signIn('credentials', {
          redirect: false,
          email: e.target.email.value,
          password: e.target.password.value
        })
        if (result.ok) {
          router.push('/dashboard')
        }
      }

      return (
        <Layout>
          <div className="max-w-md mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </form>
          </div>
        </Layout>
      )
    }
