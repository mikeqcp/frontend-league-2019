import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const title = (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading size={1} textColor="secondary" caps>
      Features
    </Heading>
  </Slide>
);

const list = (
  <Slide transition={["fade"]} bgColor="tertiary">
    <List>
      <ListItem>Wsparcie dla AR i myszy/klawiatury</ListItem>
      <ListItem>Symulacja grawitacji w układzie planetarnym</ListItem>
      <ListItem>Animacje wybuchu planet</ListItem>
    </List>
  </Slide>
);

export default [title, list];
