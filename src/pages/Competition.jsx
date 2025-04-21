import Carousel from '../components/Carousel';

export default function Competitions() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Major Past Events
      </h2>
      <div className="max-w-6xl mx-auto">
        <Carousel />
      </div>
    </div>
  );
}
