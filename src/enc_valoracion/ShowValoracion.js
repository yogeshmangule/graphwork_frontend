// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditVal from '../enc_valoracion/ModalEditValoracion.js';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'valoracion/';

// const ShowValoracion = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
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
//                 marca_comercial: marcaComercial
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Valoracion</div>
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
//                     <th>Valoracion Local<br /></th>
//                     <th>Valoracion Personal<br /></th>
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
//                       <td> {encuesta.val_local}</td>
//                       <td> {encuesta.val_personal}</td>

//                       <td>
//                         <ShowModalEditVal className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowValoracion;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditVal from '../enc_valoracion/ModalEditValoracion.js';
import { useNavigate } from 'react-router-dom';

const URI = api + 'valoracion/';

const ShowValoracion = () => {
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
    <div className="container-fluid">
      <Header />
      <Sidebar>
        <div className='mt-2 row'>
          <div className='col-12'>
            <div className='cuadro_princal'>
              <h2 className='titulo_cuadro'>Encuesta: Valoración</h2>
            </div>
          </div>

          {/* <div className='col-12 d-flex align-items-center'> */}
          <div className='table-responsive'>
            <table className='table mt-3' style={{ textAlign: "left" }}>
              <thead className='table-secondary'>
                <tr>
                  <th>Marca Comercial <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar por alias"
                      value={marcaComercial}
                      onChange={handleSearchMarcaChange}
                    />
                  </th>
                  <th>Valoración Local<br /></th>
                  <th>Valoración Personal<br /></th>
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
                    <td> {encuesta.marca_comercial}</td>
                    <td> {encuesta.val_local}</td>
                    <td> {encuesta.val_personal}</td>
                    <td style={{ textAlign: "center" }}>
                      <ShowModalEditVal className="btn btn-success btn-info" id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} getEncuestas={getEncuestas} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* </div> */}
        </div>
      </Sidebar>
    </div>
  );
}

export default ShowValoracion;
