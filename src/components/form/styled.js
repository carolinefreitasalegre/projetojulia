import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  color: white;
  flex-direction: column;

  Button {
    margin-top: 1em;
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 5vh;
  width: 20vw;
  padding: 5px;
  outline: #8c0d2f;
  border: none;
  color: #140726;
`;

export const Textarea = styled.textarea`
  padding: 5px;
  margin-top: 15px;
  outline: none;
`;
