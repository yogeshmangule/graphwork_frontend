// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { api } from "../servicios/api";
// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalInstalacion from '../enc_instalacion/ShowCreateInstalacion';


// const URI = api + 'ambiente/'
// const options = [
//   { value: "", label: "Elige una opcion" },
//   { value: "Comercial y Grandes Éxitos", label: "Comercial y Grandes Éxitos" },
//   { value: "Reggaetón y Urbana", label: "Reggaetón y Urbana" },
//   { value: "Electrónica", label: "Electrónica" },
//   { value: "Remember", label: "Remember" },
//   { value: "otro", label: "Otro" },
// ];



// const CompCreateAmbiente = () => {
//   const [musicaL, setMusicaL] = useState('');
//   const [musicaM, setMusicaM] = useState('');
//   const [musicaX, setMusicaX] = useState('');
//   const [musicaJ, setMusicaJ] = useState('');
//   const [musicaV, setMusicaV] = useState('');
//   const [musicaS, setMusicaS] = useState('');
//   const [musicaD, setMusicaD] = useState('');
//   const [otroValorL, setOtroValorL] = useState('');
//   const [otroValorM, setOtroValorM] = useState('');
//   const [otroValorX, setOtroValorX] = useState('');
//   const [otroValorJ, setOtroValorJ] = useState('');
//   const [otroValorV, setOtroValorV] = useState('');
//   const [otroValorS, setOtroValorS] = useState('');
//   const [otroValorD, setOtroValorD] = useState('');
//   const [edad, setEdad] = useState('');
//   const [poder, setPoder] = useState('');
//   const [aspecto, setAspecto] = useState('');
//   const [Observ, setObserv] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleFirstButtonClick = async (e) => {
//     try {
//       // Supongamos que store() devuelve una promesa con la respuesta del servidor
//       const isSuccess = await storeAmbiente(e);
//       if (isSuccess) {
//         setIsModalOpen(true);
//       } else { }
//     } catch (error) {
//       console.error('Error al ejecutar store:', error);
//       // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//     }
//   };


//   const [hasErrors, setHasErrors] = useState(false);
//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');

//   const clearFields = () => {
//     setEdad('');
//     setMusicaL('');

//   };

//   const handleChangeLunes = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaL(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorL(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeMartes = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaM(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorM(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeMiercoles = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaX(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorX(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeJueves = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaJ(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorJ(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeViernes = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaV(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorV(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeSabado = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaS(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorS(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleChangeDomingo = (e) => {
//     const selectedValue = e.target.value;
//     setMusicaD(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtroValorD(''); // Reinicia el valor del campo de texto
//     }
//   };

//   const handleOtroChangeL = (e) => {
//     const value = e.target.value;
//     setOtroValorL(value);
//   };
//   const handleOtroChangeM = (e) => {
//     const value = e.target.value;
//     setOtroValorM(value);
//   };
//   const handleOtroChangeX = (e) => {
//     const value = e.target.value;
//     setOtroValorX(value);
//   };
//   const handleOtroChangeJ = (e) => {
//     const value = e.target.value;
//     setOtroValorJ(value);
//   };
//   const handleOtroChangeV = (e) => {
//     const value = e.target.value;
//     setOtroValorV(value);
//   };
//   const handleOtroChangeS = (e) => {
//     const value = e.target.value;
//     setOtroValorS(value);
//   };
//   const handleOtroChangeD = (e) => {
//     const value = e.target.value;
//     setOtroValorD(value);
//   };
//   const storeAmbiente = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);

//     // Verificar campos obligatorios
//     const requiredFields = [musicaL, musicaM, musicaX, musicaJ, musicaV, musicaS, musicaD,
//       Observ];
//     const emptyFields = requiredFields.filter(field => field === '');

//     // if (emptyFields.length > 0) {
//     //   setHasErrors(true);
//     //   alert('Por favor, complete todos los campos obligatorios.'); // O muestra un mensaje de error más amigable
//     //   return; // Evita enviar el formulario si hay errores
//     // }

//     try {
//       const valorFinalL = (musicaL === 'otro') ? otroValorL : musicaL;
//       const valorFinalM = (musicaM === 'otro') ? otroValorM : musicaM;
//       const valorFinalX = (musicaX === 'otro') ? otroValorX : musicaX;
//       const valorFinalJ = (musicaJ === 'otro') ? otroValorJ : musicaJ;
//       const valorFinalV = (musicaV === 'otro') ? otroValorV : musicaV;
//       const valorFinalS = (musicaS === 'otro') ? otroValorS : musicaS;
//       const valorFinalD = (musicaD === 'otro') ? otroValorD : musicaD;
//       // Antes de enviar al servidor
//       // Realiza la solicitud POST aquí con los datos de la encuesta
//       const response = await axios.post(URI, {
//         musicaL: valorFinalL,
//         musicaM: valorFinalM,
//         musicaX: valorFinalX,
//         musicaJ: valorFinalJ,
//         musicaV: valorFinalV,
//         musicaS: valorFinalS,
//         musicaD: valorFinalD,
//         edad: edad,
//         poder: poder,
//         aspecto: aspecto,
//         Observ: Observ,
//         encuesta_id: encuestaId,
//         user_id: userId,
//       });
//       // Restablece los campos después de una operación exitosa
//       // clearFields();
//       if (response.status === 201) {
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



//   return (
//     <div className='form-container'>

