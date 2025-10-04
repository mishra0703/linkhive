"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CircleArrowDown01Icon,
  CircleArrowUp01Icon,
  AppStoreIcon,
  PlayStoreIcon,
  TwitterIcon,
  InstagramIcon,
  Linkedin01Icon,
  GithubIcon,
} from "@hugeicons/core-free-icons";

const questions = [
  {
    q: "Why do I need a link in bio tool?",
    a: `Right now, every time you've got something new to share, you have
        to go to every single one of your channels to change the link in
        each of your bios. It's time-consuming and complicated which makes
        it so much harder to keep everything up to date.
        A link in bio tool means you never have to compromise, or remove
        one link from your bio so you can add another. You can keep
        everything you want to share online in one link. When you've got a
        change, you only ever have to make it once.`,
  },
  {
    q: "Can you get paid and sell things from a LinkHive?",
    a: `Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect revenue from affiliate links, and sell your products right in your LinkHive. Monetisation features are only available for selected countries, see this Help Article for more.`,
  },
  {
    q: "Is LinkHive safe to use on all of my social media profiles?",
    a: `LinkHive is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because LinkHive is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.`,
  },
  {
    q: "Do I need a website to use LinkHive?",
    a: `No, you don't! LinkHive can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that's great: you can add it to your LinkHive.`,
  },
  {
    q: "How many links should I have on my LinkHive?",
    a: `This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your LinkHive at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.`,
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [handleTop, setHandleTop] = useState("linkhive/");
  const [handleBottom, setHandleBottom] = useState("linkhive/");
  const router = useRouter();

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const createHive = () => {
    if (handleTop === "linkhive/" && handleBottom === "linkhive/") {
      router.push("/generate");
      return;
    }
    router.push(
      `/generate?handle=${
        handleTop.split("/")[1] || handleBottom.split("/")[1]
      }`
    );
  };

  return (
    <div className="w-full flex flex-col">
      <section className="w-full h-screen bg-[#e9c0e9] flex items-center justify-center pt-25">
        <div className="w-1/2 flex flex-col items-start pr-5 pl-25">
          <div className="slogan my-5 text-[#316a22] text-7xl font-black">
            <span className="w-full">Everything you are.</span>
            <span className="w-full"> In one , simple link in bio.</span>
          </div>
          <div className="para my-5 font-poppins text-lg font-medium">
            One link to help you share everything you create, curate and sell
            from your Instagram, Whatsapp, Twitter, YouTube and other social
            media profiles.
          </div>
          <div className="w-full my-5 flex gap-8 items-center">
            <input
              onChange={(e) => setHandleTop(e.target.value)}
              name="handleTop"
              value={handleTop}
              type="text"
              spellCheck="false"
              className="bg-white outline-none px-4 py-3 rounded-2xl w-2/5 h-16 text-xl font-poppins"
              placeholder="linkhive/"
            />
            <button
              onClick={createHive}
              className="font-poppins text-white font-bold px-8 py-5 bg-[#316a] rounded-full cursor-pointer"
            >
              Claim your hive
            </button>
          </div>
        </div>
        <div className="home-video w-1/2 flex justify-center items-center">
          <video
            src="/demo-video.webm"
            className="w-4/5"
            alt="sample video of linkhive"
            autoPlay
            loop
            playsInline
            muted
          />
        </div>
      </section>
      <section className="w-full h-screen bg-[#afff73] flex flex-row-reverse  items-center">
        <div className="w-1/2 flex flex-col items-start px-15 mt-20">
          <div className="slogan my-5 text-[#a124ff] text-6xl font-black">
            Create and customize your LinkHive in minutes
          </div>
          <div className="para my-5 font-poppins text-lg font-medium">
            Connect your Whatsapp, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </div>
          <div className="w-full my-5 flex gap-8 items-center">
            <button
              onClick={createHive}
              className="font-poppins text-white font-bold px-8 py-5 bg-[#316a] rounded-full cursor-pointer"
            >
              Get started for free
            </button>
          </div>
        </div>
        <div className="home-photo w-1/2 flex justify-center items-center">
          <img
            src="/sample.png"
            className="w-full h-auto"
            alt="sanple picture of linkhive"
          />
        </div>
      </section>
      <section className="w-full h-screen bg-[#780016] flex items-center">
        <div className="w-1/2 flex flex-col items-start px-15 mt-20">
          <div className="slogan my-5 text-[#e9c0e9] text-6xl font-black">
            Share your LinkHive anywhere you like!
          </div>
          <div className="para my-5 font-poppins text-lg font-medium text-white">
            Add your unique LinkHive URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </div>
          <div className="w-full my-5 flex gap-8 items-center">
            <button
              onClick={createHive}
              className="font-poppins text-white font-bold px-8 py-5 bg-[#007862] rounded-full cursor-pointer"
            >
              Get started for free
            </button>
          </div>
        </div>
        <div className="home-photo w-1/2 flex justify-center items-center">
          <img
            src="/sample 3.png"
            className="w-3/5 h-auto"
            alt="sanple picture of linkhive"
          />
        </div>
      </section>
      <section className="w-full h-screen bg-[#e8efd6] flex flex-row-reverse items-center">
        <div className="w-1/2 flex flex-col items-start px-15 mt-20">
          <div className="slogan my-5 text-[#1e2330] text-6xl font-black">
            Analyze your audience and keep your followers engaged
          </div>
          <div className="para my-5 font-poppins text-lg font-medium">
            Track your engagement over time, monitor revenue and learn
            what&apos;s converting your audience. Make informed updates on the
            fly to keep them coming back.
          </div>
          <div className="w-full my-5 flex gap-8 items-center">
            <button
              onClick={createHive}
              className="font-poppins text-white font-bold px-8 py-5 bg-[#70774e] rounded-full cursor-pointer"
            >
              Get started for free
            </button>
          </div>
        </div>
        <div className="home-photo w-1/2 flex justify-center items-center">
          <img
            src="/sample2.png"
            className="w-3/4 h-auto"
            alt="sanple picture of linkhive"
          />
        </div>
      </section>
      <section className="w-full min-h-screen bg-[#a14663] flex flex-col items-center justify-center py-20">
        <div className="title text-[#780016] text-6xl font-black my-10">
          Questions? Answered
        </div>
        {questions.map((item, index) => (
          <div
            key={index}
            className="que-box bg-[#51000f] rounded-4xl w-3/4 mt-5 p-10 flex flex-col"
          >
            <div
              className="que text-[#e9c0e9] text-3xl font-bold font-poppins flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <span>{item.q}</span>
              <HugeiconsIcon
                icon={
                  activeIndex === index
                    ? CircleArrowUp01Icon
                    : CircleArrowDown01Icon
                }
                strokeWidth={2}
                size={28}
              />
            </div>
            <div
              className={`ans text-[#e9c0e9] text-xl font-medium font-poppins transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "opacity-100 max-h-[500px]"
                  : "opacity-0 max-h-0"
              }`}
            >
              <span className="flex mt-5">{item.a}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="w-full min-h-screen bg-[#502274] flex flex-col justify-center items-center gap-5 relative z-2 py-20 pb-50">
        <div className="slogan mt-25 text-[#02acc4] text-6xl font-black text-center relative z-10 px-60">
          Jumpstart your corner of the internet today
        </div>
        <div className="w-full my-5 flex gap-8 items-center justify-center relative z-10">
          <input
            onChange={(e) => setHandleBottom(e.target.value)}
            name="handleBottom"
            value={handleBottom}
            type="text"
            spellCheck="false"
            className="bg-white outline-none px-4 py-3 rounded-2xl w-3/10 h-16 text-xl font-poppins"
            placeholder="linkhive/"
          />
          <button
            onClick={createHive}
            className="font-poppins font-bold px-8 py-5 bg-[#d2e823] rounded-full cursor-pointer"
          >
            Claim your linkhive
          </button>
        </div>
        <img
          src="/person-svg.svg"
          alt="Decorative person illustration"
          className="absolute top-10 left-0 w-1/4 transform rotate-[16deg] z-1"
        />
        <div className="footer-box w-[90%] bg-white rounded-3xl p-10 relative z-5 mt-30 mb-10 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">Company</h2>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-purple-600">
                  The Linktree Blog
                </a>
                <a href="#" className="hover:text-purple-600">
                  Engineering Blog
                </a>
                <a href="#" className="hover:text-purple-600">
                  Marketplace
                </a>
                <a href="#" className="hover:text-purple-600">
                  What&apos;s New
                </a>
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
                <a href="#" className="hover:text-purple-600">
                  Press
                </a>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">
                Community
              </h2>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-purple-600">
                  Linktree for Enterprise
                </a>
                <a href="#" className="hover:text-purple-600">
                  2023 Creator Report
                </a>
                <a href="#" className="hover:text-purple-600">
                  2022 Creator Report
                </a>
                <a href="#" className="hover:text-purple-600">
                  Charities
                </a>
                <a href="#" className="hover:text-purple-600">
                  What’s Trending
                </a>
                <a href="#" className="hover:text-purple-600">
                  Explore Templates
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">Support</h2>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-purple-600">
                  Help Topics
                </a>
                <a href="#" className="hover:text-purple-600">
                  Getting Started
                </a>
                <a href="#" className="hover:text-purple-600">
                  Linktree Pro
                </a>
                <a href="#" className="hover:text-purple-600">
                  Features & How-Tos
                </a>
                <a href="#" className="hover:text-purple-600">
                  FAQs
                </a>
                <a href="#" className="hover:text-purple-600">
                  Report a Violation
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 text-gray-900">
                Trust & Legal
              </h2>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-purple-600">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:text-purple-600">
                  Privacy Notice
                </a>
                <a href="#" className="hover:text-purple-600">
                  Cookie Notice
                </a>
                <a href="#" className="hover:text-purple-600">
                  Trust Center
                </a>
                <a href="#" className="hover:text-purple-600">
                  Cookie Preferences
                </a>
                <a href="#" className="hover:text-purple-600">
                  Transparency Report
                </a>
                <a href="#" className="hover:text-purple-600">
                  Law Enforcement Policy
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button className="px-6 py-3 bg-gray-100 rounded-xl font-poppins">
              Log in
            </button>
            <button
              onClick={createHive}
              className="px-6 py-3 bg-[#d2e823] rounded-full font-medium font-poppins"
            >
              Get started for free
            </button>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-8 gap-6">
            <div className="flex gap-4 items-center">
              <HugeiconsIcon icon={AppStoreIcon} size={50} strokeWidth={1.5} />
              <span className="text-xl font-medium font-poppins mr-15">
                Get it on Appstore
              </span>
              <HugeiconsIcon icon={PlayStoreIcon} size={50} strokeWidth={1.5} />
              <span className="text-xl font-medium font-poppins">
                Get it on Playstore
              </span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-black text-white rounded-full">
                <HugeiconsIcon icon={GithubIcon} />
              </a>
              <a href="#" className="p-3 bg-black text-white rounded-full">
                <HugeiconsIcon icon={Linkedin01Icon} />
              </a>
              <a href="#" className="p-3 bg-black text-white rounded-full">
                <HugeiconsIcon icon={InstagramIcon} />
              </a>
              <a href="#" className="p-3 bg-black text-white rounded-full">
                <HugeiconsIcon icon={TwitterIcon} />
              </a>
            </div>
          </div>
        </div>
        <img
          src="/flower-svg.svg"
          alt="Decorative flower illustration"
          className="absolute bottom-15 right-15 w-1/5 transform rotate-[20deg] z-1"
        />
      </section>
    </div>
  );
};

export default Page;
