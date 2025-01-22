export default function handler(req, res) {
      const { id } = req.query

      if (req.method === 'GET') {
        // Implement prescription retrieval logic
        const prescription = {
          id,
          doctor: 'Dr. Sarah Johnson',
          date: '2023-10-20',
          medications: [
            {
              name: 'Paracetamol',
              dosage: '500mg',
              frequency: 'Every 6 hours'
            }
          ],
          fileUrl: '/prescriptions/sample.pdf'
        }

        res.status(200).json(prescription)
      } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
