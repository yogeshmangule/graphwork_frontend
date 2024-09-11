// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEdit from '../enc_servicio/ModalEditServicio';  // Import the modal for editing security survey
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'servicio/';

// const ShowServicio = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [marca_bebidas_premium, setMarcaBebidasPremium] = useState(false);
//   const [marca_bebidas_standar, setMarcaBebidasStandar] = useState(false);
//   const [marca_bebidas_blancas, setMarcaBebidasBlancas] = useState(false);
//   const [marca_bebidas_otras, setMarcaBebidasOtras] = useState('');
//   const [vajilla_tubo_extra, setVajillaTuboExtra] = useState(false);
//   const [vajilla_tubo_standar, setVajillaTuboStandar] = useState(false);
//   const [vajilla_copa_balon, setVajillaCopaBalon] = useState(false);
//   const [vajilla_sidra, setVajillaSidra] = useState(false);
//   const [vajilla_plastico, setVajillaPlastico] = useState(false);
//   const [vajilla_otras, setVajillaOtras] = useState('');
//   const [observ_servicio, setObservServicio] = useState('');
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
//                 marca_bebidas_premium: marca_bebidas_premium,
//                 marca_bebidas_standar: marca_bebidas_standar,
//                 marca_bebidas_blancas: marca_bebidas_blancas,
//                 marca_bebidas_otras: marca_bebidas_otras,
//                 vajilla_tubo_extra: vajilla_tubo_extra,
//                 vajilla_tubo_standar: vajilla_tubo_standar,
//                 vajilla_copa_balon: vajilla_copa_balon,
//                 vajilla_sidra: vajilla_sidra,
//                 vajilla_plastico: vajilla_plastico,
//                 vajilla_otras: vajilla_otras,
//                 observ_servicio: observ_servicio,
//                 marca_comercial: marcaComercial
//               },
//         });
//       } else {
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             marca_bebidas_premium: marca_bebidas_premium,
//             marca_bebidas_standar: marca_bebidas_standar,
//             marca_bebidas_blancas: marca_bebidas_blancas,
//             marca_bebidas_otras: marca_bebidas_otras,
//             vajilla_tubo_extra: vajilla_tubo_extra,
//             vajilla_tubo_standar: vajilla_tubo_standar,
//             vajilla_copa_balon: vajilla_copa_balon,
//             vajilla_sidra: vajilla_sidra,
//             vajilla_plastico: vajilla_plastico,
//             vajilla_otras: vajilla_otras,
//             observ_servicio: observ_servicio,
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Servicio</div>
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
//                     <th>Bebidas<br /></th>
//                     <th>Vajilla<br /></th>
//                     <th>Observaciones de Servicio <br /></th>
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
//                         {encuesta.marca_bebidas_premium && 'Premium, '}
//                         {encuesta.marca_bebidas_standar && 'Marca Standar, '}
//                         {encuesta.marca_bebidas_blancas && 'Marca Blancas, '}
//                         {encuesta.marca_bebidas_otro !== null && encuesta.marca_bebidas_otro}
//                         </td>
//                         <td>
//                         {encuesta.vajilla_tubo_extra && 'Tubo Extra, '}
//                         {encuesta.vajilla_tubo_standar && 'Tubo Standar, '}
//                         {encuesta.vajilla_copa_balon && 'Copa Balón, '}
//                         {encuesta.vajilla_sidra && 'Sidra, '}
//                         {encuesta.vajilla_plastico && 'Plástico, '}
//                         {encuesta.vajilla_otras !== null && encuesta.vajilla_otras} </td>
//                       <td> {encuesta.observ_servicio} </td>
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

// export default ShowServicio;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEdit from '../enc_servicio/ModalEditServicio';  // Import the modal for editing security survey
import { useNavigate } from 'react-router-dom';

const URI = api + 'servicio/';

