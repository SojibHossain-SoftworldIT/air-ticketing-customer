import React from "react";
import "./OurClintSay.css";

const testimonials = [
  {
    id: 1,
    text: "Pet Care programs are so easy to follow, the results are incredible. A step toward better health!",
    name: "Esther Howard",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    text: "The service was amazing, and my pet loved it! I highly recommend it to everyone.",
    name: "Cody Fisher",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    text: "I was amazed at how simple it was to get started. My dog is happier than ever!",
    name: "Brooklyn Simmons",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const OurClintSay = () => {
  return (
    <section className="relative overflow-hidden z-10 bg-linear-to-b from-[#F8FAFF] to-[#FAFBFC] py-16 px-12 rounded-2xl">
      <div className="bgCustom"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-medium text-gray-800 mb-2">
          Our Clients Say
        </h2>
        <p className="text-gray-500 mb-12">
          Start with what you need today and expand over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start text-left hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <img src="Layer_1.png" alt="Layer_1" width={30} height={30} className="mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClintSay;
