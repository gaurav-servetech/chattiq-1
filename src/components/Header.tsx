"use client";

import React, { useState } from "react";
import chattiqLogo from '../../public/LandingPageIcon/chattiq-logo.svg'
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

// const navItems = [
//   { label: "Products", href: "#products", hasDropdown: true },
//   { label: "Features", href: "#features" },
//   { label: "Pricing", href: "#pricing" },
// ];

export default function Header() {
  // const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="Header flex justify-between items-center py-[clamp(0.75rem,calc(20*100vw/1920),1.55rem)] min-h-[clamp(3.5rem,calc(80*100vw/1920),5rem)] w-full">
      <div className="flex items-center shrink-0">
        <Image
          src={chattiqLogo}
          alt="Chattiq Logo"
          className="Header-logo w-[clamp(5.5rem,calc(130*100vw/1920),8.5rem)] h-auto"
        />
      </div>
      <div>
        <nav className="Header-nav text-brand-forest-dark text-[clamp(0.875rem,calc(20*100vw/1920),1.3rem)] font-bold">
          <ul className="Header-nav-list flex items-center justify-center gap-[clamp(1rem,calc(48*100vw/1920),3rem)]">
            <li >
              <a href="#" className="flex items-center gap-2">Products
                <ChevronDownIcon className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Header-buttons flex items-center gap-[clamp(0.5rem,calc(16*100vw/1920),1rem)] shrink-0">
        <button className="Header-book-trial bg-[#A2EFA3] text-brand-forest-dark border-2 px-[clamp(0.75rem,calc(16*100vw/1920),1rem)] py-[clamp(0.35rem,calc(8*100vw/1920),0.5rem)] rounded-[0.7rem] text-[clamp(0.75rem,calc(14*100vw/1920),1rem)] whitespace-nowrap">
          Book a Trial
        </button>
        <button className="Header-get-started bg-white text-black border-2 px-[clamp(0.75rem,calc(16*100vw/1920),1rem)] py-[clamp(0.35rem,calc(8*100vw/1920),0.5rem)] rounded-[0.7rem] text-[clamp(0.75rem,calc(14*100vw/1920),1rem)] whitespace-nowrap">
          Get Started
        </button>
      </div>
    </header>
  );
}
