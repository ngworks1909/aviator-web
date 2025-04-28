import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c1705] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Klik Games Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Aviator</h3>
            <p className="text-sm leading-relaxed">
              The best NFT marketplace website in the world and feel your experience in selling or buy our work
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  <FaYoutube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaDiscord className="w-5 h-5" />
                  <span className="sr-only">Discord</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800 text-sm">
          Created by{' '}
          <span className="text-white">Klik Games</span>
          {' '}| All Right Reserved!
        </div>
      </div>
    </footer>
  )
}