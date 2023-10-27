import React from 'react';
import { PiSquaresFour } from 'react-icons/pi';
import { BsHourglass, BsBookmark } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Sidebar } from './styled';

export default function Menu() {
  return (
    <Sidebar>
      <section className="sup">
        <img src="images/bibliotech.png" alt="logo_bibliotech" />
        <img src="images/lhvr.png" alt="logo_lhvr" className="lhvr" />
        <p>EEEP Lúcia Helena Viana Ribeiro</p>
      </section>
      <section className="inf">
        <Link to="/">
          <p>
            <PiSquaresFour size={36} />
            Início
          </p>
        </Link>
        <Link to="/historico">
          <p>
            <BsHourglass size={36} />
            Histórico
          </p>
        </Link>
        <Link to="/emprestimos">
          <p>
            <AiOutlineCalendar size={36} />
            Empréstimos
          </p>
        </Link>
        <Link to="/acervo">
          <p>
            <BsBookmark size={36} />
            Acervo
          </p>
        </Link>
      </section>
    </Sidebar>
  );
}
