"use client";

import { useEffect, useState } from "react";
import Paragraph from "../typography/Paragraph";
import { FiChevronUp } from "react-icons/fi";

export default function Footer() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 120) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scroll);

  return (
    <>
      <button
        className={`fixed ${
          scroll ? "bottom-16" : "bottom-0"
        }  text-white text-lg flex items-center justify-center right-16 bg-slate-900 rounded-full h-10 w-10 duration-200`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FiChevronUp />
      </button>
      <footer className="w-full h-max py-2.5 flex items-center justify-center fixed bottom-0 z-10 bg-slate-900">
        <Paragraph className="font-semibold">
          &copy; {new Date().getFullYear()} - Made by Aditya
        </Paragraph>
      </footer>
    </>
  );
}
