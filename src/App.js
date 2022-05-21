import { GameContextProvider } from './context/GameContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <GameContextProvider>
      <AppRoutes />
    </GameContextProvider>
  );
}

export default App;
