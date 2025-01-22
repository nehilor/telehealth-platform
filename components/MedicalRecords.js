import { useState } from 'react'

    export default function MedicalRecords({ records, onUpload }) {
      const [selectedFile, setSelectedFile] = useState(null)

      const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
      }

      const handleUpload = () => {
        if (selectedFile) {
          onUpload(selectedFile)
          setSelectedFile(null)
        }
      }

      return (
        <div className="medical-records">
          <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
          
          <div className="upload-section mb-6">
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="mb-2"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={!selectedFile}
            >
              Upload Record
            </button>
          </div>

          <div className="records-list">
            {records.length > 0 ? (
              <ul className="space-y-2">
                {records.map((record, index) => (
                  <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                    <span>{record.name}</span>
                    <a 
                      href={record.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No records available</p>
            )}
          </div>
        </div>
      )
    }
