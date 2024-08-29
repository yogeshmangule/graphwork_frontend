// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { varAdmin, api } from "../servicios/api"
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import { miFuncion } from '../componet_extra/ConvertirFecha';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModal from './ModalCreateEncuesta';
// import ShowModalEdit from './ModalEditEncuesta';
// import { useNavigate } from 'react-router-dom';

// const URI = api + 'encuesta/';


// const CompShowUsers = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([])
//   const [searchMarca, setSearchMarca] = useState('');
//   const [searchNombre, setSearchNombre] = useState('');
//   const [searchCorreo, setSearchCorreo] = useState('');
//   const [searchUser, setSearchUser] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const abierto = false;



//   const handleButtonClick = () => {
//     getEncuestas();
//     // Limpiar los valores de los inputs estableciendo los estados en ''
//     setSearchMarca('');
//     setSearchNombre('');
//     setSearchCorreo('');
//     setSearchUser('');
//     setSelectedDate('');
//   };


//   useEffect(() => {

//     getEncuestas()
//   }, []);



//   const handleSearchMarcaChange = (e) => {
//     const value = e.target.value;
//     setSearchMarca(value);
//     // Realizar la búsqueda en tiempo real
//     getEncuestas();
//   };

//   const handleSearchCorreoChange = (e) => {
//     const value = e.target.value;
//     setSearchCorreo(value);
//     // Realizar la búsqueda en tiempo real
//     getEncuestas();
//   };

//   const handleSearchNombreChange = (e) => {
//     const value = e.target.value;
//     setSearchNombre(value);
//     // Realiza la búsqueda en tiempo real
//     getEncuestas();
//   };

//   const handleSearchUserChange = (e) => {
//     const value = e.target.value;
//     setSearchUser(value);
//     // Realiza la búsqueda en tiempo real
//     getEncuestas();
//   };


//   const handleSelectedDateChange = (date) => {
//     setSelectedDate(date);
//     // Realizar la búsqueda en tiempo real
//     getEncuestas();
//   };





//   const getEncuestas = async () => {
//     try {
//       let res;
//       if (userRole === varAdmin) {
//         // Si el usuario es un administrador, realiza la búsqueda con la ruta `/search`
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
//         // Si el usuario no es un administrador, realiza la búsqueda con la ruta `/user/:userId`
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
//               <div className='parent-label titulo_cuadro '>Encuesta: Datos Generales</div>

//               <ShowModal className='parent-rigth btn btn-success btn-ladda' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//             </div>

//             <div className=' vh-1 d-flex align-items-center col'>


//               <table className='mt-3 table' style={{ textAlign: "left" }}>
//                 <thead className='table-secondary'>

//                   <tr>
//                     <th>Marca Comercial <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por alias"
//                         value={searchMarca}
//                         onChange={handleSearchMarcaChange}
//                       />
//                     </th>
//                     <th>Nombre Local<br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por correo"
//                         value={searchNombre}
//                         onChange={handleSearchNombreChange}
//                       /></th>
//                     <th>Correo <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por estado"
//                         value={searchCorreo}
//                         onChange={handleSearchCorreoChange}
//                       /></th>
//                     <th>Usuario Registro <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por estado"
//                         value={searchUser}
//                         onChange={handleSearchUserChange}
//                       /></th>
//                     {/* Comentando la sección de Fecha de Creación */}
//                     <th>Fecha de creacion <br />
//                       {/*<DatePicker
//                           selected={selectedDate} // Agrega un estado para manejar la fecha seleccionada
//                           onChange={handleSelectedDateChange} // Maneja el cambio de fecha
//                           dateFormat="yyyy-MM-dd" // Ajusta el formato de la fecha según tus necesidades
//                           placeholderText="Seleccionar fecha"
//                           /> */}</th>
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
//                       <td> {encuesta.marca_comercial} </td>
//                       <td> {encuesta.full_name} </td>
//                       <td>  {encuesta.email} </td>
//                       <td>  {encuesta.usuario ? encuesta.usuario.username : null}</td>
//                       <td> {miFuncion(encuesta.createdAt)} </td>
//                       <td>
//                         <ShowModalEdit className=' btn btn-success btn-info' id={encuesta.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                         {/*   {userRole === varAdmin && (
//                                   <button onClick={() => deleteEncuesta(encuesta.ID)} 
//                                   className={`btn ${encuesta.status === 1 ? 'btn-danger' : 'btn-success'}`}
//                                   style={{ marginLeft: '10px' }}>
//                                   <i className='fa fa-exchange'></i>
//                                   </button> 
//                               )} */}

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

// export default CompShowUsers


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

const CompShowUsers = () => {
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
            <div className="title">Encuesta: Datos Generales</div>
            <ShowModal
              className="btn btn-success"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>

          <div className="table-responsive">
            <table className="table table-striped mt-3">
              <thead className="table-secondary">
                <tr>
                  <th>
                    Marca Comercial
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={searchMarca}
                      onChange={handleSearchMarcaChange}
                      className="form-control"
                    />
                  </th>
                  <th>
                    Nombre Local
                    <input
                      type="text"
                      placeholder="Buscar por nombre"
                      value={searchNombre}
                      onChange={handleSearchNombreChange}
                      className="form-control"
                    />
                  </th>
                  <th>
                    Correo
                    <input
                      type="text"
                      placeholder="Buscar por correo"
                      value={searchCorreo}
                      onChange={handleSearchCorreoChange}
                      className="form-control"
                    />
                  </th>
                  <th>
                    Usuario Registro
                    <input
                      type="text"
                      placeholder="Buscar por usuario"
                      value={searchUser}
                      onChange={handleSearchUserChange}
                      className="form-control"
                    />
                  </th>
                  <th>
                    Fecha de creación
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleSelectedDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Seleccionar fecha"
                      className="form-control"
                    />
                  </th>
                  <th>
                    Acciones
                    <button
                      className="btn btn-success"
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
                    <td>{encuesta.full_name}</td>
                    <td>{encuesta.email}</td>
                    <td>{encuesta.usuario ? encuesta.usuario.username : null}</td>
                    <td>{miFuncion(encuesta.createdAt)}</td>
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
        .comp-show-users {
          padding: 20px;
        }

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
          margin-bottom: 10px;
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

          .btn {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default CompShowUsers;
