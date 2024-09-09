// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditEntorno from '../enc_entorno/ModalEditEntorno';  // Import the modal for editing environment survey
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'entorno/';

// const ShowEntorno = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [entornos, setEntorno] = useState([]);
//   const [marcaComercial, setSearchMarca] = useState('');
//   const [urbanismo, setUrbanismo] = useState('');
//   const [observ_entorno, setObservEntorno] = useState('');

//   useEffect(() => {
//     getEntornos();
//   }, []);

//   const handleButtonClick = () => {
//     getEntornos();
//     setSearchMarca('');
//   };

//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     getEntornos();
//   };
//   const getEntornos = async () => {
//     try {
//         let res;
//         if (userRole === varAdmin) {
//             // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
//             res = await axios.get(`${URI}search`, {
//               params: {
//                 marca_comercial: marcaComercial,
//                 urbanismo: urbanismo,
//                 observ_entorno: observ_entorno
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             marca_comercial: marcaComercial,
//             urbanismo: urbanismo,
//             observ_entorno: observ_entorno
//           },
//         });
//       }
//       const encuestas = res.data;
//       setEntorno(encuestas);
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Entorno</div>
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
//                     <th>Urbanismo<br /></th>
//                     <th>Observaciones de Entorno <br /></th>
//                     <th>Acciones <br />
//                       <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                         <i className='fa fa-leaf'></i>
//                       </button>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {entornos.map((entorno) => (
//                     <tr key={entorno.ID}>
//                       <td> {entorno.marca_comercial}</td>
//                       <td> {entorno.urbanismo ? 'Si' : 'No'}  </td>
//                       <td> {entorno.observ_entorno } </td>
//                       <td>
//                         <ShowModalEditEntorno className=' btn btn-success btn-info' id={entorno.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowEntorno;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditEntorno from '../enc_entorno/ModalEditEntorno';
import { useNavigate } from 'react-router-dom';

const URI = api + 'entorno/';

const ShowEntorno = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const [entornos, setEntorno] = useState([]);
  const [marcaComercial, setSearchMarca] = useState('');
  const [urbanismo, setUrbanismo] = useState('');
  const [observ_entorno, setObservEntorno] = useState('');

  useEffect(() => {
    getEntornos();
  }, []);

  const handleButtonClick = () => {
    getEntornos();
    setSearchMarca('');
  };

  const handleSearchMarcaChange = (e) => {
    const value = e.target.value;
    setSearchMarca(value);
    getEntornos();
  };

  const getEntornos = async () => {
    try {
      let res;
      if (userRole === varAdmin) {
        res = await axios.get(`${URI}search`, {
          params: {
            marca_comercial: marcaComercial,
            urbanismo: urbanismo,
            observ_entorno: observ_entorno,
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            marca_comercial: marcaComercial,
            urbanismo: urbanismo,
            observ_entorno: observ_entorno,
          },
        });
      }
      // const encuestas = res.data;
      // setEntorno(encuestas);
      // Sorting the response data by 'encuesta_id'
      const sortedEncuestas = res.data.sort((a, b) => a.encuesta_id - b.encuesta_id);

      setEntorno(sortedEncuestas); // Set the sorted data to state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar>
        <div className="container-fluid mt-2">
          <div className="row mb-3">
            <div className="col-12">
              <h2 className="titulo_cuadro text-justify">Encuesta: Entorno</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* <table className="table table-bordered table-hover"> */}
              <table className="table table-striped mt-3 align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th>
                      Marca Comercial
                      <br />
                      <input
                        type="text"
                        placeholder="Buscar por alias"
                        value={marcaComercial}
                        onChange={handleSearchMarcaChange}
                      // className="form-control"
                      />
                    </th>
                    <th className='d-md-table-cell d-none'>Urbanismo</th>
                    <th className='d-md-table-cell d-none'>Observaciones de Entorno</th>
                    <th style={{ textAlign: "center" }}>
                      Acciones
                      <br />
                      <button
                        className="btn btn-success w-auto"
                        onClick={handleButtonClick}
                      >
                        <i className="fa fa-leaf"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entornos.map((entorno) => (
                    <tr key={entorno.ID}>
                      <td>{entorno.marca_comercial}</td>
                      <td className='d-md-table-cell d-none'>{entorno.urbanismo ? 'Si' : 'No'}</td>
                      <td className='d-md-table-cell d-none'>{entorno.observ_entorno}</td>
                      <td style={{ textAlign: "center" }}>
                        <ShowModalEditEntorno
                          className="btn btn-success"
                          id={entorno.ID}
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          getEntornos={getEntornos}
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

export default ShowEntorno;
