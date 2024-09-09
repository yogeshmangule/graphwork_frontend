// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { varAdmin,api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import ShowModalEditPrecio from '../enc_precio/ModalEditPrecio';  
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'precio/';

// const ShowPrecio = () => {
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Precios</div>
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
//                     <th>Tipo Entrada<br /></th>
//                     <th>Precio taquilla <br /></th>
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
//                       <td> {encuesta.tipo_entradas}</td>
//                       <td> {encuesta.precio_anticipada} </td>
//                       <td>
//                         <ShowModalEditPrecio className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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

// export default ShowPrecio;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import ShowModalEditPrecio from '../enc_precio/ModalEditPrecio';
import { useNavigate } from 'react-router-dom';

const URI = api + 'precio/';

const ShowPrecio = () => {
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
    // <div className="d-flex flex-column flex-lg-row">
    <div >
      <Header />
      <Sidebar >
        <div >
          <div className="w-100" style={{ textAlign: 'left' }}>
            <div className=" titulo_cuadro">Encuesta: Precios</div>
          </div>

          {/* <div className="col-12 mt-3 d-flex justify-content-center"> */}
          <div className='table-responsive'>
            {/* <table className="table table-responsive text-left"> */}
            <table className="table table-striped mt-3 align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>Marca Comercial</th>
                  <th className="d-md-table-cell d-none">Tipo Entrada</th>
                  <th className="d-md-table-cell d-none">Precio taquilla</th>
                  <th style={{ textAlign: "center" }}>
                    Acciones
                    <br />
                    <button className="btn btn-success w-auto" onClick={handleButtonClick}>
                      <i className="fa fa-leaf"></i>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td>{encuesta.marca_comercial}</td>
                    <td className="d-md-table-cell d-none">{encuesta.tipo_entradas}</td>
                    <td className="d-md-table-cell d-none">{encuesta.precio_anticipada}</td>
                    <td style={{ textAlign: "center" }}>
                      <ShowModalEditPrecio
                        className="btn btn-success"
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
  );
}

export default ShowPrecio;
