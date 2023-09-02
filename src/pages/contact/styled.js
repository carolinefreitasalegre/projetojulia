import styled from "styled-components";
import IMG from "../../image/backimage.png";

export const Container = styled.div`
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-size: 45%;
  height: 83vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    height: 120vh;
    background-size: 100%;
    background-position: bottom;
    background-size: 30em;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const Info = styled.form`
  display: flex;
  flex-direction: column;
  .red {
    color: #8c0d2f;
    font-weight: bold;
  }
`;
export const Paragrapho = styled.form`
  color: white;
  font-size: 2em;
`;

export const ContetnForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-y: hidden;
  gap: 20px;
  input {
    width: 100%;
  }
`;
