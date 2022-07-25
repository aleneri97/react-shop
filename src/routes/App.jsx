import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { ChangePassword } from '../pages/ChangePassword';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { RecoveryPasswordConfirmation } from '../pages/RecoveryPasswordConfirmation';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';

import '../styles/global.scss';

export default function App() {
  return (
		<BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/login" element={ <Login />  } />
          <Route exact path="/sign-up" element={ <SignUp /> } />
          <Route exact path="/change-password" element={ <ChangePassword /> } />
          <Route exact path="/recovery-confirmation" element={ <RecoveryPasswordConfirmation /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Layout>
		</BrowserRouter>
  );
}
