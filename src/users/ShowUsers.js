// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { varAdmin, api } from "../servicios/api"
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import { miFuncion } from '../componet_extra/ConvertirFecha';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModal from './showmodal';
// import ShowModalEdit from './ShowModalEdit';
// import { useNavigate } from 'react-router-dom';
// import { Card } from 'react-bootstrap';

// const URI = api + 'usuarios/'


// const CompShowUsers = () => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   console.log(isAutenticado);
//   const [users, setUser] = useState([])
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchCorreo, setSearchCorreo] = useState('');
//   const [searchEstado, setSearchEstado] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const abierto = false;



//   const handleButtonClick = () => {
//     getUsers();
//     // Limpiar los valores de los inputs estableciendo los estados en ''
//     setSearchTerm('');
//     setSearchCorreo('');
//     setSearchEstado('');
//     setSelectedDate('');
//   };


//   useEffect(() => {

//     getUsers()
//   }, []);



//   const handleSearchTermChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     // Realizar la búsqueda en tiempo real
//     getUsers();
//   };

//   const handleSearchCorreoChange = (e) => {
//     const value = e.target.value;
//     setSearchCorreo(value);
//     // Realizar la búsqueda en tiempo real
//     getUsers();
//   };

//   const handleSearchEstadoChange = (e) => {
//     const value = e.target.value;
//     setSearchEstado(value);
//     // Realiza la búsqueda en tiempo real
//     getUsers();
//   };


//   const handleSelectedDateChange = (date) => {
//     setSelectedDate(date);
//     // Realizar la búsqueda en tiempo real
//     getUsers();
//   };



//   const getUsers = async () => {

//     const res = await axios.get(`${URI}search`, {
//       params: {
//         username: searchTerm,
//         email: searchCorreo,
//         status: searchEstado,
//         createdAt: selectedDate,
//       },
//     });
//     console.log(res);
//     const users = await res.data.sort((a, b) => {
//       if (a.status === 1 && b.status !== 1) {
//         return -1;
//       } else if (a.status !== 1 && b.status === 1) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     setUser(users)
//   }


//   //procedimineto para eliminar un blog
//   const deleteUser = async (id) => {
//     await axios.delete(`${URI}${id}`)
//     getUsers()
//   }

//   return (
//     <div>
//       <div>
//         <>
//           <Header />
//         </>
//         <Sidebar>

//           <div className='mt-2 row'>

//             <div className='cuadro_princal'>
//               <div className='parent-label titulo_cuadro '>Usuarios</div>

//               <ShowModal className='parent-rigth btn btn-success btn-ladda' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//             </div>

//             <div className=' vh-1 d-flex align-items-center col d-none d-md-block'>


//               <table className='mt-3 table' style={{ textAlign: "left" }}>
//                 <thead className='table-secondary'>

//                   <tr>
//                     <th>Alias Usuario <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por alias"
//                         value={searchTerm}
//                         onChange={handleSearchTermChange}
//                       />
//                     </th>
//                     <th>Correo<br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por correo"
//                         value={searchCorreo}
//                         onChange={handleSearchCorreoChange}
//                       /></th>
//                     <th>Estado <br />
//                       <input
//                         type="text"
//                         placeholder="Buscar por estado"
//                         value={searchEstado}
//                         onChange={handleSearchEstadoChange}
//                       /></th>
//                     {/* {/ Comentando la sección de Fecha de Creación /} */}
//                     <th>Fecha de creacion <br />
//                       {/*<DatePicker
//                           selected={selectedDate} // Agrega un estado para manejar la fecha seleccionada
//                           onChange={handleSelectedDateChange} // Maneja el cambio de fecha
//                           dateFormat="yyyy-MM-dd" // Ajusta el formato de la fecha según tus necesidades
//                           placeholderText="Seleccionar fecha"
//                           /> */}</th>
//                     <th className='text-center'>Acciones <br />
//                       <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
//                         <i className='fa fa-leaf'></i>
//                       </button>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.ID}>
//                       <td> {user.username} </td>
//                       <td> {user.email} </td>
//                       <td>  {user.status === 1 ? "Activo" : "Inactivo"} </td>
//                       <td> {miFuncion(user.createdAt)} </td>
//                       <td>
//                         <div className='d-flex justify-content-center gap-1'>
//                           <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={user.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                           {userRole === varAdmin && (
//                             <button onClick={() => deleteUser(user.ID)}
//                               className={`btn ${user.status === 1 ? 'btn-danger' : 'btn-success'}`}
//                               style={{ marginLeft: '10px' }}>
//                               <i className='fa fa-exchange'></i>
//                             </button>
//                           )}
//                         </div>

