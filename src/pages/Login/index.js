import React, { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Content } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (login.length < 4 || login.length > 24) {
      formErrors = true;
      console.log('O nome de usuário deve ter de 4 a 24 caracteres.');
    }

    if (senha.length < 6 || senha.length > 18) {
      formErrors = true;
      console.log('A senha deve ter de 6 a 18 caracteres.');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ login, senha, prevPath }));
  };

  return (
    <Content>
      <div className="lado-1">
        <img src="images/imagem_login.png" alt="imagem_login" />
      </div>
      <div className="lado-2">
        <form onSubmit={handleSubmit}>
          <header>
            <img src="images/bibliotech.png" alt="logo" />
            {' '}
            Bibliotech
          </header>
          <section>
            <label htmlFor="usuario">
              Nome de usuário
              <input
                type="text"
                placeholder="Insira o nome de usuário"
                id="usuario"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </label>
            <label htmlFor="senha">
              Senha
              <input
                type="text"
                placeholder="Insira o nome de usuário"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>
          </section>
          <footer>
            <input type="submit" value="Entrar" />
          </footer>
        </form>
      </div>
    </Content>
  );
}
