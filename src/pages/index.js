import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Donec lorem tellus"
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies erat ac fringilla facilisis. Sed fermentum metus non purus convallis, non cursus urna ultricies. Praesent nec mollis lacus. Morbi interdum, tortor a consequat fermentum, neque mi auctor ex, placerat sagittis metus dolor in nisl."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Sed fermentum"
        title="Donec elementum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies erat ac fringilla facilisis. Sed fermentum metus non purus convallis, non cursus urna ultricies. Praesent nec mollis lacus. Morbi interdum, tortor a consequat fermentum, neque mi auctor ex, placerat sagittis metus dolor in nisl."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Morbi interdum"
        title="Phasellus eget"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies erat ac fringilla facilisis. Sed fermentum metus non purus convallis, non cursus urna ultricies. Praesent nec mollis lacus. Morbi interdum, tortor a consequat fermentum, neque mi auctor ex, placerat sagittis metus dolor in nisl."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
