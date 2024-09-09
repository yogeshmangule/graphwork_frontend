import axios from 'axios';
import { useState, useEffect } from 'react';
import { varAdmin, api } from "../servicios/api";
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import { miFuncion } from '../componet_extra/ConvertirFecha';
import ShowModal from './ModalCreateEncuesta';
import ShowModalEdit from './ModalEditEncuesta';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'; // Assuming your custom styles are here

const URI = api + 'encuesta/';

const CompShowEncusta = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const [encuestas, setEncuesta] = useState([]);
  const [searchMarca, setSearchMarca] = useState('');
  const [searchNombre, setSearchNombre] = useState('');
  const [searchCorreo, setSearchCorreo] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = () => {
    getEncuestas();
    setSearchMarca('');
    setSearchNombre('');
    setSearchCorreo('');
    setSearchUser('');
    setSelectedDate(null);
  };

  useEffect(() => {
    getEncuestas();
  }, []);

  const handleSearchMarcaChange = (e) => {
    const value = e.target.value;
    setSearchMarca(value);
    getEncuestas();
  };

  const handleSearchCorreoChange = (e) => {
    const value = e.target.value;
    setSearchCorreo(value);
    getEncuestas();
  };

  const handleSearchNombreChange = (e) => {
    const value = e.target.value;
    setSearchNombre(value);
    getEncuestas();
  };

  const handleSearchUserChange = (e) => {
    const value = e.target.value;
    setSearchUser(value);
    getEncuestas();
  };

  const handleSelectedDateChange = (date) => {
    setSelectedDate(date);
    getEncuestas();
  };

  // const getEncuestas = async () => {
  //   try {
  //     let res;
  //     if (userRole === varAdmin) {
  //       res = await axios.get(`${URI}search`, {
  //         params: {
  //           marca_comercial: searchMarca,
  //           full_name: searchNombre,
  //           email: searchCorreo,
  //           username: searchUser,
  //           createdAt: selectedDate,
  //         },
  //       });
  //     } else {
  //       res = await axios.get(`${URI}user/${userId}`, {
  //         params: {
  //           marca_comercial: searchMarca,
  //           full_name: searchNombre,
  //           email: searchCorreo,
  //           username: searchUser,
  //           createdAt: selectedDate,
  //         },
  //       });
  //     }

  //     setEncuesta(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getEncuestas = async () => {
    try {
      let res;
      if (userRole === varAdmin) {
        res = await axios.get(`${URI}search`, {
          params: {
            marca_comercial: searchMarca,
            full_name: searchNombre,
            email: searchCorreo,
            username: searchUser,
            createdAt: selectedDate,
          },
        });
      } else {
        res = await axios.get(`${URI}user/${userId}`, {
          params: {
            marca_comercial: searchMarca,
            full_name: searchNombre,
            email: searchCorreo,
            username: searchUser,
            createdAt: selectedDate,
          },
        });
      }
  
      // Sorting the response data by 'id_establecimiento'
      const sortedEncuestas = res.data.sort((a, b) => a.Id_estab - b.Id_estab);
  
      setEncuesta(sortedEncuestas); // Set the sorted data to state
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
            <div className="title">Encuesta: Datos Generales</div>
            <ShowModal
              className="btn btn-success"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>

          <div className="table-responsive ">
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
                  <th className='d-md-table-cell d-none'>
                    Nombre Local
                    <input
                      type="text"
                      placeholder="Buscar por nombre"
                      value={searchNombre}
                      onChange={handleSearchNombreChange}
                      className="form-control"
                    />
                  </th>
                  <th className='d-md-table-cell d-none'>
                    Correo
                    <input
                      type="text"
                      placeholder="Buscar por correo"
                      value={searchCorreo}
                      onChange={handleSearchCorreoChange}
                      className="form-control"
                    />
                  </th>
                  <th className='d-md-table-cell d-none'>
                    Usuario Registro
                    <input
                      type="text"
                      placeholder="Buscar por usuario"
                      value={searchUser}
                      onChange={handleSearchUserChange}
                      className="form-control"
                    />
                  </th>
                  <th className='d-md-table-cell d-none'>
                    Fecha de creación
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleSelectedDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Seleccionar fecha"
                      className="form-control"
                    />
                  </th>
                  <th className='text-center'>
                    Acciones <br />
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
                    <td className='d-md-table-cell d-none'>{encuesta.full_name}</td>
                    <td className='d-md-table-cell d-none'>{encuesta.email}</td>
                    <td className='d-md-table-cell d-none'>{encuesta.usuario ? encuesta.usuario.username : null}</td>
                    <td className='d-md-table-cell d-none'>{miFuncion(encuesta.createdAt)}</td>
                    <td style={{ textAlign: 'center' }}>
                      <ShowModalEdit
                        className=' btn btn-success'
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

     @media (max-width: 768px) {
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

export default CompShowEncusta;


// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { varAdmin, api } from "../servicios/api";
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import { miFuncion } from '../componet_extra/ConvertirFecha';
// import ShowModal from './ModalCreateEncuesta';
// import ShowModalEdit from './ModalEditEncuesta';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Card } from 'react-bootstrap';

// const URI = api + 'encuesta/';

// const CompShowEncusta = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const [encuestas, setEncuesta] = useState([]);
//   const [searchMarca, setSearchMarca] = useState('');
//   const [searchNombre, setSearchNombre] = useState('');
//   const [searchCorreo, setSearchCorreo] = useState('');
//   const [searchUser, setSearchUser] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleButtonClick = () => {
//     getEncuestas();
//     setSearchMarca('');
//     setSearchNombre('');
//     setSearchCorreo('');
//     setSearchUser('');
//     setSelectedDate(null);
//   };

//   useEffect(() => {
//     getEncuestas();
//   }, []);

//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     getEncuestas();
//   };

//   const handleSearchCorreoChange = (e) => {
//     const value = e.target.value;
//     setSearchCorreo(value);
//     getEncuestas();
//   };

//   const handleSearchNombreChange = (e) => {
//     const value = e.target.value;
//     setSearchNombre(value);
//     getEncuestas();
//   };

//   const handleSearchUserChange = (e) => {
//     const value = e.target.value;
//     setSearchUser(value);
//     getEncuestas();
//   };

//   const handleSelectedDateChange = (date) => {
//     setSelectedDate(date);
//     getEncuestas();
//   };

//   const getEncuestas = async () => {
//     try {
//       let res;
//       if (userRole === varAdmin) {
//         res = await axios.get(`${URI}search`, {
//           params: {
//             marca_comercial: searchMarca,
//             full_name: searchNombre,
//             email: searchCorreo,
//             username: searchUser,
//             createdAt: selectedDate,
//           },
//         });
//       } else {
//         res = await axios.get(`${URI}user/${userId}`, {
//           params: {
//             marca_comercial: searchMarca,
//             full_name: searchNombre,
//             email: searchCorreo,
//             username: searchUser,
//             createdAt: selectedDate,
//           },
//         });
//       }

//       setEncuesta(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <Sidebar>
//         <div className='mt-2 row'>
//           <div className='cuadro_princal'>
//             <div className='parent-label titulo_cuadro'>Encuesta: Datos Generales</div>
//             <ShowModal className='parent-rigth btn btn-success btn-ladda' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//           </div>

//           <div className='vh-1 d-flex align-items-center col d-none d-md-block'>
//             <div className="table-container" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
//               <table className='mt-3 table' style={{ textAlign: "left" }}>
//                 <thead className='table-secondary'>
//                   <tr>
//                     <th>Marca Comercial <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por marca"
//                         value={searchMarca}
//                         onChange={handleSearchMarcaChange}
//                       />
//                     </th>
//                     <th>Nombre Local <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por nombre"
//                         value={searchNombre}
//                         onChange={handleSearchNombreChange}
//                       />
//                     </th>
//                     <th>Correo<br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por correo"
//                         value={searchCorreo}
//                         onChange={handleSearchCorreoChange}
//                       />
//                     </th>
//                     <th>Usuario Registro <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por usuario"
//                         value={searchUser}
//                         onChange={handleSearchUserChange}
//                       />
//                     </th>
//                     <th>Fecha de creación <br />
//                       <DatePicker
//                         selected={selectedDate}
//                         onChange={handleSelectedDateChange}
//                         dateFormat="yyyy-MM-dd"
//                         placeholderText="Seleccionar fecha"
//                       />
//                     </th>
//                     <th className='text-center'>Acciones <br />
//                       <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                         <i className='fa fa-leaf'></i>
//                       </button>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {encuestas.map((encuesta) => (
//                     <tr key={encuesta.ID}>
//                       <td>{encuesta.marca_comercial}</td>
//                       <td>{encuesta.full_name}</td>
//                       <td>{encuesta.email}</td>
//                       <td>{encuesta.usuario ? encuesta.usuario.username : null}</td>
//                       <td>{miFuncion(encuesta.createdAt)}</td>
//                       <td>
//                         <div className='d-flex justify-content-center gap-1'>
//                           <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className='p-0 d-block d-md-none'>
//             {encuestas.map((encuesta) => (
//               <Card key={encuesta.ID} className='mb-1'>
//                 <Card.Body className='text-start'>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Marca Comercial</h6>
//                     <p className='m-0 text-start'>{encuesta.marca_comercial}</p>
//                   </div>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Nombre Local</h6>
//                     <p className='m-0 text-start'>{encuesta.full_name}</p>
//                   </div>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Correo</h6>
//                     <p className='m-0 text-start'>{encuesta.email}</p>
//                   </div>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Usuario Registro</h6>
//                     <p className='m-0 text-start'>{encuesta.usuario ? encuesta.usuario.username : null}</p>
//                   </div>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Fecha de creación</h6>
//                     <p className='m-0 text-start'>{miFuncion(encuesta.createdAt)}</p>
//                   </div>
//                   <div className='d-flex text-start gap-2 mb-2'>
//                     <h6 className='m-0 text-start' style={{ width: 130 }}>Acciones</h6>
//                     <p className='m-0 text-start'>
//                       <div className='d-flex justify-content-center gap-1'>
//                         <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                       </div>
//                     </p>
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </Sidebar>
//     </div>
//   );
// };

// export default CompShowEncusta;



