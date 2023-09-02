import styled from "styled-components";

export const Container = styled.header`
  height: 150vh;
  min-height: 155vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    min-height: 350vh;
    overflow-y: hidden;
  }
`;

export const Content = styled.div`
  overflow-y: hidden;
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 500px) {
    height: 150vh;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  gap: 10px;
`;

export const Img = styled.img`
  border-radius: 50%;
  border: 2px solid #8c0d2f;
  cursor: pointer;
  transition: all.5s;

  &:hover {
    border: 2px solid #4541b1;
    color: #4541b1;
  }
`;

export const Text = styled.h3`
  cursor: pointer;
  transition: all.5s;

  &:hover {
    color: #4541b1;
  }
`;
export const ContentDescription = styled.h3`
  display: flex;
  height: 50vh;
  overflow-y: hidden;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 500px) {
    height: 250vh;
  }
`;

export const CardDescription = styled.div`
  height: 40vh;
  width: 5em;
  min-width: 12em;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 2px solid #8c0d2f;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #585858;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;

  &:hover {
    border: 2px solid #4541b1;
    color: #4541b1;
    background-color: black;
  }
`;

export const CardIcons = styled.div`
  position: absolute;
  left: 10px;
  padding: 10px;
  top: 10px;
  display: flex;
  width: 100%;
`;
