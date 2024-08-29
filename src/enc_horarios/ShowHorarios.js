// import axios from 'axios'
// import {useState, useEffect} from 'react'
// import {  varAdmin, api } from "../servicios/api"
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalEdit from '../enc_horarios/ModalEditHorario';
// import { useNavigate } from 'react-router-dom';
// import ShowModal from '../enc_horarios/ShowCreateHorario';




// const URI = api+'horario/';


// const CompShowHorarios = () => {
//   const history = useNavigate();
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const userId = localStorage.getItem('userId'); 
//     const userRole = localStorage.getItem('userRol');
//     const isAutenticado = localStorage.getItem('isAutenticado');
//     const [encuestas, setEncuesta] = useState([])
//     const [horaLde, setHoraLde] = useState('');
//     const [horaLa, setHoraLa] = useState('');
//     const [horaMde, setHoraMde] = useState('');
//     const [horaMa, setHoraMa] = useState('');
//     const [horaXde, setHoraXde] = useState('');
//     const [horaXa, setHoraXa] = useState('');
//     const [horaJde, setHoraJde] = useState('');
//     const [horaJa, setHoraJa] = useState('');
//     const [horaVde, setHoraVde] = useState('');
//     const [horaVa, setHoraVa] = useState('');
//     const [horaSde, setHoraSde] = useState('');
//     const [horaSa, setHoraSa] = useState('');
//     const [horaDde, setHoraDde] = useState('');
//     const [horaDa, setHoraDa] = useState('');
//     const [encuestaMarca, setSearchMarca] = useState('');
//     const [showSecondModal, setShowSecondModal] = useState(false);

//     const abierto =   false;

//     const handleModalClose = () => {
//         setIsModalOpen(false);
//       };
    
//       const handleShowSecondModal = () => {
//         setShowSecondModal(true);
//         setIsModalOpen(false);
//       };



//     const handleButtonClick = () => {
//         getEncuestas();
//         // Limpiar los valores de los inputs estableciendo los estados en ''
//         setSearchMarca('');
 
//       };

 
//     useEffect( ()=>{
      
//         getEncuestas()
//     }, []);
        
  

//     const handleSearchMarcaChange = (e) => {
//         const value = e.target.value;
//         setSearchMarca(value);
//         // Realizar la búsqueda en tiempo real
//         getEncuestas();
//       };


//       const getEncuestas = async () => {
//         try {
//             let res;
//             if (userRole === varAdmin) {
//                 // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
//                 res = await axios.get(`${URI}search`, {
//                     params: {
//                         horaLde: horaLde,
//                         horaLa: horaLa,
//                         horaMde: horaMde,
//                         horaMa: horaMa,
//                         horaXde: horaXde,
//                         horaXa: horaXa,
//                         horaJde: horaJde,
//                         horaJa: horaJa,
//                         horaVde: horaVde,
//                         horaVa: horaVa,
//                         horaSde: horaSde,
//                         horaSa: horaSa,
//                         horaDde: horaDde,
//                         horaDa: horaDa,
//                         marca_comercial: encuestaMarca  },
//             });
//           } else {
//             // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
//             res = await axios.get(`${URI}user/${userId}`, {
//                 params: {
//                     horaLde: horaLde,
//                     horaLa: horaLa,
//                     horaMde: horaMde,
//                     horaMa: horaMa,
//                     horaXde: horaXde,
//                     horaXa: horaXa,
//                     horaJde: horaJde,
//                     horaJa: horaJa,
//                     horaVde: horaVde,
//                     horaVa: horaVa,
//                     horaSde: horaSde,
//                     horaSa: horaSa,
//                     horaDde: horaDde,
//                     horaDa: horaDa,
//                     marca_comercial: encuestaMarca  },
//             });
//           }
//           const encuestas = res.data;
//           setEncuesta(encuestas);
//         } catch (error) {
//           console.error(error);
//           // Manejar errores de la solicitud
//         }
//       };
//       const encuestaYaRegistrada = encuestas.some(
//         (encuesta) => encuesta.encuesta_id === Number(localStorage.getItem('encuestaId1'))
//       );

