// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import ShowModalBuenas from '../enc_rscbuenas/ShowCreateBuenasPractica';


// const URI = api + 'precio/';

// const CompCreatePrecios = () => {
//   const [tipoEntradas, setTipoEntradas] = useState('');
//   const [tipoEntradasO, setTipoEntradasO] = useState('');
//   const [precioAnticipada, setPrecioAnticipada] = useState('');
//   const [precioTaquilla, setPrecioTaquilla] = useState('');
//   const [descuentos, setDescuentos] = useState('');
//   const [listaPuerta, setListaPuerta] = useState('');
//   const [listaPuertaCond, setListaPuertaCond] = useState('');
//   const [precioAgua, setPrecioAgua] = useState('');
//   const [precioRefresco, setPrecioRefresco] = useState('');
//   const [precioCerveza, setPrecioCerveza] = useState('');
//   const [precioCombinado, setPrecioCombinado] = useState('');
//   const [precioCombinadoPrem, setPrecioCombinadoPrem] = useState('');
//   const [precioChupito, setPrecioChupito] = useState('');
//   const [precioBotella, setPrecioBotella] = useState('');
//   const [precioMesa, setPrecioMesa] = useState('');
//   const [precioGuardarropia, setPrecioGuardarropia] = useState('');
//   const [precioMarchandising, setPrecioMarchandising] = useState('');
//   const [precioOtros, setPrecioOtros] = useState('');
//   const [observPrecios, setObservPrecios] = useState('');
//   const [turistasPorc, setTuristasPorc] = useState('');
//   const [turisticPersIdiomas, setTuristicPersIdiomas] = useState(false);
//   const [turisticPersIdiomasCualIngles, setTuristicPersIdiomasCualIngles] = useState(false);
//   const [turisticPersIdiomasCualFrances, setTuristicPersIdiomasCualFrances] = useState(false);
//   const [turisticPersIdiomasCualOtro, setTuristicPersIdiomasCualOtro] = useState('');
//   const [IdiomaOtroTu, setIdiomaOtroTu] = useState('');
//   const [IdiomaOtroSe, setIdiomaOtroSe] = useState('');
//   const [IdiomaOtroVe, setIdiomaOtroVe] = useState('');
//   const [senalIdiomas, setSenalIdiomas] = useState(false);
//   const [senalIdiomasCualIngles, setSenalIdiomasCualIngles] = useState(false);
//   const [senalIdiomasCualFrances, setSenalIdiomasCualFrances] = useState(false);
//   const [senalIdiomasCualOtro, setSenalIdiomasCualOtro] = useState('');
//   const [persAttGrupos, setPersAttGrupos] = useState(false);
//   const [persAttGruposCual, setPersAttGruposCual] = useState('');
//   const [ventaOnlineIdiomas, setVentaOnlineIdiomas] = useState(false);
//   const [ventaOnlineIdiomasCualIngles, setVentaOnlineIdiomasCualIngles] = useState(false);
//   const [ventaOnlineIdiomasCualFrances, setVentaOnlineIdiomasCualFrances] = useState(false);
//   const [ventaOnlineIdiomasCualOtro, setVentaOnlineIdiomasCualOtro] = useState('');
//   const [obsrvAttTurist, setObsrvAttTurist] = useState('');
//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
// const handleModalClose = () => {
//   setIsModalOpen(false);
// };

// const handleShowSecondModal = () => {
//   setShowSecondModal(true);
//   setIsModalOpen(false);
// };
// const handlePrecioAnticipadaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioAnticipada(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Anticipada.');
//   }
// };


// const clearFields = () => {
//   // Clear all state variables
// };
// const handleChangeEntrada = (e) => {
//   const selectedValue = e.target.value;
//   setTipoEntradas(selectedValue);
//   // Si el usuario selecciona "Otro", muestra el campo de texto
//   if (selectedValue === 'otro') {
//     setTipoEntradasO(''); // Reinicia el valor del campo de texto
//   }
// };
// const handleOtroChangeEnt = (e) => {
//   const value = e.target.value;
//   setTipoEntradasO(value);
// };
// const handleFirstButtonClick = async (e) => {
//   try {
//     // Supongamos que store() devuelve una promesa con la respuesta del servidor
//     const isSuccess = await store(e);
//     if (isSuccess) {
//       setIsModalOpen(true);
//     } else { }
//   } catch (error) {
//     console.error('Error al ejecutar store:', error);
//     // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//   }
// };
// const handlePrecioTaquillaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioTaquilla(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Taquilla.');
//   }
// };

