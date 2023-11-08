import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { Div } from './styled';

export default function Popup({
  close,
  load,
  id,
  nome_livro,
  autor_livro,
  ano_livro,
  edicao_livro,
  editora_livro,
}) {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [edicao, setEdicao] = useState('');
  const [editora, setEditora] = useState('');

  useEffect(() => {
    setNome(nome_livro);
    setAutor(autor_livro);
    setAno(ano_livro);
    setEdicao(edicao_livro);
    setEditora(editora_livro);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/livros/${id}`, {
        nome, autor, ano, edicao, editora,
      });
      toast.success('Livro atualizado.');
      load();
      // #region limpando dados
      setNome('');
      setAutor('');
      setAno('');
      setEdicao('');
      setEditora('');
      // #endregion limpando dados
    } catch (err) {
      console.log(err);
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
            Ano
            <input
              type="text"
              id="chegada-livro"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </label>
        </div>
        <div className="lado-2">
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

Popup.defaultProps = {
  ano_livro: '',
  edicao_livro: '',
  editora_livro: '',
};

Popup.propTypes = {
  close: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  nome_livro: PropTypes.string.isRequired,
  autor_livro: PropTypes.string.isRequired,
  ano_livro: PropTypes.string,
  edicao_livro: PropTypes.string,
  editora_livro: PropTypes.string,
};
