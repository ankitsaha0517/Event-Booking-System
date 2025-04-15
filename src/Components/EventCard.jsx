import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import DateFormater from "../utils/DateFormater";
import Btn from "../assets/Btn";

function EventCard({ event, btn }) {
  const tagColors = useSelector((state) => state.tagColors);
  // console.log(event);
  const navigate = useNavigate();

  return (
    <div className=" rounded-xl overflow-hidden shadow-sm bg-white p-4 ">
      <Link to={`/eventDets/${event?.id}`}>
        <div className="relative">
          <div className="bg-amber-200 rounded-xl overflow-hidden">
            <img
              src={event?.imgURL}
              alt={event?.eventName}
              className="w-full h-56 object-cover"
            />
          </div>
          <div
            className={`absolute -bottom-5 -right-5  w-22 h-22 rounded-full flex items-center justify-center  
                                bg-white`}
          >
            <span className="text-3xl float-animation">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 ">
        <Link to={`/eventDets/${event?.id}`}>
          <h3 className="text-lg font-semibold">{event?.eventName}</h3>
        </Link>

        <p className="text-sm text-gray-600 mt-1">{event?.dec}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-wrap gap-2 mt-3">
            {event?.eventType?.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs px-2 py-1 rounded-full font-semibold ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right font-semibold">
            <p className="text-sm text-zinc-900">
              {event?.date && DateFormater(event.date)}
            </p>
            <p className="text-sm text-zinc-900">{event.time}</p>
          </div>
        </div>

        {btn ? (
          <></>
        ) : (
          <div className="w-full mt-5 flex justify-center">
            <Btn
              content={event?.buttonText ? event.buttonText : "Register"}
              className={""}
              link={`/eventDets/${event?.id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
