import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Competitions", "Schedule"];

  return (
    <nav className="fixed w-full bg-black bg-opacity-70 text-white p-4 z-50 flex justify-between items-center">
      <div className="text-2xl font-bold mx-auto">AVATAR</div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 absolute right-10">
        {menuItems.map((item, idx) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={idx}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hamburger icon */}
      <div className="md:hidden absolute right-6 text-2xl">
        {open ? (
          <FaTimes onClick={() => setOpen(false)} />
        ) : (
          <FaBars onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute top-16 right-6 bg-gray-800 px-4 py-2 rounded shadow-lg">
          {menuItems.map((item, idx) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={idx}
              onClick={() => setOpen(false)}
              className="block py-2 px-4 hover:bg-cyan-600 rounded transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
