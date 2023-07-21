"use client";
import { Button } from "evergreen-ui";
import Image from "next/image";

export default function Heading() {
  return (
    <div className="text-white mt-8 flex  flex-col items-center h-full w-full">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold ">STARMON NFT</h2>
        <h1 className="text-3xl sm:text-5xl font-bold">STARMON METAVERSE</h1>
        <div className="flex text-base sm:text-xl space-x-5">
          <h3 className="flex  items-center font-semibold">
            <Image
              className="mr-2"
              src={"/Icons/sword.png"}
              width={16}
              height={16}
              alt="sword"
            />
            Battle
          </h3>
          <h3 className="flex items-center font-semibold">
            <Image
              className="mr-2"
              src={"/Icons/round.png"}
              width={16}
              height={16}
              alt="round"
            />
            Collect
          </h3>
          <h3 className="flex items-center font-semibold">
            <Image
              className="mr-2"
              src={"/Icons/drop.png"}
              width={12}
              height={16}
              alt="drop"
            />
            Earn
          </h3>
        </div>
      </div>
      <div className="flex flex-col mt-auto space-y-5 items-center mb-[280px] ">
        <div className="flex flex-col space-y-5 items-center sm:space-y-0 sm:flex-row sm:space-x-4">
          <Button
            className="!text-xl !px-9 !py-6"
            size="large"
            appearance="primary"
            intent="danger"
          >
            PLAY TO EARN
          </Button>
          <Button
            size="large"
            className="!text-xl !px-9 !py-6"
            appearance="primary"
            intent="success"
          >
            BUY $SMON
          </Button>
        </div>
        <div className="socialmedia mdx:hidden  flex mr-5 space-x-5 items-center text-white ">
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
      </div>
    </div>
  );
}
