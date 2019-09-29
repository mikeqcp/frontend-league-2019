// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  mechanics: require("./assets/mechanics.png"),
  earth: require("./assets/earth.jpg"),
  mars: require("./assets/mars.jpg"),
  meteor: require("./assets/meteor.jpg"),
  explosion: require("./assets/explosion.gif"),
  gravity: require("./assets/gravity.gif"),
  space: require("./assets/space.jpg")
};

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
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps lineHeight={2} textColor="secondary">
            Zespół
          </Heading>
          <List>
            <ListItem>Rafał Gruszecki</ListItem>
            <ListItem>Martin Kmieciak</ListItem>
            <ListItem>Marcin Pecelerowicz</ListItem>
            <ListItem>Michał Przyszczypkowski</ListItem>
            <ListItem>Krzysztof Skoracki</ListItem>
            <ListItem>Jakub Wiśniewski</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={2} textColor="secondary">
            Technologie & Platformy
          </Heading>
          <List>
            <ListItem>Unity</ListItem>
            <ListItem>Unity AR Foundation</ListItem>
          </List>
          <List>
            <ListItem>Android</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            Gameplay
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Angry Birds w kosmosie
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <List>
            <ListItem>Strzał pociskiem do celu</ListItem>
            <ListItem>Na pocisk działają siły grawitacji planet</ListItem>
            <ListItem>Celem jest znalezienie optymalnego toru lotu</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.mechanics} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Grawitacja planet
          </Heading>
          <Image src={images.gravity} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            Przykładowe shadery
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Planety
          </Heading>
          <Image src={images.earth} display="inline-block" width="50%"/>
          <Image src={images.mars}  display="inline-block" width="50%"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Pociski
          </Heading>
          <Image src={images.meteor} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Tło
          </Heading>
          <Image src={images.space} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            Eksplozja planety
          </Heading>
          <Image src={images.explosion} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            Features
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <List>
            <ListItem>Wsparcie dla AR i myszy/klawiatury</ListItem>
            <ListItem>Symulacja grawitacji w układzie planetarnym</ListItem>
            <ListItem>Animacje wybuchu planet</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
