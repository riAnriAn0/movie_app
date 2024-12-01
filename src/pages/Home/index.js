import React from "react";
import { Container, SearchContainer, SearchButton, Input } from "./style";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";

export default function Home() {
  return (
    <Container>
      <Header tittle={"Home"} />
      <SearchContainer>
        <Input placeholder={"Ex: Vingadores"} />
        <SearchButton>
          <Feather name="search" size={30} color={"#FFF"} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
