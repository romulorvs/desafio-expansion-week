import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Content from './style';
import { ReactComponent as Logo } from '../../assets/s-logo.svg';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Content>
      {location.pathname === '/' ? (
        <a href="/#home">
          <Logo />
        </a>
      ) : (
        <Link to="/">
          <Logo />
        </Link>
      )}
      ;
      <ul>
        {location.pathname === '/' ? (
          <>
            <a href="/#softskills">Soft Skills</a>
            <a href="/#knowmore">Entenda</a>
          </>
        ) : (
          <>
            <Link to="/#softskills">Soft Skills</Link>
            <Link to="/#knowmore">Entenda</Link>
          </>
        )}

        <Link to="/improving">Desenvolva-se</Link>
      </ul>
    </Content>
  );
};

export default Header;
