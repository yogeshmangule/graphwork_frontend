// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { api } from "../servicios/api";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModal from '../enc_horarios/ShowCreateHorario';


// const URI = api + 'encuesta/'
// const URI1 = api + 'establishments/'
// const URI2 = api + 'usuarios/'




// const CompCreateEncuesta = () => {
//   //  { open, abrirModal1 }
//   // console.log("open:-", open, abrirModal1)
//   const [fechaVisita, setFechaVisita] = useState(new Date());
//   const [horaVisita, setHoraVisita] = useState(new Date());
//   const [Id_estab, seIdestab] = useState('');
//   const [marcaComercial, setMarcaComercial] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [direccion2, setDireccion2] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [provincia, setProvincia] = useState('');
//   const [codigoPostal, setCodigoPostal] = useState('');
//   const [licencia, setLicencia] = useState('');
//   const [dimensiones, setDimensiones] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [user_id, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta

//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [estabData, setEstabData] = useState([]);
//   const [usersData, setUsersData] = useState([]);
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };
//   // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.


//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   // const userId = localStorage.getItem('userId');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   console.log("isModalOpen", isModalOpen);

//   const handleFirstButtonClick = async (e) => {
//     try {
//       // Supongamos que store() devuelve una promesa con la respuesta del servidor
//       const isSuccess = await store(e);
//       if (isSuccess) {
//         if (isModalOpen) {
//           setIsModalOpen(true);
//         } else {
//           setIsModalOpen(true)
//         }
//       } else { }
//     } catch (error) {
//       console.error('Error al ejecutar store:', error);
//       // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//     }
//   };

//   const clearFields = () => {
//     setFechaVisita('');
//     setHoraVisita('');
//     setMarcaComercial('');
//     setFullName('');
//     setDireccion('');
//     setDireccion2('');
//     setCiudad('');
//     setProvincia('');
//     setCodigoPostal('');
//     setLicencia('');
//     setDimensiones('');
//     setEmail('');
//     setTelefono('');
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     // Expresión regular para validar el formato de correo electrónico
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


//     // Validar el formato del correo electrónico
//     if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
//       setEmailError('');
//     } else {
//       setEmailError('Formato de correo electrónico no válido');
//     }
//   };


//   const navigate = useNavigate()

//   //procedimiento guardar
//   const store = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);

//     // Verificar campos obligatorios
//     // const requiredFields = [fechaVisita, horaVisita, marcaComercial, fullName, direccion, email, telefono, Id_estab, user_id];
//     const requiredFields = [Id_estab, user_id];
//     const emptyFields = requiredFields.filter(field => field === '');

//     if (emptyFields.length > 0) {
//       setHasErrors(true);
//       alert('Por favor, complete todos los campos obligatorios.'); // O muestra un mensaje de error más amigable
//       return; // Evita enviar el formulario si hay errores
//     }

//     try {
//       // Antes de enviar al servidor
//       const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

//       // Realiza la solicitud POST aquí con los datos de la encuesta
//       const response = await axios.post(URI, {
//         fecha_visita: fechaVisita,
//         hora_visita: horaVisitaFormateada,
//         Id_estab: Id_estab,
//         marca_comercial: marcaComercial,
//         full_name: fullName,
//         dir: direccion,
//         dir2: direccion2,
//         city: ciudad,
//         prov: provincia,
//         postal: codigoPostal,
//         licencia: licencia,
//         dimensiones: dimensiones,
//         email: email,
//         phone: telefono,
//         user_id: user_id,
//       });
//       // const nuevaEncuestaId = response.data.ID;
//       // localStorage.setItem('encuestaId1', nuevaEncuestaId);
//       // Restablece los campos después de una operación exitosa
//       // clearFields();
//       if (response.status === 201) {
//         const nuevaEncuestaId = response.data.ID;
//         const nuevaserIdEncuesta = response.data.user_id
//         localStorage.setItem('encuestaId1', nuevaEncuestaId);
//         localStorage.setItem('userIdEncuesta', nuevaserIdEncuesta)
//         // Operación exitosa, devuelve true
//         return true;
//       } else {
//         // Operación fallida, devuelve false
//         return false;
//       }
//       //window.location.reload(); 

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };

