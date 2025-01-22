import { useState } from 'react'
    import Link from 'next/link'

    const medicalSpecialties = [
      'Allergy and Immunology',
      'Anesthesiology',
      'Cardiology',
      'Dermatology',
      'Emergency Medicine',
      'Endocrinology',
      'Family Medicine',
      'Gastroenterology',
      'General Surgery',
      'Geriatrics',
      'Hematology',
      'Infectious Disease',
      'Internal Medicine',
      'Nephrology',
      'Neurology',
      'Obstetrics and Gynecology',
      'Oncology',
      'Ophthalmology',
      'Orthopedics',
      'Otolaryngology',
      'Pathology',
      'Pediatrics',
      'Physical Medicine and Rehabilitation',
      'Plastic Surgery',
      'Psychiatry',
      'Pulmonology',
      'Radiology',
      'Rheumatology',
      'Urology'
    ]

    export default function SignupPage() {
      const [activeTab, setActiveTab] = useState('patient')
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'patient',
        specialties: [],
        licenseNumber: '',
        dateOfBirth: '',
        medicalHistory: ''
      })

      const handleSpecialtyChange = (e) => {
        const options = e.target.options
        const selectedSpecialties = []
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedSpecialties.push(options[i].value)
          }
        }
        setFormData({ ...formData, specialties: selectedSpecialties })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        // Implement signup logic based on role
        console.log('Form Data:', formData)
      }

      return (
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Previous code remains the same until the specialty field */}
          
          {activeTab === 'doctor' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Specialty
                </label>
                <select
                  multiple
                  value={formData.specialties}
                  onChange={handleSpecialtyChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32"
                  required
                >
                  {medicalSpecialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-gray-500">
                  Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.
                </p>
              </div>
              {/* Rest of the doctor-specific fields */}
            </>
          )}

          {/* Rest of the form remains the same */}
        </div>
      )
    }
