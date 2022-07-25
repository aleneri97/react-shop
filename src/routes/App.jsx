import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPasswordConfirmation } from '../containers/RecoveryPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

import '../styles/global.scss';

export default function App() {
  return (
		<BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/login" element={ <Login />  } />
          <Route exact path="/recovery-confirmation" element={ <RecoveryPasswordConfirmation /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Layout>
		</BrowserRouter>
  );
}
