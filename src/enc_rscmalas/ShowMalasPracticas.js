// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin, api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditMla from '../enc_rscmalas/ModalEditMalas';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'rscmala/';

// const ShowMalasPracticas = () => {
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
//               <div className='parent-label titulo_cuadro '>Encuesta: RCS Malas Practicas</div>
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
//                     <th>Observaciones Malas Practicas<br /></th>
//                     <th>Observaciones Incidentes<br /></th>
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
//                       <td> {encuesta.observ_malas}</td>
//                       <td> {encuesta.observ_incid}</td>
//                       <td>
//                         <ShowModalEditMla className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowMalasPracticas;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditMla from '../enc_rscmalas/ModalEditMalas';
import { useNavigate } from 'react-router-dom';

const URI = api + 'rscmala/';

const ShowMalasPracticas = () => {
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
        res = await axios.get(`${URI}search`, {
          params: {
            marca_comercial: marcaComercial
          },
        });
      } else {
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
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <Sidebar>
        <div className='mt-2 row'>
          <div className='cuadro_princal'>
            <div className='parent-label titulo_cuadro '>Encuesta: RCS Malas Practicas</div>
          </div>

          {/* <div className='vh-1 d-flex align-items-center col'> */}
          <div className="table-responsive">
            <table className='mt-3 table table-bordered' style={{ textAlign: "left" }}>
              <thead className='table-secondary'>
                <tr>
                  <th>Marca Comercial</th>
                  <th>Observaciones Malas Practicas</th>
                  <th>Observaciones Incidentes</th>
                  <th>Acciones</th>
                </tr>
                <tr>
                  <th>
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={marcaComercial}
                      onChange={handleSearchMarcaChange}
                      className="form-control"
                    />
                  </th>
                  <th colSpan="3">
                    <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
                      <i className='fa fa-leaf'></i> Buscar
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td>{encuesta.marca_comercial}</td>
                    <td>{encuesta.observ_malas}</td>
                    <td>{encuesta.observ_incid}</td>
                    <td>
                      <ShowModalEditMla
                        className='btn btn-success btn-info'
                        id={encuesta.ID}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                      />
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

export default ShowMalasPracticas;
