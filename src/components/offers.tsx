import { Gift } from "lucide-react";

const offers = [
  {
    title: "Buy 1 Cheese",
    description: "Get 1 Cheese FREE",
    icon: "🧀",
  },
  {
    title: "Buy Soup",
    description: "Get Bread at 50% OFF",
    icon: "🥣",
  },
  {
    title: "Butter Offer",
    description: "33% OFF Every Butter",
    icon: "🧈",
  },
];

const Offers = () => {
  return (
    <div className="bg-yellow-50 rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Gift size={26} />
        Current Offers
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {offers.map((offer) => (

          <div
            key={offer.title}
            className="bg-white rounded-lg p-5 shadow"
          >

            <div className="text-5xl mb-3">
              {offer.icon}
            </div>

            <h3 className="font-bold text-lg">
              {offer.title}
            </h3>

            <p className="text-gray-600">
              {offer.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Offers;