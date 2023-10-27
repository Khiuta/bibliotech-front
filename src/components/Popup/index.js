import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import { Div } from './styled';

export default function Popup({ close }) {
  const [nome, setNome] = useState('');
  const [tombo, setTombo] = useState('');
  const [autor, setAutor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data_chegada, setChegada] = useState('');
  const [data_lancamento, setLancamento] = useState('');
  const [volume, setVolume] = useState('');
  const [edicao, setEdicao] = useState('');
  const [local, setLocal] = useState('');
  const [editora, setEditora] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/livros', {
        tombo,
        nome,
        autor,
        quantidade,
        data_chegada,
        data_lancamento,
        volume,
        edicao,
        local,
        editora,
      });
      console.log(response.data);
    } catch {
      console.log('deu erro');
    }
  };

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <div className="lado-1">
          <label htmlFor="nome-livro">
            Nome do livro
            <input
              type="text"
              id="nome-livro"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label htmlFor="autor-livro">
            Autor do livro
            <input
              type="text"
              id="autor-livro"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </label>
          <label htmlFor="chegada-livro">
            Data de chegada
            <input
              type="text"
              id="chegada-livro"
              value={data_chegada}
              onChange={(e) => setChegada(e.target.value)}
            />
          </label>
        </div>
        <div className="lado-2">
          <label htmlFor="qtd-livro">
            Quantidade
            <input
              type="text"
              id="qtd-livro"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </label>
          <label htmlFor="edicao-livro">
            Edição
            <input
              type="text"
              id="edicao-livro"
              value={edicao}
              onChange={(e) => setEdicao(e.target.value)}
            />
          </label>
          <label htmlFor="editora-livro">
            Editora
            <input
              type="text"
              id="editora-livro"
              value={editora}
              onChange={(e) => setEditora(e.target.value)}
            />
          </label>
        </div>
        <footer>
          <button type="button" onClick={close}>Cancelar</button>
          <button type="submit">Confirmar</button>
        </footer>
      </form>
    </Div>
  );
}

Popup.propTypes = {
  close: PropTypes.func.isRequired,
};