const ShowServicio = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [marca_bebidas_premium, setMarcaBebidasPremium] = useState(false);
  const [marca_bebidas_standar, setMarcaBebidasStandar] = useState(false);
  const [marca_bebidas_blancas, setMarcaBebidasBlancas] = useState(false);
  const [marca_bebidas_otras, setMarcaBebidasOtras] = useState('');
  const [vajilla_tubo_extra, setVajillaTuboExtra] = useState(false);
  const [vajilla_tubo_standar, setVajillaTuboStandar] = useState(false);
  const [vajilla_copa_balon, setVajillaCopaBalon] = useState(false);
  const [vajilla_sidra, setVajillaSidra] = useState(false);
  const [vajilla_plastico, setVajillaPlastico] = useState(false);
  const [vajilla_otras, setVajillaOtras] = useState('');
  const [observ_servicio, setObservServicio] = useState('');
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
            marca_bebidas_premium: marca_bebidas_premium,
            marca_bebidas_standar: marca_bebidas_standar,
            marca_bebidas_blancas: marca_bebidas_blancas,
            marca_bebidas_otras: marca_bebidas_otras,
            vajilla_tubo_extra: vajilla_tubo_extra,
            vajilla_tubo_standar: vajilla_tubo_standar,
            vajilla_copa_balon: vajilla_copa_balon,
            vajilla_sidra: vajilla_sidra,
            vajilla_plastico: vajilla_plastico,
            vajilla_otras: vajilla_otras,
            observ_servicio: observ_servicio,
            marca_comercial: marcaComercial
          },
        });
      } else {
        // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            marca_bebidas_premium: marca_bebidas_premium,
            marca_bebidas_standar: marca_bebidas_standar,
            marca_bebidas_blancas: marca_bebidas_blancas,
            marca_bebidas_otras: marca_bebidas_otras,
            vajilla_tubo_extra: vajilla_tubo_extra,
            vajilla_tubo_standar: vajilla_tubo_standar,
            vajilla_copa_balon: vajilla_copa_balon,
            vajilla_sidra: vajilla_sidra,
            vajilla_plastico: vajilla_plastico,
            vajilla_otras: vajilla_otras,
            observ_servicio: observ_servicio,
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
      // Manejar errores de la solicitud
    }
  };

  return (
    <div className="container-fluid mt-2">
      <Header />
      <Sidebar>
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="cuadro_princal">
              <div className="titulo_cuadro">Servicio</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <table className="table mt-3"> */}
            <table className="table table-striped mt-3 align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>Marca Comercial
                    <br />
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={marcaComercial}
                      onChange={handleSearchMarcaChange}
                      className="form-control"
                    />
                  </th>
                  <th className='d-md-table-cell d-none'>Bebidas</th>
                  <th className='d-md-table-cell d-none'>Vajilla</th>
                  <th className='d-md-table-cell d-none'>Observaciones de Servicio</th>
                  {/* <th style={{ textAlign: "center" }}>Acciones</th>
                   */}
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
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td>{encuesta.marca_comercial}</td>
                    <td className='d-md-table-cell d-none'>
                      {encuesta.marca_bebidas_premium && 'Premium, '}
                      {encuesta.marca_bebidas_standar && 'Marca Standar, '}
                      {encuesta.marca_bebidas_blancas && 'Marca Blancas, '}
                      {encuesta.marca_bebidas_otro !== null && encuesta.marca_bebidas_otro}
                    </td>
                    <td className='d-md-table-cell d-none'>
                      {encuesta.vajilla_tubo_extra && 'Tubo Extra, '}
                      {encuesta.vajilla_tubo_standar && 'Tubo Standar, '}
                      {encuesta.vajilla_copa_balon && 'Copa Balón, '}
                      {encuesta.vajilla_sidra && 'Sidra, '}
                      {encuesta.vajilla_plastico && 'Plástico, '}
                      {encuesta.vajilla_otras !== null && encuesta.vajilla_otras}
                    </td>
                    <td className='d-md-table-cell d-none'>{encuesta.observ_servicio}</td>
                    <td style={{ textAlign: "center" }}>
                      <ShowModalEdit
                        className="btn-info"
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
      </Sidebar>
    </div>
  )
}

export default ShowServicio;

