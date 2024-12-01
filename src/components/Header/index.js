import React from "react";
import { Container, MenuButton, Title } from "./style";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function Header({tittle}) {
  
  const navigate = useNavigation();

  return (
    <Container>
      <MenuButton onPress={ () => navigate.openDrawer()}>
        <Feather name="menu" size={36} color="#FFF" />
        <Title>{tittle}</Title>
      </MenuButton>
    </Container>
  );
}
