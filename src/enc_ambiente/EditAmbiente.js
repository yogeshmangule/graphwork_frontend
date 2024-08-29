// import axios from 'axios'
// import { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import {  api } from "../servicios/api";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// //import ShowModal from '../enc_ambiente/ShowCreateAmbiente';


// const URI = api+'ambiente/'
// const options = [
//     { value: " ", label: "Selecciona una opcion" },
//     { value: "Comercial y Grandes Éxitos", label: "Comercial y Grandes Éxitos" },
//     { value: "Reggaetón y Urbana", label: "Reggaetón y Urbana" },
//     { value: "Electrónica", label: "Electrónica" },
//     { value: "Remember", label: "Remember" },
//     { value: "otro", label: "Otro" },
//   ];



// const CompEditEncuesta = ({id}) => {
//     const [encuestas, setEncuesta] = useState(new Date());
//     const [musicaL, setMusicaL] = useState('');
//     const [musicaM, setMusicaM] = useState('');
//     const [musicaX, setMusicaX] = useState('');
//     const [musicaJ, setMusicaJ] = useState('');
//     const [musicaV, setMusicaV] = useState('');
//     const [musicaS, setMusicaS] = useState('');
//     const [musicaD, setMusicaD] = useState('');
//     const [otroValorL, setOtroValorL] = useState('');
//     const [otroValorM, setOtroValorM] = useState('');
//     const [otroValorX, setOtroValorX] = useState('');
//     const [otroValorJ, setOtroValorJ] = useState('');
//     const [otroValorV, setOtroValorV] = useState('');
//     const [otroValorS, setOtroValorS] = useState('');
//     const [otroValorD, setOtroValorD] = useState('');
//     const [edad, setEdad] = useState('');
//     const [poder, setPoder] = useState('');
//     const [aspecto, setAspecto] = useState('');
//     const [Observ, setObserv] = useState('');
//     const [encuestaMarca, setSearchMarca] = useState('');
//     const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
//     const [showSecondModal, setShowSecondModal] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
//     const handleModalClose = () => {
//       setIsModalOpen(false);
//     };

//     const handleShowSecondModal = () => {
//       setShowSecondModal(true);
//       setIsModalOpen(false);
//     };

//     const [hasErrors, setHasErrors] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const userId = localStorage.getItem('userId');
//     const encuestaId = localStorage.getItem('encuestaId1');


//     const clearFields = () => {
//         setEdad('');
//         setMusicaL('');

//       };
//     const handleChangeLunes = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaL(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorL(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeMartes = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaM(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorM(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeMiercoles = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaX(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorX(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeJueves = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaJ(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorJ(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeViernes = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaV(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorV(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeSabado = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaS(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorS(''); // Reinicia el valor del campo de texto
//         }
//       };
//     const handleChangeDomingo = (e) => {
//         const selectedValue = e.target.value;
//         setMusicaD(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setOtroValorD(''); // Reinicia el valor del campo de texto
//         }
//       };

//       const handleOtroChangeL = (e) => {
//         const value = e.target.value;
//         setOtroValorL(value);
//       };
//       const handleOtroChangeM = (e) => {
//         const value = e.target.value;
//         setOtroValorM(value);
//       };
//       const handleOtroChangeX = (e) => {
//         const value = e.target.value;
//         setOtroValorX(value);
//       };
//       const handleOtroChangeJ = (e) => {
//         const value = e.target.value;
//         setOtroValorJ(value);
//       };
//       const handleOtroChangeV = (e) => {
//         const value = e.target.value;
//         setOtroValorV(value);
//       };
//       const handleOtroChangeS = (e) => {
//         const value = e.target.value;
//         setOtroValorS(value);
//       };
//       const handleOtroChangeD = (e) => {
//         const value = e.target.value;
//         setOtroValorD(value);
//       };



//     const navigate = useNavigate()    

//     //procedimiento guardar
//     const update = async (e) => {
//         e.preventDefault();
//         setHasErrors(false);

//         // Verificar campos obligatorios
//         const requiredFields = [musicaL, musicaD];
//         const emptyFields = requiredFields.filter(field => field === '');

