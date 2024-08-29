// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditEspec from '../enc_espectaculos/ModalEditEspectaculo';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'espectaculo/';

// const ShowEspectaculo = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [ambMusicalNo, setAmbMusicalNo] = useState(false);
//   const [ambMusicalResidente, setAmbMusicalResidente] = useState(false);
//   const [ambMusicalPlaylist, setAmbMusicalPlaylist] = useState(false);
//   const [ambMusicalLiveset, setAmbMusicalLiveset] = useState(false);
//   const [ambMusicalGruposM, setAmbMusicalGruposM] = useState(false);
//   const [estiloMusicalComercial, setEstiloMusicalComercial] = useState(false);
//   const [estiloMusicalReggaeton, setEstiloMusicalReggaeton] = useState(false);
//   const [estiloMusicalElectro, setEstiloMusicalElectro] =useState(false);
//   const [estiloMusicalRemember, setEstiloMusicalRemember] = useState(false);
//   const [estiloMusicalOtro, setEstiloMusicalOtro] = useState('');
//   const [volumenMusica, setVolumenMusica] = useState('');
//   const [animacion, setAnimacion] = useState('');
//   const [visuales, setVisuales] = useState(false);
//   const [visualesSiEfecto, setVisualesSiEfecto] = useState(false);
//   const [visualesSiProyeccion, setVisualesSiProyeccion] = useState(false);
//   const [visualesSiPantalla, setVisualesSiPantalla] = useState(false);
//   const [bengalas, setBengalas] = useState(false);
//   const [bengalasSiUsoMesas, setBengalasSiUsoMesas] = useState(false);
//   const [bengalasSiUsoEquipos, setBengalasSiUsoEquipos] = useState(false);
//   const [bengalasSiUsoPublico, setBengalasSiUsoPublico] = useState(false);
//   const [ropia, setRopia] = useState(false);
//   const [ropiaPrecio, setRopiaPrecio] = useState('');
//   const [ropiaEstado, setRopiaEstado] = useState('');
//   const [observEspectaculos, setObservEspectaculos] = useState('');
//   const [marcaComercial, setSearchMarca] = useState('');

//   useEffect(() => {
//     getEncuestas();
//   }, []);

//   const handleButtonClick = () => {
//     getEncuestas();
//     setSearchMarca('');
//   };

//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     getEncuestas();
//   };


//   const getEncuestas = async () => {
//     try {
//         let res;
//         if (userRole === varAdmin) {
//             // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
//             res = await axios.get(`${URI}search`, {
//               params: {
//                 observ_espectaculos: observEspectaculos,
//                 marca_comercial: marcaComercial
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             observ_espectaculos: observEspectaculos,
//         marca_comercial: marcaComercial
//           },
//         });
//       }
//       const encuestas = res.data;
//       setEncuesta(encuestas);
//     } catch (error) {
//       console.error(error);
//       // Manejar errores de la solicitud
//     }
//   };

//   return (
//     <div>
//       <div>
//         <>
//           <Header />
//         </>
//         <Sidebar>
//           <div className='mt-2 row'>
//             <div className='cuadro_princal'>
//               <div className='parent-label titulo_cuadro '>Encuesta: Espectaculo</div>
//             </div>

//             <div className=' vh-1 d-flex align-items-center col'>
//               <table className='mt-3 table' style={{ textAlign: "left" }}>
//                 <thead className='table-secondary'>
//                   <tr>
//                     <th>Marca Comercial <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por alias"
//                         value={marcaComercial}
//                         onChange={handleSearchMarcaChange}
//                       />
//                     </th>
//                     <th>Ambiente Musical<br /></th>
//                     <th>Estilo Musical <br /></th>
//                     <th>Observaciones de Espectaculos <br /></th>
//                     <th>Acciones <br />
//                       <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                         <i className='fa fa-leaf'></i>
//                       </button>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {encuestas.map((encuesta) => (
//                     <tr key={encuesta.ID}>
//                       <td> {encuesta.marca_comercial}</td>
//                       <td> 
//                       {encuesta.amb_musical_no && 'NO '}
//                       {encuesta.amb_musical_residente && 'Residente, '}
//                       {encuesta.amb_musical_playlist && 'Play List, '}
//                       {encuesta.amb_musical_liveset && 'Live Set, '}
//                       {encuesta.amb_musical_gruposm && 'Grupos Músicales, '}