//   useEffect(() => {
//     establece()
//     usuariosList()
//   }, []);

//   const establece = async () => {
//     try {
//       const response = await axios.post(URI1, {})
//       console.log(response.data.items, "jjj");
//       setEstabData(response.data.items)
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   }

//   const usuariosList = async () => {
//     try {
//       const response = await axios.get(URI2)
//       console.log(response.data, "users");
//       setUsersData(response.data)
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   }


//   return (
//     <div className='form-container'>

//       <h3>FICHA ENCUESTA</h3>
//       <Form onSubmit={store} className="my-form">
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Fecha de Visita</label>
//           <DatePicker
//             selected={fechaVisita}
//             onChange={(date) => setFechaVisita(date)}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Seleccionar fecha"
//             className='form-control'
//           />
//           {hasErrors && !fechaVisita && <span className="error-message">Requiere que ingrese Fecha de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Hora de Visita</label>
//           <DatePicker
//             selected={horaVisita}
//             onChange={(date) => setHoraVisita(date)}
//             showTimeSelect
//             showTimeSelectOnly
//             timeIntervals={15}
//             timeCaption="Hora"
//             dateFormat="HH:mm"
//             placeholderText="Seleccionar hora"
//             className='form-control'
//           />
//           {hasErrors && !horaVisita && <span className="error-message">Requiere que ingrese Hora de Visita.</span>}
//         </div>


//         <div className='mb-3'>
//           <label className='parent-label form-label'>Usuario</label>
//           {/* <input
//             value={Id_estab}
//             onChange={(e) => seIdestab(e.target.value)}
//             type="text"
//             className='form-control'
//           /> */}
//           <Form.Select
//             value={user_id}
//             onChange={(e) => setUserId(e.target.value)}
//           >
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>

//             {/* Opciones personalizadas */}
//             {/* <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option> */}
//             {
//               usersData.map((user, index) =>
//                 <option value={user.ID}>{user.username}</option>
//               )
//             }
//           </Form.Select>
//           {hasErrors && !user_id && <span className="error-message">Selecciona las usuario.</span>}
//         </div>


//         <div className='mb-3'>
//           <label className='parent-label form-label'>establishments</label>
//           {/* <input
//             value={Id_estab}
//             onChange={(e) => seIdestab(e.target.value)}
//             type="text"
//             className='form-control'
//           /> */}
//           <Form.Select
//             value={Id_estab}
//             onChange={(e) => seIdestab(e.target.value)}
//           >
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>

//             {/* Opciones personalizadas */}
//             {/* <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option> */}
//             {
//               estabData.map((estab, index) =>
//                 <option value={estab.ID}>{estab.name}</option>
//               )
//             }
//           </Form.Select>
//           {hasErrors && !Id_estab && <span className="error-message">Selecciona las Establece.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Marca Comercial</label>
//           <input
//             value={marcaComercial}
//             onChange={(e) => setMarcaComercial(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !marcaComercial && <span className="error-message">Requiere que ingrese Nombre Completo.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Nombre Completo</label>
//           <input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !fullName && <span className="error-message">Requiere que ingrese Nombre Completo.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dirección</label>
//           <input
//             value={direccion}
//             onChange={(e) => setDireccion(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !direccion && <span className="error-message">Requiere que ingrese Dirección.</span>} */}
//         </div>
//         <div className='mb-3'>
//           <input
//             value={direccion2}
//             onChange={(e) => setDireccion2(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !direccion2 && <span className="error-message">Requiere que ingrese Dirección.</span>} */}
//         </div>
//         <div className='row'>
//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Ciudad</label>
//             <input
//               value={ciudad}
//               onChange={(e) => setCiudad(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !ciudad && <span className="error-message">Requiere que ingrese Ciudad.</span>} */}
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Provincia</label>
//             <input
//               value={provincia}
//               onChange={(e) => setProvincia(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !provincia && <span className="error-message">Requiere que ingrese Provincia.</span>} */}
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Código Postal</label>
//             <input
//               value={codigoPostal}
//               onChange={(e) => setCodigoPostal(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !codigoPostal && <span className="error-message">Requiere que ingrese Código Postal.</span>} */}
//           </div>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Licencia</label>
//           <input
//             value={licencia}
//             onChange={(e) => setLicencia(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !licencia && <span className="error-message">Requiere que ingrese Licencia.</span>} */}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Dimensiones</label>
//           <Form.Select
//             value={dimensiones}
//             onChange={(e) => setDimensiones(e.target.value)}
//           >
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>