// const handlePrecioAguaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioAgua(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Agua.');
//   }
// };
// const handlePrecioRefrescoChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioRefresco(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Refresco.');
//   }
// };

// const handlePrecioCervezaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioCerveza(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Cerveza.');
//   }
// };

// const handlePrecioCombinadoChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioCombinado(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Combinado.');
//   }
// };

// const handlePrecioCombinadoPremChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioCombinadoPrem(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Combinados Premium.');
//   }
// };

// const handlePrecioChupitoChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioChupito(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Chupitos.');
//   }
// };

// const handlePrecioBotellaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioBotella(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Botellas.');
//   }
// };

// const handlePrecioMesaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioMesa(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Mesa.');
//   }
// };

// const handlePrecioGuardarropiaChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioGuardarropia(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Guardarropía.');
//   }
// };

// const handlePrecioMarchandisingChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioMarchandising(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Precio Merchandising.');
//   }
// };

// const handlePrecioOtrosChange = (e) => {
//   const inputValue = e.target.value;

//   // Validar que solo se ingresen números decimales o enteros
//   if (/^\d*\.?\d*$/.test(inputValue)) {
//     setPrecioOtros(inputValue);
//     // Limpiar mensajes de error si existen
//     setHasErrors(false);
//     setEmailError('');
//   } else {
//     // Mostrar mensaje de error
//     setHasErrors(true);
//     setEmailError('Por favor, ingrese un número válido para Otros (Precios).');
//   }
// };
//   const store = async (e) => {
//     e.preventDefault();
//     try {
//       const valorFinalE = (tipoEntradas === 'otro') ? tipoEntradasO : tipoEntradas;
//       // Send a POST request to your API endpoint
//       const response = await axios.post(URI, {
//         tipo_entradas: valorFinalE,
//         precio_anticipada: precioAnticipada,
//         precio_taquilla: precioTaquilla,
//         descuentos: descuentos,
//         lista_puerta: listaPuerta,
//         lista_puerta_cond: listaPuertaCond,
//         precio_agua: precioAgua,
//         precio_refresco: precioRefresco,
//         precio_cerveza: precioCerveza,
//         precio_combinado: precioCombinado,
//         precio_combinado_prem: precioCombinadoPrem,
//         precio_chupito: precioChupito,
//         precio_botella: precioBotella,
//         precio_mesa: precioMesa,
//         precio_guardarropia: precioGuardarropia,
//         precio_marchandising: precioMarchandising,
//         precio_otros: precioOtros,
//         observ_precios: observPrecios,
//         turistas_porc: turistasPorc,
//         turistic_pers_idiomas: turisticPersIdiomas,
//         turistic_pers_idiomas_cual_ingles: turisticPersIdiomasCualIngles,
//         turistic_pers_idiomas_cual_frances: turisticPersIdiomasCualFrances,
//         turistic_pers_idiomas_cual_otro: turisticPersIdiomasCualOtro,
//         señal_idiomas: senalIdiomas,
//         señal_idiomas_cual_ingles: senalIdiomasCualIngles,
//         señal_idiomas_cual_frances: senalIdiomasCualFrances,
//         señal_idiomas_cual_otro: senalIdiomasCualOtro,
//         pers_att_grupos: persAttGrupos,
//         pers_att_grupos_cual: persAttGruposCual,
//         venta_online_idiomas: ventaOnlineIdiomas,
//         venta_online_idiomas_cual_ingles: ventaOnlineIdiomasCualIngles,
//         venta_online_idiomas_cual_frances: ventaOnlineIdiomasCualFrances,
//         venta_online_idiomas_cual_otro: ventaOnlineIdiomasCualOtro,
//         Obsrv_att_turist: obsrvAttTurist,
//         encuesta_id: encuestaId,
//         user_id: userId
//       });

//       // clearFields();
//       if (response.status === 201) {
//         // Operación exitosa, devuelve true
//         return true;
//       } else {
//         // Operación fallida, devuelve false
//         return false;
//       }
//       // Optionally, you can perform additional actions after successful submission
//       // For example, redirecting to another page
//       // navigate('/viewuser');
//     } catch (error) {
//       console.error('Error while saving data:', error);
//       setHasErrors(true);
//       setEmailError('Error occurred while saving data.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h3>PRECIO ENTRADAS</h3>
//       <Form onSubmit={store} className="my-form">
//         <div>
//           <label className='parent-label form-label'>Observaciones:</label>
//           <Form.Select
//             value={tipoEntradas}
//             onChange={handleChangeEntrada}>
//             <option value="">Selecciona una opción</option>
//             <option value="Individual">Individual</option>
//             <option value="Por grupos">Por grupos</option>
//             <option value="Por horarios">Por horarios</option>
//             <option value="Zona">Zona</option>
//             <option value="Mesa">Mesa</option>
//             <option value="otro">Llenar Observaciones manualmente</option>

