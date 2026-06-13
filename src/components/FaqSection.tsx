"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqItems = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We analyze your market, competitors, and customer journey to build a tailored WhatsApp AI strategy that aligns with your business goals and maximizes lead conversion.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Our team sets up your chatbot, connects WhatsApp and website channels, and trains the AI on your business knowledge — PDFs, FAQs, product catalogs, and more.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor conversation quality, response accuracy, and lead capture rates, then fine-tune your AI assistant for better performance over time.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "Receive clear reports on leads, conversations, and channel performance. Stay informed with regular updates and actionable insights from our support team.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "As your business evolves, we update your knowledge base, refine automations, and add new capabilities so your WhatsApp AI keeps growing with you.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="page-container">
        <header className="faq-section__header">
          <h2 id="faq-heading" className="faq-section__title">
            Some Common Questions You Might Have
          </h2>
          <p className="faq-section__subtitle">
            Find quick answers to common questions about Chattiq, its setup, features,
            integrations, pricing, and support.
          </p>
        </header>

        <div className="faq-accordion" role="list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.number}
                role="listitem"
                className={`faq-item${isOpen ? " faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="faq-item__label">
                    <span className="faq-item__number">{item.number}</span>
                    <span className="faq-item__title">{item.title}</span>
                  </span>
                  <span className="faq-item__icon" aria-hidden>
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className="faq-item__panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-item__panel-inner">
                    <div className="faq-item__divider" aria-hidden />
                    <p className="faq-item__content">{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta__title">Lets Grow Your Business Together</h3>
          <div className="faq-cta__buttons">
            <a href="#trial" className="faq-cta__btn faq-cta__btn--primary">
              Book a Trial
            </a>
            <a href="#get-started" className="faq-cta__btn faq-cta__btn--secondary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
