import React from "react";

import Image from "next/image";
import Logo from "@/assets/logo.webp";
import {
  CopyrightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const quicklinks = [
  { title: "Product" },
  { title: "FAQ" },
  { title: "About Us" },
  { title: "Contact" },
];

const resources = [
  { title: "Contact" },
  { title: "FAQ" },
  { title: "Resource" },
];

const Footer = () => {
  return (
    <section className="bg-primary-background p-16 pt-24 pb-8">
      <footer className="container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <Image
                src={Logo}
                alt="Programming Logo"
                width="100"
                height="100"
              />
            </a>
            <p className="mt-6 text-sm leading-7 font-montserrat text-gray-100 sm:max-w-sm">
              Licensed in XYZ. | #1234567
            </p>
            <p className="text-sm leading-7 font-montserrat text-gray-100 sm:max-w-sm">
              1234 W Plano Pkwy Ste 123 Plano, TX 75075
            </p>
            <p className="mt-6 text-base leading-7 font-montserrat text-gray-100 sm:max-w-sm">
              Your pathway to SaaS.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                <FacebookIcon />
              </a>
              <a className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                <TwitterIcon />
              </a>
              <a className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                Quick Links
              </h4>
              <ul>
                {quicklinks.map((item) => (
                  <li
                    key={item.title}
                    className="mt-3 text-gray-100 font-montserrat text-base leading-normal cursor-pointer hover:text-indigo-500"
                  >
                    <a>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                Resources
              </h4>
              <ul>
                {resources.map((item) => (
                  <li
                    key={item.title}
                    className="mt-3 text-gray-100 font-montserrat text-base leading-normal cursor-pointer hover:text-indigo-500"
                  >
                    <a>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                Get in touch
              </h4>
              <ul>
                <li className="mt-3 text-gray-100 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                  <a
                    href="mailto:hello@testing.com"
                    className="underline hover:text-indigo-500"
                  >
                    hello@testing.com
                  </a>
                </li>
                <li className="mt-3 text-gray-100 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                  <a
                    href="tel:+2145551234"
                    className="underline hover:text-indigo-500"
                  >
                    +2145551234
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 font-montserrat text-gray-100">
          <div>
            <a className="cursor-pointer hover:text-indigo-500">
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a className="cursor-pointer hover:text-indigo-500">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-gray-100 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
            <CopyrightIcon />
            <p>2023 Programming Project Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