//             {/* Opciones personalizadas */}
//             <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option>
//           </Form.Select>
//           {/* {hasErrors && !dimensiones && <span className="error-message">Selecciona las Dimensiones.</span>} */}
//         </div>


//         <div className='mb-3'>
//           <label className='parent-label form-label'>Teléfono</label>
//           <input
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !telefono && <span className="error-message">Requiere que ingrese Teléfono.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !email && <span className="error-message">Requiere que ingrese Correo.</span>} */}
//         </div>
//         {!isModalOpen && (
//           <div className="mt-3">
//             <button
//               className='btn btn-success btn-ladda'
//               onClick={(e) => handleFirstButtonClick(e)}
//             >
//               Registrar Datos
//             </button>
//           </div>
//         )}


//         {isModalOpen && (
//           <div className="mt-3">
//             <ShowModal
//               onClick={handleModalClose}
//               isOpen={isModalOpen}
//               onClose={handleModalClose}
//             // open={open}
//             // abrirModal1={abrirModal1}
//             />
//           </div>
//         )}


//       </Form>
//     </div>
//   )
// }

// export default CompCreateEncuesta


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from "../servicios/api";
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import ShowModal from '../enc_horarios/ShowCreateHorario';
// import '../App.css';

// const URI = api + 'encuesta/';
// const URI1 = api + 'establishments/';
// const URI2 = api + 'usuarios/';

// const CompCreateEncuesta = () => {
//   const [fechaVisita, setFechaVisita] = useState(new Date());
//   const [horaVisita, setHoraVisita] = useState(new Date());
//   const [Id_estab, seIdestab] = useState('');
//   const [marcaComercial, setMarcaComercial] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [direccion2, setDireccion2] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [provincia, setProvincia] = useState('');
//   const [codigoPostal, setCodigoPostal] = useState('');
//   const [licencia, setLicencia] = useState('');
//   const [dimensiones, setDimensiones] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [user_id, setUserId] = useState(0);
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [estabData, setEstabData] = useState([]);
//   const [usersData, setUsersData] = useState([]);
//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleFirstButtonClick = async (e) => {
//     try {
//       const isSuccess = await store(e);
//       if (isSuccess) {
//         setIsModalOpen(true);
//       }
//     } catch (error) {
//       console.error('Error al ejecutar store:', error);
//     }
//   };

//   const clearFields = () => {
//     setFechaVisita('');
//     setHoraVisita('');
//     setMarcaComercial('');
//     setFullName('');
//     setDireccion('');
//     setDireccion2('');
//     setCiudad('');
//     setProvincia('');
//     setCodigoPostal('');
//     setLicencia('');
//     setDimensiones('');
//     setEmail('');
//     setTelefono('');
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
//       setEmailError('');
//     } else {
//       setEmailError('Formato de correo electrónico no válido');
//     }
//   };

//   const store = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);

//     const requiredFields = [Id_estab, user_id];
//     const emptyFields = requiredFields.filter(field => field === '');

//     if (emptyFields.length > 0) {
//       setHasErrors(true);
//       alert('Por favor, complete todos los campos obligatorios.');
//       return;
//     }

//     try {
//       const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

