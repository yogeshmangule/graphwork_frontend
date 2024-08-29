// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import {  api } from "../servicios/api";
// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalSeguridad from '../enc_seguridad/ShowCreateSeguridad';


// const URI = api+'instalacion/'
// const opcionesPista = ["25m2", "25m2 y 50m2", "Más de 50m2"];
// const options = [
//     { value: "", label: "Elige una opcion" },
//     { value: "Si", label: "Si" },
//     { value: "No", label: "No" },
//   ];
// const options_bu = [
//     { value: "", label: "Elige una opcion" },
//     { value: "Muy Bueno", label: "Muy Bueno" },
//     { value: "Bastante bueno", label: "Bastante bueno" },
//     { value: "Bastante malo", label: "Bastante malo" },
//     { value: "Muy Malo", label: "Muy Malo" },
//   ];



// const CompCreateInstalacion = () => {
//     const [encuestas, setEncuesta] = useState(new Date());
//     const [pista, setPista] =  useState('');
//   const [escenario, setEscenario] =  useState(false);
//   const [zonamesas, setZonamesas] =  useState('');
//   const [perc_mesas, setPerc_mesas] =  useState(false);
//   const [barras, setBarras] =  useState('');
//   const [barrasmetros, setBarrasmetros] =  useState('');
//   const [barraspersons, setBarraspersons] =  useState('');
//   const [decoracion, setDecoracion] =  useState('');
//   const [decoracionO, setDecoracionO] =  useState('');
//   const [climatizacion, setClimatizacion] =  useState(false);
//   const [climat_temp, setClimat_temp] =  useState('');
//   const [limp_durante, setLimp_durante] =  useState('');
//   const [limp_ensesion, setLimp_ensesion] =  useState(false);
//   const [Mantenimiento, setMantenimiento] =  useState('');
//   const [Observ_instal, setObserv_instal] =  useState('');
//     const [encuestaMarca, setSearchMarca] = useState('');
//     const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
//     const [showSecondModal, setShowSecondModal] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
//     const [errorMensaje, setErrorMensaje] = useState('');
//     const handleModalClose = () => {
//       setIsModalOpen(false);
//     };
//     const handleInputChange = (e) => {
//       const inputValue = e.target.value;

//     if (/^\d*$/.test(inputValue)) {
//       setBarras(inputValue);
//       setErrorMensaje('');
//     } else {
//       setBarras('');
//       setErrorMensaje('Por favor, ingrese un número entero válido.');
//     }
//     };
//     const handleInputChangeNum = (e) => {
//       const inputValue = e.target.value;

//     if (/^\d*$/.test(inputValue)) {
//       setBarrasmetros(inputValue);
//       setErrorMensaje('');
//     } else {
//       setBarrasmetros('');
//       setErrorMensaje('Por favor, ingrese un número entero válido.');
//     }
//     };
//     const handleInputChangepers = (e) => {
//       const inputValue = e.target.value;

//     if (/^\d*$/.test(inputValue)) {
//       setBarraspersons(inputValue);
//       setErrorMensaje('');
//     } else {
//       setBarraspersons('');
//       setErrorMensaje('Por favor, ingrese un número entero válido.');
//     }
//     };

//     const handleShowSecondModal = () => {
//       setShowSecondModal(true);
//       setIsModalOpen(false);
//     };
//     const handleFirstButtonClick = async (e) => {
//       try {
//         // Supongamos que store() devuelve una promesa con la respuesta del servidor
//         const isSuccess = await store(e); 
//         if (isSuccess) {
//           setIsModalOpen(true);
//         } else { }
//       } catch (error) {
//         console.error('Error al ejecutar store:', error);
//         // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//       }
//     };

//     const [hasErrors, setHasErrors] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const userId = localStorage.getItem('userIdEncuesta');
//     const encuestaId = localStorage.getItem('encuestaId1');

//     const clearFields = () => {
//         setObserv_instal('');
//         setMantenimiento('');

//       };


//     const navigate = useNavigate()    
//     const handleChangeDe = (e) => {
//         const selectedValue = e.target.value;
//         setDecoracion(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setDecoracionO(''); // Reinicia el valor del campo de texto
//         }
//       };
//       const handleOtroChangeDe = (e) => {
//         const value = e.target.value;
//         setDecoracionO(value);
//       };

//     //procedimiento guardar
//     const store = async (e) => {
//       const valorFinalD = (decoracion === 'otro') ? decoracionO : decoracion;
//       e.preventDefault();
//       setHasErrors(false);

//       // Verificar campos obligatorios
//       const requiredFields = [pista, escenario, Observ_instal];
//       const emptyFields = requiredFields.filter(field => field === '');

