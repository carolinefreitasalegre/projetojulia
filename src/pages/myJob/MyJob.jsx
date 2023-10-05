import React from "react";
import {
  Container,
  Content,
  Card,
  Img,
  Text,
  ContentDescription,
  CardDescription,
  CardIcons,
} from "./styled";

import Trainer from "../../image/TreinamentoDesportivo.svg";
import Hidro from "../../image/hidro.svg";
import Muscula from "../../image/muscula.svg";
import Pilates from "../../image/pilates.png";
import {
  BsClipboard2Heart,
  BsPencil,
  BsPatchCheck,
  BsExclamationOctagon,
} from "react-icons/bs";
export default function MyJob() {
  return (
    <Container>
      <Content>
        <Card data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
          <Img src={Trainer} alt="foto treinamento" />
          <Text>Treinamento Desportivo</Text>
        </Card>
        <Card data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
          <Img src={Hidro} alt="foto treinamento" />
          <Text>Hidroginástica</Text>
        </Card>
        <Card data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
          <Img src={Muscula} alt="foto treinamento" />
          <Text>Musculação</Text>
        </Card>
        <Card data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
          <Img src={Pilates} alt="foto treinamento" style={{ width: "16em" }} />
          <Text>Pilates</Text>
        </Card>
      </Content>
      <ContentDescription
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1000"
      >
        <CardDescription
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1050"
        >
          Criação de programas de exercícios personalizados e avaliação física
          <CardIcons>
            <BsClipboard2Heart />
          </CardIcons>
        </CardDescription>
        <CardDescription
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1100"
        >
          Desenvolvimento de um plano de treinamento que é atualizado
          periodicamente para garantir que o cliente esteja progredindo de
          acordo com suas metas
          <CardIcons>
            <BsPencil />
          </CardIcons>
        </CardDescription>
        <CardDescription
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1150"
        >
          Foco nas necessidades individuais de cada aluno
          <CardIcons>
            <BsPatchCheck />
          </CardIcons>
        </CardDescription>
        <CardDescription
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
        >
          Comprometida em ajudar meus alunos a alcançarem seus objetivos de
          forma realista e sustentável
          <CardIcons>
            <BsExclamationOctagon />
          </CardIcons>
        </CardDescription>
      </ContentDescription>
    </Container>
  );
}
