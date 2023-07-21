import Heading from "../HeadingSection/Heading";
import NavBar from "../NavBar/NavBar";

export default function ContentSection() {
  return (
    <div className="w-full h-full z-10 absolute">
      <NavBar />
      <Heading />
    </div>
  );
}