//       // if (emptyFields.length > 0) {
//       //   setHasErrors(true);
//       //   alert('Por favor, complete todos los campos obligatorios.'); // O muestra un mensaje de error más amigable
//       //   return; // Evita enviar el formulario si hay errores
//       // }
//         try {

//           // Realiza la solicitud POST aquí con los datos de la encuesta
//           const response = await axios.post(URI, {
//             pista: pista,
//             escenario: escenario,
//             zonamesas: zonamesas,
//             perc_mesas: perc_mesas,
//             barras: barras,
//             barrasmetros: barrasmetros,
//             barraspersons:barraspersons,
//             decoracion: valorFinalD,
//             climatizacion: climatizacion,
//             climat_temp: climat_temp,
//             limp_durante: limp_durante,
//             limp_ensesion: limp_ensesion,
//             Mantenimiento:Mantenimiento,
//             Observ_instal: Observ_instal,
//             encuesta_id: encuestaId,
//             user_id: userId
//           });
//           // Restablece los campos después de una operación exitosa
//           // clearFields();
//           if (response.status === 201) {
//             // Operación exitosa, devuelve true
//             return true;
//           } else {
//             // Operación fallida, devuelve false
//             return false;
//           }

//         } catch (error) {
//           console.error('Error al enviar la solicitud POST:', error);
//           // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//           alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//         }
//       };



//     return (
//         <div className='form-container'>

//            <h3>FICHA FUNCIONAMIENTO E INSTALACIONES</h3>
//            <Form onSubmit={store} className="my-form"> 
//            <div>
//                 <label className='parent-label form-label'>Tamaño aprox. pista:</label>
//                  <Form.Select value={pista} onChange={(e) => setPista(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="25m2">25m2</option>
//                     <option value="25m2 y 50m2">25m2 y 50m2</option>
//                     <option value="Más de 50m2">Más de 50m2</option>
//                     </Form.Select>
//             </div>

//             <div>
//                 <label className='parent-label form-label'>Escenario</label>
//                 <Form.Select
//                 value={escenario ? "Si" : "No"}
//                 onChange={(e) => setEscenario(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Dispone de zona de mesas (% ocupación superficie local):</label>
//                 <Form.Select
//                 value={zonamesas ? "Si" : "No"}
//                 onChange={(e) => setZonamesas(e.target.value === "Si" ? true : false)}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {zonamesas && (
//                 <div>
//                 <label className='parent-label form-label'>Sí, dispone de zona de mesas</label>
//                 <Form.Select
//                 value={perc_mesas}
//                 onChange={(e) => setPerc_mesas(e.target.value)}>
//                      <option value="">Selecciona una opción</option>
//                     <option value="Hasta 25%">Hasta 25%</option>
//                     <option value="Del 25% al 50%">Del 25% al 50%</option>
//                     <option value="Más del 50%">Más del 50%</option>

//             </Form.Select>
//         </div>)}
//         </div>

//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Número de barras</label>
//                 <input
//                 value={barras}
//                 onChange={(e) => handleInputChange(e)}
//                 type="text"
//                 className='form-control'
//                 />
//                 {hasErrors && !barras && <span className="error-message">Requiere que ingrese un numero entero.</span>}

//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Metros lineales totales</label>
//                 <input
//                 value={barrasmetros}
//                 onChange={(e) => handleInputChangeNum(e)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Número de personas trabajando:</label>
//                 <input
//                 value={barraspersons}
//                 onChange={(e) => handleInputChangepers(e)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div>
//                 <label className='parent-label form-label'>Decoración y originalidad:</label>
//                  <Form.Select value={decoracion} onChange={handleChangeDe}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="Moderno/Espectacular">Moderno/Espectacular</option>
//                     <option value="Elegante/Clasico">Elegante/Clasico</option>
//                     <option value="Underground">Underground</option>
//                     <option value="otro">Otro</option>
//                     </Form.Select>
//                     {decoracion === 'otro' && (
//                         <div>
//                         <label>Otro:</label>
//                         <input
//                             type="text"
//                             value={decoracionO}
//                             onChange={handleOtroChangeDe}/>
//                         </div>)}
//                     </div>

//                 <div>
//                 <label className='parent-label form-label'>Climatización Temperatura:</label>
//                 <Form.Select
//                 value={climatizacion ? "Si" : "No"}
//                 onChange={(e) => setClimatizacion(e.target.value === "Si" ? true : false)}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {climatizacion  && (
//                 <div>
//                 <label className='parent-label form-label'>Temperatura de la climatización</label>
//                 <Form.Select
//                 value={climat_temp}
//                 onChange={(e) => setClimat_temp(e.target.value)}>
//                      <option value="">Selecciona una opción</option>
//                     <option value="Calor">Calor</option>
//                     <option value="Frio">Frio</option>
//                     <option value="Agradable">Agradable</option>

