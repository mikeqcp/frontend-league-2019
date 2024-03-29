// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Slide, Heading } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import about from "./sections/about";
import idea from "./sections/idea";
import gameplay from "./sections/gameplay";
import examples from "./sections/examples";
import title from './sections/title';

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  destroyedPlanet: require("./assets/destroyed-planet.jpg")
};

const endSlide = (
  <Slide
    transition={["fade"]}
    bgColor="tertiary"
    bgImage={images.destroyedPlanet}
  >
    <Heading
      size={2}
      textColor="primary"
      caps
      style={{ textShadow: "0px 0px 15px red" }}
    >
      The end
    </Heading>
  </Slide>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {about}
        {idea}
        {title}
        {gameplay}
        {examples}
        {endSlide}
      </Deck>
    );
  }
}