//         try {
//             const valorFinalL = (musicaL === 'otro') ? otroValorL : musicaL;
//             const valorFinalM = (musicaM === 'otro') ? otroValorM : musicaM;
//             const valorFinalX = (musicaX === 'otro') ? otroValorX : musicaX;
//             const valorFinalJ = (musicaJ === 'otro') ? otroValorJ : musicaJ;
//             const valorFinalV = (musicaV === 'otro') ? otroValorV : musicaV;
//             const valorFinalS = (musicaS === 'otro') ? otroValorS : musicaS;
//             const valorFinalD = (musicaD === 'otro') ? otroValorD : musicaD;
//             // Antes de enviar al servidor
//           // Realiza la solicitud POST aquí con los datos de la encuesta
//           await axios.put(URI + id, {
//             musicaL: valorFinalL,
//             musicaM: valorFinalM,
//             musicaX: valorFinalX,
//             musicaJ: valorFinalJ,
//             musicaV: valorFinalV,
//             musicaS: valorFinalS,
//             musicaD: valorFinalD,
//             edad: edad,
//             poder: poder,
//             aspecto: aspecto,
//             Observ: Observ,
//           });
//           // Restablece los campos después de una operación exitosa
//           clearFields();
//           window.location.reload(); 

//         } catch (error) {
//           console.error('Error al enviar la solicitud POST:', error);
//           // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//           alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//         }
//       };

//       useEffect(() => {
//         // Incluye getBlogById en el array de dependencias
//         const getUserById = async () => {
//             const res = await axios.get(URI + id)
//             const musicaLValue = res.data.musicaL;
//             console.log("Datos recibidos de la base de datos:", res.data);
//             // Verifica si el valor de músicaL es "otro" o no está en las opciones predefinidas
//             if (res.data.musicaL === 'otro' || !options.some(opt => opt.value === res.data.musicaL)) {
//               setMusicaL('otro');
//               setOtroValorL(res.data.musicaL);
//           } else {
//               setMusicaL(res.data.musicaL);
//               setOtroValorL(''); // Asegúrate de reiniciar el valor del campo de texto
//           }

//             if (res.data.musicaM === 'otro' || !options.some(opt => opt.value === res.data.musicaM)) {
//               setMusicaM('otro');
//               setOtroValorM(res.data.musicaM);
//           } else {
//               setMusicaM(res.data.musicaM);
//               setOtroValorM(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//           if (res.data.musicaX === 'otro' || !options.some(opt => opt.value === res.data.musicaX)) {
//             setMusicaX('otro');
//             setOtroValorX(res.data.musicaX);
//           } else {
//             setMusicaX(res.data.musicaX);
//             setOtroValorX(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//           if (res.data.musicaJ === 'otro' || !options.some(opt => opt.value === res.data.musicaJ)) {
//             setMusicaJ('otro');
//             setOtroValorJ(res.data.musicaJ);
//           } else {
//             setMusicaJ(res.data.musicaJ);
//             setOtroValorJ(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//           if (res.data.musicaV === 'otro' || !options.some(opt => opt.value === res.data.musicaV)) {
//             setMusicaV('otro');
//             setOtroValorV(res.data.musicaV);
//           } else {
//             setMusicaV(res.data.musicaV);
//             setOtroValorV(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//           if (res.data.musicaS === 'otro' || !options.some(opt => opt.value === res.data.musicaS)) {
//             setMusicaS('otro');
//             setOtroValorS(res.data.musicaS);
//           } else {
//             setMusicaS(res.data.musicaS);
//             setOtroValorS(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//           if (res.data.musicaD === 'otro' || !options.some(opt => opt.value === res.data.musicaD)) {
//             setMusicaD('otro');
//             setOtroValorD(res.data.musicaD);
//           } else {
//             setMusicaD(res.data.musicaD);
//             setOtroValorD(''); // Asegúrate de reiniciar el valor del campo de texto
//           }
//             setEdad(res.data.edad)
//             setPoder(res.data.poder)
//             setAspecto(res.data.aspecto)
//             setObserv(res.data.Observ)
//         }

//         getUserById();
//     }, [id]);



//     return (
//         <div className='form-container'>

//            <h3>FICHA AMBIENTE</h3>
//            <Form onSubmit={update} className="my-form">  
//            <div>
//                 <label className='parent-label form-label'>Música Lunes</label>
//                 <Form.Select
//                 value={musicaL}
//                 onChange={handleChangeLunes}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaL === 'otro' || !options.some((opt) => opt.value === musicaL)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorL}
//                     onChange={handleOtroChangeL}/>
//                 </div>)}
//             </div>

