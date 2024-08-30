import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import usuarioImage from '../img/usuario.png';
import logoImage from '../img/log.png';
import { handleLogout } from '../login/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { varAdmin } from "../servicios/api";
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const username = localStorage.getItem('username');
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRol');

    const handleImageClick = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuOptionClick = (option) => {
        if (option === 'usuarios') {
            navigate('/viewusers');
        } else if (option === 'cerrarSesion') {
            handleLogout(navigate);
        }
        setShowMenu(false);
    };

    return (
        <header className="header">
            <div className='d-flex justify-content-between align-items-center w-100'>

                <div className="header__logo" style={{ cursor: 'pointer' }}>
                    <Link to={'/'}>
                        <img src={logoImage} alt="Logo" />
                    </Link>
                </div>
                <h1 className="header__title d-none d-md-block">AUDITORIA TURÍSTICA LOCALES OCIO</h1>
                <div className="header__user-info">
                    <p className="header__username">{username}</p>
                    <Dropdown menuVariant="light">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <img src={usuarioImage} alt="Imagen de perfil" className="header__profile-image" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {userRole === varAdmin && (
                                <Dropdown.Item onClick={() => handleMenuOptionClick('usuarios')}>Usuarios</Dropdown.Item>
                            )}
                            <Dropdown.Item onClick={() => handleMenuOptionClick('cerrarSesion')}>Cerrar Sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                    <img src={usuarioImage} alt="Imagen de perfil" className="header__profile-image" />
                </div>
                <Dropdown show={showMenu} align="start">
                    <Dropdown.Menu>
                        {userRole === varAdmin && (
                            <Dropdown.Item onClick={() => handleMenuOptionClick('usuarios')}>Usuarios</Dropdown.Item>
                        )}
                        <Dropdown.Item onClick={() => handleMenuOptionClick('cerrarSesion')}>Cerrar Sesión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                </div>
            </div>

            <div className=' d-block d-md-none'>
                <h1 className="header__title">AUDITORIA TURÍSTICA LOCALES OCIO</h1>
            </div>

            <style jsx>{`
            .header__user-info .dropdown-toggle::after {
  display: none !important; 
}
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 10px;
                    background-color: #f8f9fa;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    padding-left: 45px;
                    width: 100%;
                }

                .header__logo img {
                    width: 100px;
                    height: auto;
                }

                .header__title {
                    font-size: 1.5rem;
                    text-align: center;
                    flex: 1;
                    margin: 0 20px;
                }

                .header__user-info {
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .header__username {
                    margin-right: 10px;
                    font-size: 1rem;
                    margin-bottom: 0;
                }

                .header__profile-image {
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  border: 1px solid #000000;
                  padding: 3px;
                }

                /* Tablet View */
                @media (max-width: 1024px) {
                    .header__title {
                        font-size: 1.3rem;
                    }

                    .header__logo img {
                        width: 80px;
                    }

                    .header__profile-image {
                        width: 35px;
                        height: 35px;
                    }
                }

                /* Mobile View */
                @media (max-width: 768px) {
                    .header {
                        flex-direction: column;
                        align-items: center; 
                            height: 100px;
                    }

                    .header__logo img {
                        width: 80px;
                    }

                    .header__title {
                        font-size: 1.2rem;
                        margin: 10px 0;
                    }

                   

                    .header__username {
                        font-size: 0.9rem;
                    }

                    .header__profile-image {
                        width: 35px;
                        height: 35px;
                    }
                        .cuadro_princal {
                        border-bottom: none;
                        flex-direction: column;  
                    }
                }

                /* Small Mobile View */
                @media (max-width: 480px) {
                    .header__title {
                        font-size: 1rem;
                        text-align: left;
                        margin: 10px 0;
                    }

                    .header__username {
                        font-size: 0.8rem;
                    }

                    .header__profile-image {
                        width: 30px;
                        height: 30px;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;