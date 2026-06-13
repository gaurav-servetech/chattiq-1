import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="container py-[clamp(0.65rem,calc(16*100vw/1920),1.05rem)] min-h-[clamp(3rem,calc(64*100vw/1920),4rem)] w-full bg-[#C9F1FF] flex justify-center items-center" role="region" aria-label="Product announcement">
      <div className="">
        <div className="gap-4 flex items-center justify-center text-wrap text-center">
          <p className=" font-bold">
            Connect with customers beyond chat :
            <span className="font-normal"> Manage WhatsApp Business calls directly from your AI-powered customer</span>
            
          </p>
          <button className="rounded-full bg-[#C9F1FF] text-black border-[2px] px-[1rem] py-[0.5rem] text-[1rem] cursor-pointer">Coming Soon</button>
        </div>
      </div>
    </div>
  );
}
