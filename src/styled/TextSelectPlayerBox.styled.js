import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const TextSelectPlayerBox = styled.p`
  color: ${(props) =>
    props.principal ? styleDefault.fontColorGray : styleDefault.fontColorGrayLight};
  font-size: ${(props) => (props.principal ? '1rem' : '.9rem')};
  font-weight: 500;
  text-transform: uppercase;
  margin: 1.5rem auto;
  text-align: center;
`;
