import { useLocation, useParams } from "react-router";

const ExperienceDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const experience = state?.experience || {};

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-serif mb-6">{experience.title}</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            src={experience.image}
            alt={experience.title}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="font-serif text-2xl mb-4">Experience Details</h3>
          <p className="mb-6">{experience.description}</p>
          <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-dark transition">
            Book This Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
