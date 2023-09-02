import styled from "styled-components";
import backimg from "../../image/julia.svg";

export const Container = styled.header`
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position-x: 80%;
  color: white;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 500px) {
    height: 67vh;
    background-size: 100%;
  }
`;

export const Title = styled.h1`
  padding-left: 3.3em;
  width: 45%;
  font-size: 3em;
  .red {
    color: #8c0d2f;
  }

  .blue {
    color: #4541bf;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 15px;
    margin-top: 3em;
  }
`;

export const Name = styled.p`
  font-size: 1em;
`;

export const Content = styled.div`
  margin-top: 2em;
  padding-left: 10em;
  width: 50%;
  font-size: 1.5;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 500px) {
    height: 60vh;
    overflow-y: hidden;
    width: 100%;
    height: 10vh;
    padding-left: 1em;
  }
`;