//             </Form.Select>
//         </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Limpieza de los servicios durante la sesión:</label>
//                 <Form.Select
//                 value={limp_durante}
//                 onChange={(e) => setLimp_durante(e.target.value)}>
//                 {options_bu.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Limpieza de los servicios en sesión:</label>
//                 <Form.Select
//                 value={limp_ensesion ? "Si" : "No"}
//                 onChange={(e) => setLimp_ensesion(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Mantenimiento instalaciones:</label>
//                 <Form.Select
//                 value={Mantenimiento}
//                 onChange={(e) => setMantenimiento(e.target.value)}>
//                 {options_bu.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//         </div>

//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo de Instalaciones):</label>
//                 <input
//                 value={Observ_instal}
//                 onChange={(e) => setObserv_instal(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>



//             {!isModalOpen && (
//   <div className="mt-3">
//     <button
//       className='btn btn-success btn-ladda'
//       onClick={(e) => handleFirstButtonClick(e)}
//     >
//       Registrar Datos
//     </button>
//   </div>
// )}


// {isModalOpen && (
//   <div className="mt-3">
//     <ShowModalSeguridad
//       onClick={handleModalClose}  
//       isOpen={isModalOpen}
//       onClose={handleModalClose}
//     />
//   </div>
// )}
//            </Form>
//         </div>
//     )
// }

// export default CompCreateInstalacion



import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalSeguridad from '../enc_seguridad/ShowCreateSeguridad';

const URI = api + 'instalacion/';
const opcionesPista = ["25m2", "25m2 y 50m2", "Más de 50m2"];
const options = [
  { value: "", label: "Elige una opción" },
  { value: "Si", label: "Si" },
  { value: "No", label: "No" },
];
const options_bu = [
  { value: "", label: "Elige una opción" },
  { value: "Muy Bueno", label: "Muy Bueno" },
  { value: "Bastante bueno", label: "Bastante bueno" },
  { value: "Bastante malo", label: "Bastante malo" },
  { value: "Muy Malo", label: "Muy Malo" },
];

