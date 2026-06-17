import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import chattiqLogo from "../../public/LandingPageIcon/chattiq-logo.svg";
import footerIcon from "../../public/LandingPageIcon/footer/f.svg";
import facebookIcon from "../../public/LandingPageIcon/footer/f.svg";
import twitterIcon from "../../public/LandingPageIcon/footer/twitter.svg";
import instagramIcon from "../../public/LandingPageIcon/footer/instagram.svg";

const productLinks = ["Pricing", "Solutions", "AI Agents", "No Code Bots"];
const aboutLinks = ["About", "Why", "Platform", "Partnerships", "Affiliates"];
const helpLinks = [
  "Help center",
  "Contact us",
  "Privacy & Terms",
  "Safety information",
  "Sitemap",
];

const FacebookIcon = () => (
  <Image src={facebookIcon} alt="Facebook" className="w-6 h-6" />
);

const TwitterIcon = () => (
  <Image src={twitterIcon} alt="Twitter" className="w-6 h-6" />
);

const InstagramIcon = () => (
  <Image src={instagramIcon} alt="Instagram" className="w-6 h-6" />
);

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center mt-14 w-[40%] h-full gap-2">
      <h2 className="mb-4 text-[1.25rem] xl:text-[1.35rem] 2xl:text-[1.4rem] font-medium text-black opacity-70">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    
      <footer className="flex flex-col items-center  justify-between h-full w-full" aria-labelledby="footer-heading">
        <div className="bg-black h-[0.5px] w-[92%] " aria-hidden />

        <div className="h-full w-full flex flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-10 2xl:gap-2 px-10 py-10">
          <div className="h-full w-full flex flex-col gap-6 justify-start items-start ">
            <a href="/" aria-label="Chattiq home " className="w-full h-auto">
              <Image src={chattiqLogo} alt="Chattiq" className="w-[80%] h-auto" />
            </a>
            <p className="w-[80%] text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.3rem] font-normal ml-12 opacity-60">
              We manage your chatbot setup, WhatsApp integration, website connection, lead
              automation, and regular support so you can focus on growing your business.
            </p>
          </div>

          <FooterColumn title="Product">
            <ul className="site-footer__col-list">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="About us">
            <ul className="site-footer__col-list">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Help and support">
            <ul className="site-footer__col-list">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <ul className=" gap-2 flex flex-col justify-start items-start w-full h-full">
              <li>
                <a href="tel:+919243322064" className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60">
                  +91 92433 22064
                </a>
              </li>
              <li>
                <a href="mailto:info@elevatetrust.ai" className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60">
                  info@elevatetrust.ai
                </a>
              </li>
              <li className="text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-60 ">
                Chovisawadi, Charholi Budruk, Pune, Pimpri-Chinchwad, Maharashtra 412105
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="bg-black h-[0.5px] w-[92%] " aria-hidden />

        <div className="flex flex-row justify-between items-center  h-full text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 2xl:gap-2 opacity-90   gap-4 lg:gap-12 xl:gap-10 2xl:gap-10 w-[85%] py-10">
          <div className="flex flex-row justify-start items-center gap-4 lg:gap-12 xl:gap-10 2xl:gap-12 w-full h-full">
            <span className="">©2026 Chattiq. All rights reserved</span>
            <nav className="site-footer__legal-nav" aria-label="Legal links">
              <a href="#" className="">
                Help
              </a>
              <a href="#" className="">
                Privacy
              </a>
              <a href="#" className="">
                Terms
              </a>
            </nav>
          </div>

          <div className="flex flex-row justify-end items-center gap-4 lg:gap-12 xl:gap-10 2xl:gap-12 w-full h-full">
            <div className="site-footer__socials">
              <a href="#" className="site-footer__social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="site-footer__social-icon" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="site-footer__social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
            <button type="button" className="site-footer__lang" aria-label="Select language">
              <span className="text-[1.1rem] font-normal">English (united States)</span>
              <ChevronDown size={16} strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </footer>
    
  );
}
