import React from "react"
import { Container, MenuButton, Title } from "./style";
import { Feather } from "@expo/vector-icons";

export default function Header()
{
    return(
        <Container>
            <MenuButton>
                <Feather name="menu" size={36} color= "#FFF"/>
                <Title>Header</Title>
            </MenuButton>
        </Container>
    )
}