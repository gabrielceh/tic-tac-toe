import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100vh;
  box-sizing: border-box;

  @media screen and (min-width: 500px) {
    width: 60%;
  }

  @media screen and (min-width: 900px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;

export const ContainerGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100vh;
  box-sizing: border-box;

  /* @media screen and (min-width: 500px) {
    width: 60%;
  } */

  @media screen and (min-width: 900px) {
    width: 60%;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
