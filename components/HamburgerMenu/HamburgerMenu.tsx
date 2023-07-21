import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
export default function HamburgerMenu() {
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
    <Menu right>
      {NavLink.map((item) => (
        <div
          key={item.label}
          className="cursor-pointer my-4 !flex text-black items-center font-semibold"
        >
          <p>{item.label}</p>
          {item.label === "Play Now" ? (
            <span className="px-[0.2rem] ml-2 flex items-center  py-[0.3rem] text-black rounded-sm text-[10px] font-normal bg-sky-500">
              <div className="h-2 w-2 bg-inherit -ml-1.5 mr-1 rotate-45"> </div>
              NEW
            </span>
          ) : (
            ""
          )}
          {item.label === "Marketplace" ? (
            <span>
              {" "}
              <Image src={"/fire.png"} width={36} height={20} alt="fire icon" />
            </span>
          ) : (
            ""
          )}
        </div>
      ))}
    </Menu>
  );
}
