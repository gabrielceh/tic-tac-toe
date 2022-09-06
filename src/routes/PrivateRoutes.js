import { useContext } from 'react';
import { Navigate } from 'react-router';
import GameContext from '../context/GameContext';

const PrivateRoutes = ({ children }) => {
  const { startGame, typeGame } = useContext(GameContext);

  return startGame && typeGame ? children : <Navigate to="/" />;
  // return children;
};

export default PrivateRoutes;