//     return(
//         <div>
//   <div>
//   <>
// <Header />
//   </>
//   <Sidebar>

//   <div className='mt-2 row'>
    

  
//       <div className='cuadro_princal'>
//       <div className='parent-label titulo_cuadro '>Encuesta: Horarios</div>
//       { encuestaYaRegistrada  ? (
//           <div style={{ color: 'red', marginBottom: '10px' }}>
//           ¡Última Encuesta ya registrada!
//         </div> ) : (
//           <div className="mt-3">
//             <ShowModal
//             onClick={handleModalClose}  
//             isOpen={isModalOpen}
//             onClose={handleModalClose}
//             />
//         </div> )
// }

      
//       </div>

//       <div className=' vh-1 d-flex align-items-center col'>
      
      

//           <table className='mt-3 table' style={{ textAlign: "left" }}>
//               <thead className='table-secondary'>
              
//                   <tr>
//                       <th>Marca Comercial <br />
//                       <input
//                           type="text"
//                           placeholder="Buscar por alias"
//                           value={encuestaMarca}
//                           onChange={handleSearchMarcaChange}
//                        />
//                       </th>
//                       <th>Lunes<br />
//                       </th>
//                       <th>Martes <br />
//                       </th>
//                        <th>Miercoles<br/>
//                       </th>
//                        {/* Comentando la sección de Fecha de Creación */}
//                       <th>Jueves <br /></th>
//                       <th>Viernes <br /></th>
//                       <th>Sabado <br /></th>
//                       <th>Domingo <br /></th>
//                       <th>Acciones <br />
//                           <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                               <i className='fa fa-leaf'></i>
//                           </button>
                          
//                       </th>
//                   </tr>
//               </thead>
//               <tbody>
//                   { encuestas.map ( (encuesta) => ( 
//                       <tr key={ encuesta.ID}>
//                           <td>  {encuesta.marca_comercial}</td>
//                           <td> { encuesta.horaLde } am hasta { encuesta.horaLa } pm </td>
//                           <td> { encuesta.horaMde } am hasta { encuesta.horaMa } pm </td>
//                           <td> { encuesta.horaXde } am hasta { encuesta.horaXa } pm </td>
//                           <td> { encuesta.horaJde } am hasta { encuesta.horaJa } pm </td>
//                           <td> { encuesta.horaVde } am hasta { encuesta.horaVa } pm </td>
//                           <td> { encuesta.horaSde } am hasta { encuesta.horaSa } pm </td>
//                           <td> { encuesta.horaDde } am hasta { encuesta.horaDa } pm </td>

//                           <td>
//                               <ShowModalEdit className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                              
//                           </td>
//                       </tr>
//                   )) }
//               </tbody>
          
//           </table>
//       </div>    
//   </div>
//   </Sidebar>
// </div>


  


//         </div>
//     )

// }

// export default CompShowHorarios


import axios from 'axios';
import { useState, useEffect } from 'react';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalEdit from '../enc_horarios/ModalEditHorario';
import { useNavigate } from 'react-router-dom';
import ShowModal from '../enc_horarios/ShowCreateHorario';

const URI = api + 'horario/';

