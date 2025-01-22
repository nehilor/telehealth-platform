import { useState } from 'react'

    export default function DoctorVerification({ doctor, onVerify }) {
      const [status, setStatus] = useState(doctor.verificationStatus)
      const [loading, setLoading] = useState(false)

      const handleVerify = async (action) => {
        setLoading(true)
        try {
          // Call API to update verification status
          await onVerify(doctor.id, action)
          setStatus(action)
        } catch (error) {
          console.error('Verification error:', error)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Doctor Verification</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Doctor Information</h3>
              <div className="text-sm text-gray-600">
                <p>Name: {doctor.name}</p>
                <p>Specialty: {doctor.specialty}</p>
                <p>License Number: {doctor.licenseNumber}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium">Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {doctor.documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="text-sm font-medium">{doc.type}</div>
                    <div className="text-xs text-gray-500">Click to view</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {status === 'pending' && (
                <>
                  <button
                    onClick={() => handleVerify('approved')}
                    disabled={loading}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
                  >
                    {loading ? 'Approving...' : 'Approve'}
                  </button>
                  <button
                    onClick={() => handleVerify('rejected')}
                    disabled={loading}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 disabled:opacity-50"
                  >
                    {loading ? 'Rejecting...' : 'Reject'}
                  </button>
                </>
              )}
              {status === 'approved' && (
                <div className="text-green-600">Verified</div>
              )}
              {status === 'rejected' && (
                <div className="text-red-600">Rejected</div>
              )}
            </div>
          </div>
        </div>
      )
    }
