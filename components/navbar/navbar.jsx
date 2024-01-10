"use client";

import { useState } from "react";
import Container from "../container";
import Paragraph from "../typography/Paragraph";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 back drop-shadow-md">
      <Container>
        <div className="w-full flex items-center justify-between py-3.5 px-3">
          <div>
            <h1 className="text-4xl font-bold text-gray-100">EQuran</h1>
          </div>
          <div className="lg:flex space-x-5 hidden">
            <Paragraph>📋 Kumpulan Doa</Paragraph>
            <Paragraph>🦊 Tentang Web Ini</Paragraph>
          </div>
          <button
            id="hamburger"
            className="space-y-2 border border-transparent focus:border-white p-3 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {Array.from([1, 2]).map((_, i) => {
              return (
                <svg key={i} className="w-7 h-0.5 rounded-full">
                  <rect className="fill-white w-full h-full" />
                </svg>
              );
            })}
          </button>
        </div>
      </Container>
      <div
        className={`${
          open ? "h-max" : "h-0"
        } overflow-hidden bg-slate-900 px-3 lg:hidden`}
      >
        <div className="pb-2">
          <Paragraph>📋 Kumpulan Doa</Paragraph>
          <Paragraph>🦊 Tentang Web Ini</Paragraph>
        </div>
      </div>
    </nav>
  );
}
