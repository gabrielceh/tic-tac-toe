import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const BtnMenu = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  height: 60px;
  padding: 0 14px;
  margin: 1rem auto;
  border-radius: 12px;
  background: ${(props) =>
    props.vs === 'CPU' ? styleDefault.principalYellowColor : styleDefault.principalBluecolor};
  color: ${styleDefault.fontColor};
  font-weight: 700;
  box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s linear;

  &:hover {
    background: ${(props) =>
      props.vs === 'CPU'
        ? styleDefault.principalYellowColorHover
        : styleDefault.principalBluecolorHover};
  }
`;
