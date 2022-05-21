import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const Mark = styled.span`
  color: ${(props) =>
    props.content === 'X' ? styleDefault.principalBluecolor : styleDefault.principalYellowColor};
  font-family: 'Fredoka One', cursive;
  font-size: 3rem;
  font-weight: bolder;
`;
