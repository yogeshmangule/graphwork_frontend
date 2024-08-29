// import React, { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import usuarioImage from '../img/usuario.png';
// import logoImage from '../img/log.png';
// import { handleLogout } from '../login/Logout';
// import { useNavigate } from 'react-router-dom'
// import { varAdmin } from "../servicios/api"

// const Header = () => {
//     const username = localStorage.getItem('username');
//     const [showMenu, setShowMenu] = useState(false);
//     const navigate = useNavigate() 
//     const userRole = localStorage.getItem('userRol');   


//     const handleImageClick = () => {
//         setShowMenu(!showMenu);
//     };

//     const handleMenuOptionClick = (option) => {
//         // Implementa la lógica correspondiente para cada opción del menú
//         if (option === 'usuarios') {
//             // Acción cuando se selecciona "Usuarios"
//             navigate('/viewusers');
//         } else if (option === 'cerrarSesion') {

//             handleLogout(navigate);
//         }

//         // Cierra el menú después de hacer clic en una opción
//         setShowMenu(false);
//     };

//     return (
//         <header>
//             <div className="header">
//                 <div className="corner-image" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
//                     <img src={logoImage} alt="Logo" style={{ width: '100px', height: '50px' }} />
//                 </div>
//                 <h1 className="header__title">AUDITORIA TURÍSTICA LOCALES OCIO</h1>
//                 <div className="header__user-info">
//                     <p className="header__username">{username}</p>
//                     <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
//                         <img src={usuarioImage} alt="Imagen de perfil" className="header__profile-image" />
//                     </div>
//                     {/* Menú desplegable */}
//                     <Dropdown show={showMenu} align="end">
//                         <Dropdown.Menu>
//                         {userRole === varAdmin && (
//                                   <Dropdown.Item onClick={() => handleMenuOptionClick('usuarios')}>Usuarios</Dropdown.Item>
//                               )}

//                             <Dropdown.Item onClick={() => handleMenuOptionClick('cerrarSesion')}>Cerrar Sesión</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;




import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import usuarioImage from '../img/usuario.png';
import logoImage from '../img/log.png';
import { handleLogout } from '../login/Logout';
import { useNavigate } from 'react-router-dom';
import { varAdmin } from "../servicios/api";

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
            <div className="header__logo" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                <img src={logoImage} alt="Logo" />
            </div>
            <h1 className="header__title">AUDITORIA TURÍSTICA LOCALES OCIO</h1>
            <div className="header__user-info">
                <p className="header__username">{username}</p>
                <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                    <img src={usuarioImage} alt="Imagen de perfil" className="header__profile-image" />
                </div>
                <Dropdown show={showMenu} align="end">
                    <Dropdown.Menu>
                        {userRole === varAdmin && (
                            <Dropdown.Item onClick={() => handleMenuOptionClick('usuarios')}>Usuarios</Dropdown.Item>
                        )}
                        <Dropdown.Item onClick={() => handleMenuOptionClick('cerrarSesion')}>Cerrar Sesión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <style jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 20px;
                    background-color: #f8f9fa;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
                }

                .header__profile-image {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
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
                        align-items: flex-start;
                    }

                    .header__logo img {
                        width: 60px;
                    }

                    .header__title {
                        font-size: 1.2rem;
                        margin: 10px 0;
                    }

                    .header__user-info {
                        align-self: flex-end;
                        margin-top: 10px;
                    }

                    .header__username {
                        font-size: 0.9rem;
                    }

                    .header__profile-image {
                        width: 35px;
                        height: 35px;
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