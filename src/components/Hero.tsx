import React from "react";
import Image from "next/image";
import heroConversationPlaceholder from '../../public/LandingPageIcon/heroImage.svg';

export default function Hero() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div className="container flex flex-col items-center justify-center w-full text-center">
        <h1 className="font-bold flex flex-col items-center justify-center mt-[clamp(2rem,calc(80*100vw/1920),5rem)]">
          <span className="text-[clamp(2rem,calc(64*100vw/1920),4rem)] bg-brand-lime-soft px-[0.35em] rounded-[0.35rem] font-bold">
            WhatsApp Automation
          </span>
          <span className="text-[clamp(2rem,calc(64*100vw/1920),4rem)] font-bold">
            Built for Businesses
          </span>
        </h1>
        <p className="text-[clamp(1rem,calc(18*100vw/1920),1.25rem)] w-full max-w-[88%] mt-[clamp(1.5rem,calc(40*100vw/1920),2.5rem)]">
          Build a smart AI assistant without coding. Connect it to WhatsApp, embed it on your
          website, and train it with your business knowledge using PDFs, website links,
          documents, and FAQs.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-[clamp(0.75rem,calc(16*100vw/1920),1rem)] mt-[clamp(1.5rem,calc(40*100vw/1920),2.5rem)]">
          <button className="bg-[#A2EFA3] text-brand-forest-dark border-2 px-[clamp(0.75rem,calc(16*100vw/1920),1rem)] py-[clamp(0.4rem,calc(8*100vw/1920),0.5rem)] rounded-[0.5rem] text-[clamp(0.875rem,calc(16*100vw/1920),1rem)]">
            Book a Trial
          </button>
          <button className="bg-white text-black border-2 px-[clamp(0.75rem,calc(16*100vw/1920),1rem)] py-[clamp(0.4rem,calc(8*100vw/1920),0.5rem)] rounded-[0.5rem] text-[clamp(0.875rem,calc(16*100vw/1920),1rem)]">
            Get Started
          </button>
        </div>
        <Image
          src={heroConversationPlaceholder}
          alt="Hero Conversation"
          className="w-full max-w-[min(100%,calc(1100*100vw/1920))] mt-[clamp(2rem,calc(56*100vw/1920),3.5rem)] h-auto"
        />
      </div>
    </section>
  );
}
