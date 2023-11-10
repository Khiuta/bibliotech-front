import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Background, Box } from './styled';
import axios from '../../services/axios';

export default function Delete_popup({ id, close, load, nome, edit }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/livros/${id}`);

      toast.success('Livro deletado.');
      load();
      close();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Background>
      <Box>
				<p>Deseja apagar o livro {nome} da editora {edit}?</p>
				<footer>
					<button type="button" onClick={close}>Cancelar</button>
					<button type="button" onClick={handleDelete}>Confirmar</button>
				</footer>
			</Box>
    </Background>
  );
}

Delete_popup.propTypes = {
  id: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired,
};
