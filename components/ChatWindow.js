import { useState, useEffect, useRef } from 'react'

    export default function ChatWindow({ roomId }) {
      const [messages, setMessages] = useState([])
      const [newMessage, setNewMessage] = useState('')
      const messagesEndRef = useRef(null)

      const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }

      const sendMessage = () => {
        if (newMessage.trim()) {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now(),
              sender: 'You',
              content: newMessage,
              timestamp: new Date().toLocaleTimeString()
            }
          ])
          setNewMessage('')
        }
      }

      useEffect(() => {
        scrollToBottom()
      }, [messages])

      return (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`flex ${
                  message.sender === 'You' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className={`max-w-[75%] p-3 rounded-lg ${
                  message.sender === 'You'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}>
                  <div className="text-sm">{message.content}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 p-2 border rounded-lg"
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )
    }
