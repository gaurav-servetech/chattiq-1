"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Plus } from "lucide-react";
import basicIllustration from "../../public/LandingPageIcon/testimonials/price/Clip path group.svg";
import advanceIllustration from "../../public/LandingPageIcon/testimonials/price/Icon (7).svg";
import superIllustration from "../../public/LandingPageIcon/testimonials/price/Icon (8).svg";


import customServicesIllustration from "../../public/LandingPageIcon/testimonials/price/Image [image-contain].svg";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
// type PlanTheme = "basic" | "advance" | "super";

// type PricingPlan = {
//   id: PlanTheme;
//   name: string;
//   illustration: typeof basicIllustration;
//   price?: string;
//   priceNote?: string;
//   cta: { label: string; href: string; variant: "button" | "link" };
//   badge?: string;
//   featureIcon: "check" | "plus";
//   messaging: string[];
//   workspace: string[];
// };

// const plans: PricingPlan[] = [
//   {
//     id: "basic",
//     name: "BASIC PLAN",
//     illustration: basicIllustration,
//     price: "$50",
//     priceNote: "per month billed annually plus $25 per agent/month*",
//     cta: { label: "Book a demo", href: "#demo", variant: "button" },
//     featureIcon: "check",
//     messaging: ["Chat Widget", "SLA+Alerts", "Workflows", "Prioritizations & Queues"],
//     workspace: ["Reporting"],
//   },
//   {
//     id: "advance",
//     name: "ADVANCE PLAN",
//     illustration: advanceIllustration,
//     price: "$200",
//     priceNote: "per month billed annually plus $45 per agent/month*",
//     badge: "Best Choice",
//     cta: { label: "Book a demo", href: "#demo", variant: "button" },
//     featureIcon: "check",
//     messaging: [
//       "Chat Widget",
//       "Call Deflection (SMS)",
//       "SLA+Alerts",
//       "Prioritizations & Queues",
//       "Channels (SMS, Email)",
//       "Workflows",
//     ],
//     workspace: ["Reporting", "Import/Export Customer Data"],
//   },
//   {
//     id: "super",
//     name: "SUPER PLAN",
//     illustration: superIllustration,
//     cta: { label: "Ask a Question", href: "#contact", variant: "link" },
//     featureIcon: "plus",
//     messaging: [
//       "More Channels",
//       "Bot",
//       "Call Deflection (+ channels)",
//       "Cross channel conversations",
//     ],
//     workspace: ["Live reporting", "Task Management"],
//   },
// ];

// function FeatureGroup({
//   title,
//   items,
//   icon,
// }: {
//   title: string;
//   items: string[];
//   icon: "check" | "plus";
// }) {
//   const Icon = icon === "plus" ? Plus : Check;

