import Navbar from './components/Navbar'
import ScrollDownButton from './components/ScrollDownButton'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to AVATAR TechFest
          </h1>
          <p className="text-lg md:text-2xl text-cyan-300 mb-8">
            Unleashing Innovation | 2025
          </p>
          <ScrollDownButton />
        </div>
      </section>


      <section className="py-16 px-8" id="theme">
        <h2 className="text-3xl font-bold mb-4">Theme</h2>
        <p>Explore innovation and creativity with our "Digital Odyssey" theme for 2025.</p>
      </section>

      <section className="py-16 px-8 bg-gray-800" id="about">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p>AVATAR is the annual TechFest celebrating student innovations through competitions, talks, and exhibitions.</p>
      </section>

      <section className="py-16 px-8" id="competitions">
        <h2 className="text-3xl font-bold mb-4">Competitions</h2>
        <Carousel />
      </section>

      <section className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-4">Be a part of our official WhatsApp group to get all updates and opportunities!</p>
        <a href="https://chat.whatsapp.com/YourInviteLink" className="bg-green-500 px-4 py-2 rounded text-white">Join WhatsApp Channel</a>
      </section>

      <Footer />
    </div>
  )
}

export default App;
