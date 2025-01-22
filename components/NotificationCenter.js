import { useEffect, useState } from 'react'
    import { initializeApp } from 'firebase/app'
    import { getMessaging, onMessage } from 'firebase/messaging'

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    }

    export default function NotificationCenter() {
      const [notifications, setNotifications] = useState([])

      useEffect(() => {
        const app = initializeApp(firebaseConfig)
        const messaging = getMessaging(app)

        const unsubscribe = onMessage(messaging, (payload) => {
          setNotifications(prev => [
            {
              id: Date.now(),
              title: payload.notification?.title,
              body: payload.notification?.body,
              timestamp: new Date().toLocaleTimeString()
            },
            ...prev
          ])
        })

        return () => unsubscribe()
      }, [])

      return (
        <div className="notification-center">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-2">
            {notifications.map(notification => (
              <div key={notification.id} className="p-4 bg-white rounded-lg shadow">
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-gray-600">{notification.body}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {notification.timestamp}
                </div>
              </div>
            ))}
            {notifications.length === 0 && (
              <div className="text-gray-500">No new notifications</div>
            )}
          </div>
        </div>
      )
    }
