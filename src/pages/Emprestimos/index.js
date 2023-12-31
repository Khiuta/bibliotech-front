import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import Menu from '../../components/Menu';
import { Content } from './styled';
import Calendar from '../../components/Calendar';

export default function Emprestimos() {
  const [livro, setLivro] = useState('');
  const [autor, setAutor] = useState('');
  const [tombo, setTombo] = useState('');
  const [aluno, setAluno] = useState('');
  const [turma, setTurma] = useState('');
  const [serie, setSerie] = useState('');
  const [alunos, setAlunos] = useState([]);
  const [livros, setLivros] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/emprestimos', {
        livro, autor, tombo, aluno, turma, serie,
      });
      if (response.data === 'erro') {
        return toast.error('Este aluno não está disponível para empréstimos.');
      }
      toast.success('Empréstimo cadastrado.');
      // #region limpando dados
      setLivro('');
      setAutor('');
      setTombo('');
      setAluno('');
      setTurma('');
      setSerie('');
      // #endregion limpando dados
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      const response2 = await axios.get('/livros');
      setLivros(response2.data);
    }

    getData();
  }, []);

  const handleBlur = (e) => {
    alunos.forEach((aln) => {
      if (aluno === aln.aluno) {
        setTurma(aln.turma);
        setSerie(aln.serie);
      }
    });

    livros.forEach((liv) => {
      if (livro === liv.nome) {
        setAutor(liv.autor);
        setTombo(liv.id);
      }
    });
  };

  return (
    <Content>
      <Menu />
      <div className="lado-2">
        <div className="esq">
          <header>
            <h1>Empréstimo de livros</h1>
          </header>
          <div className="formulario">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome-livro" className="nome">
                Nome do livro
                <input
                  autoComplete="off"
                  list="lista-livros"
                  type="search"
                  id="nome-livro"
                  value={livro}
                  onChange={(e) => setLivro(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="Nome do livro"
                />
              </label>
              <datalist id="lista-livros">
                {livros.filter((buscalivro) => (livro.toLowerCase() === ''
                  ? buscalivro
                  : buscalivro.nome.toLowerCase().includes(livro.toLowerCase())
                )).map((listaLivro) => (
                  <option key={listaLivro.id}>{listaLivro.nome}</option>
                ))}
              </datalist>
              <div className="autor-tombo">
              <label htmlFor="autor-livro" className="autor">
                Autor
                <input
                  type="text"
                  id="autor-livro"
                  value={autor}
                  // onChange={(e) => setAutor(e.target.value)}
                  placeholder="Nome do autor"
                />
              </label>
              <label htmlFor="tombo-livro" className="tombo">
                Tombo
                <input
                  type="text"
                  id="tombo-livro"
                  value={tombo}
                  autoComplete="off"
                  // onChange={(e) => setTombo(e.target.value)}
                  placeholder="Tombo do livro"
                />
              </label>
              </div>
              <label htmlFor="nome-aluno" className="aluno">
                Nome do aluno
                <input
                  list="alunos"
                  type="search"
                  id="nome-aluno"
                  value={aluno}
                  onChange={(e) => setAluno(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="Nome do aluno"
                  autoComplete="off"
                />
              </label>
              <datalist id="alunos">
                {alunos.filter((buscaAluno) => (aluno.toLowerCase() === ''
                  ? buscaAluno
                  : buscaAluno.aluno.toLowerCase().includes(aluno.toLowerCase())
                )).map((listaAluno) => (
                  <option key={listaAluno.id}>{listaAluno.aluno}</option>
                ))}
              </datalist>
              <div className="turma-serie">
              <label htmlFor="turma-aluno" className="turma">
                Turma
                <input
                  type="search"
                  list="turma"
                  id="turma-aluno"
                  value={turma}
                  onChange={(e) => setTurma(e.target.value)}
                  placeholder="Turma do aluno"
                  autoComplete="off"

                />
              </label>
              <datalist id="turma">
                <option value="Informática">Informática</option>
                <option value="Enfermagem">Enfermagem</option>
                <option value="Finanças">Finanças</option>
                <option value="Seg. do Trabalho">Seg. do Trabalho</option>
                <option value="Agronegócio">Agronegócio</option>
              </datalist>
              <label htmlFor="serie-aluno" className="serie">
                Série
                <input
                  type="search"
                  list="serie"
                  id="serie-aluno"
                  value={serie}
                  onChange={(e) => setSerie(e.target.value)}
                  placeholder="Série do aluno"
                  autoComplete="off"
                />
              </label>
              <datalist id="serie">
                <option value="1º Ano">1º Ano</option>
                <option value="2º Ano">2º Ano</option>
                <option value="3º Ano">3º Ano</option>
              </datalist>
              </div>
              <footer>
                <button type="submit">Confirmar</button>
              </footer>
            </form>
          </div>
        </div>
        <div className="dir">
          <Calendar />
        </div>
      </div>
    </Content>
  );
}
