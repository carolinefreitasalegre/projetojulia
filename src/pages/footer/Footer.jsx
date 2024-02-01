import React from "react";
import { Container, Text, Icons, Link } from "./styled";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Container>
      <Text>SIGA - ME</Text>
      <Icons>
        <Link
          href="https://www.instagram.com/profissionaled.fisicajulia/"
          target="_blank"
        >
          <BsInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/j%C3%BAlia-f-603617214/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </Icons>
    </Container>
  );
}
