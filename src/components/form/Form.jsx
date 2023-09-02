import React from "react";
import { Forms, Input, Textarea } from "./styled";
import Button from "../../components/btn/Button";

export default function Form() {
  return (
    <Forms
      action="https://formsubmit.co/jufalgre@gmail.com"
      method="POST"
      data-aos="fade-up"
      data-aos-delay="80"
      data-aos-duration="1000"
    >
      <Input
        type="hidden"
        name="_next"
        value="http://127.0.0.1:5500/enviado.html"
      />

      <label for="nome">Nome</label>
      <Input required type="text" />

      <label for="Email">Email</label>
      <Input required type="text" />

      <Textarea
        name="message"
        required
        cols="30"
        rows="10"
        placeholder="Tipo de acompanhamento desejado..."
      ></Textarea>

      <Button text="Enviar" type="submit" />
    </Forms>
  );
}