const CompCreateInstalacion = ({ setcreateSeguridadOpen, openCreateSeguridadModel }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [pista, setPista] = useState('');
  const [escenario, setEscenario] = useState(false);
  const [zonamesas, setZonamesas] = useState('');
  const [perc_mesas, setPerc_mesas] = useState(false);
  const [barras, setBarras] = useState('');
  const [barrasmetros, setBarrasmetros] = useState('');
  const [barraspersons, setBarraspersons] = useState('');
  const [decoracion, setDecoracion] = useState('');
  const [decoracionO, setDecoracionO] = useState('');
  const [climatizacion, setClimatizacion] = useState(false);
  const [climat_temp, setClimat_temp] = useState('');
  const [limp_durante, setLimp_durante] = useState('');
  const [limp_ensesion, setLimp_ensesion] = useState(false);
  const [Mantenimiento, setMantenimiento] = useState('');
  const [Observ_instal, setObserv_instal] = useState('');
  const [encuestaMarca, setSearchMarca] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setBarras(inputValue);
      setErrorMensaje('');
    } else {
      setBarras('');
      setErrorMensaje('Por favor, ingrese un número entero válido.');
    }
  };

  const handleInputChangeNum = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setBarrasmetros(inputValue);
      setErrorMensaje('');
    } else {
      setBarrasmetros('');
      setErrorMensaje('Por favor, ingrese un número entero válido.');
    }
  };

  const handleInputChangepers = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setBarraspersons(inputValue);
      setErrorMensaje('');
    } else {
      setBarraspersons('');
      setErrorMensaje('Por favor, ingrese un número entero válido.');
    }
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await store(e);
      if (isSuccess) {
        // setIsModalOpen(true);
        setcreateSeguridadOpen(false);
        openCreateSeguridadModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const clearFields = () => {
    setObserv_instal('');
    setMantenimiento('');
  };

  const handleChangeDe = (e) => {
    const selectedValue = e.target.value;
    setDecoracion(selectedValue);
    if (selectedValue === 'otro') {
      setDecoracionO('');
    }
  };

  const handleOtroChangeDe = (e) => {
    const value = e.target.value;
    setDecoracionO(value);
  };

  const store = async (e) => {
    const valorFinalD = (decoracion === 'otro') ? decoracionO : decoracion;
    e.preventDefault();
    setHasErrors(false);

    try {
      const response = await axios.post(URI, {
        pista: pista,
        escenario: escenario,
        zonamesas: zonamesas,
        perc_mesas: perc_mesas,
        barras: barras,
        barrasmetros: barrasmetros,
        barraspersons: barraspersons,
        decoracion: valorFinalD,
        climatizacion: climatizacion,
        climat_temp: climat_temp,
        limp_durante: limp_durante,
        limp_ensesion: limp_ensesion,
        Mantenimiento: Mantenimiento,
        Observ_instal: Observ_instal,
        encuesta_id: encuestaId,
        user_id: userId,
      });

      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="form-container">
      <h3>FICHA FUNCIONAMIENTO E INSTALACIONES</h3>
      <Form onSubmit={store} className="my-form">
        <div className="mb-3">
          <label className="parent-label form-label">Tamaño aprox. pista:</label>
          <Form.Select value={pista} onChange={(e) => setPista(e.target.value)}>
            <option value="">Selecciona una opción</option>
            {opcionesPista.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Escenario</label>
          <Form.Select
            value={escenario ? "Si" : "No"}
            onChange={(e) => setEscenario(e.target.value === "Si" ? true : false)}>
            <option value="">Selecciona una opción</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Dispone de zona de mesas (% ocupación superficie local):</label>
          <Form.Select
            value={zonamesas ? "Si" : "No"}
            onChange={(e) => setZonamesas(e.target.value === "Si" ? true : false)}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {zonamesas && (
            <div className="mt-3">
              <label className="parent-label form-label">Sí, dispone de zona de mesas</label>
              <Form.Select
                value={perc_mesas}
                onChange={(e) => setPerc_mesas(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Hasta 25%">Hasta 25%</option>
                <option value="Del 25% al 50%">Del 25% al 50%</option>
                <option value="Más del 50%">Más del 50%</option>
              </Form.Select>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Número de barras</label>
          <input
            value={barras}
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
          {hasErrors && !barras && <span className="error-message">Requiere que ingrese un número entero.</span>}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Metros lineales totales</label>
          <input
            value={barrasmetros}
            onChange={handleInputChangeNum}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Número de personas trabajando:</label>
          <input
            value={barraspersons}
            onChange={handleInputChangepers}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Decoración y originalidad:</label>
          <Form.Select value={decoracion} onChange={handleChangeDe}>
            <option value="">Selecciona una opción</option>
            <option value="Moderno/Espectacular">Moderno/Espectacular</option>
            <option value="Elegante/Clasico">Elegante/Clasico</option>
            <option value="Underground">Underground</option>
            <option value="otro">Otro</option>
          </Form.Select>
          {decoracion === 'otro' && (
            <div className="mt-3">
              <label>Otro:</label>
              <input
                type="text"
                value={decoracionO}
                onChange={handleOtroChangeDe}
                className="form-control"
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Climatización Temperatura:</label>
          <Form.Select
            value={climatizacion ? "Si" : "No"}
            onChange={(e) => setClimatizacion(e.target.value === "Si" ? true : false)}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {climatizacion && (
            <div className="mt-3">
              <label className="parent-label form-label">Temperatura de la climatización</label>
              <Form.Select
                value={climat_temp}
                onChange={(e) => setClimat_temp(e.target.value)}
                className="form-control"
              >
                <option value="">Selecciona una opción</option>
                <option value="Calor">Calor</option>
                <option value="Frío">Frío</option>
                <option value="Agradable">Agradable</option>
              </Form.Select>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Limpieza de los servicios durante la sesión:</label>
          <Form.Select
            value={limp_durante}
            onChange={(e) => setLimp_durante(e.target.value)}
            className="form-control"
          >
            {options_bu.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Limpieza de los servicios en sesión:</label>
          <Form.Select
            value={limp_ensesion ? "Si" : "No"}
            onChange={(e) => setLimp_ensesion(e.target.value === "Si" ? true : false)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Mantenimiento instalaciones:</label>
          <Form.Select
            value={Mantenimiento}
            onChange={(e) => setMantenimiento(e.target.value)}
            className="form-control"
          >
            {options_bu.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Observaciones (Módulo de Instalaciones):</label>
          <input
            value={Observ_instal}
            onChange={(e) => setObserv_instal(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        {!isModalOpen && (
          <div className="mt-3">
            <button
              className="btn btn-success btn-ladda"
              onClick={handleFirstButtonClick}
            >
              Registrar Datos
            </button>
          </div>
        )}

        {isModalOpen && (
          <div className="mt-3">
            <ShowModalSeguridad
              onClick={handleModalClose}
              isOpen={isModalOpen}
              onClose={handleModalClose}
            />
          </div>
        )}
      </Form>
    </div>
  );
};

export default CompCreateInstalacion;
