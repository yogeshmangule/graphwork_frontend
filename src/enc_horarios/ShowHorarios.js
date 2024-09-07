import axios from 'axios';
import { useState, useEffect } from 'react';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalEdit from '../enc_horarios/ModalEditHorario';
import { useNavigate } from 'react-router-dom';
import ShowModal from '../enc_horarios/ShowCreateHorario';
import '../App.css'; // Assuming your custom styles are here

const URI = api + 'horario/';

// const CompShowHorarios = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [horaLde, setHoraLde] = useState('');
//   const [horaLa, setHoraLa] = useState('');
//   const [horaMde, setHoraMde] = useState('');
//   const [horaMa, setHoraMa] = useState('');
//   const [horaXde, setHoraXde] = useState('');
//   const [horaXa, setHoraXa] = useState('');
//   const [horaJde, setHoraJde] = useState('');
//   const [horaJa, setHoraJa] = useState('');
//   const [horaVde, setHoraVde] = useState('');
//   const [horaVa, setHoraVa] = useState('');
//   const [horaSde, setHoraSde] = useState('');
//   const [horaSa, setHoraSa] = useState('');
//   const [horaDde, setHoraDde] = useState('');
//   const [horaDa, setHoraDa] = useState('');
//   const [encuestaMarca, setSearchMarca] = useState('');
//   const [showSecondModal, setShowSecondModal] = useState(false);

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };

//   const handleButtonClick = () => {
//     getEncuestas();
//     setSearchMarca('');
//   };

//   useEffect(() => {
//     getEncuestas();
//   }, []);

//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     getEncuestas();
//   };

//   const getEncuestas = async () => {
//     try {
//       let res;
//       if (userRole === varAdmin) {
//         res = await axios.get(`${URI}search`, {
//           params: {
//             horaLde: horaLde,
//             horaLa: horaLa,
//             horaMde: horaMde,
//             horaMa: horaMa,
//             horaXde: horaXde,
//             horaXa: horaXa,
//             horaJde: horaJde,
//             horaJa: horaJa,
//             horaVde: horaVde,
//             horaVa: horaVa,
//             horaSde: horaSde,
//             horaSa: horaSa,
//             horaDde: horaDde,
//             horaDa: horaDa,
//             marca_comercial: encuestaMarca,
//           },
//         });
//       } else {
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             horaLde: horaLde,
//             horaLa: horaLa,
//             horaMde: horaMde,
//             horaMa: horaMa,
//             horaXde: horaXde,
//             horaXa: horaXa,
//             horaJde: horaJde,
//             horaJa: horaJa,
//             horaVde: horaVde,
//             horaVa: horaVa,
//             horaSde: horaSde,
//             horaSa: horaSa,
//             horaDde: horaDde,
//             horaDa: horaDa,
//             marca_comercial: encuestaMarca,
//           },
//         });
//       }
//       setEncuesta(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const encuestaYaRegistrada = encuestas.some(
//     (encuesta) => encuesta.encuesta_id === Number(localStorage.getItem('encuestaId1'))
//   );

//   return (
//     <div className="comp-show-users">
//       <Header />
//       <Sidebar>
//         <div className="mt-2 row">
//           <div className="cuadro_princal">
//             <div className="parent-label titulo_cuadro">Encuesta: Horarios</div>
//             {encuestaYaRegistrada ? (
//               <div style={{ color: 'red', marginBottom: '10px' }}>
//                 ¡Última Encuesta ya registrada!
//               </div>
//             ) : (
//               <div className="mt-3">
//                 {/* <ShowModal
//                   onClick={handleModalClose}
//                   isOpen={isModalOpen}
//                   onClose={handleModalClose}
//                 /> */}
//               </div>
//             )}
//           </div>

