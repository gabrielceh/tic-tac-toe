import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes>
            <HomePage />
          </PublicRoutes>
        }
      />
      <Route
        path="/game"
        element={
          <PrivateRoutes>
            <GamePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
