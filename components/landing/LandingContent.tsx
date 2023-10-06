"use client";

import Image from "next/image";

import manportrait from "@/assets/man-portrait.webp";
import womanportrait from "@/assets/woman-portrait.webp";
import Reveal from "../Reveal";
import CustomButton from "../CustomButton";

const testimonials = [
  {
    name: "TestUser",
    picture: manportrait,
    title: "Test Title",
    licensed: "Licensed in: XYZ",
    phone: "(214) 555-1234",
    email: "test@testing.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ante nec orci convallis porta. Fusce magna massa, semper iaculis elit id, congue tincidunt tellus. Proin arcu erat, imperdiet vitae lectus sit amet, faucibus volutpat augue. Donec risus massa, euismod eu auctor sit amet, fermentum ut est. Nullam felis lorem, porta ut venenatis eget, ultricies non nisl. Mauris sapien mi, ultrices sit amet ornare id, varius ac eros. Quisque feugiat massa sit amet ex rhoncus, vestibulum venenatis ex porta. Phasellus turpis lorem, euismod ac augue eu, lacinia placerat nisi. Nunc ipsum nibh, auctor quis efficitur et, ultrices eget ante. Nullam dictum ligula nec tellus aliquet, ut venenatis risus aliquet. Vivamus imperdiet consequat tincidunt. Nulla ut justo ipsum. Aliquam cursus est non posuere pellentesque. Nunc scelerisque elit sit amet augue elementum, id porttitor nisl bibendum. ",
    link: "/",
  },
  {
    name: "TestUser1",
    picture: womanportrait,
    title: "Test Title1",
    licensed: "Licensed in: XYZ1",
    phone: "(214) 555-1235",
    email: "test@testing1.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ante nec orci convallis porta. Fusce magna massa, semper iaculis elit id, congue tincidunt tellus. Proin arcu erat, imperdiet vitae lectus sit amet, faucibus volutpat augue. Donec risus massa, euismod eu auctor sit amet, fermentum ut est. Nullam felis lorem, porta ut venenatis eget, ultricies non nisl. Mauris sapien mi, ultrices sit amet ornare id, varius ac eros. Quisque feugiat massa sit amet ex rhoncus, vestibulum venenatis ex porta. Phasellus turpis lorem, euismod ac augue eu, lacinia placerat nisi. Nunc ipsum nibh, auctor quis efficitur et, ultrices eget ante. Nullam dictum ligula nec tellus aliquet, ut venenatis risus aliquet. Vivamus imperdiet consequat tincidunt. Nulla ut justo ipsum. Aliquam cursus est non posuere pellentesque. Nunc scelerisque elit sit amet augue elementum, id porttitor nisl bibendum. ",
    link: "/",
  },
];

const LandingContent = () => {
  return (
    <section className="py-8 container" id="members">
      <Reveal>
        <div className="flex flex-col justify-start gap-5 mb-12">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-indigo-500"> Members</span>
          </h2>
        </div>
      </Reveal>
      <div className="flex flex-col space-y-8">
        {testimonials.map((item, index) => (
          <Reveal key={item.name}>
            <div
              className={`flex gap-10 border-none text-gray-700 ${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="flex-[2_2_0%] p-6">
                <div className="flex items-center gap-x-2">
                  <div>
                    <h3 className="text-3xl font-bold text-indigo-500">
                      {item.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </div>
                <div className="font-semibold">{item.licensed}</div>
                <div className="text-xl">
                  <a
                    href={`tel:${item.phone}`}
                    className="underline font-semibold hover:text-indigo-500"
                  >
                    {item.phone}
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href={`mailto:${item.email}`}
                    className="underline font-semibold hover:text-indigo-500"
                  >
                    {item.email}
                  </a>
                </div>
                <div className="mt-4 text-lg font-montserrat whitespace-pre-line">
                  {item.bio}
                </div>

                <CustomButton buttonClass="mt-8">
                  <a href={item.link}>Work With {item.name.split(" ")[0]}</a>
                </CustomButton>
              </div>

              <div className="flex-1 pt-12 h-auto rounded-xl">
                <Image
                  src={item.picture}
                  alt={item.name}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default LandingContent;