//           <div className="vh-1 d-flex align-items-center col">
//             <table className="mt-3 table table-responsive" style={{ textAlign: "left" }}>
//               <thead className="table-secondary">
//                 <tr>
//                   <th>Marca Comercial</th>
//                   <th>Lunes</th>
//                   <th>Martes</th>
//                   <th>Miércoles</th>
//                   <th>Jueves</th>
//                   <th>Viernes</th>
//                   <th>Sábado</th>
//                   <th>Domingo</th>
//                   <th>Acciones</th>
//                 </tr>
//                 <tr>
//                   <th>
//                     <input
//                       type="text"
//                       placeholder="Buscar por alias"
//                       value={encuestaMarca}
//                       onChange={handleSearchMarcaChange}
//                       className="form-control"
//                     />
//                   </th>
//                   <th colSpan="7"></th>
//                   <th>
//                     <button
//                       className="btn btn-success"
//                       onClick={handleButtonClick}
//                       style={{ marginLeft: '10px' }}
//                     >
//                       <i className="fa fa-leaf"></i>
//                     </button>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {encuestas.map((encuesta) => (
//                   <tr key={encuesta.ID}>
//                     <td>{encuesta.marca_comercial}</td>
//                     <td>{encuesta.horaLde} am hasta {encuesta.horaLa} pm</td>
//                     <td>{encuesta.horaMde} am hasta {encuesta.horaMa} pm</td>
//                     <td>{encuesta.horaXde} am hasta {encuesta.horaXa} pm</td>
//                     <td>{encuesta.horaJde} am hasta {encuesta.horaJa} pm</td>
//                     <td>{encuesta.horaVde} am hasta {encuesta.horaVa} pm</td>
//                     <td>{encuesta.horaSde} am hasta {encuesta.horaSa} pm</td>
//                     <td>{encuesta.horaDde} am hasta {encuesta.horaDa} pm</td>
//                     <td>
//                       <ShowModalEdit
//                         className="btn btn-success btn-info"
//                         id={encuesta.ID}
//                         isOpen={isModalOpen}
//                         onClose={() => setIsModalOpen(false)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </Sidebar>

//       <style jsx>{`
//         .cuadro_princal {
//           margin-bottom: 20px;
//         }

//         @media (max-width: 768px) {
//           .table-responsive {
//             overflow-x: auto;
//             display: block;
//           }

//           .form-control {
//             width: 100%;
//             margin-bottom: 10px;
//           }



//           .titulo_cuadro {
//             font-size: 18px;
//             text-align: center;
//           }
//         }

//         @media (min-width: 769px) {
//           .titulo_cuadro {
//             font-size: 24px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompShowHorarios;


const CompShowHorarios = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const [encuestas, setEncuesta] = useState([]);
  const [searchMarca, setSearchMarca] = useState('');
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
            marca_comercial: searchMarca,
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
            marca_comercial: searchMarca,
          },
        });
      }
      setEncuesta(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="comp-show-users">
      <Header />
      <Sidebar>
        <div className="content-container">
          <div className="header-container">
            <div className="title">Encuesta: Horarios</div>
            <ShowModal
              className="btn btn-success"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>

          <div className="table-responsive">
            <table className="table table-striped mt-3 align-middle">
              <thead className="table-secondary">
                <tr>
                  <th>
                    Marca Comercial
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={searchMarca}
                      onChange={handleSearchMarcaChange}
                      className="form-control m-0"
                    />
                  </th>
                  <th className='d-md-table-cell d-none'>Lunes</th>
                  <th className='d-md-table-cell d-none'>Martes</th>
                  <th className='d-md-table-cell d-none'>Miércoles</th>
                  <th className='d-md-table-cell d-none'>Jueves</th>
                  <th className='d-md-table-cell d-none'>Viernes</th>
                  <th className='d-md-table-cell d-none'>Sábado</th>
                  <th className='d-md-table-cell d-none'>Domingo</th>
                  <th className="text-center">Acciones <br />
                    <button
                      className="btn btn-success w-auto"
                    // onClick={handleButtonClick}
                    >
                      <i className="fa fa-leaf"></i>
                    </button></th>
                </tr>
              </thead>
              <tbody>
                {encuestas.map((encuesta) => (
                  <tr key={encuesta.ID}>
                    <td>{encuesta.marca_comercial}</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaLde} am hasta {encuesta.horaLa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaMde} am hasta {encuesta.horaMa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaXde} am hasta {encuesta.horaXa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaJde} am hasta {encuesta.horaJa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaVde} am hasta {encuesta.horaVa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaSde} am hasta {encuesta.horaSa} pm</td>
                    <td className='d-md-table-cell d-none'>{encuesta.horaDde} am hasta {encuesta.horaDa} pm</td>
                    <td className="text-center">
                      <ShowModalEdit
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

      <style jsx>{`
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
        }

        .table-responsive {
          overflow-x: auto;
        }

        @media (max-width: 768px)
        {
          .header-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .title {
            font-size: 20px;
          }

          .form-control {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 18px;
          }

          .form-control {
            font-size: 14px;
            padding: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default CompShowHorarios;



