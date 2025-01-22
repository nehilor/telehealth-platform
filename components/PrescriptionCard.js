export default function PrescriptionCard({ prescription }) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">
                Prescription from {prescription.doctor}
              </h3>
              <p className="text-sm text-gray-500">{prescription.date}</p>
            </div>
            <a
              href={prescription.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Download
            </a>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Medications:</h4>
            <ul className="list-disc list-inside mt-2">
              {prescription.medications.map((med, index) => (
                <li key={index} className="text-gray-600">
                  {med.name} - {med.dosage} ({med.frequency})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