//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>

//               </table>
//             </div>

//             <div className='p-0 d-block d-md-none'>
//               {users.map((user) => (

//                 <Card key={user.ID} className='mb-1'>
//                   <Card.Body className='text-start '>
//                     <div className=' d-flex text-start gap-2 mb-2'>
//                       <h6 className='m-0 text-start' style={{ width: 130 }}>Alias Usuario</h6>
//                       <p className='m-0 text-start'>{user.username}</p>
//                     </div>
//                     <div className='d-flex text-start gap-2 mb-2'>
//                       <h6 className='m-0 text-start' style={{ width: 130 }}>Correo</h6>
//                       <p className='m-0 text-start'> {user.email}</p>
//                     </div>
//                     <div className='d-flex text-start gap-2 mb-2'>
//                       <h6 className='m-0 text-start' style={{ width: 130 }}>Estado</h6>
//                       <p className='m-0 text-start'>{user.status === 1 ? "Activo" : "Inactivo"}</p>
//                     </div>
//                     <div className='d-flex text-start gap-2 mb-2'>
//                       <h6 className='m-0 text-start' style={{ width: 130 }}>Fecha de creacion</h6>
//                       <p className='m-0 text-start'>{miFuncion(user.createdAt)} </p>
//                     </div>
//                     <div className='d-flex text-start gap-2 mb-2'>
//                       <h6 className='m-0 text-start' style={{ width: 130 }}>Acciones</h6>
//                       <p className='m-0 text-start'>
//                         <div className='d-flex justify-content-center gap-1'>
//                           <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={user.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//                           {userRole === varAdmin && (
//                             <button onClick={() => deleteUser(user.ID)}
//                               className={`btn ${user.status === 1 ? 'btn-danger' : 'btn-success'}`}
//                               style={{ marginLeft: '10px' }}>
//                               <i className='fa fa-exchange'></i>
//                             </button>
//                           )}
//                         </div>
//                       </p>
//                     </div>
//                   </Card.Body>
//                 </Card>

//               ))}

//             </div>
//           </div>
//         </Sidebar>
//       </div>





//     </div>
//   )

// }

// export default CompShowUsers


import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { varAdmin, api } from "../servicios/api"
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import { miFuncion } from '../componet_extra/ConvertirFecha';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModal from './showmodal';
import ShowModalEdit from './ShowModalEdit';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const URI = api + 'usuarios/'


