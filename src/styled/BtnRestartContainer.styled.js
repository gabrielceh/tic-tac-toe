import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const BtnRestartContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${styleDefault.fontColorGray};
  box-shadow: inset 0 -5px 0 0 ${styleDefault.fontColorGrayLight};
  border-radius: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(134, 161, 174);
    box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.5);
  }
`;
