"use client";

import { scrollTo } from "@/lib/utils";
import Reveal from "../Reveal";
import CustomButton from "../CustomButton";
import TodoApp from "./TodoApp";
import HeroContent from "./HeroContent";

const LandingHero = () => {
  return (
    <section className="flex relative min-h-screen mb-16 text-gray-900 bg-white">
      <div className="pl-16 pt-28 inset-0 z-20 flex justify-between items-start">
        <div className="">
          <Reveal>
            <p className="text-lg font-semibold md:text-xl text-indigo-500 font-montserrat">
              Talk with our team
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-7xl leading-32 font-extrabold font-palanquin">
              <span className="">Personalized</span>
              <br />
              <span className="text-indigo-500 z-10 relative">SaaS</span> For
              <br />
              Anyone.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              More than just SaaS, we&apos;re your personal finance guides.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <CustomButton
              onClick={() =>
                scrollTo({ id: "landing-content", duration: 1000 })
              }
            >
              Work With Us
            </CustomButton>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
              <div>
                <p className="text-4xl font-palanquin font-bold">273</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  Users
                </p>
              </div>
              <div>
                <p className="text-4xl font-palanquin font-bold">14+ years</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-palanquin font-bold">151</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  Clients
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              Licensed in X, Y and Z
            </p>
          </Reveal>
        </div>
      </div>
      <div className="w-full mt-24 mb-8 mx-8 bg-gray-200 border-2 border-black rounded-xl shadow-lg">
        <HeroContent />
      </div>
    </section>
  );
};

export default LandingHero;
