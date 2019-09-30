import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const team = (
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
);

const techAndPlatforms = (
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
);

export default [team, techAndPlatforms];
