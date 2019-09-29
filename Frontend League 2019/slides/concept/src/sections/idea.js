import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const images = {
  planetsDestruction: require("../assets/planets-destruction.jpg")
};

const title = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} textColor="secondary" caps>
      Pomysł
    </Heading>
  </Slide>
);

const galaxyApocalypse = (
  <Slide
    transition={["fade"]}
    bgColor="tertiary"
    bgImage={images.planetsDestruction}
  >
    <Heading
      size={2}
      textColor="primary"
      caps
      style={{ textShadow: "0px 0px 15px red" }}
    >
      Kosmiczna apokalipsa
    </Heading>
  </Slide>
);

const assumptions = (
  <Slide transition={["fade"]} bgColor="tertiary">
    <List>
      <ListItem>Gra mobilna</ListItem>
      <ListItem>Niszczenie planet</ListItem>
      <ListItem>Rozszerzona rzeczywistość</ListItem>
      <ListItem>
        Wciągająca rozgrywka - przechodzenie kolejnych co raz to trudniejszych
        poziomów
      </ListItem>
    </List>
  </Slide>
);

export default [title, galaxyApocalypse, assumptions];