const CompShowUsers = () => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  console.log(isAutenticado);
  const [users, setUser] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCorreo, setSearchCorreo] = useState('');
  const [searchEstado, setSearchEstado] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const abierto = false;



  const handleButtonClick = () => {
    getUsers();
    // Limpiar los valores de los inputs estableciendo los estados en ''
    setSearchTerm('');
    setSearchCorreo('');
    setSearchEstado('');
    setSelectedDate('');
  };


  useEffect(() => {

    getUsers()
  }, []);



  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Realizar la búsqueda en tiempo real
    getUsers();
  };

  const handleSearchCorreoChange = (e) => {
    const value = e.target.value;
    setSearchCorreo(value);
    // Realizar la búsqueda en tiempo real
    getUsers();
  };

  const handleSearchEstadoChange = (e) => {
    const value = e.target.value;
    setSearchEstado(value);
    // Realiza la búsqueda en tiempo real
    getUsers();
  };


  const handleSelectedDateChange = (date) => {
    setSelectedDate(date);
    // Realizar la búsqueda en tiempo real
    getUsers();
  };



  const getUsers = async () => {

    const res = await axios.get(`${URI}search`, {
      params: {
        username: searchTerm,
        email: searchCorreo,
        status: searchEstado,
        createdAt: selectedDate,
      },
    });
    console.log(res);
    const users = await res.data.sort((a, b) => {
      if (a.status === 1 && b.status !== 1) {
        return -1;
      } else if (a.status !== 1 && b.status === 1) {
        return 1;
      } else {
        return 0;
      }
    });
    setUser(users)
  }


  //procedimineto para eliminar un blog
  const deleteUser = async (id) => {
    await axios.delete(`${URI}${id}`)
    getUsers()
  }

  return (

    <div>
      <Header />

      <Sidebar>

        <div className='mt-2 row'>

          <div className='cuadro_princal'>
            <div className='titulo_cuadro '>Usuarios</div>

            <ShowModal className='parent-rigth btn btn-success btn-ladda' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>

          <div className=' vh-1 d-flex align-items-center col d-md-block'>


            <table className='mt-3 table' style={{ textAlign: "left" }}>
              <thead className='table-secondary'>

                <tr>
                  <th>Alias Usuario <br />
                    <input
                      type="text"
                      placeholder="Buscar por alias"
                      value={searchTerm}
                      onChange={handleSearchTermChange}
                    />
                  </th>
                  <th className="d-md-table-cell d-none">Correo<br />
                    <input
                      type="text"
                      placeholder="Buscar por correo"
                      value={searchCorreo}
                      onChange={handleSearchCorreoChange}
                    /></th>
                  <th className="d-md-table-cell d-none">Estado <br />
                    <input
                      type="text"
                      placeholder="Buscar por estado"
                      value={searchEstado}
                      onChange={handleSearchEstadoChange}
                    /></th>
                  {/* Comentando la sección de Fecha de Creación */}
                  <th className="d-md-table-cell d-none">Fecha de creacion <br />
                    {/*<DatePicker
                          selected={selectedDate} // Agrega un estado para manejar la fecha seleccionada
                          onChange={handleSelectedDateChange} // Maneja el cambio de fecha
                          dateFormat="yyyy-MM-dd" // Ajusta el formato de la fecha según tus necesidades
                          placeholderText="Seleccionar fecha"
                          /> */}</th>
                  <th className='text-center'>Acciones <br />
                    <button className='btn btn-success' onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
                      <i className='fa fa-leaf'></i>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.ID}>
                    <td> {user.username} </td>
                    <td className="d-md-table-cell d-none"> {user.email} </td>
                    <td className="d-md-table-cell d-none">  {user.status === 1 ? "Activo" : "Inactivo"} </td>
                    <td className="d-md-table-cell d-none"> {miFuncion(user.createdAt)} </td>
                    <td>
                      <div className='d-flex justify-content-center gap-1'>
                        <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={user.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} getUsers={getUsers} />
                        {userRole === varAdmin && (
                          <button onClick={() => deleteUser(user.ID)}
                            className={`btn ${user.status === 1 ? 'btn-danger' : 'btn-success'}`}
                            style={{ marginLeft: '10px' }}>
                            <i className='fa fa-exchange'></i>
                          </button>
                        )}
                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* <div className='p-0 mt-2 d-block d-md-none'>
            {users.map((user) => (

              <Card key={user.ID} className='mb-1'>
                <Card.Body className='text-start '>
                  <div className=' d-flex text-start gap-2 mb-2'>
                    <h6 className='m-0 text-start' style={{ width: 130 }}>Alias Usuario</h6>
                    <p className='m-0 text-start'>{user.username}</p>
                  </div>
                  <div className='d-flex text-start gap-2 mb-2'>
                    <h6 className='m-0 text-start' style={{ width: 130 }}>Correo</h6>
                    <p className='m-0 text-start'> {user.email}</p>
                  </div>
                  <div className='d-flex text-start gap-2 mb-2'>
                    <h6 className='m-0 text-start' style={{ width: 130 }}>Estado</h6>
                    <p className='m-0 text-start'>{user.status === 1 ? "Activo" : "Inactivo"}</p>
                  </div>
                  <div className='d-flex text-start gap-2 mb-2'>
                    <h6 className='m-0 text-start' style={{ width: 130 }}>Fecha de creacion</h6>
                    <p className='m-0 text-start'>{miFuncion(user.createdAt)} </p>
                  </div>
                  <div className='d-flex text-start gap-2 mb-2'>
                    <h6 className='m-0 text-start' style={{ width: 130 }}>Acciones</h6>
                    <p className='m-0 text-start'>
                      <div className='d-flex justify-content-center gap-1'>
                        <ShowModalEdit className='parent-rigth btn btn-success btn-info' id={user.ID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        {userRole === varAdmin && (
                          <button onClick={() => deleteUser(user.ID)}
                            className={`btn ${user.status === 1 ? 'btn-danger' : 'btn-success'}`}
                            style={{ marginLeft: '10px' }}>
                            <i className='fa fa-exchange'></i>
                          </button>
                        )}
                      </div>
                    </p>
                  </div>
                </Card.Body>
              </Card>

            ))}

          </div> */}
        </div>
      </Sidebar>
    </div>

  )

}

export default CompShowUsers