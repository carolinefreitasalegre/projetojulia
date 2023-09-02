import React from "react";
import { Container, List } from "./styled";
import Logo from "../../image/lg.png";

export default function Nav() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      {/* <List>
        <li>Trabalho desenvolvido</li>
        <li>Contato</li>
        <li></li>
      </List> */}
    </Container>
  );
}
