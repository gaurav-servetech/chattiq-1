"use client";

import React from "react";
import Image from "next/image";
import spectrumLogo from "../../public/LandingPageIcon/testimonials/spectrum.svg";
import apexLogo from "../../public/LandingPageIcon/testimonials/Apex.svg";
import xIcon from "../../public/LandingPageIcon/testimonials/xIcon.svg";
import avatarDavid from "../../public/LandingPageIcon/testimonials/image.svg";
import avatarSarah from "../../public/LandingPageIcon/testimonials/image (2).svg";
import avatarJames from "../../public/LandingPageIcon/testimonials/Image (3).svg";
import avatarMaya from "../../public/LandingPageIcon/testimonials/image (4).svg";
import avatarCarlos from "../../public/LandingPageIcon/testimonials/image (5).svg";
import avatarLiam from "../../public/LandingPageIcon/testimonials/image (6).svg";
import avatarSophia from "../../public/LandingPageIcon/testimonials/image (7).svg";

type TestimonialCard = {
  id: string;
  variant: "featured" | "standard";
  quote: string;
  name: string;
  role: string;
  avatar: typeof avatarDavid;
  companyLogo?: typeof spectrumLogo;
  companyName?: string;
  largeQuote?: boolean;
};

const columnOne: TestimonialCard[] = [
  {
    id: "spectrum",
    variant: "featured",
    companyLogo: spectrumLogo,
    companyName: "Spectrum",
    quote:
      "The AI-powered tools in Chattiq save us countless hours by summarizing tasks and prioritizing what matters most. It's a must-have for any team looking to streamline workflows.",
    name: "David Kim",
    role: "CEO At Spectrum",
    avatar: avatarDavid,
    largeQuote: true,
  },
  {
    id: "sarah",
    variant: "standard",
    quote:
      "Chattiq transformed our project management process. Its intuitive features make organizing tasks incredibly easy.",
    name: "Sarah Turner",
    role: "Project Manager",
    avatar: avatarSarah,
  },
];

const columnTwo: TestimonialCard[] = [
  {
    id: "james",
    variant: "standard",
    quote:
      "The collaboration tools in Chattiq have significantly improved our team's productivity across all projects.",
    name: "James Parker",
    role: "Operations Lead",
    avatar: avatarJames,
  },
  {
    id: "maya",
    variant: "standard",
    quote:
      "I love how Chattiq's AI Summary saves time by giving instant insights from our complex workflows.",
    name: "Maya Patel",
    role: "Product Designer",
    avatar: avatarMaya,
  },
  {
    id: "carlos",
    variant: "standard",
    quote:
      "Chattiq's 2-way translation has been a game-changer for our global team's seamless communication.",
    name: "Carlos Rivera",
    role: "Global Project Manager",
    avatar: avatarCarlos,
  },
];

const columnThree: TestimonialCard[] = [
  {
    id: "liam",
    variant: "standard",
    quote:
      "Bulk actions in Chattiq have simplified task management for our team, boosting overall efficiency.",
    name: "Liam Scott",
    role: "Operations Director",
    avatar: avatarLiam,
  },
  {
    id: "apex",
    variant: "featured",
    companyLogo: apexLogo,
    companyName: "Apex",
    quote:
      "Chattiq has revolutionized how our team manages projects. Its intuitive features and seamless collaboration tools have enhanced our efficiency and ensured we never miss a deadline.",
    name: "Sophia Zhang",
    role: "CEO At Apex",
    avatar: avatarSophia,
    largeQuote: true,
  },
];

function TestimonialCardView({ card }: { card: TestimonialCard }) {
  const isFeatured = card.variant === "featured";

  return (
    <article
      className={`testimonial-card${isFeatured ? " testimonial-card--featured" : ""}`}
    >
      {isFeatured && card.companyLogo && (
        <div className="testimonial-card__brand">
          <Image
            src={card.companyLogo}
            alt={card.companyName ?? "Company"}
            className="testimonial-card__brand-logo"
          />
        </div>
      )}

      <p
        className={`testimonial-card__quote${card.largeQuote ? " testimonial-card__quote--lg" : ""}`}
      >
        {card.quote}
      </p>

      <div className="testimonial-card__footer">
        <div className="testimonial-card__author">
          <Image src={card.avatar} alt={card.name} className="testimonial-card__avatar" />
          <div className="testimonial-card__author-text">
            <span className="testimonial-card__name">{card.name}</span>
            <span className="testimonial-card__role">{card.role}</span>
          </div>
        </div>
        <Image src={xIcon} alt="" className="testimonial-card__x" aria-hidden />
      </div>
    </article>
  );
}

function TestimonialsMasonryPanel({ instance }: { instance: "a" | "b" }) {
  const keyPrefix = `${instance}-`;

  return (
    <div className="testimonials-masonry-panel" aria-hidden={instance === "b" ? true : undefined}>
      <div className="testimonials-masonry-col">
        {columnOne.map((card) => (
          <TestimonialCardView key={`${keyPrefix}${card.id}`} card={card} />
        ))}
      </div>
      <div className="testimonials-masonry-col">
        {columnTwo.map((card) => (
          <TestimonialCardView key={`${keyPrefix}${card.id}`} card={card} />
        ))}
      </div>
      <div className="testimonials-masonry-col">
        {columnThree.map((card) => (
          <TestimonialCardView key={`${keyPrefix}${card.id}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="testimonials-section__header">
          <h2 id="testimonials-heading" className="testimonials-section__title">
            Growing Businesses choose Chattiq
          </h2>
          <p className="testimonials-section__subtitle">
            Businesses choose Chattiq to turn conversations into lasting customer
            relationships.
          </p>
        </header>
      </div>

      <div className="testimonials-marquee-viewport">
        <div className="testimonials-marquee-track">
          <TestimonialsMasonryPanel instance="a" />
          <TestimonialsMasonryPanel instance="b" />
        </div>
      </div>

      <div className="w-[90%] mx-auto h-[1px] bg-black mt-28" aria-hidden />
    </section>
  );
}
