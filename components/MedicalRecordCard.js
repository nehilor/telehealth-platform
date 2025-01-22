export default function MedicalRecordCard({ record }) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{record.title}</h3>
              <p className="text-sm text-gray-500">{record.date}</p>
            </div>
            <div className="flex space-x-4">
              <a
                href={record.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                View
              </a>
              <button className="text-red-600 hover:text-red-700">
                Delete
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">{record.description}</p>
          </div>
        </div>
      )
    }
