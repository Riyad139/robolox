import Heading from "@/components/HeadingSection/Heading";
import NavBar from "@/components/NavBar/NavBar";
import ContentSection from "./ContentSection";

export default function HeaderSection() {
  return (
    <div className="relative h-[100vh] w-full">
      <ContentSection />
      <video
        className="object-cover  h-[100%]  w-[100%] "
        src="/headerVideo.mp4"
        muted
        autoPlay
        loop
      />
    </div>
  );
}
