import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from "./Newsletter";

const Footer = () => {
  return (
    <>
      {/* newsletter */}
      <div>
        <NewsLetter />
      </div>

      <div className="p-4 px-10 py-14">
        <div className="flex gap-10 justify-between flex-col sm:flex-row mt-5">
          <div>
            <div className="flex flex-col gap-10">
              <img src="/cookie-logo.png" className="w-[5rem] border-1" />
              <p className="text-sm text-gray-500 w-75">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex items-center gap-5 text-2xl">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-red-600 cursor-pointer" />
                <FaXTwitter className="cursor-pointer" />
                <FaGithub className="cursor-pointer" />
                <FaYoutube className="hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Solutions</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Support</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li>Submit ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Company</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Legal</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
        <div className="bg-black/20 h-[1px] mt-7 mb-7"></div>
        <div className="text-sm text-gray-500">
          &#169; 2025 Cookie Software Ltd. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