//   return (
//     <div className="pricing-plan__feature-group">
//       <h4 className="pricing-plan__feature-heading">{title}</h4>
//       <ul className="pricing-plan__feature-list">
//         {items.map((item) => (
//           <li key={item} className="pricing-plan__feature-item">
//             <Icon className="pricing-plan__feature-icon" strokeWidth={2.5} aria-hidden />
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function PricingPlanCard({ plan }: { plan: PricingPlan }) {
//   return (
//     <article className={`pricing-plan pricing-plan--${plan.id}`}>
//       {plan.badge && <span className="pricing-plan__badge">{plan.badge}</span>}

//       <header className="pricing-plan__header">
//         <h3 className="pricing-plan__name">{plan.name}</h3>
//       </header>

//       <div className="pricing-plan__body">
//         <div className="pricing-plan__illustration">
//           <Image
//             src={plan.illustration}
//             alt=""
//             className="pricing-plan__illustration-img"
//             aria-hidden
//           />
//         </div>

//         <div className="pricing-plan__features">
//           <FeatureGroup title="MESSAGING" items={plan.messaging} icon={plan.featureIcon} />
//           <FeatureGroup title="AGENT WORKSPACE" items={plan.workspace} icon={plan.featureIcon} />
//         </div>
//       </div>

//       <footer className="pricing-plan__footer">
//         {plan.price && (
//           <div className="pricing-plan__price-wrap">
//             <span className="pricing-plan__price">{plan.price}</span>
//             {plan.priceNote && (
//               <span className="pricing-plan__price-note">{plan.priceNote}</span>
//             )}
//           </div>
//         )}

//         {plan.cta.variant === "button" ? (
//           <a href={plan.cta.href} className="pricing-plan__cta pricing-plan__cta--button">
//             {plan.cta.label}
//           </a>
//         ) : (
//           <a href={plan.cta.href} className="pricing-plan__cta pricing-plan__cta--link">
//             {plan.cta.label}
//             <span className="pricing-plan__cta-arrow-box" aria-hidden>
//               <ArrowRight className="pricing-plan__cta-arrow" strokeWidth={2.5} />
//             </span>
//           </a>
//         )}
//       </footer>
//     </article>
//   );
// }

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="pricing-plans-wrap">
        <header className="w-full h-full flex flex-col gap-6 items-center justify-center">
          <h2 id="pricing-heading" className="w-full h-full text-center text-[3.7rem] font-bold">
            Powerful Features. Pricing That Makes Sense.
          </h2>
          <p className="w-[50%] text-center mx-auto text-[1.1rem]">
            Get all the tools you need to automate conversations, manage customers, and grow
            your business with affordable pricing and zero setup fees.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-8 m-12">
          <Card className="h-full w-full gap-0 p-0 [--card-spacing:0] rounded-[4px]">
            <CardHeader className="p-0 h-[60%] flex flex-col justify-center items-center">
              <CardTitle className="w-full h-[4vw] py-4 flex text-center justify-center items-center  text-[1.1rem] font-bold bg-[#A1EEFF] border-b-1 uppercase">
                Basic Plan
              </CardTitle>
              <Image
                src="/LandingPageIcon/testimonials/price/icon1.svg"
                alt="Basic Plan"
                width={200}
                height={200}
                className="mx-auto h-[85%] w-[85%]"
              />
            </CardHeader>
            <CardContent className="p-0 w-[100%] h-[25vw] flex flex-col justify-center items-center mx-auto mb-25">

              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0">

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Messaging</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C7FF6B] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Chat Widget</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C7FF6B] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">SLA+Alerts</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C7FF6B] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Workflows</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C7FF6B] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Prioritizations & Queues</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0 mt-30">

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Agent Workspace</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C7FF6B] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Reporting</span></p>
                    </li>

                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-[100%] h-[20vw] flex flex-col justify-start items-center border-none bg-[#A1EEFF] py-4 px-8 gap-4 mx-auto">
              <div className="flex flex-col w-full h-full gap-2 items-start justify-start">
                <h1><span className="font-medium text-[4.1rem]">$50</span></h1>
                <p className="text-[1.3rem]">per month billed annually</p>
                <p className="text-[1.3rem]">plus <span className="font-bold text-[1.3rem] ">$25 per agent/month*</span></p>
                <p>*excludes usage charges for</p>
              </div>
              <button className=" text-white text-[1.5rem]  w-[100%] h-[8vh] flex justify-center items-center mx-auto bg-[#1C4A3F] px-4 py-4  border-black border-2 mt-10 mb-4">Book a demo</button>
            </CardFooter>
          </Card>
          <Card className="relative h-full w-full gap-0 overflow-visible p-0 [--card-spacing:0] rounded-[4px]">
            <span className="absolute top-0 right-[4.45rem] z-12 flex h-[4.2rem] w-[9rem] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-black bg-[#F9E16D] text-center text-[1.1rem] font-medium text-black">Best Choice</span>
            <CardHeader className="p-0 h-[60%] flex flex-col justify-center items-center">
              <CardTitle className="w-full h-[4vw] py-4 flex text-center justify-center items-center  text-[1.1rem] font-bold bg-[#A2EFA3] border-b-1 uppercase">
                Advance Plan
              </CardTitle>
              <Image
                src="/LandingPageIcon/testimonials/price/icon2.svg"
                alt="Basic Plan"
                width={200}
                height={200}
                className="mx-auto h-[85%] w-[85%]"
              />
            </CardHeader>
            <CardContent className="p-0 w-[100%] h-[25vw] flex flex-col justify-center items-center mx-auto mb-20">

              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0">

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Messaging</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Chat Widget</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Call Deflection (SMS)</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">SLA+Alerts</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Prioritizations & Queues</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Channels (SMS, Email)</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Workflows</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0 mt-8">

                <div className="flex flex-col gap-2 items-start justify-start mb-[-1rem] ">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Agent Workspace</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Reporting</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#A2EFA3] rounded-full"><Check className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Import/Export Customer Data</span></p>
                    </li>

                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-[100%] h-[20vw] flex flex-col justify-start items-center border-none bg-[#A2EFA3] py-4 px-8 gap-4 mx-auto">
              <div className="flex flex-col w-full h-full gap-2 items-start justify-start">
                <h1><span className="font-medium text-[4.1rem]">$50</span></h1>
                <p className="text-[1.3rem]">per month billed annually</p>
                <p className="text-[1.3rem]">plus <span className="font-bold text-[1.3rem] ">$25 per agent/month*</span></p>
                <p>*excludes usage charges for</p>
              </div>
              <button className=" text-white text-[1.5rem]  w-[100%] h-[8vh] flex justify-center items-center mx-auto bg-[#1C4A3F] px-4 py-4  border-black border-2 mt-10 mb-4">Book a demo</button>
            </CardFooter>
          </Card>
          <Card className="h-full w-full gap-0 p-0 [--card-spacing:0] rounded-[4px]">
            <CardHeader className="p-0 h-[38%] flex flex-col justify-center items-center">
              <CardTitle className="w-full h-[4vw] py-4 flex text-center justify-center items-center  text-[1.1rem] font-bold bg-[#EAF1F0] border-b-1 uppercase">
                Advance Plan
              </CardTitle>
              <Image
                src="/LandingPageIcon/testimonials/price/icon3.svg"
                alt="Basic Plan"
                width={200}
                height={200}
                className="mx-auto h-[85%] w-[85%]"
              />
            </CardHeader>
            <CardContent className="p-0 w-[100%] h-[20vw] flex flex-col justify-center items-center mx-auto ">

              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0">

                <div className="flex flex-col gap-2 items-start justify-start">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Messaging</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">More Channels</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Bot</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Call Deflection (+ channels)</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Cross channel conversations</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start border-t-2 border-black w-[90%] py-0 mt-30">

                <div className="flex flex-col gap-2 items-start justify-start mb-[-3rem] ">
                  <h1 className="text-[1.1rem] font-bold bg-black text-white px-4 py-2 uppercase">Agent Workspace</h1>
                  <ul className="gap-4 flex flex-col items-start justify-start mt-4">
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Live reporting</span></p>
                    </li>
                    <li className="flex flex-row gap-4 items-center justify-start ">
                      <span className="flex justify-center items-center w-6 h-6 bg-[#C4FAD3] rounded-full"><Plus className="w-4 h-4 stroke-3 text-black" /></span>
                      <p><span className="font-medium text-[1.1rem]">Task Management</span></p>
                    </li>

                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-[100%] h-[10vw] flex flex-col justify-start items-start border-none bg-[#EAF1F0] mt-[20rem] py-4 px-8 gap-4 mx-auto">
            <a
  href="#contact"
  className="flex  items-center justify-center mr-[10rem]   h-[3.5rem]  mt-[4rem] gap-2 border-b-2 border-black pb-1 "
>
  <span className="text-[1.5rem]">Ask a Question</span>
  <span className=" w-7 h-7 bg-[#8AF135]  flex items-center justify-center "><ArrowRight className="w-6 h-6 stroke-2 text-black" /></span>
</a>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="">
        <div className="flex flex-row items-center justify-center border-2 border-black border-dashed bg-[#A2EFA3]  mx-auto px-30 py-2">
          <div className=" w-full h-full flex flex-col gap-4 items-start justify-start">
            <h3 className=" text-[3.9rem] font-bold">Need Customized Services</h3>
            <p className="w-[75%] text-[1.5rem] font-medium">
            Acquire offers tailored professional services to create a customer service solution specifically designed for your business needs.   
            </p>
            <a href="#contact" className="border-b-2 flex items-center justify-center gap-2 pb-4 text-[1.5rem] mt-10">
              Speak to us
              <span className=" w-7 h-7 bg-[#8AF135]  flex items-center justify-center " aria-hidden>
                <ArrowRight className="pricing-custom__link-arrow" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <div className="h-full w-full flex items-end justify-end">
            <Image
              src={customServicesIllustration}
              alt=""
              className="w-[30vw] h-[22vw] "
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
