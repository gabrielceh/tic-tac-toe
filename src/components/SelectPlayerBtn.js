import React, { useContext } from 'react';
import styled from 'styled-components';
import GameContext from '../context/GameContext';
import { styleDefault } from '../helpers/cssGuide';

const BtnSelectP = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-family: 'Fredoka One', cursive;
  font-size: 3rem;
  font-weight: bolder;
  color: ${styleDefault.fontColorGray};
  width: 49%;
  border-radius: 12px;
  transition: background 0.1s linear, color 0.1s linear;

  &.active {
    background: ${styleDefault.fontColorGray};
    color: ${styleDefault.boxesBackground};
  }
`;

const SelectPlayerBtn = () => {
  const { handleSelectPlayer } = useContext(GameContext);

  const handleClick = (e) => {
    document.querySelectorAll('.js-btn-menu').forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    handleSelectPlayer(e.target);
  };

  return (
    <>
      <BtnSelectP className="active js-btn-menu" onClick={handleClick}>
        X
      </BtnSelectP>
      <BtnSelectP className="js-btn-menu" onClick={handleClick}>
        O
      </BtnSelectP>
    </>
  );
};

export default SelectPlayerBtn;
