import React from 'react'
import Btn from '../assets/Btn';
import { useSelector } from 'react-redux'
import { Link} from 'react-router';
import DateFormater from '../utils/DateFormater';
import EventCard from './EventCard';


function Upcoming() {
    const Allevents = useSelector((state) => state.events);
    const events = [Allevents[0],Allevents[1],Allevents[2], Allevents[3]]
    console.log(events);
    return (
        <>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-8px); }
                    }

                    .float-animation {
                        animation: float 3s ease-in-out infinite;
                    }
                `}
            </style>
            <div className="mt-8 md:p-5 lg:p-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
                    {events.map((event, index) => (
                            <EventCard event={event} key={index}/>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Btn content={'View All'}  link={'/events'}/>
                </div>

            </div>
        </>
    )
}

export default Upcoming