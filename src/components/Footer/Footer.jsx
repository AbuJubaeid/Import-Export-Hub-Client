import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10 pb-4 shadow-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start space-y-3">
            <img src="/logo.ico" alt="IEHub Logo" className="w-12 h-12" />
            <span className="text-3xl font-extrabold">IEHub</span>
            <p className="text-gray-600 text-sm">
              Providing reliable products since 1992. Your trusted import-export partner.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="font-semibold mb-3">Company</h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-blue-600 transition">About Us</Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 transition">Contact</Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 transition">Jobs</Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 transition">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h6 className="font-semibold mb-3">Legal</h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-blue-600 transition">Terms of Use</Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 transition">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="font-semibold mb-3">Social</h6>
            <div className="flex space-x-4">
              <Link className="text-gray-700 hover:text-blue-500 transition text-xl">
                <BsTwitterX />
              </Link>
              <Link className="text-gray-700 hover:text-red-500 transition text-xl">
                <CiYoutube />
              </Link>
              <Link className="text-gray-700 hover:text-blue-700 transition text-xl">
                <SlSocialFacebook />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          &copy; {new Date().getFullYear()} IEHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
