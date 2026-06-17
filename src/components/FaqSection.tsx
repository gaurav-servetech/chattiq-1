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
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="flex flex-col items-center">
        <header className="flex flex-col items-center gap-12 mb-24 ">
          <h2 id="faq-heading" className="w-full text-center text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-extrabold">
            Some Common Questions You Might Have
          </h2>
          <p className="w-[60%] text-[1.45rem] xl:text-[1.65rem] 2xl:text-[1.95rem] font-normal text-center">
            Find quick answers to common questions about Chattiq, its setup, features, integrations, pricing, and support.
          </p>
        </header>

        <div className="w-[70%] flex flex-col gap-8 justify-content " role="list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.number}
                role="listitem"
                className={`faq-item${isOpen ? " faq-item--open" : ""} `}
              >
                <div className="faq-item__trigger">
                  <span className="faq-item__label">
                    <span className="text-[2.25rem] font-medium">{item.number}</span>
                    <span className="text-[2.25rem] font:__nextjs-Geist">{item.title}</span>
                  </span>
                  <button
                    type="button"
                    className="faq-item__icon"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} aria-hidden />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} aria-hidden />
                    )}
                  </button>
                </div>

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

        <div className="flex flex-col items-center gap-12 mt-24">
          <h3 className="text-[4.45rem] font-bold text-center">
            Lets Grow Your Business Together
          </h3>
          <div className="gap-12 flex flex-row">
            <a href="#trial" className="text-[1.35rem] font-medium bg-[#A2EFA3] border-[1.5px] px-4 py-3 rounded-[6px] text-center">
              Book a Trial
            </a>
            <a href="#get-started" className="text-[1.35rem] font-medium bg-white border-[1.5px] px-4 py-3 rounded-[6px] text-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
