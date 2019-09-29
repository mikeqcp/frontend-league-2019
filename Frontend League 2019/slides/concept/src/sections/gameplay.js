import React from "react";
import { Slide, Heading, List, ListItem, Image } from "spectacle";

const images = {
  mechanics: require("../assets/mechanics.png")
};

const title = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} textColor="secondary" caps>
      Gameplay
    </Heading>
  </Slide>
);

const angryBirdsInSpace = (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={5} textColor="secondary" caps>
      Angry Birds w kosmosie
    </Heading>
  </Slide>
);

const aboutGameplay = (
  <Slide transition={["fade"]} bgColor="tertiary">
    <List>
      <ListItem>Strzał pociskiem do celu</ListItem>
      <ListItem>Na pocisk działają siły grawitacji planet</ListItem>
      <ListItem>Celem jest znalezienie optymalnego toru lotu</ListItem>
    </List>
  </Slide>
);

const mechanics = (
  <Slide transition={["fade"]} bgColor="primary">
    <Image src={images.mechanics} />
  </Slide>
);

export default [title, angryBirdsInSpace, aboutGameplay, mechanics];
