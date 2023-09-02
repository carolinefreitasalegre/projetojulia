import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10em;
  justify-content: space-between;

  img {
    width: 4em;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;

  li {
    list-style: none;
    cursor: pointer;
    color: #4541bf;
    font-size: 1.5em;
  }
`;