const CompShowHorarios = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [horaLde, setHoraLde] = useState('');
  const [horaLa, setHoraLa] = useState('');
  const [horaMde, setHoraMde] = useState('');
  const [horaMa, setHoraMa] = useState('');
  const [horaXde, setHoraXde] = useState('');
  const [horaXa, setHoraXa] = useState('');
  const [horaJde, setHoraJde] = useState('');
  const [horaJa, setHoraJa] = useState('');
  const [horaVde, setHoraVde] = useState('');
  const [horaVa, setHoraVa] = useState('');
  const [horaSde, setHoraSde] = useState('');
  const [horaSa, setHoraSa] = useState('');
  const [horaDde, setHoraDde] = useState('');
  const [horaDa, setHoraDa] = useState('');
  const [encuestaMarca, setSearchMarca] = useState('');
  const [showSecondModal, setShowSecondModal] = useState(false);

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
            horaLde: horaLde,
            horaLa: horaLa,
            horaMde: horaMde,
            horaMa: horaMa,
            horaXde: horaXde,
            horaXa: horaXa,
            horaJde: horaJde,
            horaJa: horaJa,
            horaVde: horaVde,
            horaVa: horaVa,
            horaSde: horaSde,
            horaSa: horaSa,
            horaDde: horaDde,
            horaDa: horaDa,
            marca_comercial: encuestaMarca,
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            horaLde: horaLde,
            horaLa: horaLa,
            horaMde: horaMde,
            horaMa: horaMa,
            horaXde: horaXde,
            horaXa: horaXa,
            horaJde: horaJde,
            horaJa: horaJa,
            horaVde: horaVde,
            horaVa: horaVa,
            horaSde: horaSde,
            horaSa: horaSa,
            horaDde: horaDde,
            horaDa: horaDa,
            marca_comercial: encuestaMarca,
          },
        });
      }
      setEncuesta(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const encuestaYaRegistrada = encuestas.some(
    (encuesta) => encuesta.encuesta_id === Number(localStorage.getItem('encuestaId1'))
  );

  return (
    <div>
      <Header />
      <Sidebar>
        <div className="mt-2 row">
          <div className="cuadro_princal">
            <div className="parent-label titulo_cuadro">Encuesta: Horarios</div>
            {encuestaYaRegistrada ? (
              <div style={{ color: 'red', marginBottom: '10px' }}>
                ¡Última Encuesta ya registrada!
              </div>
            ) : (
              <div className="mt-3">
                {/* <ShowModal
                  onClick={handleModalClose}
                  isOpen={isModalOpen}
                  onClose={handleModalClose}
                /> */}
              </div>
            )}
          </div>

          <div className="vh-1 d-flex align-items-center col">
            <table className="mt-3 table table-responsive" style={{ textAlign: "left" }}>
              <thead className="table-secondary">
                <tr>
                  <th>Marca Comercial</th>
                  <th>Lunes</th>
                  <th>Martes</th>
                  <th>Miércoles</th>
                  <th>Jueves</th>
                  <th>Viernes</th>
                  <th>Sábado</th>
                  <th>Domingo</th>
                  <th>Acciones</th>
                </tr>
                <tr>
                  <th>
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={encuestaMarca}
                      onChange={handleSearchMarcaChange}
                      className="form-control"
                    />
                  </th>
                  <th colSpan="7"></th>
                  <th>
                    <button
                      className="btn btn-success"
                      onClick={handleButtonClick}
                      style={{ marginLeft: '10px' }}
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
                    <td>{encuesta.horaLde} am hasta {encuesta.horaLa} pm</td>
                    <td>{encuesta.horaMde} am hasta {encuesta.horaMa} pm</td>
                    <td>{encuesta.horaXde} am hasta {encuesta.horaXa} pm</td>
                    <td>{encuesta.horaJde} am hasta {encuesta.horaJa} pm</td>
                    <td>{encuesta.horaVde} am hasta {encuesta.horaVa} pm</td>
                    <td>{encuesta.horaSde} am hasta {encuesta.horaSa} pm</td>
                    <td>{encuesta.horaDde} am hasta {encuesta.horaDa} pm</td>
                    <td>
                      <ShowModalEdit
                        className="btn btn-success btn-info"
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
        </div>
      </Sidebar>

      <style jsx>{`
        .cuadro_princal {
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .table-responsive {
            overflow-x: auto;
            display: block;
          }

          .form-control {
            width: 100%;
            margin-bottom: 10px;
          }

          .btn {
            width: 100%;
            margin-bottom: 10px;
          }

          .titulo_cuadro {
            font-size: 18px;
            text-align: center;
          }
        }

        @media (min-width: 769px) {
          .titulo_cuadro {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default CompShowHorarios;
