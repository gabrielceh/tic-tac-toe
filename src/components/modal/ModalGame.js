import React from 'react';
import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import {
  BtnModal,
  BtnModalContainer,
  ModalBox,
  ModalBoxMessage,
  ModalContainer,
  ModalMarkWin,
  ModalPlayerWin,
} from '../../styled/modal/Modal.styled';

const ModalGame = () => {
  const { typeGame, messageWin, isOpen, closeModal, restartGame, quitGame } =
    useContext(GameContext);

  const handleNewRound = () => {
    restartGame();
    closeModal();
  };

  const handleQuitGame = () => {
    quitGame();
    closeModal();
  };

  return (
    <ModalContainer className={isOpen ? 'show' : ''}>
      <ModalBox>
        <ModalBoxMessage>
          <ModalPlayerWin>{messageWin.player && messageWin.player}</ModalPlayerWin>
          <ModalMarkWin mark={messageWin.markWin}>
            {messageWin.markWin}
            {messageWin.markWin !== 'Tie' && <span>Takes the Round</span>}
          </ModalMarkWin>
          <BtnModalContainer>
            <BtnModal type="quit" onClick={handleQuitGame}>
              QUIT
            </BtnModal>
            <BtnModal type="restart" onClick={handleNewRound}>
              NEXT ROUND
            </BtnModal>
          </BtnModalContainer>
        </ModalBoxMessage>
      </ModalBox>
    </ModalContainer>
  );
};

export default ModalGame;
