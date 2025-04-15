import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { Link } from "react-router"; // ✅ Use 'react-router-dom' instead of 'react-router'
import DateFormater from "../utils/DateFormater";
import "./EventDatePicker.css";
import EventCard from "../Components/EventCard";
function Event() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");

  const allEvents = useSelector((state) => state.events);
  const tagColors = useSelector((state) => state.tagColors);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 🧠 Filtering Logic
  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = category ? event.category === category : true;

    const matchesType = type ? event?.eventType?.includes(type.toUpperCase()) : true;
    const matchesDate = selectedDate
      ? event.date === selectedDate.toLocaleDateString("en-CA")
      : true;
    const matchesSearch =
      event?.eventName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event?.dec?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDate && matchesSearch && matchesType;
  });

  console.log(filteredEvents);

  return (
    <div className="w-full min-h-[90vh]">
      {/* Filter/Search Bar */}

      <div className="flex flex-col sm:justify-between sm:flex-row gap-4 bg-[#FFFFFF] p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-col gap-2 md:flex-row md:gap-4">
          <div className="flex items-center gap-2">
            <label className="text-black font-medium">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-[#dededf] px-3 py-1 rounded-md outline-none border-none"
            >
              <option value="">All</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-black font-medium">Date:</label>
            <div className="flex items-center bg-[#dededf] rounded-md px-2 py-1">
              <i className="ri-calendar-line text-gray-600 mr-2"></i>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="bg-transparent outline-none w-[140px] text-gray-800"
                placeholderText="Select date"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        
          <div className="flex items-center bg-[#dededf] rounded-md px-3 py-1 w-full max-w-md ml-auto">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div>
        {filteredEvents?.length > 0 ? (
          <div className="w-full pt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center">
            {filteredEvents.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-5">Not Found</p>
        )}
      </div>
    </div>
  );
}

export default Event;
