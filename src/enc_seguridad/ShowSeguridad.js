// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin, api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditSeguridad from '../enc_seguridad/ModalEditSeguridad';  // Import the modal for editing security survey
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'seguridad/';

// const ShowSeguridad = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [evacuacion_entrada, setEvacuacionEntrada] = useState('');
//   const [evacuacion_pista, setEvacuacionPista] = useState('');
//   const [evacuacion_accesoWC, setEvacuacionAccesoWC] = useState('');
//   const [evacuacion_barras, setEvacuacionBarra] = useState('');
//   const [evacuacion_otro, setEvacuacionOtro] = useState('');
//   const [controlaforo, setControlaforo] = useState('');
//   const [observSegur, setObservSegur] = useState('');
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
//                 evacuacion_entrada: evacuacion_entrada,
//                 evacuacion_pista: evacuacion_pista,
//                 evacuacion_accesoWC: evacuacion_accesoWC,
//                 evacuacion_barras: evacuacion_barras,
//                 controlaforo: controlaforo,
//                 evacuacion_otro: evacuacion_otro,
//                 marca_comercial: marcaComercial
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             evacuacion_entrada: evacuacion_entrada,
//             evacuacion_pista: evacuacion_pista,
//             evacuacion_accesoWC: evacuacion_accesoWC,
//             evacuacion_barras: evacuacion_barras,
//             controlaforo: controlaforo,
//             evacuacion_otro: evacuacion_otro,
//             marca_comercial: marcaComercial
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Seguridad</div>
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
//                     <th>Evacuación<br /></th>
//                     <th>Control de Aforo <br /></th>
//                     <th>Observaciones de Seguridad <br /></th>
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
//                       {encuesta.evacuacion_entrada && 'Entrada, '}
//                       {encuesta.evacuacion_pista && 'Pista, '}
//                       {encuesta.evacuacion_accesoWC && 'Acceso WC, '}
//                       {encuesta.evacuacion_barras && 'Barras, '}
//                       {encuesta.evacuacion_otro !== null && encuesta.evacuacion_otro}

//                          </td>
//                       <td> {encuesta.controlaforo} </td>
//                       <td> {encuesta.Observ_segur} </td>
//                       <td>
//                         <ShowModalEditSeguridad className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowSeguridad;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditSeguridad from '../enc_seguridad/ModalEditSeguridad';
import { useNavigate } from 'react-router-dom';

const URI = api + 'seguridad/';

const ShowSeguridad = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const [encuestas, setEncuesta] = useState([]);
  const [evacuacion_entrada, setEvacuacionEntrada] = useState('');
  const [evacuacion_pista, setEvacuacionPista] = useState('');
  const [evacuacion_accesoWC, setEvacuacionAccesoWC] = useState('');
  const [evacuacion_barras, setEvacuacionBarra] = useState('');
  const [evacuacion_otro, setEvacuacionOtro] = useState('');
  const [controlaforo, setControlaforo] = useState('');
  const [observSegur, setObservSegur] = useState('');
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
            evacuacion_entrada,
            evacuacion_pista,
            evacuacion_accesoWC,
            evacuacion_barras,
            controlaforo,
            evacuacion_otro,
            marca_comercial: marcaComercial,
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            evacuacion_entrada,
            evacuacion_pista,
            evacuacion_accesoWC,
            evacuacion_barras,
            controlaforo,
            evacuacion_otro,
            marca_comercial: marcaComercial,
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
        <div className='container-fluid mt-2'>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h2>Encuesta: Seguridad</h2>
              </div>
            </div>
            {/* <div className='col-12'> */}
            <div className='table-responsive'>
              {/* <table className='table table-bordered table-hover'> */}
              <table className="table table-striped mt-3 align-middle">

                <thead className='table-secondary'>
                  <tr>
                    <th>
                      Marca Comercial
                      <br />
                      <input
                        type="text"
                        placeholder="Buscar por alias"
                        value={marcaComercial}
                        onChange={handleSearchMarcaChange}
                      // className='form-control'
                      />
                    </th>
                    <th className="d-md-table-cell d-none">Evacuación</th>
                    <th className="d-md-table-cell d-none">Control de Aforo</th>
                    <th className="d-md-table-cell d-none">Observaciones de Seguridad</th>
                    <th style={{ textAlign: "center" }}>
                      Acciones
                      <br />
                      <button className='btn btn-success w-auto' onClick={handleButtonClick}>
                        <i className='fa fa-leaf'></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {encuestas.map((encuesta) => (
                    <tr key={encuesta.ID}>
                      <td>{encuesta.marca_comercial}</td>
                      <td className="d-md-table-cell d-none">
                        {encuesta.evacuacion_entrada && 'Entrada, '}
                        {encuesta.evacuacion_pista && 'Pista, '}
                        {encuesta.evacuacion_accesoWC && 'Acceso WC, '}
                        {encuesta.evacuacion_barras && 'Barras, '}
                        {encuesta.evacuacion_otro !== null && encuesta.evacuacion_otro}
                      </td>
                      <td className="d-md-table-cell d-none">{encuesta.controlaforo}</td>
                      <td className="d-md-table-cell d-none">{encuesta.Observ_segur}</td>
                      <td style={{ textAlign: "center" }}>
                        <ShowModalEditSeguridad
                          className="btn btn-success w-auto"
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
            {/* </div> */}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ShowSeguridad;

