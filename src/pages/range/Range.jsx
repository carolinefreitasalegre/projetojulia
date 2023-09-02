import React from "react";
import { Container, Content } from "./styles";
import { BsAsterisk } from "react-icons/bs";

export default function Range() {
  return (
    <Container>
      <Content>
        <BsAsterisk className="icon" />
        <p className="word flicker-2 ">Técnica moderna</p>
        <BsAsterisk className="icon" />
        <p className="word flicker-2 ">acompanhamento presencial e online</p>
        <BsAsterisk className="icon" />
        <p className="word flicker-2 ">Preços acessíveis</p>
        <BsAsterisk className="icon" />
      </Content>
    </Container>
  );
}