//       const response = await axios.post(URI, {
//         fecha_visita: fechaVisita,
//         hora_visita: horaVisitaFormateada,
//         Id_estab,
//         marca_comercial: marcaComercial,
//         full_name: fullName,
//         dir: direccion,
//         dir2: direccion2,
//         city: ciudad,
//         prov: provincia,
//         postal: codigoPostal,
//         licencia,
//         dimensiones,
//         email,
//         phone: telefono,
//         user_id,
//       });

//       if (response.status === 201) {
//         const nuevaEncuestaId = response.data.ID;
//         const nuevaserIdEncuesta = response.data.user_id;
//         localStorage.setItem('encuestaId1', nuevaEncuestaId);
//         localStorage.setItem('userIdEncuesta', nuevaserIdEncuesta);
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };

//   useEffect(() => {
//     establece();
//     usuariosList();
//   }, []);

//   const establece = async () => {
//     try {
//       const response = await axios.post(URI1, {});
//       setEstabData(response.data.items);
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   };

//   const usuariosList = async () => {
//     try {
//       const response = await axios.get(URI2);
//       setUsersData(response.data);
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   };

//   return (
//     <div className='form-container'>
//       <h3>FICHA ENCUESTA</h3>
//       <Form onSubmit={store} className="my-form">
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Fecha de Visita</label>
//           <DatePicker
//             selected={fechaVisita}
//             onChange={(date) => setFechaVisita(date)}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Seleccionar fecha"
//             className='form-control'
//           />
//           {hasErrors && !fechaVisita && <span className="error-message">Requiere que ingrese Fecha de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Hora de Visita</label>
//           <DatePicker
//             selected={horaVisita}
//             onChange={(date) => setHoraVisita(date)}
//             showTimeSelect
//             showTimeSelectOnly
//             timeIntervals={15}
//             timeCaption="Hora"
//             dateFormat="HH:mm"
//             placeholderText="Seleccionar hora"
//             className='form-control'
//           />
//           {hasErrors && !horaVisita && <span className="error-message">Requiere que ingrese Hora de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Usuario</label>
//           <Form.Select
//             value={user_id}
//             onChange={(e) => setUserId(e.target.value)}
//           >
//             <option value="">Selecciona una opción</option>
//             {usersData.map((user, index) =>
//               <option key={user.ID} value={user.ID}>{user.username}</option>
//             )}
//           </Form.Select>
//           {hasErrors && !user_id && <span className="error-message">Selecciona las usuario.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Establecimientos</label>
//           <Form.Select
//             value={Id_estab}
//             onChange={(e) => seIdestab(e.target.value)}
//           >
//             <option value="">Selecciona una opción</option>
//             {estabData.map((estab, index) =>
//               <option key={estab.ID} value={estab.ID}>{estab.name}</option>
//             )}
//           </Form.Select>
//           {hasErrors && !Id_estab && <span className="error-message">Selecciona las Establece.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Marca Comercial</label>
//           <input
//             value={marcaComercial}
//             onChange={(e) => setMarcaComercial(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Nombre Completo</label>
//           <input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dirección</label>
//           <input
//             value={direccion}
//             onChange={(e) => setDireccion(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>
//         <div className='mb-3'>
//           <input
//             value={direccion2}
//             onChange={(e) => setDireccion2(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='row'>
//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Ciudad</label>
//             <input
//               value={ciudad}
//               onChange={(e) => setCiudad(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Provincia</label>
//             <input
//               value={provincia}
//               onChange={(e) => setProvincia(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Código Postal</label>
//             <input
//               value={codigoPostal}
//               onChange={(e) => setCodigoPostal(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Licencia</label>
//           <input
//             value={licencia}
//             onChange={(e) => setLicencia(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div>
//           <label className='parent-label form-label'>Dimensiones</label>
//           <Form.Select
//             value={dimensiones}
//             onChange={(e) => setDimensiones(e.target.value)}
//           >
//             <option value="">Selecciona una opción</option>
//             <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Teléfono</label>
//           <input
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Email</label>
//           <input
//             value={email}
//             onChange={handleEmailChange}
//             type="text"
//             className={`form-control ${emailError ? 'is-invalid' : ''}`}
//           />
//           {emailError && <span className="error-message">{emailError}</span>}
//         </div>

