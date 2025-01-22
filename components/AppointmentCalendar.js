import { useState } from 'react'
    import { format, addDays, isSameDay } from 'date-fns'

    export default function AppointmentCalendar({ availability, onSelectSlot }) {
      const [selectedDate, setSelectedDate] = useState(new Date())
      const [selectedTime, setSelectedTime] = useState(null)

      const days = [0, 1, 2, 3, 4, 5, 6].map(offset => 
        addDays(selectedDate, offset - selectedDate.getDay())
      )

      const handleTimeSelect = (time) => {
        setSelectedTime(time)
        onSelectSlot({
          date: selectedDate,
          time
        })
      }

      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between mb-6">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`flex-1 py-2 text-center ${
                  isSameDay(day, selectedDate)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                } rounded-lg mx-1`}
              >
                <div className="text-sm">{format(day, 'EEE')}</div>
                <div className="font-medium">{format(day, 'd')}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {availability.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelect(time)}
                className={`px-4 py-2 rounded-lg ${
                  selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )
    }
