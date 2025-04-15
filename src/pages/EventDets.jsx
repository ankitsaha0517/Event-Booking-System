import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import NavBar from '../Components/NavBar';
import EventCard from '../Components/EventCard';
import JoinForm from '../Components/JoinForm';

function EventDets() {
    const { id } = useParams(); 
    console.log(id);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const events = useSelector((state) => state.events);
    const tagColors = useSelector((state) => state.tagColors);
    const event = events.find((e) => e.id == id); 
    console.log(event);

     const [joinData, setJoinData] = useState({
        name: "",
        email: "",
        contact: ""
      });
    
      const fields = [
        { label: 'Add your name', key: 'name', type: "text" },
        { label: 'Confirm your email', key: 'email', type: "email" },
        { label: 'Add your contact number', key: 'contact', type: "number" }
      ];

    return (
        <div className="w-full flex items-center justify-center gap-10 flex-col md:flex-row">

            <div className='md:w-[50%] lg:w-[40%] xl:w-[25%]'>

                <EventCard btn={true} event= {event} />
            </div>
            <div className='md:w-[50%] lg:w-[30%] xl:w-[20%]'>
                <div className="bg-white p-5 rounded-lg">
                <JoinForm formData={joinData} setFormData={setJoinData} fields={fields}/>
                </div>
            </div>
        </div>
    );
}

export default EventDets;