//         {!isModalOpen && (
//           <div className="mt-3">
//             <button
//               className='btn btn-success btn-ladda'
//               onClick={(e) => handleFirstButtonClick(e)}
//             >
//               Registrar Datos
//             </button>
//           </div>
//         )}

//         {isModalOpen && (
//           <div className="mt-3">
//             <ShowModal
//               onClick={handleModalClose}
//               isOpen={isModalOpen}
//               onClose={handleModalClose}
//             />
//           </div>
//         )}
//       </Form>

//       <style jsx>{`
//         .form-container {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 20px;
//           background-color: #f9f9f9;
//           border-radius: 8px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }

//         .form-label {
//           font-weight: bold;
//         }

//         @media (max-width: 768px) {
//           .form-container {
//             padding: 15px;
//           }

//           .row {
//             display: flex;
//             flex-direction: column;
//           }

//           .col-md-4 {
//             margin-bottom: 10px;
//           }
//         }

//         @media (max-width: 480px) {
//           .form-container {
//             padding: 10px;
//           }

//           .form-label {
//             font-size: 14px;
//           }

//           .row {
//             display: flex;
//             flex-direction: column;
//           }

//           .col-md-4 {
//             margin-bottom: 15px;
//           }

//           .btn-ladda {
//             width: 100%;
//             font-size: 16px;
//           }
//         }

//         .error-message {
//           color: red;
//           font-size: 12px;
//           margin-top: 5px;
//         }

//         .is-invalid {
//           border-color: red;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompCreateEncuesta;


// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from "../servicios/api";
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModal from '../enc_horarios/ShowCreateHorario';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';

// const URI = api + 'encuesta/';
// const URI1 = api + 'establishments/';
// const URI2 = api + 'usuarios/';

// const CompCreateEncuesta = () => {
//   const [fechaVisita, setFechaVisita] = useState(new Date());
//   const [horaVisita, setHoraVisita] = useState(new Date());
//   const [Id_estab, seIdestab] = useState('');
//   const [marcaComercial, setMarcaComercial] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [direccion2, setDireccion2] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [provincia, setProvincia] = useState('');
//   const [codigoPostal, setCodigoPostal] = useState('');
//   const [licencia, setLicencia] = useState('');
//   const [dimensiones, setDimensiones] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [user_id, setUserId] = useState(0);
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [estabData, setEstabData] = useState([]);
//   const [usersData, setUsersData] = useState([]);
//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };

//   const handleFirstButtonClick = async (e) => {
//     try {
//       const isSuccess = await store(e);
//       if (isSuccess) {
//         setIsModalOpen(true);
//       }
//     } catch (error) {
//       console.error('Error al ejecutar store:', error);
//     }
//   };

//   const clearFields = () => {
//     setFechaVisita('');
//     setHoraVisita('');
//     setMarcaComercial('');
//     setFullName('');
//     setDireccion('');
//     setDireccion2('');
//     setCiudad('');
//     setProvincia('');
//     setCodigoPostal('');
//     setLicencia('');
//     setDimensiones('');
//     setEmail('');
//     setTelefono('');
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
//       setEmailError('');
//     } else {
//       setEmailError('Formato de correo electrónico no válido');
//     }
//   };

//   const navigate = useNavigate();

//   const store = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);

//     const requiredFields = [Id_estab, user_id];
//     const emptyFields = requiredFields.filter(field => field === '');

//     if (emptyFields.length > 0) {
//       setHasErrors(true);
//       alert('Por favor, complete todos los campos obligatorios.');
//       return;
//     }

//     try {
//       const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

//       const response = await axios.post(URI, {
//         fecha_visita: fechaVisita,
//         hora_visita: horaVisitaFormateada,
//         Id_estab: Id_estab,
//         marca_comercial: marcaComercial,
//         full_name: fullName,
//         dir: direccion,
//         dir2: direccion2,
//         city: ciudad,
//         prov: provincia,
//         postal: codigoPostal,
//         licencia: licencia,
//         dimensiones: dimensiones,
//         email: email,
//         phone: telefono,
//         user_id: user_id,
//       });

