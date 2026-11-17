import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Devices } from "@/sections/Devices";
import { Hero } from "@/sections/Hero";
import { Location } from "@/sections/Location";
import { RepairInquiry } from "@/sections/RepairInquiry";
import { RepairProcess } from "@/sections/RepairProcess";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Devices />
      <RepairProcess />
      <WhyChooseUs />
      <RepairInquiry />
      <About />
      <Location />
      <Contact />
    </>
  );
}
