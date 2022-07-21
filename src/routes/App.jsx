import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';

import '../styles/global.scss';

export default function App() {
  return (
		<BrowserRouter>
      <Routes>
        <Layout>
          <Route exact path="/login" element={ <Login />  } />
        </Layout>
      </Routes>
		</BrowserRouter>
  );
}
