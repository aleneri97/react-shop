import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';

import '../styles/global.scss';

export default function App() {
  return (
		<BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/login" element={ <Login />  } />
          <Route exact path="/recovery" element={ <RecoveryPassword /> } />
        </Routes>
      </Layout>
		</BrowserRouter>
  );
}
