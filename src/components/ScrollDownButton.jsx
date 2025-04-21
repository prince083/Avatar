import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button once scrolled to theme
      const themeSection = document.getElementById("theme");
      const themeTop = themeSection?.getBoundingClientRect().top;
      setVisible(themeTop > 100); // adjust based on spacing
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const themeSection = document.getElementById("theme");
    themeSection?.scrollIntoView({ behavior: "smooth" });
    setVisible(false); // instantly hide after click
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-10 right-10 animate-bounce text-white px-4 py-2 bg-black bg-opacity-50 rounded shadow-md cursor-pointer"
    >
      Scroll Down ↓↓
    </button>
  );
}
