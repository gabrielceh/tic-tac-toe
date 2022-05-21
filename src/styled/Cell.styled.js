import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const Cell = styled.div`
  color: ${(props) =>
    props.winners === 'X' || props.winners === 'O'
      ? styleDefault.boxesBackground
      : props.content === 'X'
      ? styleDefault.principalBluecolor
      : styleDefault.principalYellowColor};
  cursor: pointer;
  width: 120px;
  height: 120px;
  background-color: ${(props) =>
    props.winners === 'X'
      ? styleDefault.principalBluecolor
      : props.winners === 'O'
      ? styleDefault.principalYellowColor
      : styleDefault.boxesBackground};
  box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Fredoka One', cursive;
  font-size: 3rem;
  font-weight: bolder;
`;
