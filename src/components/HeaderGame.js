import React from 'react';
import { HeaderGameContainer } from '../styled/HeaderGameContainer.styled';
import { HeaderGameLogo } from '../styled/HeaderGameLogo.styled';
import { Mark } from '../styled/Mark.styled';
import BtnRestartGame from './BtnRestartGame';
import HeaderTurnGame from './HeaderTurnGame';

const HeaderGame = () => {
  return (
    <HeaderGameContainer>
      <HeaderGameLogo>
        <Mark content="X">X</Mark>
        <Mark content="O">O</Mark>
      </HeaderGameLogo>
      <HeaderTurnGame />
      <BtnRestartGame />
    </HeaderGameContainer>
  );
};

export default HeaderGame;
