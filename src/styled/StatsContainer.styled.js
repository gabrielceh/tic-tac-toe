import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const StatsContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 25px;
  column-gap: 25px;
  justify-content: center;
`;

export const StatBox = styled.article`
  box-sizing: border-box;
  width: 120px;
  height: 90px;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.type === 'win-x'
      ? styleDefault.principalBluecolor
      : props.type === 'win-o'
      ? styleDefault.principalYellowColor
      : styleDefault.fontColorGray};
  border-radius: 12px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .stat {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
