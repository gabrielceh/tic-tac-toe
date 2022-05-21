import { createContext, useEffect, useState } from 'react';
import { useModal } from '../hooks/useModal';
import { cpuMovePlayer } from '../helpers/cpuMovePlayer';
import { cpuWin } from '../helpers/cpuWin';
import { conditionValidation } from '../helpers/conditionValidate';

const GameContext = createContext();

const ttt = 'tic-tac-toe-gb';
let initialStorage = localStorage.getItem(ttt)
  ? JSON.parse(localStorage.getItem(ttt))
  : {
      winX: 0,
      winO: 0,
      ties: 0,
      gameActive: false,
      typeGame: '',
      startGame: false,
    };

export const GameContextProvider = ({ children }) => {
  let initialGameMoves = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  };

  let gameMoves = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  };
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const initialMessage = { markWin: '', message: 'Takes the round', player: '' };

  const [cpuMark, setCpuMark] = useState('O');
  const [player1Mark, setPlayer1Mark] = useState('X');
  const [player2Mark, setPlayer2Mark] = useState('O');
  const [typeGame, setTypeGame] = useState('');
  const [gameActive, setGameActive] = useState(false); //Cambiar a false
  const [gameState, setGameState] = useState({ ...initialGameMoves });
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);
  const [ties, setTies] = useState(0);
  const [winPlayer, setWinPlayer] = useState('');
  const [messageWin, setMessageWin] = useState(initialMessage);
  const [startGame, setStartGame] = useState(false);
  const [cpuMove, setCpuMove] = useState(true);
  const [winnerCells, setwinnerCells] = useState([]);

  const [isOpen, openModal, closeModal] = useModal();
  const [isOpenRestart, openModalRestart, closeModalRestart] = useModal();

  /**
   * Recibe un paramentro target y accederemos a su textContent
   * Validamos si lo que seleccionó el usuario fue X o O
   * Hacemos el respectivo cambio de estados
   */

  //se ejecuta al inicio si el typeGame es vs-cpu
  useEffect(() => {
    if (typeGame === 'vs-cpu') {
      handleCPUMove();
    }
  }, [typeGame]);

  //Ejecuta los movimientos de la cpu cada vez que se actualiza cpuMove
  useEffect(() => {
    handleCPUMove();
  }, [cpuMove]);

  useEffect(() => {
    initialStorage = localStorage.getItem(ttt)
      ? JSON.parse(localStorage.getItem(ttt))
      : {
          winX: 0,
          winO: 0,
          ties: 0,
          gameActive: false,
          typeGame: '',
          startGame: false,
          cpuMark: 'O',
          player1Mark: 'X',
          player2Mark: 'O',
        };
    //console.log(initialStorage);
    setWinX(initialStorage.winX);
    setWinO(initialStorage.winO);
    setTies(initialStorage.ties);
    setGameActive(initialStorage.gameActive);
    setTypeGame(initialStorage.typeGame);
    setStartGame(initialStorage.startGame);
    setCpuMark(initialStorage.cpuMark);
    setPlayer1Mark(initialStorage.player1Mark);
    setPlayer2Mark(initialStorage.player2Mark);
  }, []);

  useEffect(() => {
    if (startGame) {
      const localData = {
        winX,
        winO,
        ties,
        gameActive: true,
        typeGame,
        startGame,
        cpuMark,
        player1Mark,
        player2Mark,
      };
      localStorage.setItem(ttt, JSON.stringify(localData));
    }
  }, [gameActive]);

  const handleSelectPlayer = (target) => {
    // console.log(target.textContent);
    if (target.textContent === 'X') {
      setCpuMark('O');
      setPlayer1Mark('X');
      setPlayer2Mark('O');
    } else {
      setCpuMark('X');
      setPlayer1Mark('O');
      setPlayer2Mark('X');
    }
  };

  const handleTypeGame = () => {
    // console.log(typeGame);
    // if (e.target.dataset.type === 'vs-cpu') {
    if (typeGame === 'vs-cpu') {
      // setTypeGame('vs-cpu');
      setGameActive(true);
      setStartGame(true);
    } else {
      // setTypeGame('vs-player');
      setGameActive(true);
      setStartGame(true);
    }
  };

  const handleCurrentPlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    //se actualiza el cpuMove si se esta jugando vs cpu
    if (typeGame === 'vs-cpu') {
      setCpuMove(!cpuMove);
    }
  };

  const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    /**Guardamos X o O en el gameState segun el indice de la celda clickeada
     * Escribimos en la celda el jugador actual(X o O)
     * Cambiamos el color al contenido de la celda
     */
    gameMoves = { ...gameState, [clickedCellIndex]: currentPlayer };
    setGameState({ ...gameMoves, [clickedCellIndex]: currentPlayer });
  };

  /**HANDLERESULTVALIDATION */
  /**
   * Asignamos las posiciones de las winningCondition a una variable
   * asignamos el gameState segun la posicion de la condicion de victoria, es decir, almacenara X o O dependiendo lo que haya en el gameState que se asigna
   * validamos si las variables son iguales
   * Validamos si hay gandor o empate
   */
  const handleResultValidation = () => {
    let roundWin = false;
    //console.log(gameMoves);

    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = gameMoves[winCondition[0]];
      let b = gameMoves[winCondition[1]];
      let c = gameMoves[winCondition[2]];

      let cellW1 = winCondition[0];
      let cellW2 = winCondition[1];
      let cellW3 = winCondition[2];

      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        setwinnerCells([cellW1, cellW2, cellW3]);
        roundWin = true;
        break;
      }
    }

    //validamos si hay un ganador. En caso que lo haya terminará el juego
    if (roundWin) {
      setGameActive(false);
      if (currentPlayer === 'X') {
        setWinX(winX + 1);
        setWinPlayer('X');
        setMessageWin({ ...messageWin, markWin: 'X', player: 'Player 1 Won!' });
        openModal();
      } else {
        setWinO(winO + 1);
        setWinPlayer('O');
        setMessageWin({ ...messageWin, markWin: 'O', player: 'Player 2 Won!' });
        openModal();
      }
      return;
    }

    //validamos si hay empate. Esto lo hacemos si en el gameState hay un elemento ''
    let rondaEmpatada = true;
    for (let mark in gameMoves) {
      if (gameMoves[mark] === '') {
        rondaEmpatada = false;
      }
    }
    if (rondaEmpatada) {
      setTies(ties + 1);
      setMessageWin({ message: '', markWin: 'Tie', player: '' });
      openModal();
      setGameActive(false);
      return;
    }
    handleCurrentPlayer();
  };

  const handleClickPlayer = (e) => {
    const clickedCell = e.target;
    let clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
      return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
  };

  /**
   * Funcion para ejecutar los movimientos de la CPU de forma aleatoria
   */
  const handleCPUMove = () => {
    let index = Math.floor(Math.random() * (9 - 0) + 0);
    let clickedCellIndex = index;
    let clickedCell = '';

    if ((cpuMark === 'X' && currentPlayer === 'X') || (cpuMark === 'O' && currentPlayer === 'O')) {
      let cpuBlock = cpuMovePlayer(player1Mark, gameState, winningConditions);
      let cpuW = cpuWin(cpuMark, gameState, winningConditions);

      if (cpuW.toWin) {
        // console.log(cpuW);
        for (let cond of cpuW.condition) {
          if (gameState[cond] === '' || !gameActive) {
            conditionValidation(cond, handleCellPlayed, handleResultValidation);
            return;
          }
        }
      }

      if (cpuBlock.toBlock) {
        // console.log(cpuBlock);
        // const { condition } = cpuBlock.condition;
        for (let cond of cpuBlock.condition) {
          if (gameState[cond] === '' || !gameActive) {
            conditionValidation(cond, handleCellPlayed, handleResultValidation);
            return;
          }
        }
      }

      //Ejecuta este while mientras el index ya sea una celda rellena
      while (gameState[clickedCellIndex] !== '' || !gameActive) {
        index = Math.floor(Math.random() * (9 - 0) + 0);
        clickedCellIndex = index;
      }
      document.querySelectorAll('.cell').forEach((el) => {
        if (parseInt(el.dataset.cellIndex) === clickedCellIndex) {
          clickedCell = el;
        }
      });
      handleCellPlayed(clickedCell, clickedCellIndex);
      handleResultValidation();
    }
  };

  const restartGame = () => {
    gameMoves = { ...initialGameMoves };
    setGameState(initialGameMoves);
    setCurrentPlayer('X');
    setGameActive(true);
    setWinPlayer('');
    setMessageWin(initialMessage);
    setwinnerCells([]);

    if (typeGame === 'vs-cpu') {
      setCpuMove(!cpuMove);
    }
  };

  const quitGame = () => {
    gameMoves = { ...initialGameMoves };
    setGameState(initialGameMoves);
    setCurrentPlayer('X');
    setGameActive(false);
    setWinPlayer('');
    setTypeGame('');
    setStartGame(false);
    setMessageWin(initialMessage);
    setWinO(0);
    setWinX(0);
    setTies(0);
    setwinnerCells([]);

    const localData = {
      winX: 0,
      winO: 0,
      ties: 0,
      gameActive: false,
      typeGame: '',
      startGame: false,
      cpuMark: 'O',
      player1Mark: 'X',
      player2Mark: 'O',
    };
    localStorage.setItem(ttt, JSON.stringify(localData));
  };

  const data = {
    startGame,
    gameActive,
    handleSelectPlayer,
    handleTypeGame,
    currentPlayer,
    handleCurrentPlayer,
    handleClickPlayer,
    restartGame,
    quitGame,
    winX,
    winO,
    ties,
    typeGame,
    cpuMark,
    player1Mark,
    messageWin,
    closeModal,
    openModal,
    isOpen,
    isOpenRestart,
    openModalRestart,
    closeModalRestart,
    gameState,
    winnerCells,
    setTypeGame,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export default GameContext;
