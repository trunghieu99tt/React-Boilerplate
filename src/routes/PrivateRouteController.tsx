import React from 'react';
import { Route, Routes } from 'react-router-dom';

const PrivateRouteController = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<div>Not found</div>} />
      </Routes>
    </React.Fragment>
  );
};

export default PrivateRouteController;