//       <h3>FICHA AMBIENTE</h3>
//       <Form onSubmit={storeAmbiente} className="my-form">
//         <div>
//           <label className='parent-label form-label'>Música Lunes</label>
//           <Form.Select
//             value={musicaL}
//             onChange={handleChangeLunes}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaL === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorL}
//                 onChange={handleOtroChangeL} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Martes</label>
//           <Form.Select
//             value={musicaM}
//             onChange={handleChangeMartes}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaM === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorM}
//                 onChange={handleOtroChangeM} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Miercoles</label>
//           <Form.Select
//             value={musicaX}
//             onChange={handleChangeMiercoles}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaX === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorX}
//                 onChange={handleOtroChangeX} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Jueves</label>
//           <Form.Select
//             value={musicaJ}
//             onChange={handleChangeJueves}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaJ === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorJ}
//                 onChange={handleOtroChangeJ} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Viernes</label>
//           <Form.Select
//             value={musicaV}
//             onChange={handleChangeViernes}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaV === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorV}
//                 onChange={handleOtroChangeV} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Sábado</label>
//           <Form.Select
//             value={musicaS}
//             onChange={handleChangeSabado}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaS === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorS}
//                 onChange={handleOtroChangeS} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Música Domingo</label>
//           <Form.Select
//             value={musicaD}
//             onChange={handleChangeDomingo}>
//             {options.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {musicaD === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={otroValorD}
//                 onChange={handleOtroChangeD} />
//             </div>)}
//         </div>
//         <div>
//           <label className='parent-label form-label'>Edad del público</label>
//           <Form.Select value={edad} onChange={(e) => setEdad(e.target.value)}>
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>
//             <option value="18-25">De 18 a 25</option>
//             <option value="26-40">De 26 a 40</option>
//             <option value="Más de 40"> Más de 40</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Poder Adquisitivo</label>
//           <Form.Select value={poder} onChange={(e) => setPoder(e.target.value)}>
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>
//             <option value="Bajo">Bajo</option>
//             <option value="Medio">Medio</option>
//             <option value="Medio/Alto">Medio/Alto</option>
//             <option value="Alto">Alto</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Imagen(público)</label>
//           <Form.Select value={aspecto} onChange={(e) => setAspecto(e.target.value)}>
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>
//             <option value="Casual">Casual</option>
//             <option value="Elegante">Elegante</option>
//             <option value="Vanguardista">Vanguardista</option>
//             <option value="Pijo">Pijo</option>
//             <option value="Underground">Underground</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Módulo Dato Local):</label>
//           <input
//             value={Observ}
//             onChange={(e) => setObserv(e.target.value)}
//             type="text"
//             className='form-control'
//           />
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
//             <ShowModalInstalacion
//               onClick={handleModalClose}
//               isOpen={isModalOpen}
//               onClose={handleModalClose}
//             />
//           </div>
//         )}

//       </Form>
//     </div>
//   )
// }

// export default CompCreateAmbiente



import axios from 'axios';
import { useState } from 'react';
import { api } from '../servicios/api';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalInstalacion from '../enc_instalacion/ShowCreateInstalacion';

const URI = api + 'ambiente/';
const options = [
  { value: '', label: 'Elige una opción' },
  { value: 'Comercial y Grandes Éxitos', label: 'Comercial y Grandes Éxitos' },
  { value: 'Reggaetón y Urbana', label: 'Reggaetón y Urbana' },
  { value: 'Electrónica', label: 'Electrónica' },
  { value: 'Remember', label: 'Remember' },
  { value: 'otro', label: 'Otro' },
];

const CompCreateAmbiente = ({ setAmbiteModalOpen, openCreateInstalacionModel }) => {
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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await storeAmbiente(e);
      if (isSuccess) {
        // setIsModalOpen(true);
        setAmbiteModalOpen(false);
        openCreateInstalacionModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

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

  const storeAmbiente = async (e) => {
    e.preventDefault();
    try {
      const valorFinalL = musicaL === 'otro' ? otroValorL : musicaL;
      const valorFinalM = musicaM === 'otro' ? otroValorM : musicaM;
      const valorFinalX = musicaX === 'otro' ? otroValorX : musicaX;
      const valorFinalJ = musicaJ === 'otro' ? otroValorJ : musicaJ;
      const valorFinalV = musicaV === 'otro' ? otroValorV : musicaV;
      const valorFinalS = musicaS === 'otro' ? otroValorS : musicaS;
      const valorFinalD = musicaD === 'otro' ? otroValorD : musicaD;

      const response = await axios.post(URI, {
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
        encuesta_id: encuestaId,
        user_id: userId,
      });

      return response.status === 201;
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    // <div className='form-container'>
    <div style={{ padding: '32px 62px' }} className="my-form">
      <h3>FICHA AMBIENTE</h3>
      <Form onSubmit={storeAmbiente}>
        <div className="form-group">
          <label className='parent-label form-label'>Música Lunes</label>
          <Form.Select value={musicaL} onChange={handleChangeLunes}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {musicaL === 'otro' && (
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
          {musicaM === 'otro' && (
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
          {musicaX === 'otro' && (
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
          {musicaJ === 'otro' && (
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
          {musicaV === 'otro' && (
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
          {musicaS === 'otro' && (
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
          {musicaD === 'otro' && (
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

        {isModalOpen && (
          <div className="mt-3">
            <ShowModalInstalacion
              onClick={handleModalClose}
              isOpen={isModalOpen}
              onClose={handleModalClose}
            />
          </div>
        )}
      </Form>

      <style jsx>{`
        .form-container {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        h3 {
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
}

export default CompCreateAmbiente;
