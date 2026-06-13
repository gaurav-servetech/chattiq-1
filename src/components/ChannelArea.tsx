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

type ChannelIcon = {
  id: string;
  src: typeof whatsappIcon;
  alt: string;
  size?: "lg";
};

/* Pyramid: 1 top → 2 middle → 3 bottom */
const pyramidRows: ChannelIcon[][] = [
  [{ id: "meta", src: metaIcon, alt: "Meta" }],
  [
    { id: "facebook", src: facebookIcon, alt: "Facebook" },
    { id: "phone", src: phoneIcon, alt: "WhatsApp call" },
  ],
  [
    { id: "instagram", src: instagramIcon, alt: "Instagram" },
    { id: "whatsapp", src: whatsappIcon, alt: "WhatsApp", size: "lg" },
    { id: "messenger", src: messengerIcon, alt: "Messenger" },
  ],
];

export function OmniChannelSection() {
  return (
    <section className="omni-channel-section" aria-labelledby="omni-channel-heading">
      <div className="omni-channel-section__rule" aria-hidden />
      <div className="omni-channel-section__inner">
        <div className="omni-channel-section__content">
          <h2 id="omni-channel-heading" className="omni-channel-section__title">
            Built around WhatsApp.
            <br />
            Powered by AI across every channel.
          </h2>
          <p className="omni-channel-section__text">
            Start with WhatsApp, connect your website in minutes, and expand to more customer
            channels on request all powered by no-code AI agents.
          </p>
          <a href="#contact" className="omni-channel-section__cta">
            Request For Another Omni Channel
            <ArrowRight className="omni-channel-section__cta-arrow" strokeWidth={2.5} aria-hidden />
          </a>
        </div>

        <div className="omni-channel-section__visual" aria-hidden>
          <div className="omni-channel__pyramid">
            {pyramidRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`omni-channel__pyramid-row omni-channel__pyramid-row--${rowIndex + 1}`}
              >
                {row.map((icon) => (
                  <div
                    key={icon.id}
                    className={`omni-channel__icon${icon.size === "lg" ? " omni-channel__icon--lg" : ""}`}
                  >
                    <Image src={icon.src} alt="" className="omni-channel__icon-img" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PayPerMessageBanner() {
  return (
    <section className="pay-per-message-section" aria-labelledby="pay-per-message-heading">
      <div className="pay-per-message-section__badge">No Hidden Charges</div>

      <div className="pay-per-message-section__inner">
        <div className="pay-per-message-section__content">
          <h2 id="pay-per-message-heading" className="pay-per-message-section__title">
            Pay Per Message. Stay in Control.
          </h2>
          <p className="pay-per-message-section__text">
            With per-message billing, you stay in control of your spending while keeping costs
            simple, transparent, and predictable.
          </p>
          <a href="#pricing" className="pay-per-message-section__cta">
            Learn More
          </a>
        </div>
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
