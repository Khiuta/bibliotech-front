import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';

import { Content } from './styled';
import Menu from '../../components/Menu';
import Loading from '../../components/Loading';

export default function Home() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [pendentes, setPendentes] = useState([]);
  const [livros, setLivros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);

    const emprestados = await axios.get('/emprestimos/emprestados');
    setEmprestimos(emprestados.data);

    const pendente = await axios.get('/emprestimos/pendentes');
    setPendentes(pendente.data);

    const response = await axios.get('/livros');
    setLivros(response.data);

    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Content>
        <Menu />
        <div className="lado-2">
          <header>
            <h1>Biblioteca</h1>
          </header>
          <div className="cards-loading">
            <Loading />
          </div>
        </div>
      </Content>
    );
  }

  return (
    <Content>
      <Menu />
      <div className="lado-2">
        <header>
          <h1>Biblioteca</h1>
        </header>
        <div className="cards">
          <section className="livros">
            <h2>Total de livros</h2>
            <p>{livros.length}</p>
          </section>
          <section className="emp">
            <h2>Emprestados</h2>
            <p>{emprestimos.length}</p>
          </section>
          <section className="pen">
            <h2>Pendentes</h2>
            <p>{pendentes.length}</p>
          </section>
        </div>
      </div>
    </Content>
  );
}
