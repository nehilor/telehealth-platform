import { useState } from 'react'
    import { signIn } from 'next-auth/react'
    import { useRouter } from 'next/router'

    export default function LoginPage() {
      const [formData, setFormData] = useState({
        email: '',
        password: ''
      })
      const router = useRouter()

      const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password
        })
        if (result.ok) {
          router.push('/dashboard')
        }
      }

      return (
        <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields remain the same as before */}
          </form>
        </div>
      )
    }
