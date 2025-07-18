import { useLocation, useParams } from "react-router";

const DestinationDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  // You can use either the ID to fetch data or use the location state
  const destination = state?.destination || {}; // Fallback to empty object

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-serif mb-6">{destination.title}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={destination.image}
            alt={destination.title}
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div>
          <p className="text-xl mb-4">{destination.description}</p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-serif text-gold text-2xl mb-4">
              Tour Highlights
            </h3>
            {/* Add your destination-specific content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
