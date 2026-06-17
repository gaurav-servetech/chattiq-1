"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import whatsappIcon from "../../public/LandingPageIcon/channals/whatsapp-icon-free-png 1.svg";
import facebookIcon from "../../public/LandingPageIcon/channals/download (1) 1.svg";
import instagramIcon from "../../public/LandingPageIcon/channals/modern-badge-logo-instagram-icon_578229-124 1.svg";
import messengerIcon from "../../public/LandingPageIcon/channals/Facebook_Messenger_logo_2020.svg 1.svg";
import metaIcon from "../../public/LandingPageIcon/channals/meta-6871457_1280-removebg-preview 2.svg";
import phoneIcon from "../../public/LandingPageIcon/channals/green-handset-button-calling-ringing-element-social-network_340607-261 1.svg";

// type ChannelIcon = {
//   id: string;
//   src: typeof whatsappIcon;
//   alt: string;
//   size?: "lg";
// };

/* Pyramid: 1 top → 2 middle → 3 bottom */

export function OmniChannelSection() {
  return (
    <section className="w-full" aria-labelledby="omni-channel-heading">
      <div className="omni-channel-section__rule" aria-hidden />
      <div className="omni-channel-section__inner flex flex-row md:flex-col sm:flex-col items-center justify-between gap-8 lg:gap-12 xl:gap-14 w-[100%]">
        <div className=" flex flex-col gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
          <h2 className="font-extrabold text-[4rem] w-full xl:text-[4.5rem]  2xl:text-[5rem] word-spacing-[0.1em] " >
            Built around WhatsApp.
            <br />
            Powered by AI across every channel.
          </h2>
          <p className="80% w-full text-[1.35rem] xl:text-[1.55rem] 2xl:text-[1.65rem] font-normal">
            Start with WhatsApp, connect your website in minutes, and expand to more customer
            channels on request all powered by no-code AI agents.
          </p>
          <a href="#contact" className=" bg-[#C9F1FF] flex justify-center items-center gap-4 w-[44%] h-[3.5rem] cursor-pointer rounded-[8px] border-[2px] border-black text-[1.2rem]">
            Request For Another Omni Channel
            <ArrowRight className="hover:translate-x-1 w-6 h-6 transition-transform duration-300 active:translate-x-1" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
        <div className=" flex flex-col  h-[50%] w-full   absolute right-[-38rem]   " aria-hidden>
          <div className="w-full h-full flex justify-center items-center">
            <Image src={whatsappIcon} alt="WhatsApp" className="w-25 h-25" />
          </div>
          <div className=" flex flex-row gap-18 h-full w-full justify-center items-center">
            <Image src={facebookIcon} alt="Facebook" className="w-25 h-25" />
            <Image src={instagramIcon} alt="Instagram" className="w-35 h-35" />
          </div>
          <div className=" flex flex-row justify-center items-center gap-18 h-full w-full">
            <Image src={messengerIcon} alt="Messenger" className=" h-25 w-25" />
            <Image src={metaIcon} alt="Meta" className="w-40 h-40" />
            <Image src={phoneIcon} alt="WhatsApp call" className="w-28 h-28" />
          </div>
        </div>
      </div>
      <div className="w-full h-full m-40" aria-hidden />

    </section>
  );
}

export function PayPerMessageBanner() {
  return (
    <section className="pay-per-message-section bg-[#A2EFA3]" aria-labelledby="pay-per-message-heading">
      <div className="border-2 border-dashed bg-[#F9E16D] text-[3rem] h-[7rem] w-[35rem] text-center font-bold absolute right-25 top-[-3.5rem] py-4 px-2">
        No Hidden Charges
      </div>
      <div className=" flex flex-col items-left justify-left gap-10 w-full h-full py-10 px-30">
        <h2 className="font-extrabold text-[3.5rem] xl:text-[3rem]  2xl:text-[4.5rem] word-spacing-[0.1em]">
          Pay Per Message, No Hidden Charges.
        </h2>
        <p className="w-[75%]  text-[1.35rem] xl:text-[1.95rem] 2xl:text-[1.65rem] font-normal">
          With per-message billing, you stay in control of your spending while keeping costs simple, transparent, and predictable.
        </p>
        <button className=" bg-[#C9F1FF] flex justify-center items-center gap-4 w-[9%] h-[3.5rem] cursor-pointer rounded-full border-[1px] border-black text-[1.3rem]">
          Learn More
        </button>
      </div>
      
    </section>
  );
}

export default function ChannelArea() {
  return (
    <>
      <OmniChannelSection />
      <PayPerMessageBanner />
    </>
  );
}
