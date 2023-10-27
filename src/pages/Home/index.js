import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';

import { Content } from './styled';
import Menu from '../../components/Menu';

export default function Home() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [pendentes, setPendentes] = useState([]);

  useEffect(() => {
    async function getData() {
      const emprestados = await axios.get('/emprestimos/emprestados');
      setEmprestimos(emprestados.data);

      const pendente = await axios.get('/emprestimos/pendentes');
      setPendentes(pendente.data);
    }

    getData();
  }, []);
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
            <h1>0</h1>
          </section>
          <section className="emp">
            <h2>Emprestados</h2>
            <h1>{emprestimos.length}</h1>
          </section>
          <section className="pen">
            <h2>Pendentes</h2>
            <h1>{pendentes.length}</h1>
          </section>
        </div>
      </div>
    </Content>
  );
}
