"use client"

import { useState } from "react"

const Calendar = ({ selected, onSelect, className = "" }) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  const isSelected = (date) => {
    if (!selected || !date) return false
    return date.toDateString() === selected.toDateString()
  }

  const isToday = (date) => {
    if (!date) return false
    return date.toDateString() === new Date().toDateString()
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className={`p-3 bg-white border border-gray-200 rounded-md shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigateMonth(-1)} className="p-1 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h2 className="text-sm font-semibold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>

        <button onClick={() => navigateMonth(1)} className="p-1 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 text-xs font-medium text-gray-500 text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => (
          <button
            key={index}
            onClick={() => date && onSelect(date)}
            disabled={!date}
            className={`
              p-2 text-sm text-center rounded hover:bg-gray-100 transition-colors
              ${!date ? "invisible" : ""}
              ${isSelected(date) ? "bg-black text-white hover:bg-gray-800" : ""}
              ${isToday(date) && !isSelected(date) ? "bg-gray-100 font-semibold" : ""}
            `}
          >
            {date ? date.getDate() : ""}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar
