"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Plus } from "lucide-react";
import basicIllustration from "../../public/LandingPageIcon/testimonials/price/Clip path group.svg";
import advanceIllustration from "../../public/LandingPageIcon/testimonials/price/Icon (7).svg";
import superIllustration from "../../public/LandingPageIcon/testimonials/price/Icon (8).svg";
import customServicesIllustration from "../../public/LandingPageIcon/testimonials/price/Image [image-contain].svg";

type PlanTheme = "basic" | "advance" | "super";

type PricingPlan = {
  id: PlanTheme;
  name: string;
  illustration: typeof basicIllustration;
  price?: string;
  priceNote?: string;
  cta: { label: string; href: string; variant: "button" | "link" };
  badge?: string;
  featureIcon: "check" | "plus";
  messaging: string[];
  workspace: string[];
};

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "BASIC PLAN",
    illustration: basicIllustration,
    price: "$50",
    priceNote: "per month billed annually plus $25 per agent/month*",
    cta: { label: "Book a demo", href: "#demo", variant: "button" },
    featureIcon: "check",
    messaging: ["Chat Widget", "SLA+Alerts", "Workflows", "Prioritizations & Queues"],
    workspace: ["Reporting"],
  },
  {
    id: "advance",
    name: "ADVANCE PLAN",
    illustration: advanceIllustration,
    price: "$200",
    priceNote: "per month billed annually plus $45 per agent/month*",
    badge: "Best Choice",
    cta: { label: "Book a demo", href: "#demo", variant: "button" },
    featureIcon: "check",
    messaging: [
      "Chat Widget",
      "Call Deflection (SMS)",
      "SLA+Alerts",
      "Prioritizations & Queues",
      "Channels (SMS, Email)",
      "Workflows",
    ],
    workspace: ["Reporting", "Import/Export Customer Data"],
  },
  {
    id: "super",
    name: "SUPER PLAN",
    illustration: superIllustration,
    cta: { label: "Ask a Question", href: "#contact", variant: "link" },
    featureIcon: "plus",
    messaging: [
      "More Channels",
      "Bot",
      "Call Deflection (+ channels)",
      "Cross channel conversations",
    ],
    workspace: ["Live reporting", "Task Management"],
  },
];

function FeatureGroup({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "check" | "plus";
}) {
  const Icon = icon === "plus" ? Plus : Check;

  return (
    <div className="pricing-plan__feature-group">
      <h4 className="pricing-plan__feature-heading">{title}</h4>
      <ul className="pricing-plan__feature-list">
        {items.map((item) => (
          <li key={item} className="pricing-plan__feature-item">
            <Icon className="pricing-plan__feature-icon" strokeWidth={2.5} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingPlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className={`pricing-plan pricing-plan--${plan.id}`}>
      {plan.badge && <span className="pricing-plan__badge">{plan.badge}</span>}

      <header className="pricing-plan__header">
        <h3 className="pricing-plan__name">{plan.name}</h3>
      </header>

      <div className="pricing-plan__body">
        <div className="pricing-plan__illustration">
          <Image
            src={plan.illustration}
            alt=""
            className="pricing-plan__illustration-img"
            aria-hidden
          />
        </div>

        <div className="pricing-plan__features">
          <FeatureGroup title="MESSAGING" items={plan.messaging} icon={plan.featureIcon} />
          <FeatureGroup title="AGENT WORKSPACE" items={plan.workspace} icon={plan.featureIcon} />
        </div>
      </div>

      <footer className="pricing-plan__footer">
        {plan.price && (
          <div className="pricing-plan__price-wrap">
            <span className="pricing-plan__price">{plan.price}</span>
            {plan.priceNote && (
              <span className="pricing-plan__price-note">{plan.priceNote}</span>
            )}
          </div>
        )}

        {plan.cta.variant === "button" ? (
          <a href={plan.cta.href} className="pricing-plan__cta pricing-plan__cta--button">
            {plan.cta.label}
          </a>
        ) : (
          <a href={plan.cta.href} className="pricing-plan__cta pricing-plan__cta--link">
            {plan.cta.label}
            <span className="pricing-plan__cta-arrow-box" aria-hidden>
              <ArrowRight className="pricing-plan__cta-arrow" strokeWidth={2.5} />
            </span>
          </a>
        )}
      </footer>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="pricing-plans-wrap">
        <header className="pricing-section__header">
          <h2 id="pricing-heading" className="pricing-section__title">
            Powerful Features. Pricing That Makes Sense.
          </h2>
          <p className="pricing-section__subtitle">
            Get all the tools you need to automate conversations, manage customers, and grow
            your business with affordable pricing and zero setup fees.
          </p>
        </header>

        <div className="pricing-plans-grid">
          {plans.map((plan) => (
            <PricingPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      <div className="pricing-custom-wrap">
        <div className="pricing-custom">
          <div className="pricing-custom__content">
            <h3 className="pricing-custom__title">Need Customized Services</h3>
            <p className="pricing-custom__text">
              We offer tailored professional services to meet your unique business needs.
              Whether you require custom integrations, specialized support, or personalized
              solutions, our team is here to help you achieve your goals.
            </p>
            <a href="#contact" className="pricing-custom__link">
              Speak to us
              <span className="pricing-custom__link-arrow-box" aria-hidden>
                <ArrowRight className="pricing-custom__link-arrow" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <div className="pricing-custom__visual">
            <Image
              src={customServicesIllustration}
              alt=""
              className="pricing-custom__illustration"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
