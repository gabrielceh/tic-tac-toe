import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';
import { BtnMenu } from '../styled/BtnHeader.styled';
import { BtnMenuContainer } from '../styled/BtnMenuContainer.styled';
import styled from 'styled-components';

const LinkGame = styled(Link)`
  color: none;
  text-decoration: none;
`;

const MenuBtnContainer = () => {
  const { handleTypeGame, setTypeGame } = useContext(GameContext);

  const navigate = useNavigate();

  const handleVsCPU = (e) => {
    setTypeGame('vs-cpu');
    handleTypeGame();
    navigate('/game', {
      replace: true,
    });
  };

  const handleVsPlayer = (e) => {
    setTypeGame('vs-player');
    handleTypeGame();
    navigate('/game', {
      replace: true,
    });
  };

  return (
    <BtnMenuContainer>
      <BtnMenu vs="CPU" data-type="vs-cpu" onClick={handleVsCPU}>
        NEW GAME (VS CPU)
      </BtnMenu>

      <BtnMenu vs="Player" data-type="vs-player" onClick={handleVsPlayer}>
        NEW GAME (VS PLAYER)
      </BtnMenu>
    </BtnMenuContainer>
  );
};

export default MenuBtnContainer;
