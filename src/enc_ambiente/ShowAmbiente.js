// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { varAdmin, api } from "../servicios/api"
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalEdit from '../enc_ambiente/ModalEditAmbiente';
// import { useNavigate } from 'react-router-dom';
// import ShowModal from '../enc_ambiente/ShowCreateAmbiente';


// const URI = api + 'ambiente/';


// const CompShowAmbiente = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   console.log(isAutenticado);
//   const [encuestas, setEncuesta] = useState([])
//   const [musicaL, setMusicaL] = useState('');
//   const [musicaM, setMusicaM] = useState('');
//   const [musicaX, setMusicaX] = useState('');
//   const [musicaJ, setMusicaJ] = useState('');
//   const [musicaV, setMusicaV] = useState('');
//   const [musicaS, setMusicaS] = useState('');
//   const [musicaD, setMusicaD] = useState('');
//   const [edad, setEdad] = useState('');
//   const [poder, setPoder] = useState('');
//   const [aspecto, setAspecto] = useState('');
//   const [Observ, setObserv] = useState('');
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [esEncuestaRegistrada, setEsEncuestaRegistrada] = useState(false);

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };




//   const [encuestaMarca, setSearchMarca] = useState('');

//   const abierto = false;



//   const handleButtonClick = () => {
//     getEncuestas();
//     // Limpiar los valores de los inputs estableciendo los estados en ''
//     setSearchMarca('');

//   };


//   useEffect(() => {

//     getEncuestas()
//   }, []);



//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     // Realizar la búsqueda en tiempo real
//     getEncuestas();
//   };

//   const getEncuestas = async () => {
//     try {
//       let res;
//       if (userRole === varAdmin) {
//         // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
//         res = await axios.get(`${URI}search`, {
//           params: {
//             musicaL: musicaL,
//             musicaM: musicaM,
//             musicaX: musicaX,
//             musicaJ: musicaJ,
//             musicaV: musicaV,
//             musicaS: musicaS,
//             musicaD: musicaD,
//             edad: edad,
//             poder: poder,
//             aspecto: aspecto,
//             Observ: Observ,
//             marca_comercial: encuestaMarca
//           },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             musicaL: musicaL,
//             musicaM: musicaM,
//             musicaX: musicaX,
//             musicaJ: musicaJ,
//             musicaV: musicaV,
//             musicaS: musicaS,
//             musicaD: musicaD,
//             edad: edad,
//             poder: poder,
//             aspecto: aspecto,
//             Observ: Observ,
//             marca_comercial: encuestaMarca
//           },
//         });
//       }

//       console.log(res);
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Ambiente</div>

//             </div>

//             <div className=' vh-1 d-flex align-items-center col'>


//               <table className='mt-3 table' style={{ textAlign: "left" }}>
//                 <thead className='table-secondary'>

//                   <tr>
//                     <th>Marca Comercial <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por alias"
//                         value={encuestaMarca}
//                         onChange={handleSearchMarcaChange}
//                       />
//                     </th>
//                     <th>Edades<br /></th>
//                     <th>Lunes<br />
//                     </th>
//                     <th>Martes <br />
//                     </th>
//                     <th>Miercoles<br />
//                     </th>
//                     {/* Comentando la sección de Fecha de Creación */}
//                     <th>Jueves <br /></th>
//                     <th>Viernes <br /></th>
//                     <th>Sabado <br /></th>
//                     <th>Domingo <br /></th>
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
//                       <td>  {encuesta.marca_comercial}</td>
//                       <td>  {encuesta.edad}</td>
//                       <td> {encuesta.musicaL}  </td>
//                       <td> {encuesta.musicaM} </td>
//                       <td> {encuesta.musicaX}</td>
//                       <td> {encuesta.musicaJ}  </td>
//                       <td> {encuesta.musicaV}  </td>
//                       <td> {encuesta.musicaS}  </td>
//                       <td> {encuesta.musicaD} </td>

