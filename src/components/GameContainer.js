import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';
import { Cell } from '../styled/Cell.styled';
import { GameMainContainer } from '../styled/GameMainContainer.styled';
import { Mark } from '../styled/Mark.styled';

const GameContainer = () => {
  const { handleClickPlayer, gameState, winnerCells } = useContext(GameContext);

  const [cell, setCell] = useState([]);

  useEffect(() => {
    setCell(Object.values(gameState).map((value) => value));
  }, [gameState]);

  useEffect(() => {
    //console.log(winnerCells);
  }, [winnerCells]);

  const handleClick = (e) => {
    handleClickPlayer(e);
  };

  return (
    <GameMainContainer>
      {cell.map((el, index) => (
        <Cell
          key={index}
          data-cell-index={index}
          onClick={handleClick}
          className="cell"
          content={el}
          winners={
            index === winnerCells[0] || index === winnerCells[1] || index === winnerCells[2]
              ? el
              : false
          }
        >
          {el !== '' && el}
        </Cell>
      ))}
    </GameMainContainer>
  );
};

export default GameContainer;
