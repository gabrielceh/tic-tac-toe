import styled from 'styled-components';
import { styleDefault } from '../../helpers/cssGuide';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.2s linear;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalBox = styled.section`
  width: 100%;
  background-color: ${styleDefault.boxesBackground};
  height: 40vh; //provisional, valor verdadero: auto
`;

export const ModalBoxMessage = styled.article`
  box-sizing: border-box;
  /* background: ${styleDefault.shadowBoxes}; */
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 60%;
  }
`;

export const ModalPlayerWin = styled.div`
  color: ${styleDefault.fontColorGray};
  font-size: 0.9rem;
  text-align: center;
`;

export const ModalMarkWin = styled.div`
  color: ${(props) =>
    props.mark === 'X'
      ? styleDefault.principalBluecolor
      : props.mark === 'O'
      ? styleDefault.principalYellowColor
      : styleDefault.fontColorGray};
  font-size: 3rem;
  text-align: center;
  font-family: 'Fredoka One', cursive;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    margin: 0 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 430px) {
    font-size: 2rem;

    & > span {
      font-size: 1.3rem;
    }
  }
`;

export const BtnModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BtnModal = styled.span`
  cursor: pointer;
  color: ${styleDefault.fontColor};

  box-sizing: border-box;
  background-color: ${(props) =>
    props.type === 'restart' ? styleDefault.principalYellowColor : styleDefault.fontColorGray};
  box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 1rem;
  font-weight: 600;
  margin: 0 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.type === 'restart'
        ? styleDefault.principalYellowColorHover
        : styleDefault.principalGrayColorHover};
  }
`;

export const ModalRestartMessage = styled.div`
  color: ${styleDefault.fontColorGray};
  font-size: 3rem;
  text-align: center;
  /* font-family: 'Fredoka One', cursive; */
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
`;