//         <div>
//                 <label className='parent-label form-label'>Música Martes</label>
//                 <Form.Select
//                 value={musicaM}
//                 onChange={handleChangeMartes}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaM === 'otro' || !options.some((opt) => opt.value === musicaM)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorM}
//                     onChange={handleOtroChangeM}/>
//                 </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Música Miercoles</label>
//                 <Form.Select
//                 value={musicaX}
//                 onChange={handleChangeMiercoles}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaX === 'otro' || !options.some((opt) => opt.value === musicaX)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorX}
//                     onChange={handleOtroChangeX}/>
//                 </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Música Jueves</label>
//                 <Form.Select
//                 value={musicaJ}
//                 onChange={handleChangeJueves}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaJ === 'otro' || !options.some((opt) => opt.value === musicaJ)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorJ}
//                     onChange={handleOtroChangeJ}/>
//                 </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Música Viernes</label>
//                 <Form.Select
//                 value={musicaV}
//                 onChange={handleChangeViernes}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaV === 'otro' || !options.some((opt) => opt.value === musicaV)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorV}
//                     onChange={handleOtroChangeV}/>
//                 </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Música Sábado</label>
//                 <Form.Select
//                 value={musicaS}
//                 onChange={handleChangeSabado}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaS === 'otro' || !options.some((opt) => opt.value === musicaS)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorS}
//                     onChange={handleOtroChangeS}/>
//                 </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Música Domingo</label>
//                 <Form.Select
//                 value={musicaD}
//                 onChange={handleChangeDomingo}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {(musicaD === 'otro' || !options.some((opt) => opt.value === musicaD)) && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={otroValorD}
//                     onChange={handleOtroChangeD}/>
//                 </div>)}
//         </div>






//            <div>
//                 <label className='parent-label form-label'>Edad del público</label>
//                  <Form.Select value={edad} onChange={(e) => setEdad(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="18-25">De 18 a 25</option>
//                     <option value="26-40">De 26 a 40</option>
//                     <option value="Más de 40"> Más de 40</option>
//                     </Form.Select>
//             </div>
//             <div>
//                 <label className='parent-label form-label'>Poder Adquisitivo</label>
//                  <Form.Select value={poder} onChange={(e) => setPoder(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="Bajo">Bajo</option>
//                     <option value="Medio">Medio</option>
//                     <option value="Medio/Alto">Medio/Alto</option>
//                     <option value="Alto">Alto</option>
//                     </Form.Select>
//             </div>
//             <div>
//                 <label className='parent-label form-label'>Imagen(público)</label>
//                  <Form.Select value={aspecto} onChange={(e) => setAspecto(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="Casual">Casual</option>
//                     <option value="Elegante">Elegante</option>
//                     <option value="Vanguardista">Vanguardista</option>
//                     <option value="Pijo">Pijo</option>
//                     <option value="Underground">Underground</option>
//                     </Form.Select>
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo Dato Local):</label>
//                 <input
//                 value={Observ}
//                 onChange={(e) => setObserv(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>






//                 <div className="mt-3"> {/* Add margin-top for spacing */}
//                     <button type='submit'className='btn btn-success btn-ladda'>
//                     Modificar
//                     </button>
//                     {/* <ShowModal isOpen={isModalOpen} onClose={handleModalClose} />*/}

//                 </div>
//            </Form>
//         </div>
//     )
// }

// export default CompEditEncuesta



import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'ambiente/';
const options = [
  { value: " ", label: "Selecciona una opción" },
  { value: "Comercial y Grandes Éxitos", label: "Comercial y Grandes Éxitos" },
  { value: "Reggaetón y Urbana", label: "Reggaetón y Urbana" },
  { value: "Electrónica", label: "Electrónica" },
  { value: "Remember", label: "Remember" },
  { value: "otro", label: "Otro" },
];

