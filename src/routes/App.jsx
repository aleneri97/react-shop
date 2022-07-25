import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/global.scss';
import { Layout } from '../containers/Layout';
import { ChangePassword } from '../pages/ChangePassword';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { RecoveryPasswordConfirmation } from '../pages/RecoveryPasswordConfirmation';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { MyAccount } from '../pages/MyAccount';

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
          <Route exact path="/account" element={ <MyAccount /> } />
          <Route exact path="/checkout" element={ <Checkout /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Layout>
		</BrowserRouter>
  );
}
