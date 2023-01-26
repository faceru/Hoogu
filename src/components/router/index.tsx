import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppPaths } from 'common/router';
import { MainPage } from 'screens/main';
import { PlacesPage } from 'screens/places';

export function MainRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppPaths.main} element={<MainPage />} />
        <Route path={AppPaths.places} element={<PlacesPage />} />
        <Route path={AppPaths.NotFound} element={<>404 </>} />
      </Routes>
    </HashRouter>
  );
}
