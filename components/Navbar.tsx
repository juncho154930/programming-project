"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.webp";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { scrollTo } from "@/lib/utils";

const tabs = [
  {
    title: "Partners",
    link: "partners",
  },
  {
    title: "Members",
    link: "members",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

interface TabProps {
  title: string;
  link: string;
}

interface ChipProps {
  tab: TabProps;
  selected: boolean;
  setSelected: (tab: TabProps) => void;
}

const Chip = ({ tab, selected, setSelected }: ChipProps) => {
  const changeChip = (tab: TabProps) => {
    setSelected(tab);
    scrollTo({ id: tab.link, duration: 1000 });
  };

  return (
    <button
      onClick={() => changeChip(tab)}
      className={`${
        selected
          ? "text-white"
          : "text-indigo-500 hover:text-slate-200 hover:bg-slate-700"
      } text-md font-bold transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{tab.title}</span>

      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [navbarActive, setNavbarActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  const detectCurrentSection = () => {
    let activeTab = null;

    for (let i = 0; i < tabs.length; i++) {
      const element = document.getElementById(tabs[i].link);
      const navHeightOffset = 150;

      const isSectionInView = element
        ? window.scrollY <
          element.offsetTop + element.offsetHeight - navHeightOffset
        : false;

      if (isSectionInView) {
        activeTab = tabs[i];
        break;
      }
    }

    if (activeTab) {
      setSelected(activeTab);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", detectCurrentSection);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("scroll", detectCurrentSection);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        navbarActive
          ? "bg-[rgba(255,255,255,0.85)] backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="flex justify-between h-16">
        <div className="flex gap-8 items-center w-full">
          <Link href="/">
            <div className="h-16 px-4">
              <Image
                src={Logo}
                alt="Programming Logo"
                className="w-full h-full"
              />
            </div>
          </Link>
          <div className="flex items-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <Chip
                tab={tab}
                selected={selected === tab}
                setSelected={setSelected}
                key={tab.title}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
