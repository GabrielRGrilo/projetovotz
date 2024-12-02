import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaList, FaFileAlt, FaSignOutAlt, FaRegUser } from 'react-icons/fa';
import { Container } from './styles';
import {api} from '../../services/api';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null); // controlar o ícone ativo
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await api.post('/logout', {}, { withCredentials: true });
        Cookies.remove('token');
        sessionStorage.clear();
        navigate('/login');
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
    }
  };

  const handleMouseEnter = (menu) => setHovered(menu);  // ativar o hover
  const handleMouseLeave = () => setHovered(null);  // desativar o hover

const goToRelatorio = () => {
  navigate('/relatorio');
};

  return (
    <Container>
      <div className="sidebar-name">Votz</div>
      <div className="sidebar-menu">
        <Link 
          to="/home" 
          className="menu-icon" 
          onMouseEnter={() => handleMouseEnter('Votações')}
          onMouseLeave={handleMouseLeave}
        >
          {hovered === 'Votações' ? 'Votações' : <FaList />}
        </Link>
        <Link 
          to="/relatorio" 
          className="menu-icon" 
          onMouseEnter={() => handleMouseEnter('documento')}
          onMouseLeave={handleMouseLeave}
        >
          {hovered === 'documento' ? 'Relatórios' : <FaFileAlt />}
        </Link>
        <Link 
          to="/perfil" 
          className="menu-icon" 
          onMouseEnter={() => handleMouseEnter('perfil')}
          onMouseLeave={handleMouseLeave}
        >
          {hovered === 'perfil' ? 'Perfil' : <FaRegUser />}
        </Link>
        <Link 
          onClick={handleLogout} 
          className="logout" 
          onMouseEnter={() => handleMouseEnter('logout')}
          onMouseLeave={handleMouseLeave}
        >
          {hovered === 'logout' ? 'Logout' : <FaSignOutAlt />}
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
