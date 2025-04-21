import { FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16 text-center">
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <p>Copyright © 1995 - 2025 Avatar. All rights reserved.</p>
      <p className="text-sm mt-1">Developed by Web Team.</p>
    </footer>
  );
}
