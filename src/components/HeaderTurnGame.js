import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import { HeaderTurnContainer, TurnMark, TurnText } from '../styled/HeaderTurnGame.styled';

const HeaderTurnGame = () => {
  const { currentPlayer } = useContext(GameContext);

  return (
    <HeaderTurnContainer>
      <TurnMark>{currentPlayer}</TurnMark> <TurnText>TURN</TurnText>
    </HeaderTurnContainer>
  );
};

export default HeaderTurnGame;
