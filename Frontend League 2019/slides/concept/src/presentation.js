// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import about from "./sections/about";
import idea from "./sections/idea";
import gameplay from "./sections/gameplay";
import examples from "./sections/examples";
import features from "./sections/features";

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
        {gameplay}
        {examples}
        {features}
      </Deck>
    );
  }
}
