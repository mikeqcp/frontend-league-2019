import React from "react";
import { Slide, Heading, Image } from "spectacle";

const images = {
  earth: require("../assets/earth.jpg"),
  mars: require("../assets/mars.jpg"),
  meteor: require("../assets/meteor.jpg"),
  explosion: require("../assets/explosion.gif"),
  gravity: require("../assets/gravity.gif"),
  space: require("../assets/space.jpg")
};

const planetsGravity = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={2} textColor="secondary" caps>
      Grawitacja planet
    </Heading>
    <Image src={images.gravity} />
  </Slide>
);

const shadersTitle = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} textColor="secondary" caps>
      Przykładowe shadery
    </Heading>
  </Slide>
);

const planets = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={2} textColor="secondary" caps>
      Planety
    </Heading>
    <Image src={images.earth} display="inline-block" width="50%" />
    <Image src={images.mars} display="inline-block" width="50%" />
  </Slide>
);

const projectiles = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={2} textColor="secondary" caps>
      Pociski
    </Heading>
    <Image src={images.meteor} />
  </Slide>
);

const background = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={2} textColor="secondary" caps>
      Tło
    </Heading>
    <Image src={images.space} />
  </Slide>
);

const planetExplosion = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={2} textColor="secondary" caps>
      Eksplozja planety
    </Heading>
    <Image src={images.explosion} />
  </Slide>
);

export default [
  planetsGravity,
  shadersTitle,
  planets,
  projectiles,
  background,
  planetExplosion
];
