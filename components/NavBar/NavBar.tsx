"use client";
import { Button } from "evergreen-ui";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function NavBar() {
  const NavLink = [
    {
      label: "Play Now",
      destination: "/comming-soon",
    },
    {
      label: "Marketplace",
      destination: "/comming-soon",
    },
    {
      label: "Farm",
      destination: "/comming-soon",
    },
    {
      label: "Learn More",
      destination: "/comming-soon",
    },
  ];

  return (
    <div className="flex  mt-10 px-9 sm:px-16  mdx:px-16 xl:px-32 w-full z-10 justify-between md:justify-around">
      <Image
        height={100}
        className=" w-16 h-16 sm:w-[100px] sm:h-[100px]"
        width={100}
        src={"/logo.png"}
        alt="logo"
      />
      <div className="hidden mdx:flex xl:ml-24 text-white space-x-5">
        {NavLink.map((item) => (
          <div
            key={item.label}
            className="cursor-pointer flex items-center font-semibold"
          >
            {item.label}{" "}
            {item.label === "Play Now" ? (
              <span className="px-[0.2rem] ml-2 flex items-center  py-[0.3rem] text-black rounded-sm text-[10px] font-normal bg-sky-500">
                <div className="h-2 w-2 bg-inherit -ml-1.5 mr-1 rotate-45">
                  {" "}
                </div>
                NEW
              </span>
            ) : (
              ""
            )}
            {item.label === "Marketplace" ? (
              <span>
                {" "}
                <Image
                  src={"/fire.png"}
                  width={36}
                  height={20}
                  alt="fire icon"
                />
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <div className="socialmedia hidden mdx:flex mr-5 space-x-5 items-center text-white ">
          <Image
            src={"/Icons/next.svg"}
            width={22}
            height={16}
            alt="meta verse"
          />

          <Image
            src={"/Icons/Telegram.svg"}
            width={22}
            height={16}
            alt="Telegram"
          />
          <Image
            src={"/Icons/twitter.svg"}
            width={22}
            height={16}
            alt="meta verse"
          />
          <Image
            src={"/Icons/discord.svg"}
            width={22}
            height={16}
            alt="meta verse"
          />
        </div>
        <Button
          size="large"
          marginRight={16}
          appearance="primary"
          intent="none"
        >
          Login
        </Button>
        <p className="text-white">English</p>
        <div className=" visible mdx:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
