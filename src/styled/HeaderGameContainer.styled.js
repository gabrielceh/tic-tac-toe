import styled from 'styled-components';

export const HeaderGameContainer = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 75px;
  justify-content: center;
  margin: 2rem auto;

  @media screen and (min-width: 400px) {
    /* justify-content: space-around; */
  }
`;
