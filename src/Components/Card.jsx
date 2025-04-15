import React from 'react';

const features = [
  {
    icon: "./clock.png",
    title: "Seamless Booking",
    text: "Quick, intuitive reservations with a user-friendly interface.",
  },
  {
    icon: "./secure.png",
    title: "Secure Transactions",
    text: "Your data is safe with top-tier encryption and secure payment gateways.",
  },
  {
    icon: "./update.png",
    title: "Real-Time Updates",
    text: "Instant alerts for schedule changes, availability, and promotions.",
  },
  {
    icon: "./headphone.png",
    title: "24/7 Support",
    text: "Friendly assistance whenever you need it day or night.",
  },
];

function Card() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4   gap-6 sm:p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-6"
          >
            <div className="md:flex gap-4">
              <div className="shrink-0 bg-gray-100 text-2xl p-3 w-20 h-20 rounded-xl ">
                <img className="w-full h-full float-animation" src={feature.icon} alt="" />
              </div>
              <div className="mt-4 sm:flex md:mt-0 flex-col justify-between h-[100%]">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-4">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
