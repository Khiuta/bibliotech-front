import React, { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import axios from '../../services/axios';

import Menu from '../../components/Menu';
import { Content } from './styled';

export default function Historico() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/emprestimos');
      setEmprestimos(response.data);
      console.log(emprestimos);
    }
    getData();
  }, []);

  const handleFilter = (e) => {
    const filtro = e.target.className;
    switch (filtro) {
      case 'pendente':
        async function getPendentes() {
          const response = await axios.get('/emprestimos/pendentes');
          setEmprestimos(response.data);
        }
        getPendentes();
        break;
      case 'emprestado':
        async function getEmprestados() {
          const response = await axios.get('/emprestimos/emprestados');
          setEmprestimos(response.data);
        }
        getEmprestados();
        break;
      default:
        async function getData() {
          const response = await axios.get('/emprestimos');
          setEmprestimos(response.data);
          console.log(emprestimos);
        }
        getData();
        break;
    }
  };

  const handleWipe = async (e) => {
    const { id } = e.target;
    const newId = parseInt(id, 10);
    console.log(typeof newId);
    console.log(newId);

    try {
      const response = await axios.put('/emprestimos', {
        id: newId,
      });
      console.log(response);
    } catch {
      console.log('deu errado');
    }
  };

  return (
    <Content>
      <Menu />
      <div className="lado-2">
        <header>
          <h1>Histórico</h1>
          <input type="text" placeholder="Digite o nome do livro" onChange={(e) => setBusca(e.target.value)} />
        </header>
        <aside>
          <div className="icone"><AiOutlineClear size={40} onClick={handleFilter} className="icon" /></div>
          <div className="texto">
            <p className="pendente" onClick={handleFilter}>Pendente</p>
            {' '}
            <p className="emprestado" onClick={handleFilter}>Emprestado</p>
          </div>
        </aside>
        <div className="emprestimos">
          <div>
            {emprestimos.filter((emprestimo) => (busca.toLowerCase() === ''
              ? emprestimo
              : emprestimo.livro.toLowerCase().includes(busca)
            ))
              .map((emprestimo) => (
                <React.Fragment key={emprestimo.id}>
                  <section className={emprestimo.status}>
                    {emprestimo.livro}
                    {' '}
                    -
                    {' '}
                    {emprestimo.autor}
                    {' '}
                    |
                    {' '}
                    {emprestimo.aluno}
                    {' '}
                    /
                    {' '}
                    {emprestimo.turma}
                    {' '}
                    {emprestimo.serie}
                  </section>
                  <section className="botao">
                    <BsCheckCircle
                      size={36}
                      color="#fff"
                      onClick={handleWipe}
                      id={emprestimo.id}
                    />
                  </section>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </Content>
  );
}
