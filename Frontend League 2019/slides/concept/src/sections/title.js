import React from "react";
import { Slide, Heading, Image } from "spectacle";

const images = {
  logo: require("../assets/logo.png")
};

const title = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} textColor="secondary" caps>
      We present..
    </Heading>
  </Slide>
);

const logo = (
  <Slide transition={["fade"]} bgColor="black">
    <Image src={images.logo} display="inline-block" width="70%" />
  </Slide>
);

export default [title, logo];