//       if (response.status === 201) {
//         const nuevaEncuestaId = response.data.ID;
//         const nuevaserIdEncuesta = response.data.user_id;
//         localStorage.setItem('encuestaId1', nuevaEncuestaId);
//         localStorage.setItem('userIdEncuesta', nuevaserIdEncuesta);
//         return true;
//       } else {
//         return false;
//       }

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };

//   useEffect(() => {
//     establece();
//     usuariosList();
//   }, []);

//   const establece = async () => {
//     try {
//       const response = await axios.post(URI1, {});
//       setEstabData(response.data.items);
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   };

//   const usuariosList = async () => {
//     try {
//       const response = await axios.get(URI2);
//       setUsersData(response.data);
//     } catch (error) {
//       console.error('Error al enviar la solicitud GET:', error);
//     }
//   };

//   return (
//     <div className='form-container'>
//       <h3>FICHA ENCUESTA</h3>
//       <Form onSubmit={store} className="my-form">
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Fecha de Visita</label>
//           <DatePicker
//             selected={fechaVisita}
//             onChange={(date) => setFechaVisita(date)}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Seleccionar fecha"
//             className='form-control'
//           />
//           {hasErrors && !fechaVisita && <span className="error-message">Requiere que ingrese Fecha de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Hora de Visita</label>
//           <DatePicker
//             selected={horaVisita}
//             onChange={(date) => setHoraVisita(date)}
//             showTimeSelect
//             showTimeSelectOnly
//             timeIntervals={15}
//             timeCaption="Hora"
//             dateFormat="HH:mm"
//             placeholderText="Seleccionar hora"
//             className='form-control'
//           />
//           {hasErrors && !horaVisita && <span className="error-message">Requiere que ingrese Hora de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Usuario</label>
//           <Form.Select
//             value={user_id}
//             onChange={(e) => setUserId(e.target.value)}
//             className='form-control'
//           >
//             <option value="">Selecciona una opción</option>
//             {usersData.map((user, index) => (
//               <option value={user.ID} key={index}>{user.username}</option>
//             ))}
//           </Form.Select>
//           {hasErrors && !user_id && <span className="error-message">Selecciona un usuario.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Establecimientos</label>
//           <Form.Select
//             value={Id_estab}
//             onChange={(e) => seIdestab(e.target.value)}
//             className='form-control'
//           >
//             <option value="">Selecciona una opción</option>
//             {estabData.map((estab, index) => (
//               <option value={estab.ID} key={index}>{estab.name}</option>
//             ))}
//           </Form.Select>
//           {hasErrors && !Id_estab && <span className="error-message">Selecciona un establecimiento.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Marca Comercial</label>
//           <input
//             value={marcaComercial}
//             onChange={(e) => setMarcaComercial(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Nombre Completo</label>
//           <input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dirección</label>
//           <input
//             value={direccion}
//             onChange={(e) => setDireccion(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>
//         <div className='mb-3'>
//           <input
//             value={direccion2}
//             onChange={(e) => setDireccion2(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>
//         <div className='row'>
//           <div className='col-md-4 col-12 mb-3'>
//             <label className='parent-label form-label'>Ciudad</label>
//             <input
//               value={ciudad}
//               onChange={(e) => setCiudad(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>

//           <div className='col-md-4 col-12 mb-3'>
//             <label className='parent-label form-label'>Provincia</label>
//             <input
//               value={provincia}
//               onChange={(e) => setProvincia(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>

