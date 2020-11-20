import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Content from './style';
import { ReactComponent as Logo } from '../../assets/s-logo.svg';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Content>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        {location.pathname === '/' ? (
          <>
            <a href="/#skills">Soft Skills</a>
            <a href="/#benefits">Benefícios</a>
          </>
        ) : (
          <>
            <Link to="/#skills">Soft Skills</Link>
            <Link to="/#benefits">Benefícios</Link>
          </>
        )}

        <Link to="/improving">Desenvolva-se</Link>
      </ul>
    </Content>
  );
};

export default Header;
