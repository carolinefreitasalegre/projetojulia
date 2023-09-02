import React from "react";
import { Container, Content, Info, Paragrapho, ContetnForm } from "./styled";
import { BsWhatsapp } from "react-icons/bs";
import Form from "../../components/form/Form";
export default function Contact() {
  return (
    <>
      <Container>
        <Content
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1000"
        >
          <Info>
            <Paragrapho>Julia Freitas</Paragrapho>
            <Paragrapho className="red">PERSONAL TRAINER</Paragrapho>
          </Info>
          <Info>
            <Paragrapho>
              67 99665-4527
              <a href="https://wa.me/5567996654527" target="_blank">
                <BsWhatsapp color=" #8c0d2f" style={{ marginLeft: 10 }} />
              </a>
            </Paragrapho>
            <Paragrapho>CREF: 011670-G/MS</Paragrapho>
          </Info>
        </Content>
        <ContetnForm>
          <Paragrapho
            style={{
              marginBottom: "2em",
              fontFamily: '"Phudu", cursive',
              fontWeight: "bold",
            }}
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1000"
          >
            Fale comigo
          </Paragrapho>
          <Form />
        </ContetnForm>
      </Container>
    </>
  );
}
