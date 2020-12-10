import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastroFornecedor from './components/cadastroFonecedor/CadastroFonecedor';
import Login from './components/login/Login';
//import MenuSuperior from './components/menuSuperior/MenuSuperior.js';

export default function Routes (){
    return(
     <BrowserRouter>
        <Switch>
         <Route path="/" exact component={Login} /> 
         <Route path="/cadastrofornecedor" component={CadastroFornecedor} /> 
      {/*<Route path="/menusuperior" component={MenuSuperior} /> */}
      </Switch>
     </BrowserRouter>
     
    );
}