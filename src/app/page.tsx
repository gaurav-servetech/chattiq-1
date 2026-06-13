import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import AgentSetup from "@/components/agentSetup";
import ChannelArea from "@/components/ChannelArea";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <ChannelArea />
      <Pricing />
      <AgentSetup />
      <Testimonials />
      <FaqSection />
    </>
  );
}
