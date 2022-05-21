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
          <PrivateRoutes>
            <GamePage />
          </PrivateRoutes>
        }
      />
      <Route
        path="home"
        element={
          <PublicRoutes>
            <HomePage />
          </PublicRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