//           <div className='col-md-4 col-12 mb-3'>
//             <label className='parent-label form-label'>Código Postal</label>
//             <input
//               value={codigoPostal}
//               onChange={(e) => setCodigoPostal(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//           </div>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Licencia</label>
//           <input
//             value={licencia}
//             onChange={(e) => setLicencia(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dimensiones</label>
//           <Form.Select
//             value={dimensiones}
//             onChange={(e) => setDimensiones(e.target.value)}
//             className='form-control'
//           >
//             <option value="">Selecciona una opción</option>
//             <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Teléfono</label>
//           <input
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Email</label>
//           <input
//             value={email}
//             onChange={handleEmailChange}
//             type="text"
//             className='form-control'
//           />
//           {emailError && <span className="error-message">{emailError}</span>}
//         </div>

//         {!isModalOpen && (
//           <div className="mt-3">
//             <button
//               className='btn btn-success btn-ladda'
//               onClick={(e) => handleFirstButtonClick(e)}
//             >
//               Registrar Datos
//             </button>
//           </div>
//         )}

//         {isModalOpen && (
//           <div className="mt-3">
//             <ShowModal
//               onClick={handleModalClose}
//               isOpen={isModalOpen}
//               onClose={handleModalClose}
//             />
//           </div>
//         )}
//       </Form>
//     </div>
//   );
// }

// export default CompCreateEncuesta;


import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModal from '../enc_horarios/ShowCreateHorario';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const URI = api + 'encuesta/';
const URI1 = api + 'establishments/';
const URI2 = api + 'usuarios/';

