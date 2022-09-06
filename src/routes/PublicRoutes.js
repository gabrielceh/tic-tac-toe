import { useContext } from 'react';
import { Navigate } from 'react-router';
import GameContext from '../context/GameContext';

const PublicRoutes = ({ children }) => {
  const { startGame, typeGame } = useContext(GameContext);

  return !startGame && !typeGame ? children : <Navigate to="/game" />;
};

export default PublicRoutes;
