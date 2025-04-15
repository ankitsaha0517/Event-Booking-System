import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import MoodCalendar from "./MoodCalendar.jsx";
import { useSelector } from "react-redux";
import RegisterForm from "../Components/RegisterForm.jsx";
import { label } from "framer-motion/client";

function BookEvent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    eventName: "",
    date: "",
    time: "",
    mode: '',
    cost: '',
    dec: "",
    imgURl: "",
  });

  const fields = [
    { label: 'Add your name', key: 'name', type: "text" },
    { label: 'Confirm your email', key: 'email', type: "email" },
    { label: 'Add your contact number', key: 'contact', type: "number" },
    { label: 'Event Name', key: 'eventName', type: "text" },
    { label: 'Time', key: 'time', type: "text" },
    { label: 'Choose date from calendar', key: 'date', type: "text" },
    { label: 'Offline/ Online', key: 'mode', type: "dropdown", options: ['Online', 'Offline'] },
    { label: 'Free / Paid', key: 'cost', type: "dropdown", options: ['Free', 'Paid'] },
    { label: 'Image URL', key: 'imgURl', type: "text" },
    { label: 'Event Description', key: 'dec', type: "text" },
  ];

  const allEvents = useSelector((state) => state.events);
  const unavailable = allEvents.map((event) => event.date);

  return (
  

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between lg:justify-evenly md:items-start  lg:items-center   lg:px-20 gap-5  md:gap-10">
        <div className="w-[90%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[30%]">
          <MoodCalendar
            dates={unavailable}
            setDate={(val) =>
              setFormData((prev) => ({
                ...prev,
                date: val.date,
                message: val.message,
              }))
            }
          />
        </div>
        <div className="w-[90%] sm:w-[50%] md:w-[60%] xl:w-[40%] bg-white rounded-2xl shadow-md p-5">
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            fields={fields}
          />
        </div>
      </div>
    
  );
}

export default BookEvent;