//                       <td>
//                         <ShowModalEdit className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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

// export default CompShowAmbiente


import axios from 'axios';
import { useState, useEffect } from 'react';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalEdit from '../enc_ambiente/ModalEditAmbiente';
import { useNavigate } from 'react-router-dom';
import ShowModal from '../enc_ambiente/ShowCreateAmbiente';

const URI = api + 'ambiente/';

const CompShowAmbiente = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  console.log(isAutenticado);
  const [encuestas, setEncuesta] = useState([]);
  const [musicaL, setMusicaL] = useState('');
  const [musicaM, setMusicaM] = useState('');
  const [musicaX, setMusicaX] = useState('');
  const [musicaJ, setMusicaJ] = useState('');
  const [musicaV, setMusicaV] = useState('');
  const [musicaS, setMusicaS] = useState('');
  const [musicaD, setMusicaD] = useState('');
  const [edad, setEdad] = useState('');
  const [poder, setPoder] = useState('');
  const [aspecto, setAspecto] = useState('');
  const [Observ, setObserv] = useState('');
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [esEncuestaRegistrada, setEsEncuestaRegistrada] = useState(false);
  const [encuestaMarca, setSearchMarca] = useState('');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
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
            musicaL,
            musicaM,
            musicaX,
            musicaJ,
            musicaV,
            musicaS,
            musicaD,
            edad,
            poder,
            aspecto,
            Observ,
            marca_comercial: encuestaMarca
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            musicaL,
            musicaM,
            musicaX,
            musicaJ,
            musicaV,
            musicaS,
            musicaD,
            edad,
            poder,
            aspecto,
            Observ,
            marca_comercial: encuestaMarca
          },
        });
      }
      setEncuesta(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container">
      <Header />
      <Sidebar>
        <div className='mt-2 row'>
          <div className='cuadro_princal'>
            <div className='parent-label titulo_cuadro'>Encuesta: Ambiente</div>
          </div>
          <div className='table-container vh-1 d-flex align-items-center col'>
            <table className='mt-3 table' style={{ textAlign: "left" }}>
              <thead className='table-secondary'>
                <tr>
                  <th>Marca Comercial <br />
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={encuestaMarca}
                      onChange={handleSearchMarcaChange}
                    />
                  </th>
                  <th>Edades<br /></th>
                  <th>Lunes<br /></th>
                  <th>Martes <br /></th>
                  <th>Miercoles<br /></th>
                  <th>Jueves <br /></th>
                  <th>Viernes <br /></th>
                  <th>Sabado <br /></th>
                  <th>Domingo <br /></th>
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
                    <td>{encuesta.marca_comercial}</td>
                    <td>{encuesta.edad}</td>
                    <td>{encuesta.musicaL}</td>
                    <td>{encuesta.musicaM}</td>
                    <td>{encuesta.musicaX}</td>
                    <td>{encuesta.musicaJ}</td>
                    <td>{encuesta.musicaV}</td>
                    <td>{encuesta.musicaS}</td>
                    <td>{encuesta.musicaD}</td>
                    <td>
                      <ShowModalEdit className='btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>

      <style jsx>{`
        .main-container {
          padding: 20px;
        }

        .table-container {
          overflow-x: auto;
        }

        .table {
          width: 100%;
          margin-bottom: 20px;
        }

        th, td {
          white-space: nowrap;
          padding: 8px;
          text-align: left;
        }

        @media (max-width: 768px) {
          .titulo_cuadro {
            font-size: 18px;
            text-align: center;
          }

          .table-container {
            padding: 10px;
          }

          th, td {
            font-size: 12px;
            padding: 4px;
          }

          .btn {
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .titulo_cuadro {
            font-size: 16px;
            text-align: center;
          }

          th, td {
            font-size: 10px;
            padding: 2px;
          }

          .btn {
            padding: 4px 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default CompShowAmbiente;
