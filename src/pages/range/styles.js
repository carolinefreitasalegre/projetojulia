import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background-color: #8c0d2f;
  padding: 1em 2em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2em;
  gap: 20px;
  color: #140726;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    gap: 1px;
  }
`;

export const Content = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  background-color: #8c0d2f;
  overflow: hidden;
  white-space: nowrap;
  animation: slide 5s linear infinite;
  animation-delay: 0.5s;

  .word {
    font-family: "Phudu", cursive;
    font-weight: bold;
    display: inline-block;
    padding: 0 20px;

    .flicker-2 {
      -webkit-animation: flicker-2 2s linear infinite both;
      animation: flicker-2 2s linear infinite both;
    }

    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @-webkit-keyframes flicker-2 {
      0%,
      100% {
        opacity: 1;
      }
      41.99% {
        opacity: 1;
      }
      42% {
        opacity: 0;
      }
      43% {
        opacity: 0;
      }
      43.01% {
        opacity: 1;
      }
      45.99% {
        opacity: 1;
      }
      46% {
        opacity: 0;
      }
      46.9% {
        opacity: 0;
      }
      46.91% {
        opacity: 1;
      }
      51.99% {
        opacity: 1;
      }
      52% {
        opacity: 0;
      }
      52.8% {
        opacity: 0;
      }
      52.81% {
        opacity: 1;
      }
    }
    @keyframes flicker-2 {
      0%,
      100% {
        opacity: 1;
      }
      41.99% {
        opacity: 1;
      }
      42% {
        opacity: 0;
      }
      43% {
        opacity: 0;
      }
      43.01% {
        opacity: 1;
      }
      45.99% {
        opacity: 1;
      }
      46% {
        opacity: 0;
      }
      46.9% {
        opacity: 0;
      }
      46.91% {
        opacity: 1;
      }
      51.99% {
        opacity: 1;
      }
      52% {
        opacity: 0;
      }
      52.8% {
        opacity: 0;
      }
      52.81% {
        opacity: 1;
      }
    }

    @media (max-width: 500px) {
      gap: 0;
      font-size: 0.8em;
      padding: 1px;
    }
  }

  @media (max-width: 500px) {
    gap: 0;
    font-size: 0.5em;

    .icon {
      display: none;
    }

    @keyframes slide {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
`;
