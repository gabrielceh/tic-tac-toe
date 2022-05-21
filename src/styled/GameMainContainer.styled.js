import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const GameMainContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 25px;
  column-gap: 25px;
  justify-content: center;
`;