//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {tipoEntradas === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={tipoEntradasO}
//                 onChange={handleOtroChangeEnt} />
//             </div>)}
//         </div>


//         <div className="mb-3">
//           <label className="parent-label form-label">Venta anticipada:</label>
//           <input value={precioAnticipada} type="text" className="form-control"
//             onChange={handlePrecioAnticipadaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio en taquilla:</label>
//           <input value={precioTaquilla} type="text" className="form-control"
//             onChange={handlePrecioTaquillaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Tipo de Descuentos y modalidades:</label>
//           <input value={descuentos} type="text" className="form-control"
//             onChange={(e) => setDescuentos(e.target.value)} />
//         </div>
//         <div>
//           <label className='parent-label form-label'>Lista de puerta:</label>
//           <Form.Select
//             value={listaPuerta ? "Si" : "No"}
//             onChange={(e) => setListaPuerta(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>
//           </Form.Select>
//           {!listaPuerta && (
//             <div className='mb-3'>
//               <label className='parent-label form-label'>Condicionados:</label>
//               <input value={listaPuertaCond} onChange={(e) => setListaPuertaCond(e.target.value)}
//                 type="text" className='form-control' />
//             </div>)}
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Agua:</label>
//           <input value={precioAgua} type="text" className="form-control"
//             onChange={handlePrecioAguaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Refresco:</label>
//           <input value={precioRefresco} type="text" className="form-control"
//             onChange={handlePrecioRefrescoChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Cerveza:</label>
//           <input value={precioCerveza} type="text" className="form-control"
//             onChange={handlePrecioCervezaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Combinados Standar:</label>
//           <input value={precioCombinado} type="text" className="form-control"
//             onChange={handlePrecioCombinadoChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Combinados Premium:</label>
//           <input value={precioCombinadoPrem} type="text" className="form-control"
//             onChange={handlePrecioCombinadoPremChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Chupitos:</label>
//           <input value={precioChupito} type="text" className="form-control"
//             onChange={handlePrecioChupitoChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Botellas:</label>
//           <input value={precioBotella} type="text" className="form-control"
//             onChange={handlePrecioBotellaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Mesa:</label>
//           <input value={precioMesa} type="text" className="form-control"
//             onChange={handlePrecioMesaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Guardarropía:</label>
//           <input value={precioGuardarropia} type="text" className="form-control"
//             onChange={handlePrecioGuardarropiaChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Precio Merchandising:</label>
//           <input value={precioMarchandising} type="text" className="form-control"
//             onChange={handlePrecioMarchandisingChange} />
//         </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Otros (Precios):</label>
//           <input value={precioOtros} type="text" className="form-control"
//             onChange={handlePrecioOtrosChange} />
//         </div>
//         <div className="mb-3">
//           <label className="parent-label form-label">Observaciones (Módulo Precios):</label>
//           <input
//             value={observPrecios}
//             onChange={(e) => setObservPrecios(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>
//         <div>
//           <label className='parent-label form-label'>Porcentaje público turista</label>
//           <Form.Select value={turistasPorc} onChange={(e) => setTuristasPorc(e.target.value)}>
//             {/* Opción por defecto */}
//             <option value="">Selecciona una opción</option>
//             <option value="0% a 10%">0% a 10%</option>
//             <option value="11% a 20%">11% a 20%</option>
//             <option value="21% a 30%">21% a 30%</option>
//             <option value="31% a 40%">31% a 40%</option>
//             <option value="41% a 50%">41% a 50%</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Capacidad atención personal en Idiomas</label>
//           <Form.Select
//             value={turisticPersIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {
//               setTuristicPersIdiomas(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setTuristicPersIdiomasCualFrances('');
//                 setTuristicPersIdiomasCualIngles(''); setTuristicPersIdiomasCualOtro('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {turisticPersIdiomas && (
//             <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Sí, cuales (atención personal en idiomas)</label>
//               {/* Opciones de vías de evacuación */} <br /> <br />
//               <input type="checkbox" checked={turisticPersIdiomasCualIngles}
//                 onChange={() => setTuristicPersIdiomasCualIngles(prev => !prev)} /> Inglés <br />
//               <input type="checkbox" checked={turisticPersIdiomasCualFrances}
//                 onChange={() => setTuristicPersIdiomasCualFrances(prev => !prev)} /> Francés <br />
//               <input type="checkbox" checked={IdiomaOtroTu}
//                 onChange={() => setIdiomaOtroTu(prev => !prev)} /> Otras. Cual: <br />
//               {IdiomaOtroTu && (
//                 <div>
//                   <label>Otro:</label>
//                   <input type="text" value={turisticPersIdiomasCualOtro}
//                     onChange={(e) => setTuristicPersIdiomasCualOtro(e.target.value)} />
//                 </div>)}
//             </div>

