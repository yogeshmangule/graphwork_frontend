// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaCocktail,
//     FaCalendarAlt,
//     FaMusic,
//     FaCity,
//     FaUsersCog,
//     FaUserShield,
//     FaRoute,
//     FaRegStar,
//     FaClipboardCheck,
//     FaHandsHelping,
//     FaMoneyBillWave,
//     FaPeopleCarry,
//     FaPhotoVideo,
//     FaUsers
// } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';


// const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);
//     const menuItem = [
//         {
//             path: "/principal",
//             name: "Dashboard",
//             icon: <FaTh />
//         },
//         {
//             path: "/viewusers",
//             name: "Users",
//             icon: <FaUsers />
//         },
//         {
//             path: "/establishments",
//             name: "Establishments",
//             icon: <FaRegStar />
//         },
//         {
//             path: "/viewenc",
//             name: "Datos Generales",
//             icon: <FaUserAlt />
//         },
//         {
//             path: "/viewhor",
//             name: "Horarios",
//             icon: <FaCalendarAlt />
//         },
//         {
//             path: "/viewamb",
//             name: "Ambiente",
//             icon: <FaMusic />
//         },
//         {
//             path: "/viewins",
//             name: "Instalaciones/Funcionamiento",
//             icon: <FaCity />
//         },
//         {
//             path: "/viewseg",
//             name: "Seguridad",
//             icon: <FaUserShield />
//         },
//         {
//             path: "/viewent",
//             name: "Entorno",
//             icon: <FaRoute />
//         },
//         {
//             path: "/viewser",
//             name: "Servicios",
//             icon: <FaClipboardCheck />
//         },
//         {
//             path: "/viewesp",
//             name: "Espectaculos",
//             icon: <FaCocktail />
//         },
//         {
//             path: "/viewpers",
//             name: "Personal",
//             icon: <FaHandsHelping />
//         },
//         {
//             path: "/viewmar",
//             name: "Marketing",
//             icon: <FaPhotoVideo />
//         },
//         {
//             path: "/viewprec",
//             name: "Precios",
//             icon: <FaMoneyBillWave />
//         },
//         {
//             path: "/viewrscbuena",
//             name: "RSC-BuenasPrácticas",
//             icon: <FaUsersCog />
//         },
//         {
//             path: "/viewrscmala",
//             name: "RSC-MalasPrácticas",
//             icon: <FaPeopleCarry />
//         },
//         {
//             path: "/viewval",
//             name: "Valoración",
//             icon: <FaRegStar />
//         },

//     ]
//     return (
//         <div >
//             <div className="sidebar">
//                 <div className="top_section">
//                     <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>
//                 {
//                     menuItem.map((item, index) => (
//                         <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                             <div className="icon">{item.icon}</div>
//                             <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaCocktail,
//     FaCalendarAlt,
//     FaMusic,
//     FaCity,
//     FaUsersCog,
//     FaUserShield,
//     FaRoute,
//     FaRegStar,
//     FaClipboardCheck,
//     FaHandsHelping,
//     FaMoneyBillWave,
//     FaPeopleCarry,
//     FaPhotoVideo,
//     FaUsers
// } from "react-icons/fa";
// import { NavLink, useLocation } from 'react-router-dom';

// const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();

//     const toggle = () => setIsOpen(!isOpen);

//     const handleNavigation = () => {
//         if (isOpen) {
//             setIsOpen(false);
//         }
//     };

//     const menuItem = [
//         { path: "/principal", name: "Dashboard", icon: <FaTh /> },
//         { path: "/viewusers", name: "Users", icon: <FaUsers /> },
//         { path: "/establishments", name: "Establishments", icon: <FaRegStar /> },
//         { path: "/viewenc", name: "Datos Generales", icon: <FaUserAlt /> },
//         { path: "/viewhor", name: "Horarios", icon: <FaCalendarAlt /> },
//         { path: "/viewamb", name: "Ambiente", icon: <FaMusic /> },
//         { path: "/viewins", name: "Instalaciones/Funcionamiento", icon: <FaCity /> },
//         { path: "/viewseg", name: "Seguridad", icon: <FaUserShield /> },
//         { path: "/viewent", name: "Entorno", icon: <FaRoute /> },
//         { path: "/viewser", name: "Servicios", icon: <FaClipboardCheck /> },
//         { path: "/viewesp", name: "Espectaculos", icon: <FaCocktail /> },
//         { path: "/viewpers", name: "Personal", icon: <FaHandsHelping /> },
//         { path: "/viewmar", name: "Marketing", icon: <FaPhotoVideo /> },
//         { path: "/viewprec", name: "Precios", icon: <FaMoneyBillWave /> },
//         { path: "/viewrscbuena", name: "RSC-BuenasPrácticas", icon: <FaUsersCog /> },
//         { path: "/viewrscmala", name: "RSC-MalasPrácticas", icon: <FaPeopleCarry /> },
//         { path: "/viewval", name: "Valoración", icon: <FaRegStar /> }
//     ];

//     React.useEffect(() => {
//         handleNavigation();
//     }, [location.pathname]);

