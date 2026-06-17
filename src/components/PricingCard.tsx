"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Plus } from "lucide-react";
import type { StaticImageData } from "next/image";

export type PlanTheme = "basic" | "advance" | "super";

export type PricingCardPlan = {
  id: PlanTheme;
  name: string;
  illustration: StaticImageData;
  badge?: string;
  featureIcon: "check" | "plus";
  messaging: string[];
  workspace: string[];
  price?: {
    amount: string;
    billingLine: string;
    agentAmount: string;
    disclaimer?: string;
  };
  cta: { label: string; href: string; variant: "button" | "link" };
};

function FeatureIcon({ type }: { type: "check" | "plus" }) {
  const Icon = type === "plus" ? Plus : Check;

  return (
    <span className="pricing-card__feature-icon" aria-hidden>
      <Icon className="pricing-card__feature-icon-svg" strokeWidth={3} />
    </span>
  );
}

function FeatureList({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "check" | "plus";
}) {
  return (
    <>
      <h4 className="pricing-card__feature-heading">{title}</h4>
      <ul className="pricing-card__feature-list">
        {items.map((item) => (
          <li key={item} className="pricing-card__feature-item">
            <FeatureIcon type={icon} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function PricingCard({ plan }: { plan: PricingCardPlan }) {
  return (
    <article className={`pricing-card pricing-card--${plan.id}`}>
      {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}

      <div className="pricing-card__hero">
        <div className="pricing-card__super-bar">
          <h3 className="pricing-card__name">{plan.name}</h3>
        </div>
        <div className="pricing-card__illustration">
          <Image
            src={plan.illustration}
            alt=""
            className="pricing-card__illustration-img"
            aria-hidden
          />
        </div>
      </div>

      <div className="pricing-card__messaging">
        <FeatureList title="MESSAGING" items={plan.messaging} icon={plan.featureIcon} />
      </div>

      <div className="pricing-card__workspace">
        <FeatureList title="AGENT WORKSPACE" items={plan.workspace} icon={plan.featureIcon} />
      </div>

      <div className="pricing-card__pricing">
        {plan.price && (
          <div className="pricing-card__price-wrap">
            <span className="pricing-card__price">{plan.price.amount}</span>
            <p className="pricing-card__price-line">{plan.price.billingLine}</p>
            <p className="pricing-card__price-line pricing-card__price-line--agent">
              plus <strong>{plan.price.agentAmount}</strong>
            </p>
            {plan.price.disclaimer && (
              <p className="pricing-card__price-disclaimer">{plan.price.disclaimer}</p>
            )}
          </div>
        )}

        {plan.cta.variant === "button" ? (
          <a href={plan.cta.href} className="pricing-card__cta pricing-card__cta--button">
            {plan.cta.label}
          </a>
        ) : (
          <a href={plan.cta.href} className="pricing-card__cta pricing-card__cta--link">
            {plan.cta.label}
            <span className="pricing-card__cta-arrow-box" aria-hidden>
              <ArrowRight className="pricing-card__cta-arrow" strokeWidth={2.5} />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
