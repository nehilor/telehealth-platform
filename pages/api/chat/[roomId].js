export default function handler(req, res) {
      const { roomId } = req.query

      if (req.method === 'POST') {
        // Implement message saving logic
        const newMessage = {
          id: Date.now(),
          sender: req.body.sender,
          content: req.body.content,
          timestamp: new Date().toISOString()
        }

        res.status(200).json(newMessage)
      } else if (req.method === 'GET') {
        // Implement message retrieval logic
        const messages = [
          {
            id: 1,
            sender: 'Doctor',
            content: 'Hello, how can I help you today?',
            timestamp: new Date().toISOString()
          }
        ]

        res.status(200).json(messages)
      } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
