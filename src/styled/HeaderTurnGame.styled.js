import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const HeaderTurnContainer = styled.div`
  background-color: ${styleDefault.boxesBackground};
  box-shadow: inset 0 -5px 0 0 ${styleDefault.shadowBoxes};
  border-radius: 10px;
  padding: 0.7rem 1.2rem;
  text-align: center;
  word-spacing: 0.5rem;
  text-transform: uppercase;
`;

export const TurnMark = styled.span`
  font-family: 'Fredoka One', cursive;
  color: ${styleDefault.fontColorGray};
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const TurnText = styled.span`
  font-family: 'Poppins', sans-serif;
  color: ${styleDefault.fontColorGray};
  font-size: 1.3rem;
  font-weight: 700;
`;
