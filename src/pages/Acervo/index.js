import React, { useState, useEffect } from 'react';
import { FiTriangle } from 'react-icons/fi';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import excelJS from 'exceljs';
import { toast } from 'react-toastify';

import Menu from '../../components/Menu';
import { Content } from './styled';
import Popup from '../../components/Popup';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import Edit_popup from '../../components/Edit-popup';
import Delete_popup from '../../components/Delete-popup';

export default function Acervo() {
  const [style, setStyle] = useState('baixo');
  const [control, setControl] = useState(false);
  const [popup, setPopup] = useState(false);
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [livro_busca, setLivroBusca] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  let id;

  const handleClick = (identifier) => {
    const newControl = control === identifier ? false : identifier;
    setControl(newControl);
    console.log(newControl);

    const newStyle = style;
    switch (newStyle) {
      case 'baixo':
        setStyle('cima');
        break;
      case 'cima':
        setStyle('baixo');
        break;
      default:
        setStyle('baixo');
    }
    console.log(newStyle);
  };

  const handlePopup = () => {
    const newPopup = popup;
    setPopup(!newPopup);
  };

  async function getData() {
    setIsLoading(true);
    const response = await axios.get('/livros');
    setLivros(response.data);
    setIsLoading(false);
  }

  async function getOne(identifier) {
    setIsLoading(true);

    const response = await axios.get(`/livros/${identifier}`);
    setLivroBusca(response.data);

    id = identifier;

    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDownload = () => {
    const workbook = new excelJS.Workbook();

    const sheet = workbook.addWorksheet('Acervo Biblioteca LHVR');
    sheet.columns = [
      { header: 'Nome', key: 'nome', width: 30 },
      { header: 'Autor', key: 'autor', width: 30 },
      { header: 'Tombo', key: 'tombo', width: 15 },
      { header: 'Quantidade', key: 'quantidade', width: 15 },
      { header: 'Data de chegada', key: 'data_chegada', width: 25 },
      { header: 'Data de lançamento', key: 'data_lancamento', width: 25 },
      { header: 'Volume', key: 'volume', width: 15 },
      { header: 'Edição', key: 'edicao', width: 15 },
      { header: 'Local', key: 'local', width: 25 },
      { header: 'Editora', key: 'editora', width: 25 },
    ];

    livros.map((value) => {
      sheet.addRow({
        nome: value.nome,
        autor: value.autor,
        tombo: value.tombo,
        quantidade: value.quantidade,
        data_chegada: value.data_chegada,
        data_lancamento: value.data_lancamento,
        volume: value.volume,
        edicao: value.edicao,
        local: value.local,
        editora: value.editora,
      });
    });

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheet.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Acervo LHVR.xlsx';
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  const handleEdit = (identifier) => {
    getOne(identifier);
    const newEditing = isEditing;
    setIsEditing(!newEditing);
    id = identifier;
    console.log(`id: ${id}`);
  };

  const closeEdit = () => {
    const newEditing = isEditing;
    setIsEditing(!newEditing);
  };

  const handleDelete = (identifier) => {
    getOne(identifier);
    const newDeleting = isDeleting;
    setIsDeleting(!newDeleting);
    console.log(identifier);
  };

  const closeDelete = () => {
    const newDeleting = isDeleting;
    setIsDeleting(!newDeleting);
  };

  if (isLoading) {
    return (
      <Content>
        <Menu />
        {popup && (
        <Popup
          close={handlePopup}
          load={() => getData()}
        />
        )}
        {isEditing && (
        <Edit_popup
          close={() => closeEdit()}
          load={() => getData()}
          id={id}
        />
        )}
        <div className="lado-2">
          <header>
            <h1>Acervo</h1>
            <input
              type="text"
              placeholder="Digite o nome do livro"
              onChange={(e) => setBusca(e.target.value)}
            />
          </header>
          <div className="acervo">
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
        {popup && (
        <Popup
          close={handlePopup}
          load={() => getData()}
        />
        )}
        {isEditing && (
        <Edit_popup
          close={() => closeEdit()}
          load={() => getData()}
          id={livro_busca.id}
          nome_livro={livro_busca.nome}
          autor_livro={livro_busca.autor}
          ano_livro={livro_busca.ano}
          edicao_livro={livro_busca.edicao}
          editora_livro={livro_busca.editora}
        />
        )}
        {isDeleting && (
          <Delete_popup
            id={livro_busca.id}
            close={() => closeDelete()}
            load={() => getData()}
            nome={livro_busca.nome}
            edit={livro_busca.editora}
          />
        )}
        <header>
          <h1>Acervo</h1>
          <input
            type="text"
            placeholder="Digite o nome do livro"
            onChange={(e) => setBusca(e.target.value)}
          />
        </header>
        <div className="acervo">
          {livros.filter((livro) => (busca.toLowerCase() === ''
            ? livro
            : livro.nome.toLowerCase().includes(busca.toLowerCase())
          )).map((livro) => {
            if (control === livro.id) {
              return (
                <div className="caixa">
                  <section className="livro-exp" key={livro.id}>
                    <span>
                      <p>
                        {livro.nome}
                        {' '}
                        |
                        {' '}
                        {livro.autor}
                      </p>
                      <p>
                        Ano -
                        {' '}
                        {livro.ano}
                        {' '}
                        | Editora -
                        {' '}
                        {livro.editora}
                        {' '}
                        | Edição -
                        {' '}
                        {livro.edicao}
                        {' '}
                        | Tombo -
                        {' '}
                        {livro.id}
                      </p>
                    </span>
                    {' '}
                    <FiTriangle className={style} onClick={() => handleClick(livro.id)} />
                  </section>
                  <section className="edit">
                    <AiOutlineEdit
                      className="edit-icon"
                      size={30}
                      color="#fff"
                      cursor="pointer"
                      onClick={() => handleEdit(livro.id)}
                    />
                    <AiOutlineDelete
                      className="edit-icon"
                      size={30}
                      color="#fff"
                      cursor="pointer"
                      onClick={() => handleDelete(livro.id)}
                    />
                  </section>
                </div>
              );
            }

            return (
              <div className="caixa">
                <section className="livro">
                  <span>
                    <p>
                      {livro.nome}
                      {' '}
                      |
                      {' '}
                      {livro.autor}
                    </p>
                  </span>
                  {' '}
                  <FiTriangle className="baixo" onClick={() => handleClick(livro.id)} />
                </section>
                <section className="edit">
                  <AiOutlineEdit
                    className="edit-icon"
                    size={36}
                    color="#fff"
                    cursor="pointer"
                    onClick={() => handleEdit(livro.id)}
                  />
                  <AiOutlineDelete
                    className="edit-icon"
                    size={30}
                    color="#fff"
                    cursor="pointer"
                    onClick={() => handleDelete(livro.id)}
                  />
                </section>
              </div>
            );
          })}
        </div>
        <footer>
          <div onClick={handleDownload}>Baixar acervo</div>
          <div onClick={handlePopup}>Cadastrar livro</div>
        </footer>
      </div>
    </Content>
  );
}
