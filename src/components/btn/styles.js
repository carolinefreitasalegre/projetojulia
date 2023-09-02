import { styled } from "styled-components";

export const ButtonLoad = styled.button`
  background-image: linear-gradient(
    90deg,
    rgba(32, 18, 64, 1) 37%,
    rgba(72, 16, 58, 1) 59%,
    rgba(91, 15, 55, 1) 71%,
    rgba(140, 13, 47, 1) 99%,
    rgba(75, 74, 117, 1) 100%
  );
  color: white;
  width: 2em;
  border: none;
  min-width: 15em;
  height: 4em;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 1px 0px 37px -12px rgba(217, 30, 65, 1);
    -moz-box-shadow: 1px 0px 37px -12px rgba(217, 30, 65, 1);
    box-shadow: 1px 0px 37px -12px rgba(217, 30, 65, 1);
  }

  p {
    font-size: 1.5em;
    font-weight: 900;
  }

  @media (max-width: 630px) {
    height: 5.2em;
    width: 50%;
    font-size: 0.5em;
    margin-bottom: 1em;
    overflow-y: hidden;
  }
`;
