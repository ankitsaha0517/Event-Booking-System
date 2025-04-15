import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import { set } from "date-fns";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (month, year) => {
  const date = dayjs(`${year}-${month + 1}-01`);
  const startDay = date.startOf("month").day();
  const daysInMonth = date.daysInMonth();

  const prevMonthDays = Array.from({ length: startDay }, (_, i) => ({
    date: date.subtract(startDay - i, "day"),
    isCurrentMonth: false,
  }));

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
    date: date.date(i + 1),
    isCurrentMonth: true,
  }));

  const nextMonthDays = Array.from({
    length: 42 - (prevMonthDays.length + currentMonthDays.length),
  }, (_, i) => ({
    date: date.add(daysInMonth + i, "day"),
    isCurrentMonth: false,
  }));

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

export default function MoodCalendar({ dates, setDate }) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const unavailableDates = dates;

  const changeMonth = (offset) => {
    setCurrentDate(currentDate.add(offset, "month"));
  };

  const calendarDays = getDaysInMonth(currentDate.month(), currentDate.year());
  const today = dayjs().format("YYYY-MM-DD");

  const h = (e)=>{
    if (unavailableDates.includes(e)){
      setDate({
        date:'',
        message:'THIS DATE IS NOT AVABLE'
      })
    }else{
      setDate({
        date: e,
        message: ''
      });
    }
    
  }

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-1" onClick={() => changeMonth(-1)}>
          <ChevronLeft />
        </button>
        <h2 className="text-2xl font-semibold">{currentDate.format("MMMM YYYY")}</h2>
        <button className="p-1" onClick={() => changeMonth(1)}>
          <ChevronRight />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold">
        {calendarDays.map(({ date, isCurrentMonth }, idx) => {
          const dateKey = date.format("YYYY-MM-DD");
          const isToday = dateKey === today;
          const isSelected = selectedDate === dateKey;
          const isUnavailable = unavailableDates.includes(dateKey);

          const baseClass = isCurrentMonth ? "text-gray-800" : "text-gray-300";
          const highlightClass = isUnavailable
            ? "bg-red-300 text-red-700"
            : isToday
            ? "bg-blue-500 text-white"
            : isSelected
            ? "bg-green-300 text-green-700"
            : "";

          return (
            <div
              key={idx}
              onClick={(e) => {
                setSelectedDate(dateKey);
                h(dateKey)
              }}
              className="relative cursor-pointer"
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${baseClass} ${highlightClass}`}
              >
                {date.date()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <div className="mt-4 p-3 rounded-lg border bg-gray-50 text-sm text-center font-semibold">
          <p>
            <span >Selected Date:</span> {dayjs(selectedDate).format("DD MMMM YYYY")}
          </p>
          <p>
            <span>Status:</span >{" "}
            <span
              className={
                unavailableDates.includes(selectedDate)
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              {unavailableDates.includes(selectedDate) ? "Unavailable" : "Available"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