//                          </td>
//                          <td> 
//                       {encuesta.estilo_musical_comercial && 'Comercial y Grandes Éxitos, '}
//                       {encuesta.estilo_musical_reggaeton && 'Reggaetón y Urbana, '}
//                       {encuesta.estilo_musical_electro && 'Electrónica, '}
//                       {encuesta.estilo_musical_remember && 'Remember, '}
//                       {encuesta.estilo_musical_otro !== null && encuesta.estilo_musical_otro}

//                          </td>
//                       <td> {encuesta.observ_espectaculos} </td>
//                       <td>
//                         <ShowModalEditEspec className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </Sidebar>
//       </div>
//     </div>
//   )
// }

// export default ShowEspectaculo;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditEspec from '../enc_espectaculos/ModalEditEspectaculo';
import { useNavigate } from 'react-router-dom';

const URI = api + 'espectaculo/';

const ShowEspectaculo = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [marcaComercial, setSearchMarca] = useState('');

  useEffect(() => {
    getEncuestas();
  }, []);

  const handleButtonClick = () => {
    getEncuestas();
    setSearchMarca('');
  };

  const handleSearchMarcaChange = (e) => {
    const value = e.target.value;
    setSearchMarca(value);
    getEncuestas();
  };

  const getEncuestas = async () => {
    try {
      let res;
      if (userRole === varAdmin) {
        // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
        res = await axios.get(`${URI}search`, {
          params: {
            marca_comercial: marcaComercial
          },
        });
      } else {
        // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            marca_comercial: marcaComercial
          },
        });
      }
      const encuestas = res.data;
      setEncuesta(encuestas);
    } catch (error) {
      console.error(error);
      // Manejar errores de la solicitud
    }
  };

  return (
    <div>
      <Header />
      <Sidebar>
        <div className='mt-2 row'>
          <div className='cuadro_princal'>
            <div className='parent-label titulo_cuadro '>Encuesta: Espectaculo</div>
          </div>

          <div className='vh-1 d-flex align-items-center col'>
            <table className='mt-3 table' style={{ textAlign: "left" }}>
              <thead className='table-secondary'>
                <tr>
                  <th>Marca Comercial <br />
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={marcaComercial}
                      onChange={handleSearchMarcaChange}
                    />
                  </th>
                  <th>Ambiente Musical<br /></th>
                  <th>Estilo Musical <br /></th>
                  <th>Observaciones de Espectaculos <br /></th>
                  <th>Acciones <br />
                    <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
                      <i className='fa fa-leaf'></i>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td> {encuesta.marca_comercial}</td>
                    <td>
                      {encuesta.amb_musical_no && 'NO '}
                      {encuesta.amb_musical_residente && 'Residente, '}
                      {encuesta.amb_musical_playlist && 'Play List, '}
                      {encuesta.amb_musical_liveset && 'Live Set, '}
                      {encuesta.amb_musical_gruposm && 'Grupos Músicales, '}
                    </td>
                    <td>
                      {encuesta.estilo_musical_comercial && 'Comercial y Grandes Éxitos, '}
                      {encuesta.estilo_musical_reggaeton && 'Reggaetón y Urbana, '}
                      {encuesta.estilo_musical_electro && 'Electrónica, '}
                      {encuesta.estilo_musical_remember && 'Remember, '}
                      {encuesta.estilo_musical_otro !== null && encuesta.estilo_musical_otro}
                    </td>
                    <td> {encuesta.observ_espectaculos} </td>
                    <td>
                      <ShowModalEditEspec className="btn btn-success btn-info" id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
      <style jsx>{`
        .cuadro_princal {
          margin: 10px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .titulo_cuadro {
          font-weight: bold;
          font-size: 1.5em;
        }

        .table {
          width: 100%;
          margin-bottom: 1rem;
          color: #212529;
        }

        .table th, .table td {
          padding: 0.75rem;
          vertical-align: top;
          border-top: 1px solid #dee2e6;
        }

        .table thead th {
          vertical-align: bottom;
          border-bottom: 2px solid #dee2e6;
        }

        @media (max-width: 768px) {
          .cuadro_princal {
            margin: 10px;
            padding: 15px;
          }

          .titulo_cuadro {
            font-size: 1.2em;
          }

          .table thead th {
            font-size: 0.85em;
          }

          .table input {
            width: 100%;
            padding: 5px;
            margin-top: 5px;
            box-sizing: border-box;
          }

          .table .btn {
            width: 100%;
            margin-top: 10px;
          }
        }

        @media (max-width: 480px) {
          .table thead th {
            font-size: 0.75em;
          }

          .table input {
            font-size: 0.8em;
            padding: 3px;
          }

          .table .btn {
            font-size: 0.9em;
          }
        }
      `}</style>
    </div>
  )
}

export default ShowEspectaculo;

