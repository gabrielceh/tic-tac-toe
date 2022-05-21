import React from 'react';
import { useContext } from 'react';
import GameContext from '../context/GameContext';
import { BtnRestartContainer } from '../styled/BtnRestartContainer.styled';

const BtnRestartGame = () => {
  const { openModalRestart } = useContext(GameContext);

  return <BtnRestartContainer onClick={openModalRestart}>↺</BtnRestartContainer>;
};

export default BtnRestartGame;
