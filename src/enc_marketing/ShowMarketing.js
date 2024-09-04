// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditMar from '../enc_marketing/ModalEditMarketing';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'marketing/';

// const ShowMarketing = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [marcaComercial, setSearchMarca] = useState('');
//   const [observMarketing, setObservMarketing] = useState('');

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
//                 marca_comercial: marcaComercial,
//         Observ_marketing: observMarketing,
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             marca_comercial: marcaComercial,
//             Observ_marketing: observMarketing,
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Marketing</div>
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
//                     <th>Sitio web activo<br /></th>
//                     <th>Facebook activo <br /></th>
//                     <th>Instagram activo <br /></th>
//                     <th>Otra red social activa <br /></th>
//                     <th>Observaciones (Módulo Marketing) <br /></th>
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
//                       <td> {encuesta.web_activo}</td>
//                       <td> 
//                          {encuesta.facebook && encuesta.facebook.toLowerCase() === 'si' ? (
//     <>
//       {encuesta.facebook} publicaciones al mes: {encuesta.facebook_publ_mes}
//     </>
//   ) : (
//     'No'
//   )}
// </td>
//                         <td>
//   {encuesta.instagram && encuesta.instagram.toLowerCase() === 'si' ?  (
//     <>
//       {encuesta.instagram} publicaciones al mes: {encuesta.instagram_publ_mes}
//     </>
//   ) : (
//     'No'
//   )}
// </td>
// <td>
//   {encuesta.otras_redes && encuesta.otras_redes.toLowerCase() === 'si' && encuesta.otras_redes_publ_mes ?  (
//     <>
//       {encuesta.otras_redes_cual} publicaciones al mes: {encuesta.otras_redes_publ_mes}
//     </>
//   ) : (
//     'No'
//   )}
// </td>


//                       <td> {encuesta.Observ_marketing} </td>
//                       <td>
//                         <ShowModalEditMar className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowMarketing;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from '../servicios/api';
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditMar from '../enc_marketing/ModalEditMarketing';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const URI = api + 'marketing/';

const ShowMarketing = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [marcaComercial, setSearchMarca] = useState('');
  const [observMarketing, setObservMarketing] = useState('');

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
            marca_comercial: marcaComercial,
            Observ_marketing: observMarketing,
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            marca_comercial: marcaComercial,
            Observ_marketing: observMarketing,
          },
        });
      }
      setEncuesta(res.data);
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
            <div className='col-12 mb-3'>
              <div className='cuadro_princal'>
                <h2 className='parent-label titulo_cuadro'>Encuesta: Marketing</h2>
              </div>
            </div>

            <div className='col-12'>
              <table className='table table-responsive table-bordered table-hover'>
                <thead className='table-secondary'>
                  <tr>
                    <th>Marca Comercial <br />
                      <input
                        type='text'
                        placeholder='Buscar por alias'
                        value={marcaComercial}
                        onChange={handleSearchMarcaChange}
                        className='form-control'
                      />
                    </th>
                    <th className="d-md-table-cell d-none">Sitio web activo<br /></th>
                    <th className="d-md-table-cell d-none">Facebook activo<br /></th>
                    <th className="d-md-table-cell d-none">Instagram activo<br /></th>
                    <th className="d-md-table-cell d-none">Otra red social activa<br /></th>
                    <th className="d-md-table-cell d-none">Observaciones (Módulo Marketing)<br /></th>
                    <th style={{ textAlign: "center" }}>Acciones<br />
                      <button
                        className='btn btn-success'
                        onClick={handleButtonClick}
                        style={{ marginLeft: '10px' }}
                      >
                        <i className='fa fa-leaf'></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {encuestas.map((encuesta) => (
                    <tr key={encuesta.ID}>
                      <td>{encuesta.marca_comercial}</td>
                      <td className="d-md-table-cell d-none">{encuesta.web_activo}</td>
                      <td className="d-md-table-cell d-none">
                        {encuesta.facebook && encuesta.facebook.toLowerCase() === 'si' ? (
                          <>
                            {encuesta.facebook} publicaciones al mes: {encuesta.facebook_publ_mes}
                          </>
                        ) : (
                          'No'
                        )}
                      </td>
                      <td className="d-md-table-cell d-none">
                        {encuesta.instagram && encuesta.instagram.toLowerCase() === 'si' ? (
                          <>
                            {encuesta.instagram} publicaciones al mes: {encuesta.instagram_publ_mes}
                          </>
                        ) : (
                          'No'
                        )}
                      </td>
                      <td className="d-md-table-cell d-none">
                        {encuesta.otras_redes && encuesta.otras_redes.toLowerCase() === 'si' && encuesta.otras_redes_publ_mes ? (
                          <>
                            {encuesta.otras_redes_cual} publicaciones al mes: {encuesta.otras_redes_publ_mes}
                          </>
                        ) : (
                          'No'
                        )}
                      </td>
                      <td className="d-md-table-cell d-none">{encuesta.Observ_marketing}</td>
                      <td style={{ textAlign: "center" }}>
                        <ShowModalEditMar
                          className='btn btn-success btn-info'
                          id={encuesta.ID}
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          getEncuestas={getEncuestas}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ShowMarketing;
