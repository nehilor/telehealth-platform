import { useState } from 'react'
    import Layout from '../../components/Layout'
    import UserTable from '../../components/UserTable'

    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'patient',
        status: 'active'
      },
      // Add more mock users
    ]

    const mockStats = {
      totalUsers: 1234,
      activeDoctors: 56,
      totalAppointments: 789,
      totalRevenue: 123456
    }

    export default function AdminDashboard() {
      const [users, setUsers] = useState(mockUsers)

      const handleUserAction = (userId, action) => {
        setUsers(users.map(user => 
          user.id === userId 
            ? { ...user, status: action === 'suspend' ? 'suspended' : 'active' }
            : user
        ))
      }

      return (
        <Layout>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(mockStats).map(([key, value]) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 uppercase">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                  <div className="mt-2 text-3xl font-bold">
                    {typeof value === 'number' && value.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* User Management */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">User Management</h2>
                <UserTable users={users} onUserAction={handleUserAction} />
              </div>
            </div>

            {/* Doctor Approvals */}
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Doctor Approvals</h2>
                <div className="text-gray-500">No pending approvals</div>
              </div>
            </div>

            {/* Reports */}
            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Reports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="p-4 border rounded-lg hover:bg-gray-50">
                    Generate User Report
                  </button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50">
                    Generate Financial Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
