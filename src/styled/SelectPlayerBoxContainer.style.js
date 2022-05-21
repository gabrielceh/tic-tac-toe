import styled from 'styled-components';
import { styleDefault } from '../helpers/cssGuide';

export const SelectPlayerBoxContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: inset 0 -7px 0 0 ${styleDefault.shadowBoxes};
  padding: 0.5rem 0.5rem;
  background-color: ${styleDefault.boxesBackground};
`;
