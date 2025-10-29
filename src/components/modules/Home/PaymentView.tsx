import React from "react";
import { CreditCard, Zap, Gift, Phone } from "lucide-react";

const PaymentView = () => {
  const services = [
    {
      id: 1,
      icon: <CreditCard size={22} className="text-purple-600" />,
      title: "Multiple Payment Options",
      desc: "bKash, Nagad, Cards & More",
      bg: "bg-purple-50",
    },
    {
      id: 2,
      icon: <Zap size={22} className="text-yellow-500" />,
      title: "Instant E-Ticket",
      desc: "Delivered to Your Email",
      bg: "bg-green-50",
    },
    {
      id: 3,
      icon: <Gift size={22} className="text-red-500" />,
      title: "Loyalty Rewards",
      desc: "Earn Points on Every Booking",
      bg: "bg-red-50",
    },
    {
      id: 4,
      icon: <Phone size={22} className="text-yellow-600" />,
      title: "24/7 Customer Care",
      desc: "Always Here to Help You",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <div className="bg-[#FAFBFC] py-12 rounded-2xl">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold text-gray-800">
          Why Choose Ehan Tours & Travel?
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Experience seamless travel booking with our premium services
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`${service.bg} rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition`}
          >
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm">
                {service.icon}
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentView;
