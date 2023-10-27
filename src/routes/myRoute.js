import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// MyRoute recebe props de component, a opção isClosed e o resto do que for enviado nos parametros
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // se a página for fechada e o usuário não estiver logado
  // ele vai ser redirecionado para uma página de login
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
      // state serve para guardar a rota que o usuário estava antes de ir para o login
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  // eslint-disable-next-line
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
