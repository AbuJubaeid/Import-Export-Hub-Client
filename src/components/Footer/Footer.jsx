import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-base-200 text-base-content">
        <div className="footer sm:footer-horizontal text-base-content p-10">
          <aside>
            <img className="w-[30px] h-[30px]" src="/logo.ico" alt="" />
            <p>
              <span className="text-2xl font-extrabold">IEHub</span>
              <br />
              Providing reliable products since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <Link>
                <BsTwitterX />
              </Link>
              <Link>
                <CiYoutube />
              </Link>
              <Link>
                <SlSocialFacebook />
              </Link>
            </div>
          </nav>
        </div>
        <p className="text-center mb-5">
          Copyright © {new Date().getFullYear()} - All right reserved IEHub
        </p>
      </footer>
    </div>
  );
};

export default Footer;