const CompCreateEncuesta = ({ abrirModal, setEncuestaModalOpen, openHorarioModal }) => {
  const [fechaVisita, setFechaVisita] = useState(new Date());
  const [horaVisita, setHoraVisita] = useState(new Date());
  const [Id_estab, setIdEstab] = useState('');
  const [marcaComercial, setMarcaComercial] = useState('');
  const [fullName, setFullName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [direccion2, setDireccion2] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [licencia, setLicencia] = useState('');
  const [dimensiones, setDimensiones] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [user_id, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [estabData, setEstabData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  // const handleFirstButtonClick = async (e) => {
  //   try {
  //     const isSuccess = await store(e);
  //     if (isSuccess) {
  //       setIsModalOpen(true);
  //       setTimeout(() => {
  //         abrirModal()
  //       }, 2000)
  //     }
  //   } catch (error) {
  //     console.error('Error al ejecutar store:', error);
  //   }
  // };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await store(e); // Replace with your actual store logic
      if (isSuccess) {
        setEncuestaModalOpen(false);
        // setTimeout(() => {
          openHorarioModal();
        // }, 2000);
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const clearFields = () => {
    setFechaVisita('');
    setHoraVisita('');
    setMarcaComercial('');
    setFullName('');
    setDireccion('');
    setDireccion2('');
    setCiudad('');
    setProvincia('');
    setCodigoPostal('');
    setLicencia('');
    setDimensiones('');
    setEmail('');
    setTelefono('');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
      setEmailError('');
    } else {
      setEmailError('Formato de correo electrónico no válido');
    }
  };

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    setHasErrors(false);

    const requiredFields = [Id_estab, user_id];
    const emptyFields = requiredFields.filter(field => field === '');

    if (emptyFields.length > 0) {
      setHasErrors(true);
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    try {
      const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

      const response = await axios.post(URI, {
        fecha_visita: fechaVisita,
        hora_visita: horaVisitaFormateada,
        Id_estab: Id_estab,
        marca_comercial: marcaComercial,
        full_name: fullName,
        dir: direccion,
        dir2: direccion2,
        city: ciudad,
        prov: provincia,
        postal: codigoPostal,
        licencia: licencia,
        dimensiones: dimensiones,
        email: email,
        phone: telefono,
        user_id: user_id,
      });

      if (response.status === 201) {
        const nuevaEncuestaId = response.data.ID;
        const nuevaserIdEncuesta = response.data.user_id;
        localStorage.setItem('encuestaId1', nuevaEncuestaId);
        localStorage.setItem('userIdEncuesta', nuevaserIdEncuesta);
        return true;
      } else {
        return false;
      }

    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    establece();
    usuariosList();
  }, []);

  const establece = async () => {
    try {
      const response = await axios.post(URI1, {});
      setEstabData(response.data.items);
    } catch (error) {
      console.error('Error al enviar la solicitud GET:', error);
    }
  };

  const usuariosList = async () => {
    try {
      const response = await axios.get(URI2);
      setUsersData(response.data);
    } catch (error) {
      console.error('Error al enviar la solicitud GET:', error);
    }
  };

  const handleEstabChange = (e) => {
    const selectedEstabId = e.target.value;
    const selectedEstab = estabData.find(estab => estab.ID === parseInt(selectedEstabId));

    if (selectedEstab) {
      setIdEstab(selectedEstabId); // Set the establishment ID
      setMarcaComercial(selectedEstab.name); // Set the establishment name in "Marca Comercial"
    }
  };


  return (
    <div className='form-container'>
      <h3>FICHA ENCUESTA</h3>
      <Form onSubmit={store} className="my-form">
        <div className='mb-3'>
          <label className='parent-label form-label'>Fecha de Visita</label>
          <DatePicker
            selected={fechaVisita}
            onChange={(date) => setFechaVisita(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Seleccionar fecha"
            className='form-control'
          />
          {hasErrors && !fechaVisita && <span className="error-message">Requiere que ingrese Fecha de Visita.</span>}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Hora de Visita</label>
          <DatePicker
            selected={horaVisita}
            onChange={(date) => setHoraVisita(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="HH:mm"
            placeholderText="Seleccionar hora"
            className='form-control'
          />
          {hasErrors && !horaVisita && <span className="error-message">Requiere que ingrese Hora de Visita.</span>}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Usuario</label>
          <Form.Select
            value={user_id}
            onChange={(e) => setUserId(e.target.value)}
            className='form-control'
          >
            <option value="">Selecciona una opción</option>
            {usersData.map((user, index) => (
              <option value={user.ID} key={index}>{user.username}</option>
            ))}
          </Form.Select>
          {hasErrors && !user_id && <span className="error-message">Selecciona un usuario.</span>}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Establecimientos</label>
          <Form.Select
            value={Id_estab}
            onChange={handleEstabChange}  // Attach the handler here
            className='form-control'
          >
            <option value="">Selecciona una opción</option>
            {estabData.map((estab, index) => (
              <option value={estab.ID} key={index}>{estab.name}</option>
            ))}
          </Form.Select>

          {hasErrors && !Id_estab && <span className="error-message">Selecciona un establecimiento.</span>}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Marca Comercial</label>
          <input
            value={marcaComercial}
            // onChange={(e) => setMarcaComercial(e.target.value)}
            type="text"
            className='form-control'
          />

        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Nombre Completo</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            value={direccion2}
            onChange={(e) => setDireccion2(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='row'>
          <div className='col-md-4 col-12 mb-3'>
            <label className='parent-label form-label'>Ciudad</label>
            <input
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>

          <div className='col-md-4 col-12 mb-3'>
            <label className='parent-label form-label'>Provincia</label>
            <input
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>

          <div className='col-md-4 col-12 mb-3'>
            <label className='parent-label form-label'>Código Postal</label>
            <input
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Licencia</label>
          <input
            value={licencia}
            onChange={(e) => setLicencia(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Dimensiones</label>
          <Form.Select
            value={dimensiones}
            onChange={(e) => setDimensiones(e.target.value)}
            className='form-control'
          >
            <option value="">Selecciona una opción</option>
            <option value="0-200">0 a 200m2</option>
            <option value="200-500">200 a 500m2</option>
            <option value="500-1000">500 a 1.000m2</option>
            <option value="1000+">Más de 1.000m2</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Teléfono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            className='form-control'
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        {!isModalOpen && (
          <div className="mt-3">
            <button
              className='btn btn-success btn-ladda'
              onClick={(e) => handleFirstButtonClick(e)}
            >
              Registrar Datos
            </button>
          </div>
        )}


      </Form>
      {isModalOpen && (
        <div className="mt-3">
          <ShowModal
            onClick={handleModalClose}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        </div>
      )}
    </div>
  );
}

export default CompCreateEncuesta;