const CompEditEncuesta = ({ id }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [musicaL, setMusicaL] = useState('');
  const [musicaM, setMusicaM] = useState('');
  const [musicaX, setMusicaX] = useState('');
  const [musicaJ, setMusicaJ] = useState('');
  const [musicaV, setMusicaV] = useState('');
  const [musicaS, setMusicaS] = useState('');
  const [musicaD, setMusicaD] = useState('');
  const [otroValorL, setOtroValorL] = useState('');
  const [otroValorM, setOtroValorM] = useState('');
  const [otroValorX, setOtroValorX] = useState('');
  const [otroValorJ, setOtroValorJ] = useState('');
  const [otroValorV, setOtroValorV] = useState('');
  const [otroValorS, setOtroValorS] = useState('');
  const [otroValorD, setOtroValorD] = useState('');
  const [edad, setEdad] = useState('');
  const [poder, setPoder] = useState('');
  const [aspecto, setAspecto] = useState('');
  const [Observ, setObserv] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChangeLunes = (e) => {
    const selectedValue = e.target.value;
    setMusicaL(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorL('');
    }
  };

  const handleChangeMartes = (e) => {
    const selectedValue = e.target.value;
    setMusicaM(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorM('');
    }
  };

  const handleChangeMiercoles = (e) => {
    const selectedValue = e.target.value;
    setMusicaX(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorX('');
    }
  };

  const handleChangeJueves = (e) => {
    const selectedValue = e.target.value;
    setMusicaJ(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorJ('');
    }
  };

  const handleChangeViernes = (e) => {
    const selectedValue = e.target.value;
    setMusicaV(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorV('');
    }
  };

  const handleChangeSabado = (e) => {
    const selectedValue = e.target.value;
    setMusicaS(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorS('');
    }
  };

  const handleChangeDomingo = (e) => {
    const selectedValue = e.target.value;
    setMusicaD(selectedValue);
    if (selectedValue === 'otro') {
      setOtroValorD('');
    }
  };

  const handleOtroChangeL = (e) => {
    setOtroValorL(e.target.value);
  };

  const handleOtroChangeM = (e) => {
    setOtroValorM(e.target.value);
  };

  const handleOtroChangeX = (e) => {
    setOtroValorX(e.target.value);
  };

  const handleOtroChangeJ = (e) => {
    setOtroValorJ(e.target.value);
  };

  const handleOtroChangeV = (e) => {
    setOtroValorV(e.target.value);
  };

  const handleOtroChangeS = (e) => {
    setOtroValorS(e.target.value);
  };

  const handleOtroChangeD = (e) => {
    setOtroValorD(e.target.value);
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      const valorFinalL = musicaL === 'otro' ? otroValorL : musicaL;
      const valorFinalM = musicaM === 'otro' ? otroValorM : musicaM;
      const valorFinalX = musicaX === 'otro' ? otroValorX : musicaX;
      const valorFinalJ = musicaJ === 'otro' ? otroValorJ : musicaJ;
      const valorFinalV = musicaV === 'otro' ? otroValorV : musicaV;
      const valorFinalS = musicaS === 'otro' ? otroValorS : musicaS;
      const valorFinalD = musicaD === 'otro' ? otroValorD : musicaD;

      await axios.put(URI + id, {
        musicaL: valorFinalL,
        musicaM: valorFinalM,
        musicaX: valorFinalX,
        musicaJ: valorFinalJ,
        musicaV: valorFinalV,
        musicaS: valorFinalS,
        musicaD: valorFinalD,
        edad: edad,
        poder: poder,
        aspecto: aspecto,
        Observ: Observ,
      });

      window.location.reload();
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const res = await axios.get(URI + id);
      const musicaLValue = res.data.musicaL;

      if (res.data.musicaL === 'otro' || !options.some(opt => opt.value === res.data.musicaL)) {
        setMusicaL('otro');
        setOtroValorL(res.data.musicaL);
      } else {
        setMusicaL(res.data.musicaL);
        setOtroValorL('');
      }

      if (res.data.musicaM === 'otro' || !options.some(opt => opt.value === res.data.musicaM)) {
        setMusicaM('otro');
        setOtroValorM(res.data.musicaM);
      } else {
        setMusicaM(res.data.musicaM);
        setOtroValorM('');
      }

      if (res.data.musicaX === 'otro' || !options.some(opt => opt.value === res.data.musicaX)) {
        setMusicaX('otro');
        setOtroValorX(res.data.musicaX);
      } else {
        setMusicaX(res.data.musicaX);
        setOtroValorX('');
      }

      if (res.data.musicaJ === 'otro' || !options.some(opt => opt.value === res.data.musicaJ)) {
        setMusicaJ('otro');
        setOtroValorJ(res.data.musicaJ);
      } else {
        setMusicaJ(res.data.musicaJ);
        setOtroValorJ('');
      }

      if (res.data.musicaV === 'otro' || !options.some(opt => opt.value === res.data.musicaV)) {
        setMusicaV('otro');
        setOtroValorV(res.data.musicaV);
      } else {
        setMusicaV(res.data.musicaV);
        setOtroValorV('');
      }

      if (res.data.musicaS === 'otro' || !options.some(opt => opt.value === res.data.musicaS)) {
        setMusicaS('otro');
        setOtroValorS(res.data.musicaS);
      } else {
        setMusicaS(res.data.musicaS);
        setOtroValorS('');
      }

      if (res.data.musicaD === 'otro' || !options.some(opt => opt.value === res.data.musicaD)) {
        setMusicaD('otro');
        setOtroValorD(res.data.musicaD);
      } else {
        setMusicaD(res.data.musicaD);
        setOtroValorD('');
      }

      setEdad(res.data.edad);
      setPoder(res.data.poder);
      setAspecto(res.data.aspecto);
      setObserv(res.data.Observ);
    };

    getUserById();
  }, [id]);

  return (
    <div className='form-container'>
      <h3>FICHA AMBIENTE</h3>
      <Form onSubmit={update} className="my-form">
        <div className="form-group">
          <label className='parent-label form-label'>Música Lunes</label>
          <Form.Select value={musicaL} onChange={handleChangeLunes}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaL === 'otro' || !options.some(opt => opt.value === musicaL)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorL} onChange={handleOtroChangeL} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Martes</label>
          <Form.Select value={musicaM} onChange={handleChangeMartes}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaM === 'otro' || !options.some(opt => opt.value === musicaM)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorM} onChange={handleOtroChangeM} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Miercoles</label>
          <Form.Select value={musicaX} onChange={handleChangeMiercoles}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaX === 'otro' || !options.some(opt => opt.value === musicaX)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorX} onChange={handleOtroChangeX} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Jueves</label>
          <Form.Select value={musicaJ} onChange={handleChangeJueves}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaJ === 'otro' || !options.some(opt => opt.value === musicaJ)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorJ} onChange={handleOtroChangeJ} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Viernes</label>
          <Form.Select value={musicaV} onChange={handleChangeViernes}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaV === 'otro' || !options.some(opt => opt.value === musicaV)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorV} onChange={handleOtroChangeV} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Sábado</label>
          <Form.Select value={musicaS} onChange={handleChangeSabado}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaS === 'otro' || !options.some(opt => opt.value === musicaS)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorS} onChange={handleOtroChangeS} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Música Domingo</label>
          <Form.Select value={musicaD} onChange={handleChangeDomingo}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {(musicaD === 'otro' || !options.some(opt => opt.value === musicaD)) && (
            <div>
              <label>Otro:</label>
              <input type="text" value={otroValorD} onChange={handleOtroChangeD} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Edad del público</label>
          <Form.Select value={edad} onChange={(e) => setEdad(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="18-25">De 18 a 25</option>
            <option value="26-40">De 26 a 40</option>
            <option value="Más de 40">Más de 40</option>
          </Form.Select>
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Poder Adquisitivo</label>
          <Form.Select value={poder} onChange={(e) => setPoder(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Medio/Alto">Medio/Alto</option>
            <option value="Alto">Alto</option>
          </Form.Select>
        </div>

        <div className="form-group">
          <label className='parent-label form-label'>Imagen (público)</label>
          <Form.Select value={aspecto} onChange={(e) => setAspecto(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Casual">Casual</option>
            <option value="Elegante">Elegante</option>
            <option value="Vanguardista">Vanguardista</option>
            <option value="Pijo">Pijo</option>
            <option value="Underground">Underground</option>
          </Form.Select>
        </div>

        <div className='mb-3 form-group'>
          <label className='parent-label form-label'>Observaciones (Módulo Dato Local):</label>
          <input
            value={Observ}
            onChange={(e) => setObserv(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className="mt-3">
          <button type='submit' className='btn btn-success btn-ladda'>
            Modificar
          </button>
        </div>
      </Form>

      <style jsx>{`
                .form-container {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                h3 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-control {
                    width: 100%;
                }

                @media (max-width: 768px) {
                    .form-container {
                        padding: 10px;
                    }

                    h3 {
                        font-size: 1.25rem;
                    }

                    .form-group {
                        margin-bottom: 15px;
                    }

                    .btn-ladda {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    h3 {
                        font-size: 1rem;
                    }

                    .form-group {
                        margin-bottom: 10px;
                    }

                    .btn-ladda {
                        width: 100%;
                    }
                }
            `}</style>
    </div>
  );
};

export default CompEditEncuesta;
