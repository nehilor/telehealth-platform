import { useState } from 'react'

    export default function NotificationBell() {
      const [notifications, setNotifications] = useState([])
      const [isOpen, setIsOpen] = useState(false)

      const mockNotifications = [
        {
          id: 1,
          type: 'appointment',
          message: 'Your appointment with Dr. Smith is in 1 hour',
          timestamp: '10:30 AM'
        },
        // Add more notifications
      ]

      return (
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {mockNotifications.length > 0 ? (
                  mockNotifications.map(notification => (
                    <div 
                      key={notification.id}
                      className="p-4 border-b hover:bg-gray-50"
                    >
                      <div className="text-sm">{notification.message}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {notification.timestamp}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-gray-500">No new notifications</div>
                )}
              </div>
            </div>
          )}
        </div>
      )
    }
