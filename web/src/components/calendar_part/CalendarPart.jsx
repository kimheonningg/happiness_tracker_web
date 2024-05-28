import { useState } from "react"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css'

export default function CalendarPart({ onSelectDate }) {
  const today = new Date()
  const [selected, setSelected] = useState(today);
  const handleSelect = (date) => {
    if(date) {
      setSelected(date);
      onSelectDate(date);
    }
  }

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={handleSelect}
    />
  )
}
