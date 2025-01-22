import NextAuth from 'next-auth'
    import CredentialsProvider from 'next-auth/providers/credentials'

    export default NextAuth({
      providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            // Add your own authentication logic here
            const user = { id: 1, name: 'Test User', email: 'test@example.com' }
            if (user) {
              return user
            }
            return null
          }
        })
      ],
      session: {
        jwt: true,
      },
      callbacks: {
        async jwt(token, user) {
          if (user) {
            token.role = user.role
          }
          return token
        },
        async session(session, token) {
          session.user.role = token.role
          return session
        }
      }
    })
