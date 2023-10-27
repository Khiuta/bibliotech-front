import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';
import Home from '../pages/Home';
import Historico from '../pages/Historico';
import Emprestimos from '../pages/Emprestimos';
import Acervo from '../pages/Acervo';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/historico" component={Historico} isClosed />
      <MyRoute exact path="/emprestimos" component={Emprestimos} isClosed />
      <MyRoute exact path="/acervo" component={Acervo} isClosed />
      <MyRoute exact path="/login" component={Login} />
    </Switch>
  );
}
