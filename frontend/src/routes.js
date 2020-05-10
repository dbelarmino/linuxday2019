import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main/';
import Cadastro from './pages/Cadastro';

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/cadastrar" exact component={Cadastro} />
      <Route path="/atualizar/:id" exact component={Cadastro} />
    </BrowserRouter>
  );
}

export default Routes;
