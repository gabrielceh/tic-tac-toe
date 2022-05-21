import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import {
  BtnModal,
  BtnModalContainer,
  ModalBox,
  ModalBoxMessage,
  ModalContainer,
  ModalRestartMessage,
} from '../../styled/modal/Modal.styled';

const ModalRestartGame = () => {
  const { typeGame, messageWin, isOpenRestart, closeModalRestart, restartGame, quitGame } =
    useContext(GameContext);

  const handleNewRound = () => {
    restartGame();
    closeModalRestart();
  };

  return (
    <ModalContainer className={isOpenRestart ? 'show' : ''}>
      <ModalBox>
        <ModalBoxMessage>
          <ModalRestartMessage>RESTART GAME?</ModalRestartMessage>
          <BtnModalContainer>
            <BtnModal type="quit" onClick={closeModalRestart}>
              NO, CANCEL
            </BtnModal>
            <BtnModal type="restart" onClick={handleNewRound}>
              YES, RESTART
            </BtnModal>
          </BtnModalContainer>
        </ModalBoxMessage>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalRestartGame;
