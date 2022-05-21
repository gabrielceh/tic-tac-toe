import React, { useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';
import { StatBox, StatsContainer } from '../styled/StatsContainer.styled';

const Stats = () => {
  const { typeGame, cpuMark, player1Mark, winX, winO, ties } = useContext(GameContext);
  const [messageX, setMessageX] = useState('');
  const [messageO, setMessageO] = useState('');

  useEffect(() => {
    if (cpuMark === 'X') {
      setMessageX('X (CPU)');
      setMessageO('O (YOU)');
    } else {
      setMessageX('X (YOU)');
      setMessageO('O (CPU)');
    }
  }, [cpuMark]);

  return (
    <StatsContainer>
      <StatBox type="win-x">
        <span>{typeGame === 'vs-cpu' ? messageX : 'X (PLAYER 1)'}</span>
        <span className="stat">{winX}</span>
      </StatBox>
      <StatBox type="tie">
        <span>Ties</span>
        <span className="stat">{ties}</span>
      </StatBox>
      <StatBox type="win-o">
        <span>{typeGame === 'vs-cpu' ? messageO : 'O (PLAYER 2)'}</span>
        <span className="stat">{winO}</span>
      </StatBox>
    </StatsContainer>
  );
};

export default Stats;
