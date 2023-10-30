import React, { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import Menu from '../../components/Menu';
import { Content } from './styled';
import Loading from '../../components/Loading';

export default function Historico() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const response = await axios.get('/emprestimos');
    setEmprestimos(response.data);
    setInterval(() => {
      setIsLoading(false);
    }, 900);
  }

  useEffect(() => {
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
        getData();
        break;
    }
  };

  const handleWipe = async (e) => {
    try {
      await axios.put('/emprestimos', {
        id: e.target.id,
      });
      toast.success('Livro entregue.');
      getData();
    } catch {
      console.log('deu errado');
    }
  };

  if (isLoading) {
    return (
      <Content>
        <Menu />
        <div className="lado-2">
          <header>
            <h1>Histórico</h1>
            <input type="text" placeholder="Digite o nome do livro" />
          </header>
          <aside>
            <div className="icone"><AiOutlineClear size={40} onClick={handleFilter} className="icon" /></div>
            <div className="texto">
              <p className="pendente" onClick={handleFilter}>Pendente</p>
              {' '}
              <p className="emprestado" onClick={handleFilter}>Emprestado</p>
            </div>
          </aside>
          <div className="emprestimos-loading">
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
