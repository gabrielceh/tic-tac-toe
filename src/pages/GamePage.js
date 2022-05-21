import React from 'react';
import GameContainer from '../components/GameContainer';
import HeaderGame from '../components/HeaderGame';
import ModalGame from '../components/modal/ModalGame';
import ModalRestartGame from '../components/modal/ModalRestartGame';
import Stats from '../components/Stats';
import { ContainerGame } from '../styled/ContainerMobile.styled';

const GamePage = () => {
  return (
    <>
      <ModalGame></ModalGame>
      <ModalRestartGame></ModalRestartGame>
      <ContainerGame>
        <HeaderGame></HeaderGame>
        <GameContainer></GameContainer>
        <Stats></Stats>
      </ContainerGame>
    </>
  );
};

export default GamePage;
