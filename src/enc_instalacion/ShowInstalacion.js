// import axios from 'axios'
// import {useState, useEffect} from 'react'
// import {  varAdmin, api } from "../servicios/api"
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalEdit from '../enc_instalacion/ModalEditInstalacion';
// import { useNavigate } from 'react-router-dom';
// import ShowModal from '../enc_instalacion/ShowCreateInstalacion';

// const URI = api+'instalacion/';


// const CompShowInstalacion = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const userId = localStorage.getItem('userId'); 
//     const userRole = localStorage.getItem('userRol');
//     const isAutenticado = localStorage.getItem('isAutenticado');
//     const [encuestas, setEncuesta] = useState([])
//     const [pista, setPista] = useState('');
//     const [escenario, setEscenario] = useState('');
//     const [encuestaMarca, setSearchMarca] = useState('');
//     const [showSecondModal, setShowSecondModal] = useState(false);
//     const [esEncuestaRegistrada, setEsEncuestaRegistrada] = useState(false);

//     const handleModalClose = () => {
//         setIsModalOpen(false);
//       };

//     const handleButtonClick = () => {
//         getEncuestas();
//         // Limpiar los valores de los inputs estableciendo los estados en ''
//         setSearchMarca('');

//       };


//       useEffect( ()=>{

//         getEncuestas()
//     }, []);

//     const handleSearchMarcaChange = (e) => {
//         const value = e.target.value;
//         setSearchMarca(value);
//         // Realizar la búsqueda en tiempo real
//         getEncuestas();
//       };

//       const getEncuestas = async () => {
//         try {
//             let res;
//             if (userRole === varAdmin) {
//                 // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
//                 res = await axios.get(`${URI}search`, {
//                     params: {
//                         pista: pista,
//                         escenario: escenario,
//                         marca_comercial: encuestaMarca
//                     },
//             });
//           } else {
//             // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//             res = await axios.get(`${URI}user/${userId}`, {
//                 params: {
//                     pista: pista,
//                     escenario: escenario,
//                     marca_comercial: encuestaMarca
//                 },
//             });
//           }

//           const encuestas = res.data;
//           setEncuesta(encuestas);

//         } catch (error) {
//           console.error(error);
//           // Manejar errores de la solicitud
//         }
//       };


//     return(
//         <div>
//   <div>
//   <>
// <Header />
//   </>
//   <Sidebar>

//   <div className='mt-2 row'>

//       <div className='cuadro_princal'>
//       <div className='parent-label titulo_cuadro '>Encuesta: Instalacion y Funcionamiento</div>
//       </div>

//       <div className=' vh-1 d-flex align-items-center col'>


//           <table className='mt-3 table' style={{ textAlign: "left" }}>
//               <thead className='table-secondary'>

//                   <tr>
//                       <th>Marca Comercial <br />
//                       <input
//                           type="text"
//                           placeholder="Buscar por alias"
//                           value={encuestaMarca}
//                           onChange={handleSearchMarcaChange}
//                        />
//                       </th>
//                       <th>Pista<br />
//                       </th>
//                       <th>Escenario <br />
//                       </th>
//                       <th>Acciones <br />
//                           <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                               <i className='fa fa-leaf'></i>
//                           </button>
//                       </th>
//                   </tr>
//               </thead>
//               <tbody>
//                   { encuestas.map ( (encuesta) => (
//                       <tr key={ encuesta.ID}>
//                           <td>  {encuesta.marca_comercial}</td>
//                           <td> { encuesta.pista ? 'Si' : 'No' }  </td>
//                           <td> { encuesta.escenario ? 'Si' : 'No'}  </td>
//                           <td>
//                               <ShowModalEdit className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

//                           </td>
//                       </tr>
//                   )) }
//               </tbody>

//           </table>
//       </div>    
//   </div>
//   </Sidebar>
// </div>





//         </div>
//     )

// }

// export default CompShowInstalacion


import axios from 'axios';
import { useState, useEffect } from 'react';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalEdit from '../enc_instalacion/ModalEditInstalacion';
import { useNavigate } from 'react-router-dom';
import ShowModal from '../enc_instalacion/ShowCreateInstalacion';

const URI = api + 'instalacion/';

const CompShowInstalacion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRol');
    const isAutenticado = localStorage.getItem('isAutenticado');
    const [encuestas, setEncuesta] = useState([]);
    const [pista, setPista] = useState('');
    const [escenario, setEscenario] = useState('');
    const [encuestaMarca, setSearchMarca] = useState('');
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [esEncuestaRegistrada, setEsEncuestaRegistrada] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleButtonClick = () => {
        getEncuestas();
        setSearchMarca('');
    };

    useEffect(() => {
        getEncuestas();
    }, []);

    const handleSearchMarcaChange = (e) => {
        const value = e.target.value;
        setSearchMarca(value);
        getEncuestas();
    };

    const getEncuestas = async () => {
        try {
            let res;
            if (userRole === varAdmin) {
                res = await axios.get(`${URI}search`, {
                    params: {
                        pista: pista,
                        escenario: escenario,
                        marca_comercial: encuestaMarca
                    },
                });
            } else {
                res = await axios.get(`${URI}user/${userId}`, {
                    params: {
                        pista: pista,
                        escenario: escenario,
                        marca_comercial: encuestaMarca
                    },
                });
            }

            const encuestas = res.data;
            setEncuesta(encuestas);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Header />
            <Sidebar>
                <div className='container-fluid mt-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cuadro_princal'>
                                <div className='parent-label titulo_cuadro'>Encuesta: Instalacion y Funcionamiento</div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered mt-3' style={{ textAlign: "left" }}>
                                    <thead className='table-secondary' style={{ textAlign: "center" }}>
                                        <tr>
                                            <th>Marca Comercial <br />
                                                <input
                                                    type="text"
                                                    placeholder="Buscar por alias"
                                                    value={encuestaMarca}
                                                    onChange={handleSearchMarcaChange}
                                                    className="form-control"
                                                />
                                            </th>
                                            <th className='d-md-table-cell d-none'>Pista<br /></th>
                                            <th className='d-md-table-cell d-none'>Escenario <br /></th>
                                            <th style={{ textAlign: "center" }}>Acciones <br />
                                                <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
                                                    <i className='fa fa-leaf'></i>
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {encuestas.map((encuesta) => (
                                            <tr key={encuesta.ID}>
                                                <td>{encuesta.marca_comercial}</td>
                                                <td className='d-md-table-cell d-none'>{encuesta.pista ? 'Si' : 'No'}</td>
                                                <td className='d-md-table-cell d-none'>{encuesta.escenario ? 'Si' : 'No'}</td>
                                                <td style={{ textAlign: "center" }}>
                                                    <ShowModalEdit className='btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} getEncuestas={getEncuestas} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}

export default CompShowInstalacion;