//     return (
//         <div style={{ display: 'flex' }}>
//             <div className="sidebar" style={{ width: isOpen ? '200px' : '50px' }}>
//                 <div className="top_section">
//                     <div style={{ marginLeft: "0px" }} className="bars">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>
//                 {menuItem.map((item, index) => (
//                     <NavLink to={item.path} key={index} className="link" activeClassName="active">
//                         <div className="icon">{item.icon}</div>
//                         <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//                     </NavLink>
//                 ))}
//             </div>
//             <main style={{ flexGrow: 1 }}>{children}</main>

//             <style jsx>{`
//                 .sidebar {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     height: 100%;
//                     background-color: #111;
//                     padding-top: 20px;
//                     transition: width 0.3s;
//                 }

//                 .top_section {
//                     display: flex;
//                     justify-content: center;
//                     margin-bottom: 20px;
//                 }

//                 .bars {
//                     font-size: 1.5rem;
//                     cursor: pointer;
//                     color: white;
//                 }

//                 .link {
//                     display: flex;
//                     align-items: center;
//                     padding: 10px;
//                     color: white;
//                     text-decoration: none;
//                     transition: background-color 0.2s;
//                 }

//                 .link:hover {
//                     background-color: #575757;
//                 }

//                 .active {
//                     background-color: #575757;
//                 }

//                 .icon {
//                     margin-right: 10px;
//                     font-size: 1.2rem;
//                 }

//                 .link_text {
//                     font-size: 1rem;
//                 }

//                 @media (max-width: 768px) {
//                     .sidebar {
//                         width: ${isOpen ? '150px' : '50px'};
//                     }

//                     .link_text {
//                         font-size: 0.8rem;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .sidebar {
//                         width: ${isOpen ? '120px' : '40px'};
//                     }

//                     .link_text {
//                         font-size: 0.7rem;
//                     }

//                     .icon {
//                         margin-right: 5px;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCocktail,
    FaCalendarAlt,
    FaMusic,
    FaCity,
    FaUsersCog,
    FaUserShield,
    FaRoute,
    FaRegStar,
    FaClipboardCheck,
    FaHandsHelping,
    FaMoneyBillWave,
    FaPeopleCarry,
    FaPhotoVideo,
    FaUsers
} from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => setIsOpen(!isOpen);

    const handleNavigation = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const menuItem = [
        { path: "/principal", name: "Dashboard", icon: <FaTh /> },
        { path: "/viewusers", name: "Users", icon: <FaUsers /> },
        { path: "/establishments", name: "Establishments", icon: <FaRegStar /> },
        { path: "/viewenc", name: "Datos Generales", icon: <FaUserAlt /> },
        { path: "/viewhor", name: "Horarios", icon: <FaCalendarAlt /> },
        { path: "/viewamb", name: "Ambiente", icon: <FaMusic /> },
        { path: "/viewins", name: "Instalaciones/Funcionamiento", icon: <FaCity /> },
        { path: "/viewseg", name: "Seguridad", icon: <FaUserShield /> },
        { path: "/viewent", name: "Entorno", icon: <FaRoute /> },
        { path: "/viewser", name: "Servicios", icon: <FaClipboardCheck /> },
        { path: "/viewesp", name: "Espectaculos", icon: <FaCocktail /> },
        { path: "/viewpers", name: "Personal", icon: <FaHandsHelping /> },
        { path: "/viewmar", name: "Marketing", icon: <FaPhotoVideo /> },
        { path: "/viewprec", name: "Precios", icon: <FaMoneyBillWave /> },
        { path: "/viewrscbuena", name: "RSC-BuenasPrácticas", icon: <FaUsersCog /> },
        { path: "/viewrscmala", name: "RSC-MalasPrácticas", icon: <FaPeopleCarry /> },
        { path: "/viewval", name: "Valoración", icon: <FaRegStar /> }
    ];

    React.useEffect(() => {
        handleNavigation();
    }, [location.pathname]);

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar" style={{ width: isOpen ? '200px' : '50px' }}>
                <div className="top_section">
                    <div style={{ marginLeft: "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main style={{ flexGrow: 1 }}>{children}</main>

            <style jsx>{`
                .sidebar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: #111;
                    padding-top: 20px;
                    transition: width 0.3s;
                    overflow-y: auto; /* Enable vertical scrolling */
                    scrollbar-width: none; /* Hide scrollbar for Firefox */
                    -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
                }

                .sidebar::-webkit-scrollbar {
                    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
                }

                .top_section {
                    display: flex;
                    justify-content: right;
                    margin-bottom: 20px;
                }

                .bars {
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: white;
                }

                .link {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    color: white;
                    text-decoration: none;
                    transition: background-color 0.2s;
                }

                .link:hover {
                    background-color: #575757;
                }

                .active {
                    background-color: #575757;
                }

                .icon {
                    margin-right: 10px;
                    font-size: 1.2rem;
                }

                .link_text {
                    font-size: 1rem;
                }

                @media (max-width: 768px) {
                    .sidebar {
                        width: ${isOpen ? '150px' : '50px'};
                    }

                    .link_text {
                        font-size: 0.8rem;
                    }
                }

                @media (max-width: 480px) {
                    .sidebar {
                        width: ${isOpen ? '120px' : '40px'};
                    }

                    .link_text {
                        font-size: 0.7rem;
                    }

                    .icon {
                        margin-right: 5px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Sidebar;

