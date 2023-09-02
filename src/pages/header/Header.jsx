import React from "react";
import { Container, Title, Name, Content } from "./styled";
import Button from "../../components/btn/Button";

export default function Header() {
  return (
    <Container>
      <Title data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
        Mantenha seu corpo <span className="red">forte</span> e{" "}
        <span className="blue">fit</span>
      </Title>
      <Content data-aos="fade-up" data-aos-delay="80" data-aos-duration="1050">
        <Name data-aos="fade-up" data-aos-delay="70" data-aos-duration="1060">
          com Julia Freitas
        </Name>
        <a
          data-aos="fade-up"
          data-aos-delay="90"
          data-aos-duration="1060"
          href="https://wa.me/5567996654527"
          target="_blank"
        >
          <Button text="SAIBA MAIS" />
        </a>
      </Content>
    </Container>
  );
}
