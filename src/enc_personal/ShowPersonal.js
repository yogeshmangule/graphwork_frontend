// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin, api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditPersona from '../enc_personal/ModalEditPersonal';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'personal/';

// const ShowPersonal = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [persSeguridad, setPersSeguridad] = useState(0);
//   const [persSegImagen, setPersSegImagen] = useState('');
//   const [persSegActitud, setPersSegActitud] = useState('');
//   const [persSegIdiomaIngles, setPersSegIdiomaIngles] = useState(false);
//   const [persSegIdiomaFrances, setPersSegIdiomaFrances] = useState(false);
//   const [persSegIdiomaOtra, setPersSegIdiomaOtra] = useState('');
//   const [persBarra, setPersBarra] = useState(0);
//   const [persBarraImagen, setPersBarraImagen] = useState('');
//   const [persBarraActitud, setPersBarraActitud] = useState('');
//   const [persBarraIdiomaIngles, setPersBarraIdiomaIngles] = useState(false);
//   const [persBarraIdiomaFrances, setPersBarraIdiomaFrances] = useState(false);
//   const [persBarraIdiomaOtro, setPersBarraIdiomaOtro] = useState('');
//   const [persCocteleria, setPersCocteleria] = useState(false);
//   const [observPersonal, setObservPersonal] = useState('');
//   const [createdAt, setCreatedAt] = useState('');
//   const [updatedAt, setUpdatedAt] = useState('');
//   const [encuestaId, setEncuestaId] = useState(0);
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
//                 observ_personal: observPersonal,
//         marca_comercial: marcaComercial
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             observ_personal: observPersonal,
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Personal</div>
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
//                     <th>Personal de seguridad<br /></th>
//                     <th>Idiomas: (Seguridad y control accesos:) <br /></th>
//                     <th>Número trabajadores Barras <br /></th>
//                     <th>Idiomas: (Barras y office:) <br /></th>
//                     <th>Observaciones (Módulo Personal) <br /></th>
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
//                       <td> {encuesta.pers_seguridad}</td>
//                       <td> 
//                       {encuesta.pers_seg_idioma_ingles && 'Ingles, '}
//                       {encuesta.pers_seg_idioma_ingles && 'Fránces, '}
//                       {encuesta.pers_seg_idioma_otra !== null && encuesta.pers_seg_idioma_otra} </td>
//                       <td> {encuesta.pers_barra}</td>
//                       <td> 
//                       {encuesta.pers_barra_idioma_ingles && 'Ingles, '}
//                       {encuesta.pers_barra_idioma_frances && 'Fránces, '}
//                       {encuesta.pers_barra_idioma_otro !== null && encuesta.pers_barra_idioma_otro}</td>
//                       <td> {encuesta.observ_personal} </td>
//                       <td>
//                         <ShowModalEditPersona className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowPersonal;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditPersona from '../enc_personal/ModalEditPersonal';
import { useNavigate } from 'react-router-dom';

const URI = api + 'personal/';

const ShowPersonal = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [observPersonal, setObservPersonal] = useState('');
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
        res = await axios.get(`${URI}search`, {
          params: {
            observ_personal: observPersonal,
            marca_comercial: marcaComercial
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            observ_personal: observPersonal,
            marca_comercial: marcaComercial
          },
        });
      }
      // const encuestas = res.data;
      // setEncuesta(encuestas);
      // Sorting the response data by 'encuesta_id'
      const sortedEncuestas = res.data.sort((a, b) => a.encuesta_id - b.encuesta_id);

      setEncuesta(sortedEncuestas); // Set the sorted data to state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar>
        <div className='mt-2 row'>
          <div className='cuadro_princal'>
            <div className='parent-label titulo_cuadro '>Encuesta: Personal</div>
          </div>

          {/* <div className='vh-1 d-flex align-items-center col'> */}
          <div className='table-responsive'>
            {/* <table className='mt-3 table' style={{ textAlign: "left" }}> */}
            <table className="table table-striped mt-3 align-middle">
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
                  <th className='d-md-table-cell d-none'>Personal de seguridad<br /></th>
                  <th className='d-md-table-cell d-none'>Idiomas: (Seguridad y control accesos:) <br /></th>
                  <th className='d-md-table-cell d-none'>Número trabajadores Barras <br /></th>
                  <th className='d-md-table-cell d-none'>Idiomas: (Barras y office:) <br /></th>
                  <th className='d-md-table-cell d-none'>Observaciones (Módulo Personal) <br /></th>
                  <th style={{ textAlign: "center" }}>Acciones <br />
                    <button className='btn btn-success w-auto' onClick={handleButtonClick}>
                      <i className='fa fa-leaf'></i>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td> {encuesta.marca_comercial}</td>
                    <td className='d-md-table-cell d-none'> {encuesta.pers_seguridad}</td>
                    <td className='d-md-table-cell d-none'>
                      {encuesta.pers_seg_idioma_ingles && 'Inglés, '}
                      {encuesta.pers_seg_idioma_frances && 'Fránces, '}
                      {encuesta.pers_seg_idioma_otra !== null && encuesta.pers_seg_idioma_otra}
                    </td>
                    <td className='d-md-table-cell d-none'> {encuesta.pers_barra}</td>
                    <td className='d-md-table-cell d-none'>
                      {encuesta.pers_barra_idioma_ingles && 'Inglés, '}
                      {encuesta.pers_barra_idioma_frances && 'Fránces, '}
                      {encuesta.pers_barra_idioma_otro !== null && encuesta.pers_barra_idioma_otro}
                    </td>
                    <td className='d-md-table-cell d-none'> {encuesta.observ_personal} </td>
                    <td style={{ textAlign: "center" }}>
                      <ShowModalEditPersona className='btn btn-success' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} getEncuestas={getEncuestas} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>

      {/* <style jsx>{`
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

        .table input {
          width: 100%;
          padding: 5px;
          margin-top: 5px;
          box-sizing: border-box;
        }

        .table .btn {
          margin-top: 10px;
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
      `}</style> */}
    </div>
  );
}

export default ShowPersonal;
