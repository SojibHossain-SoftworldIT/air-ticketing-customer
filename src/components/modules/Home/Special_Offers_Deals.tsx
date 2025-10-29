import React from "react";

const offers = [
  {
    title: "Dubai Special",
    subtitle: "Limited time offer on all Dubai flights",
    label: "Flash Sale",
    emoji: "🔥",
    oldPrice: "BDT 50,000",
    newPrice: "BDT 37,500",
    discount: "25% OFF",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Bangkok Weekend",
    subtitle: "Book 30 days in advance and save big",
    label: "Early Bird",
    emoji: "🌅",
    oldPrice: "BDT 28,000",
    newPrice: "BDT 22,400",
    discount: "20% OFF",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Singapore Family Pack",
    subtitle: "Book for 4+ passengers and save more",
    label: "Group Deal",
    emoji: "👨‍👩‍👧‍👦",
    oldPrice: "BDT 42,000",
    newPrice: "BDT 33,600",
    discount: "20% OFF",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Special_Offers_Deals = () => {
  return (
    <div className="bg-[#FAFBFC] py-16 px-4 flex flex-col items-center rounded-3xl">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Special Offers & Deals
        </h2>
        <p className="text-gray-500 mb-12">
          Don’t miss out on our exclusive flight deals and promotions
        </p>

        <div className="grid max-w-6xl m-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-linear-to-r ${offer.gradient} text-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-white/30 text-xs px-3 py-1 rounded-full">
                    {offer.label}
                  </span>
                  <span className="text-xl">{offer.emoji}</span>
                </div>
                <h3 className="text-lg text-start font-semibold">{offer.title}</h3>
                <p className="text-sm text-start opacity-90 mt-2">{offer.subtitle}</p>
                <div className="flex items-center gap-3  mt-2">
                  <p className="text-sm  opacity-80">
                    {offer.oldPrice}
                  </p>
                  <p className="text-lg font-semibold">{offer.newPrice}</p>
                  <span className="bg-white/25 text-xs px-2 py-0.5 rounded-sm">
                    {offer.discount}
                  </span>
                </div>
              </div>
              <button className="bg-white  text-gray-800  text-sm font-medium rounded-md mt-6 py-2 hover:bg-gray-100 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special_Offers_Deals;