//           )} </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Señalética en idiomas: </label>
//           <Form.Select
//             value={senalIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {
//               setSenalIdiomas(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setSenalIdiomasCualFrances('');
//                 setSenalIdiomasCualIngles(''); setSenalIdiomasCualOtro('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {senalIdiomas && (
//             <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Sí, cuales (señalética en idiomas)</label>
//               {/* Opciones de vías de evacuación */} <br /> <br />
//               <input type="checkbox" checked={senalIdiomasCualIngles}
//                 onChange={() => setSenalIdiomasCualIngles(prev => !prev)} /> Inglés <br />
//               <input type="checkbox" checked={senalIdiomasCualFrances}
//                 onChange={() => setSenalIdiomasCualFrances(prev => !prev)} /> Francés <br />
//               <input type="checkbox" checked={IdiomaOtroSe}
//                 onChange={() => setIdiomaOtroSe(prev => !prev)} /> Otras. Cual: <br />
//               {IdiomaOtroSe && (
//                 <div>
//                   <label>Otro:</label>
//                   <input type="text" value={senalIdiomasCualOtro}
//                     onChange={(e) => setSenalIdiomasCualOtro(e.target.value)} />
//                 </div>)}
//             </div>)} </div>
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Personal especializado atención grupos, etc. </label>
//           <Form.Select
//             value={persAttGrupos ? 'Si' : 'No'}
//             onChange={(e) => {
//               setPersAttGrupos(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") { setPersAttGruposCual(''); }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {persAttGrupos && (
//             <div className="mb-3">
//               <label className="parent-label form-label">Sí, cuales (atención grupos)</label>
//               <input value={persAttGruposCual} type="text" className="form-control"
//                 onChange={(e) => setPersAttGruposCual(e.target.value)} />
//             </div>

//           )}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Venta online. Idiomas: </label>
//           <Form.Select
//             value={ventaOnlineIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {
//               setVentaOnlineIdiomas(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setVentaOnlineIdiomasCualFrances('');
//                 setVentaOnlineIdiomasCualIngles(''); setVentaOnlineIdiomasCualOtro('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {ventaOnlineIdiomas && (
//             <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Sí, cuales (señalética en idiomas)</label>
//               {/* Opciones de vías de evacuación */} <br /> <br />
//               <input type="checkbox" checked={ventaOnlineIdiomasCualIngles}
//                 onChange={() => setVentaOnlineIdiomasCualIngles(prev => !prev)} /> Inglés <br />
//               <input type="checkbox" checked={ventaOnlineIdiomasCualFrances}
//                 onChange={() => setVentaOnlineIdiomasCualFrances(prev => !prev)} /> Francés <br />
//               <input type="checkbox" checked={IdiomaOtroVe}
//                 onChange={() => setIdiomaOtroVe(prev => !prev)} /> Otras. Cual: <br />
//               {IdiomaOtroVe && (
//                 <div>
//                   <label>Otro:</label>
//                   <input type="text" value={ventaOnlineIdiomasCualOtro}
//                     onChange={(e) => setVentaOnlineIdiomasCualOtro(e.target.value)} />
//                 </div>)}
//             </div>)} </div>

//         <div className="mb-3">
//           <label className="parent-label form-label">Observaciones (Atención Turística):</label>
//           <input
//             value={obsrvAttTurist}
//             onChange={(e) => setObsrvAttTurist(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>




//         <div className="mt-3">
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
//             <ShowModalBuenas
//               onClick={handleModalClose}
//               isOpen={isModalOpen}
//               onClose={handleModalClose}
//             />
//           </div>
//         )}
//       </Form>
//     </div>
//   );
// };

// export default CompCreatePrecios;


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';
import ShowModalBuenas from '../enc_rscbuenas/ShowCreateBuenasPractica';
import 'bootstrap/dist/css/bootstrap.css';

const URI = api + 'precio/';

const CompCreatePrecios = ({ setCreatePrecioBuOpen, openCreatePrecioBuModel }) => {
  const [tipoEntradas, setTipoEntradas] = useState('');
  const [tipoEntradasO, setTipoEntradasO] = useState('');
  const [precioAnticipada, setPrecioAnticipada] = useState('');
  const [precioTaquilla, setPrecioTaquilla] = useState('');
  const [descuentos, setDescuentos] = useState('');
  const [listaPuerta, setListaPuerta] = useState('');
  const [listaPuertaCond, setListaPuertaCond] = useState('');
  const [precioAgua, setPrecioAgua] = useState('');
  const [precioRefresco, setPrecioRefresco] = useState('');
  const [precioCerveza, setPrecioCerveza] = useState('');
  const [precioCombinado, setPrecioCombinado] = useState('');
  const [precioCombinadoPrem, setPrecioCombinadoPrem] = useState('');
  const [precioChupito, setPrecioChupito] = useState('');
  const [precioBotella, setPrecioBotella] = useState('');
  const [precioMesa, setPrecioMesa] = useState('');
  const [precioGuardarropia, setPrecioGuardarropia] = useState('');
  const [precioMarchandising, setPrecioMarchandising] = useState('');
  const [precioOtros, setPrecioOtros] = useState('');
  const [observPrecios, setObservPrecios] = useState('');
  const [turistasPorc, setTuristasPorc] = useState('');
  const [turisticPersIdiomas, setTuristicPersIdiomas] = useState(false);
  const [turisticPersIdiomasCualIngles, setTuristicPersIdiomasCualIngles] = useState(false);
  const [turisticPersIdiomasCualFrances, setTuristicPersIdiomasCualFrances] = useState(false);
  const [turisticPersIdiomasCualOtro, setTuristicPersIdiomasCualOtro] = useState('');
  const [IdiomaOtroTu, setIdiomaOtroTu] = useState('');
  const [IdiomaOtroSe, setIdiomaOtroSe] = useState('');
  const [IdiomaOtroVe, setIdiomaOtroVe] = useState('');
  const [senalIdiomas, setSenalIdiomas] = useState(false);
  const [senalIdiomasCualIngles, setSenalIdiomasCualIngles] = useState(false);
  const [senalIdiomasCualFrances, setSenalIdiomasCualFrances] = useState(false);
  const [senalIdiomasCualOtro, setSenalIdiomasCualOtro] = useState('');
  const [persAttGrupos, setPersAttGrupos] = useState(false);
  const [persAttGruposCual, setPersAttGruposCual] = useState('');
  const [ventaOnlineIdiomas, setVentaOnlineIdiomas] = useState(false);
  const [ventaOnlineIdiomasCualIngles, setVentaOnlineIdiomasCualIngles] = useState(false);
  const [ventaOnlineIdiomasCualFrances, setVentaOnlineIdiomasCualFrances] = useState(false);
  const [ventaOnlineIdiomasCualOtro, setVentaOnlineIdiomasCualOtro] = useState('');
  const [obsrvAttTurist, setObsrvAttTurist] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');
  const [showSecondModal, setShowSecondModal] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };
  const handlePrecioAnticipadaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioAnticipada(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Anticipada.');
    }
  };


  const clearFields = () => {
    // Clear all state variables
  };
  const handleChangeEntrada = (e) => {
    const selectedValue = e.target.value;
    setTipoEntradas(selectedValue);
    // Si el usuario selecciona "Otro", muestra el campo de texto
    if (selectedValue === 'otro') {
      setTipoEntradasO(''); // Reinicia el valor del campo de texto
    }
  };
  const handleOtroChangeEnt = (e) => {
    const value = e.target.value;
    setTipoEntradasO(value);
  };
  const handleFirstButtonClick = async (e) => {
    try {
      // Supongamos que store() devuelve una promesa con la respuesta del servidor
      const isSuccess = await store(e);
      if (isSuccess) {
        // setIsModalOpen(true);
        setCreatePrecioBuOpen(false)
        openCreatePrecioBuModel()
      } else { }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
      // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
    }
  };
  const handlePrecioTaquillaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioTaquilla(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Taquilla.');
    }
  };

  const handlePrecioAguaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioAgua(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Agua.');
    }
  };
  const handlePrecioRefrescoChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioRefresco(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Refresco.');
    }
  };

  const handlePrecioCervezaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioCerveza(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Cerveza.');
    }
  };

  const handlePrecioCombinadoChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioCombinado(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Combinado.');
    }
  };

  const handlePrecioCombinadoPremChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioCombinadoPrem(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Combinados Premium.');
    }
  };

  const handlePrecioChupitoChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioChupito(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Chupitos.');
    }
  };

  const handlePrecioBotellaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioBotella(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Botellas.');
    }
  };

  const handlePrecioMesaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioMesa(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Mesa.');
    }
  };

  const handlePrecioGuardarropiaChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioGuardarropia(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Guardarropía.');
    }
  };

  const handlePrecioMarchandisingChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioMarchandising(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Precio Merchandising.');
    }
  };

  const handlePrecioOtrosChange = (e) => {
    const inputValue = e.target.value;

    // Validar que solo se ingresen números decimales o enteros
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setPrecioOtros(inputValue);
      // Limpiar mensajes de error si existen
      setHasErrors(false);
      setEmailError('');
    } else {
      // Mostrar mensaje de error
      setHasErrors(true);
      setEmailError('Por favor, ingrese un número válido para Otros (Precios).');
    }
  };
  // const handleFirstButtonClick = async (e) => {
  //   try {
  //     // Supongamos que store() devuelve una promesa con la respuesta del servidor
  //     const isSuccess = await store(e);
  //     if (isSuccess) {
  //       setIsModalOpen(true);
  //     }
  //   } catch (error) {
  //     console.error('Error al ejecutar store:', error);
  //   }
  // };

  const store = async (e) => {
    e.preventDefault();
    try {
      const valorFinalE = (tipoEntradas === 'otro') ? tipoEntradasO : tipoEntradas;
      const response = await axios.post(URI, {
        tipo_entradas: valorFinalE,
        precio_anticipada: precioAnticipada,
        precio_taquilla: precioTaquilla,
        descuentos: descuentos,
        lista_puerta: listaPuerta,
        lista_puerta_cond: listaPuertaCond,
        precio_agua: precioAgua,
        precio_refresco: precioRefresco,
        precio_cerveza: precioCerveza,
        precio_combinado: precioCombinado,
        precio_combinado_prem: precioCombinadoPrem,
        precio_chupito: precioChupito,
        precio_botella: precioBotella,
        precio_mesa: precioMesa,
        precio_guardarropia: precioGuardarropia,
        precio_marchandising: precioMarchandising,
        precio_otros: precioOtros,
        observ_precios: observPrecios,
        turistas_porc: turistasPorc,
        turistic_pers_idiomas: turisticPersIdiomas,
        turistic_pers_idiomas_cual_ingles: turisticPersIdiomasCualIngles,
        turistic_pers_idiomas_cual_frances: turisticPersIdiomasCualFrances,
        turistic_pers_idiomas_cual_otro: turisticPersIdiomasCualOtro,
        señal_idiomas: senalIdiomas,
        señal_idiomas_cual_ingles: senalIdiomasCualIngles,
        señal_idiomas_cual_frances: senalIdiomasCualFrances,
        señal_idiomas_cual_otro: senalIdiomasCualOtro,
        pers_att_grupos: persAttGrupos,
        pers_att_grupos_cual: persAttGruposCual,
        venta_online_idiomas: ventaOnlineIdiomas,
        venta_online_idiomas_cual_ingles: ventaOnlineIdiomasCualIngles,
        venta_online_idiomas_cual_frances: ventaOnlineIdiomasCualFrances,
        venta_online_idiomas_cual_otro: ventaOnlineIdiomasCualOtro,
        Obsrv_att_turist: obsrvAttTurist,
        encuesta_id: encuestaId,
        user_id: userId
      });

      // clearFields();
      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error while saving data:', error);
      setHasErrors(true);
      setEmailError('Error occurred while saving data.');
    }
  };

  return (
    <div className="form-container container">
      <h3 >PRECIO ENTRADAS</h3>
      <Form onSubmit={store} className="my-form">
        <div className="mb-3">
          <label className='parent-label form-label'>Tipo de Entradas:</label>
          <Form.Select
            value={tipoEntradas}
            onChange={handleChangeEntrada}
            className="form-select"
          >
            <option value="">Selecciona una opción</option>
            <option value="Individual">Individual</option>
            <option value="Por grupos">Por grupos</option>
            <option value="Por horarios">Por horarios</option>
            <option value="Zona">Zona</option>
            <option value="Mesa">Mesa</option>
            <option value="otro">Llenar Observaciones manualmente</option>
          </Form.Select>

          {tipoEntradas === 'otro' && (
            <div className="mt-3">
              <label>Otro:</label>
              <input
                type="text"
                value={tipoEntradasO}
                onChange={handleOtroChangeEnt}
                className="form-control"
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Venta anticipada:</label>
          <input
            value={precioAnticipada}
            type="text"
            className="form-control"
            onChange={handlePrecioAnticipadaChange}
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Precio en taquilla:</label>
          <input
            value={precioTaquilla}
            type="text"
            className="form-control"
            onChange={handlePrecioTaquillaChange}
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Tipo de Descuentos y modalidades:</label>
          <input
            value={descuentos}
            type="text"
            className="form-control"
            onChange={(e) => setDescuentos(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Lista de puerta:</label>
          <Form.Select
            value={listaPuerta ? "Si" : "No"}
            onChange={(e) => setListaPuerta(e.target.value === "Si" ? true : false)}
            className="form-select"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>

          {!listaPuerta && (
            <div className='mb-3'>
              <label className='parent-label form-label'>Condicionados:</label>
              <input
                value={listaPuertaCond}
                onChange={(e) => setListaPuertaCond(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Agua:</label>
            <input
              value={precioAgua}
              type="text"
              className="form-control"
              onChange={handlePrecioAguaChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Refresco:</label>
            <input
              value={precioRefresco}
              type="text"
              className="form-control"
              onChange={handlePrecioRefrescoChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Cerveza:</label>
            <input
              value={precioCerveza}
              type="text"
              className="form-control"
              onChange={handlePrecioCervezaChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Combinados Standar:</label>
            <input
              value={precioCombinado}
              type="text"
              className="form-control"
              onChange={handlePrecioCombinadoChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Combinados Premium:</label>
            <input
              value={precioCombinadoPrem}
              type="text"
              className="form-control"
              onChange={handlePrecioCombinadoPremChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Chupitos:</label>
            <input
              value={precioChupito}
              type="text"
              className="form-control"
              onChange={handlePrecioChupitoChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Botellas:</label>
            <input
              value={precioBotella}
              type="text"
              className="form-control"
              onChange={handlePrecioBotellaChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="parent-label form-label">Precio Mesa:</label>
            <input
              value={precioMesa}
              type="text"
              className="form-control"
              onChange={handlePrecioMesaChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Precio Guardarropía:</label>
          <input
            value={precioGuardarropia}
            type="text"
            className="form-control"
            onChange={handlePrecioGuardarropiaChange}
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Precio Merchandising:</label>
          <input
            value={precioMarchandising}
            type="text"
            className="form-control"
            onChange={handlePrecioMarchandisingChange}
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Otros (Precios):</label>
          <input
            value={precioOtros}
            type="text"
            className="form-control"
            onChange={handlePrecioOtrosChange}
          />
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Observaciones (Módulo Precios):</label>
          <input
            value={observPrecios}
            onChange={(e) => setObservPrecios(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Porcentaje público turista:</label>
          <Form.Select
            value={turistasPorc}
            onChange={(e) => setTuristasPorc(e.target.value)}
            className="form-select"
          >
            <option value="">Selecciona una opción</option>
            <option value="0% a 10%">0% a 10%</option>
            <option value="11% a 20%">11% a 20%</option>
            <option value="21% a 30%">21% a 30%</option>
            <option value="31% a 40%">31% a 40%</option>
            <option value="41% a 50%">41% a 50%</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Capacidad atención personal en Idiomas:</label>
          <Form.Select
            value={turisticPersIdiomas ? 'Si' : 'No'}
            onChange={(e) => {
              setTuristicPersIdiomas(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setTuristicPersIdiomasCualFrances('');
                setTuristicPersIdiomasCualIngles('');
                setTuristicPersIdiomasCualOtro('');
              }
            }}
            className="form-select"
          >
            <option value=''>Selecciona una opción</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </Form.Select>

          {turisticPersIdiomas && (
            <div className="mt-3">
              <label className='parent-label form-label'>Sí, cuales (atención personal en idiomas):</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={turisticPersIdiomasCualIngles}
                  onChange={() => setTuristicPersIdiomasCualIngles(prev => !prev)}
                />
                <label className="form-check-label">Inglés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={turisticPersIdiomasCualFrances}
                  onChange={() => setTuristicPersIdiomasCualFrances(prev => !prev)}
                />
                <label className="form-check-label">Francés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={IdiomaOtroTu}
                  onChange={() => setIdiomaOtroTu(prev => !prev)}
                />
                <label className="form-check-label">Otras. Cual:</label>
              </div>

              {IdiomaOtroTu && (
                <div className="mt-2">
                  <label>Otro:</label>
                  <input
                    type="text"
                    value={turisticPersIdiomasCualOtro}
                    onChange={(e) => setTuristicPersIdiomasCualOtro(e.target.value)}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Señalética en idiomas:</label>
          <Form.Select
            value={senalIdiomas ? 'Si' : 'No'}
            onChange={(e) => {
              setSenalIdiomas(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setSenalIdiomasCualFrances('');
                setSenalIdiomasCualIngles('');
                setSenalIdiomasCualOtro('');
              }
            }}
            className="form-select"
          >
            <option value=''>Selecciona una opción</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </Form.Select>

          {senalIdiomas && (
            <div className="mt-3">
              <label className='parent-label form-label'>Sí, cuales (señalética en idiomas):</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={senalIdiomasCualIngles}
                  onChange={() => setSenalIdiomasCualIngles(prev => !prev)}
                />
                <label className="form-check-label">Inglés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={senalIdiomasCualFrances}
                  onChange={() => setSenalIdiomasCualFrances(prev => !prev)}
                />
                <label className="form-check-label">Francés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={IdiomaOtroSe}
                  onChange={() => setIdiomaOtroSe(prev => !prev)}
                />
                <label className="form-check-label">Otras. Cual:</label>
              </div>

              {IdiomaOtroSe && (
                <div className="mt-2">
                  <label>Otro:</label>
                  <input
                    type="text"
                    value={senalIdiomasCualOtro}
                    onChange={(e) => setSenalIdiomasCualOtro(e.target.value)}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Personal especializado atención grupos, etc.:</label>
          <Form.Select
            value={persAttGrupos ? 'Si' : 'No'}
            onChange={(e) => {
              setPersAttGrupos(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setPersAttGruposCual('');
              }
            }}
            className="form-select"
          >
            <option value=''>Selecciona una opción</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </Form.Select>

          {persAttGrupos && (
            <div className="mt-3">
              <label className="parent-label form-label">Sí, cuales (atención grupos):</label>
              <input
                value={persAttGruposCual}
                type="text"
                className="form-control"
                onChange={(e) => setPersAttGruposCual(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Venta online. Idiomas:</label>
          <Form.Select
            value={ventaOnlineIdiomas ? 'Si' : 'No'}
            onChange={(e) => {
              setVentaOnlineIdiomas(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setVentaOnlineIdiomasCualFrances('');
                setVentaOnlineIdiomasCualIngles('');
                setVentaOnlineIdiomasCualOtro('');
              }
            }}
            className="form-select"
          >
            <option value=''>Selecciona una opción</option>
            <option value='Si'>Si</option>
            <option value='No'>No</option>
          </Form.Select>

          {ventaOnlineIdiomas && (
            <div className="mt-3">
              <label className='parent-label form-label'>Sí, cuales (señalética en idiomas):</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={ventaOnlineIdiomasCualIngles}
                  onChange={() => setVentaOnlineIdiomasCualIngles(prev => !prev)}
                />
                <label className="form-check-label">Inglés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={ventaOnlineIdiomasCualFrances}
                  onChange={() => setVentaOnlineIdiomasCualFrances(prev => !prev)}
                />
                <label className="form-check-label">Francés</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={IdiomaOtroVe}
                  onChange={() => setIdiomaOtroVe(prev => !prev)}
                />
                <label className="form-check-label">Otras. Cual:</label>
              </div>

              {IdiomaOtroVe && (
                <div className="mt-2">
                  <label>Otro:</label>
                  <input
                    type="text"
                    value={ventaOnlineIdiomasCualOtro}
                    onChange={(e) => setVentaOnlineIdiomasCualOtro(e.target.value)}
                    className="form-control"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="parent-label form-label">Observaciones (Atención Turística):</label>
          <input
            value={obsrvAttTurist}
            onChange={(e) => setObsrvAttTurist(e.target.value)}
            type="text"
            className="form-control"
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
            <ShowModalBuenas
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

export default CompCreatePrecios;

