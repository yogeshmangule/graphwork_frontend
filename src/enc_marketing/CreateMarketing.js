// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import ShowModalPrecios from '../enc_precio/ShowCreatePrecio';

// const URI = api + 'marketing/';

// const CreateMarketing = () => {
//   const [encuestas, setEncuesta] = useState(new Date());
//   const [linkDrive, setLinkDrive] = useState('');
//   const [web_activo, setWebActiva] = useState(false);
//   const [quienes_somos, setQuienesSomos] = useState(false);
//   const [servicios, setServicio] = useState(false);
//   const [eventos, setEventos] = useState(false);
//   const [contacto, setContacto] = useState(false);
//   const [facebook, setFacebook] = useState(false);
//   const [facebookAct, setFacebookAct] = useState(false);
//   const [facebookPublicacionesMes, setFacebookPublicacionesMes] = useState('');
//   const [facebookPublicacionesMesO, setFacebookPublicacionesMesO] = useState('');
//   const [instagram, setInstagram] = useState(false);
//   const [instagramAct, setInstagramAct] = useState(false);
//   const [instagramPublicacionesMes, setInstagramPublicacionesMes] = useState('');
//   const [instagramPublicacionesMesO, setInstagramPublicacionesMesO] = useState('');
//   const [otrasRedes, setOtrasRedes] = useState(false);
//   const [otrasRedesAct, setOtrasRedesAct] = useState(false);
//   const [otrasRedesCual, setOtrasRedesCual] = useState('');
//   const [otrasRedesPublicacionesMes, setOtrasRedesPublicacionesMes] = useState('');
//   const [otrasRedesPublicacionesMesO, setOtrasRedesPublicacionesMesO] = useState('');
//   const [fichaGoogle, setFichaGoogle] = useState(false);
//   const [fichaGoogleControl, setFichaGoogleControl] = useState(false);
//   const [fichaGoogleUbica, setFichaGoogleUbica] = useState(false);
//   const [fichaGoogleHora, setFichaGoogleHora] = useState(false);
//   const [fichaGoogleDesc, setFichaGoogleDesc] = useState(false);
//   const [fichaGoogleServ, setFichaGoogleServ] = useState(false);
//   const [ventaEntradas, setVentaEntradas] = useState(false);
//   const [platafVtaEntrName, setPlatafVtaEntrName] = useState('');
//   const [platafVtaEntrAccWeb, setPlatafVtaEntrAccWeb] = useState(false);
//   const [platafVtaEntrAccRrss, setPlatafVtaEntrAccRrss] = useState(false);
//   const [platafVtaEntrO, setPlatafVtaEntrO] = useState(false);
//   const [platafVtaEntrNameO, setPlatafVtaEntrNameO] = useState('');
//   const [platafVtaEntrAccWebO, setPlatafVtaEntrAccWebO] = useState(false);
//   const [platafVtaEntrAccRrssO, setPlatafVtaEntrAccRrssO] = useState(false);
//   const [reservaOnline, setReservaOnline] = useState(false);
//   const [reservaOnlineName, setReservaOnlineName] = useState('');
//   const [reservaOnlineAccWeb, setReservaOnlineAccWeb] = useState(false);
//   const [reservaOnlineAccRrss, setReservaOnlineAccRrss] = useState(false);
//   const [reservaListaPuerta, setReservaListaPuerta] = useState(false);
//   const [reservaListaPtaWeb, setReservaListaPtaWeb] = useState(false);
//   const [reservaListaPtaRrss, setReservaListaPtaRrss] = useState(false);
//   const [reservaListaPtaTel, setReservaListaPtaTel] = useState(false);
//   const [reservaListaPtaRrpp, setReservaListaPtaRrpp] = useState(false);
//   const [reservaMesa, setReservaMesa] = useState(false);
//   const [reservaMesaWeb, setReservaMesaWeb] = useState(false);
//   const [reservaMesaRrss, setReservaMesaRrss] = useState(false);
//   const [reservaMesaTel, setReservaMesaTel] = useState(false);
//   const [reservaMesaRrpp, setReservaMesaRrpp] = useState(false);
//   const [observMarketing, setObservMarketing] = useState('');
//   const [encuestaMarca, setSearchMarca] = useState('');
//   const [userIdEncuesta, setUserId] = useState(0);
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');
//   const navigate = useNavigate();

//   const clearFields = () => {
//     // Limpia los campos después de una operación exitosa
//     setObservMarketing('');
//     // Agrega aquí el código para limpiar otros campos si es necesario
//   };
//   const handleChangeFacebook = (e) => {
//     const selectedValue = e.target.value;
//     setFacebookPublicacionesMes(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setFacebookPublicacionesMesO(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleOtroChangeF = (e) => {
//     const value = e.target.value;
//     setFacebookPublicacionesMesO(value);
//   };
//   const handleFirstButtonClick = async (e) => {
//     try {
//       // Supongamos que store() devuelve una promesa con la respuesta del servidor
//       const isSuccess = await store(e);
//       if (isSuccess) {
//         setIsModalOpen(true);
//       } else { }
//     } catch (error) {
//       console.error('Error al ejecutar store:', error);
//       // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//     }
//   };

//   const handleChangeInstagram = (e) => {
//     const selectedValue = e.target.value;
//     setInstagramPublicacionesMes(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setInstagramPublicacionesMesO(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleOtroChangeI = (e) => {
//     const value = e.target.value;
//     setInstagramPublicacionesMesO(value);
//   };

//   const handleChangeOtrasRedes = (e) => {
//     const selectedValue = e.target.value;
//     setOtrasRedesPublicacionesMes(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setOtrasRedesPublicacionesMesO(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleOtroChangeOR = (e) => {
//     const value = e.target.value;
//     setOtrasRedesPublicacionesMesO(value);
//   };
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };

//   const store = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);
//     try {
//       const valorFinalFacebook = (facebookPublicacionesMes === 'otro') ? facebookPublicacionesMesO : facebookPublicacionesMes;
//       const valorFinalInstagram = (instagramPublicacionesMes === 'otro') ? instagramPublicacionesMesO : instagramPublicacionesMes;
//       const valorFinalOtrasR = (otrasRedesPublicacionesMes === 'otro') ? otrasRedesPublicacionesMesO : otrasRedesPublicacionesMes;
//       // Realiza la solicitud POST aquí con los datos de la encuesta de marketing
//       const response = await axios.post(URI, {
//         link_drive: linkDrive,
//         web_activo: web_activo,
//         quienes_somos: quienes_somos,
//         servicios: servicios,
//         eventos: eventos,
//         contacto: contacto,
//         facebbok: facebook,
//         facebook_act: facebookAct,
//         facebook_publ_mes: valorFinalFacebook,
//         instagram: instagram,
//         instagram_act: instagramAct,
//         instagram_publ_mes: valorFinalInstagram,
//         otras_redes: otrasRedes,
//         otras_redes_cual: otrasRedesCual,
//         otras_redes_act: otrasRedesAct,
//         otras_redes_publ_mes: valorFinalOtrasR,
//         ficha_google: fichaGoogle,
//         ficha_google_control: fichaGoogleControl,
//         ficha_google_ubica: fichaGoogleUbica,
//         ficha_google_hora: fichaGoogleHora,
//         ficha_google_desc: fichaGoogleDesc,
//         ficha_google_serv: fichaGoogleServ,
//         venta_entradas: ventaEntradas,
//         plataf_vta_entr_name: platafVtaEntrName,
//         plataf_vta_entr_accweb: platafVtaEntrAccWeb,
//         plataf_vta_entr_accrrss: platafVtaEntrAccRrss,
//         plataf_vta_entr_o: platafVtaEntrO,
//         plataf_vta_entr_name_o: platafVtaEntrNameO,
//         plataf_vta_entr_accweb_o: platafVtaEntrAccWebO,
//         plataf_vta_entr_accrrss_o: platafVtaEntrAccRrssO,
//         reserva_online: reservaOnline,
//         reserva_online_name: reservaOnlineName,
//         reserva_online_accweb: reservaOnlineAccWeb,
//         reserva_online_accrrss: reservaOnlineAccRrss,
//         reserva_lista_puerta: reservaListaPuerta,
//         reserva_lista_pta_web: reservaListaPtaWeb,
//         reserva_lista_pta_rrss: reservaListaPtaRrss,
//         reserva_lista_pta_tel: reservaListaPtaTel,
//         reserva_lista_pta_rrpp: reservaListaPtaRrpp,
//         reserva_mesa: reservaMesa,
//         reserva_mesa_web: reservaMesaWeb,
//         reserva_mesa_rrss: reservaMesaRrss,
//         reserva_mesa_tel: reservaMesaTel,
//         reserva_mesa_rrpp: reservaMesaRrpp,
//         Observ_marketing: observMarketing,
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
//       // window.location.reload();  // Esto podría no ser necesario si estás manejando la actualización de la interfaz de usuario de otra manera
//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//       alert(
//         'Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.'
//       );
//     }
//   };

//   return (
//     <div className='form-container'>
//       <h3>FICHA MARKETING</h3>
//       <label className='parent-label form-label'>Offline Imagen local. Contenidos. Fotos
//       </label>
//       <Form onSubmit={store} className='my-form'>

//         <div className='mb-3'>
//           <label className='parent-label form-label'> Link carpeta en Drive</label>
//           <input value={linkDrive} onChange={(e) => setLinkDrive(e.target.value)}
//             type="text" className='form-control' />
//         </div>
//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Sitio Web Activo?</label>
//           <Form.Select
//             value={web_activo ? 'Si' : 'No'}
//             onChange={(e) => setWebActiva(e.target.value === 'Si' ? true : false)} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Quienes Somos?</label>
//           <Form.Select
//             value={quienes_somos ? 'Si' : 'No'}
//             onChange={(e) => setQuienesSomos(e.target.value === 'Si' ? true : false)} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Servicio?</label>
//           <Form.Select
//             value={servicios ? 'Si' : 'No'}
//             onChange={(e) => setServicio(e.target.value === 'Si' ? true : false)} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Eventos?</label>
//           <Form.Select
//             value={eventos ? 'Si' : 'No'}
//             onChange={(e) => setEventos(e.target.value === 'Si' ? true : false)} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Datos de Contacto?</label>
//           <Form.Select
//             value={contacto ? 'Si' : 'No'}
//             onChange={(e) => setContacto(e.target.value === 'Si' ? true : false)} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Utiliza Facebook?</label>
//           <Form.Select
//             value={facebook ? 'Si' : 'No'}
//             onChange={(e) => {
//               setFacebook(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") { setFacebookAct(''); setFacebookPublicacionesMes(''); }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {facebook && (
//             <div>
//               <label className='parent-label form-label'>Facebook Actualizada:</label>
//               <Form.Select value={facebookAct ? "Si" : "No"}
//                 onChange={(e) => setFacebookAct(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>

//               </Form.Select>



//               <label className='parent-label form-label'>Nº publicaciones al mes:</label>
//               <Form.Select
//                 value={facebookPublicacionesMes}
//                 onChange={handleChangeFacebook}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="1">1</option>
//                 <option value="4">4</option>
//                 <option value="10">10</option>
//                 <option value="otro">Otro</option>
//               </Form.Select>
//               {facebookPublicacionesMes === 'otro' && (
//                 <div>
//                   <label>Otro:</label>
//                   <input
//                     type="text"
//                     value={facebookPublicacionesMesO}
//                     onChange={handleOtroChangeF} />
//                 </div>)}

//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Utiliza Instagram?</label>
//           <Form.Select
//             value={instagram ? 'Si' : 'No'}
//             onChange={(e) => {
//               setInstagram(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") { setInstagramAct(''); setInstagramPublicacionesMes(''); }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {instagram && (
//             <div>
//               <label className='parent-label form-label'>Instagram Actualizada:</label>
//               <Form.Select value={instagramAct ? "Si" : "No"}
//                 onChange={(e) => setInstagramAct(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>

//               </Form.Select>



//               <label className='parent-label form-label'>Nº publicaciones al mes:</label>
//               <Form.Select
//                 value={instagramPublicacionesMes}
//                 onChange={handleChangeInstagram}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="1">1</option>
//                 <option value="4">4</option>
//                 <option value="10">10</option>
//                 <option value="otro">Otro</option>
//               </Form.Select>
//               {instagramPublicacionesMes === 'otro' && (
//                 <div>
//                   <label>Otro:</label>
//                   <input
//                     type="text"
//                     value={instagramPublicacionesMesO}
//                     onChange={handleOtroChangeI} />
//                 </div>)}

//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>¿Usa otra red social?</label>
//           <Form.Select
//             value={otrasRedes ? 'Si' : 'No'}
//             onChange={(e) => {
//               setOtrasRedes(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") { setOtrasRedesAct(''); setOtrasRedesCual(''); setOtrasRedesPublicacionesMes(''); }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {otrasRedes && (
//             <div>
//               <label className='parent-label form-label'>
//                 Otra red (nombre) </label>
//               <input
//                 value={otrasRedesCual}
//                 onChange={(e) => setOtrasRedesCual(e.target.value)}
//                 type='text' className='form-control' />
//               <label className='parent-label form-label'>Actualizada:</label>
//               <Form.Select value={otrasRedesAct ? "Si" : "No"}
//                 onChange={(e) => setOtrasRedesAct(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>

//               <label className='parent-label form-label'>Nº publicaciones al mes:</label>
//               <Form.Select
//                 value={otrasRedesPublicacionesMes}
//                 onChange={handleChangeOtrasRedes}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="1">1</option>
//                 <option value="4">4</option>
//                 <option value="10">10</option>
//                 <option value="otro">Otro</option>
//               </Form.Select>
//               {otrasRedesPublicacionesMes === 'otro' && (
//                 <div>
//                   <label>Otro:</label>
//                   <input
//                     type="text"
//                     value={otrasRedesPublicacionesMesO}
//                     onChange={handleOtroChangeOR} />
//                 </div>)}

//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Ficha Google:</label>
//           <Form.Select
//             value={fichaGoogle ? 'Si' : 'No'}
//             onChange={(e) => {
//               setFichaGoogle(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setFichaGoogleControl(''); setFichaGoogleDesc('');
//                 setFichaGoogleHora(''); setFichaGoogleServ('');
//                 setFichaGoogleUbica('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {fichaGoogle && (
//             <div>
//               <label className='parent-label form-label'>Controlada por la sala:</label>
//               <Form.Select value={fichaGoogleControl ? "Si" : "No"}
//                 onChange={(e) => setFichaGoogleControl(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Ubicación correcta::</label>
//               <Form.Select value={fichaGoogleUbica ? "Si" : "No"}
//                 onChange={(e) => setFichaGoogleUbica(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Horarios actualizados:</label>
//               <Form.Select value={fichaGoogleHora ? "Si" : "No"}
//                 onChange={(e) => setFichaGoogleHora(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Descripcion:</label>
//               <Form.Select value={fichaGoogleDesc ? "Si" : "No"}
//                 onChange={(e) => setFichaGoogleDesc(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Servicio:</label>
//               <Form.Select value={fichaGoogleServ ? "Si" : "No"}
//                 onChange={(e) => setFichaGoogleServ(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>

//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Plataformas de venta de entradas:</label>
//           <Form.Select
//             value={ventaEntradas ? 'Si' : 'No'}
//             onChange={(e) => {
//               setVentaEntradas(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setPlatafVtaEntrName(''); setPlatafVtaEntrAccWeb('');
//                 setPlatafVtaEntrAccRrss('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {ventaEntradas && (
//             <div>
//               <label className='parent-label form-label'> Nombre: </label>
//               <input value={platafVtaEntrName}
//                 onChange={(e) => setPlatafVtaEntrName(e.target.value)} type='text'
//                 className='form-control' />
//               <label className='parent-label form-label'>Accesible desde sitio web::</label>
//               <Form.Select value={platafVtaEntrAccWeb ? "Si" : "No"}
//                 onChange={(e) => setPlatafVtaEntrAccWeb(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Accesible desde RRSS::</label>
//               <Form.Select value={platafVtaEntrAccRrss ? "Si" : "No"}
//                 onChange={(e) => setPlatafVtaEntrAccRrss(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Otra Plataformas de venta de entradas:</label>
//           <Form.Select
//             value={platafVtaEntrO ? 'Si' : 'No'}
//             onChange={(e) => {
//               setPlatafVtaEntrO(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setPlatafVtaEntrNameO(''); setPlatafVtaEntrAccWebO('');
//                 setPlatafVtaEntrAccRrssO('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {platafVtaEntrO && (
//             <div>
//               <label className='parent-label form-label'> Nombre: </label>
//               <input value={platafVtaEntrNameO}
//                 onChange={(e) => setPlatafVtaEntrNameO(e.target.value)} type='text'
//                 className='form-control' />
//               <label className='parent-label form-label'>Accesible desde sitio web::</label>
//               <Form.Select value={platafVtaEntrAccWebO ? "Si" : "No"}
//                 onChange={(e) => setPlatafVtaEntrAccWebO(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Accesible desde RRSS::</label>
//               <Form.Select value={platafVtaEntrAccRrssO ? "Si" : "No"}
//                 onChange={(e) => setPlatafVtaEntrAccRrssO(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//             </div>)}
//         </div>
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Reserva online de entradas:</label>
//           <Form.Select
//             value={reservaOnline ? 'Si' : 'No'}
//             onChange={(e) => {
//               setReservaOnline(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setReservaOnlineName(''); setReservaOnlineAccRrss('');
//                 setReservaOnlineAccWeb('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {reservaOnline && (
//             <div>
//               <label className='parent-label form-label'> Nombre: </label>
//               <input value={reservaOnlineName}
//                 onChange={(e) => setReservaOnlineName(e.target.value)} type='text'
//                 className='form-control' />
//               <label className='parent-label form-label'>Accesible desde sitio web::</label>
//               <Form.Select value={reservaOnlineAccWeb ? "Si" : "No"}
//                 onChange={(e) => setReservaOnlineAccWeb(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Accesible desde RRSS::</label>
//               <Form.Select value={reservaOnlineAccRrss ? "Si" : "No"}
//                 onChange={(e) => setReservaOnlineAccRrss(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//             </div>)}
//         </div>
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Reserva lista puerta:</label>
//           <Form.Select
//             value={reservaListaPuerta ? 'Si' : 'No'}
//             onChange={(e) => {
//               setReservaListaPuerta(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setReservaListaPtaWeb('');
//                 setReservaListaPtaRrpp(''); setReservaListaPtaTel('');
//                 setReservaListaPtaRrss('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {reservaListaPuerta && (
//             <div>
//               <label className='parent-label form-label'>Accesible desde sitio web:</label>
//               <Form.Select value={reservaListaPtaWeb ? "Si" : "No"}
//                 onChange={(e) => setReservaListaPtaWeb(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Accesible desde RRSS:</label>
//               <Form.Select value={reservaListaPtaRrss ? "Si" : "No"}
//                 onChange={(e) => setReservaListaPtaRrss(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Telefónicamente:</label>
//               <Form.Select value={reservaListaPtaTel ? "Si" : "No"}
//                 onChange={(e) => setReservaListaPtaTel(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>A través de RRPP:</label>
//               <Form.Select value={reservaListaPtaRrpp ? "Si" : "No"}
//                 onChange={(e) => setReservaListaPtaRrpp(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Reserva Mesa:</label>
//           <Form.Select
//             value={reservaMesa ? 'Si' : 'No'}
//             onChange={(e) => {
//               setReservaMesa(e.target.value === "Si" ? true : false);
//               if (e.target.value === "No") {
//                 setReservaMesaWeb('');
//                 setReservaMesaRrpp(''); setReservaMesaTel('');
//                 setReservaMesaRrss('');
//               }
//             }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {reservaMesa && (
//             <div>
//               <label className='parent-label form-label'>Accesible desde sitio web:</label>
//               <Form.Select value={reservaMesaWeb ? "Si" : "No"}
//                 onChange={(e) => setReservaMesaWeb(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Accesible desde RRSS:</label>
//               <Form.Select value={reservaMesaRrss ? "Si" : "No"}
//                 onChange={(e) => setReservaMesaRrss(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>Telefónicamente:</label>
//               <Form.Select value={reservaMesaTel ? "Si" : "No"}
//                 onChange={(e) => setReservaMesaTel(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//               <label className='parent-label form-label'>A través de RRPP:</label>
//               <Form.Select value={reservaMesaRrpp ? "Si" : "No"}
//                 onChange={(e) => setReservaMesaRrpp(e.target.value === "Si" ? true : false)}>
//                 <option value="">Selecciona una opción</option>
//                 <option value="Si">Si</option>
//                 <option value="No">No</option>
//               </Form.Select>
//             </div>)}
//         </div>

//         {/* Agrega más campos según sea necesario */}

//         <div className='mb-3'>
//           <label className='parent-label form-label'>
//             Observaciones (Módulo Marketing):
//           </label>
//           <input
//             value={observMarketing}
//             onChange={(e) => setObservMarketing(e.target.value)}
//             type='text'
//             className='form-control' />
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
//             <ShowModalPrecios
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

// export default CreateMarketing;


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ShowModalPrecios from '../enc_precio/ShowCreatePrecio';

const URI = api + 'marketing/';

const CreateMarketing = ({ setCreatePrecioOpen, openCreatePrecioModel }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [linkDrive, setLinkDrive] = useState('');
  const [web_activo, setWebActiva] = useState(false);
  const [quienes_somos, setQuienesSomos] = useState(false);
  const [servicios, setServicio] = useState(false);
  const [eventos, setEventos] = useState(false);
  const [contacto, setContacto] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [facebookAct, setFacebookAct] = useState(false);
  const [facebookPublicacionesMes, setFacebookPublicacionesMes] = useState('');
  const [facebookPublicacionesMesO, setFacebookPublicacionesMesO] = useState('');
  const [instagram, setInstagram] = useState(false);
  const [instagramAct, setInstagramAct] = useState(false);
  const [instagramPublicacionesMes, setInstagramPublicacionesMes] = useState('');
  const [instagramPublicacionesMesO, setInstagramPublicacionesMesO] = useState('');
  const [otrasRedes, setOtrasRedes] = useState(false);
  const [otrasRedesAct, setOtrasRedesAct] = useState(false);
  const [otrasRedesCual, setOtrasRedesCual] = useState('');
  const [otrasRedesPublicacionesMes, setOtrasRedesPublicacionesMes] = useState('');
  const [otrasRedesPublicacionesMesO, setOtrasRedesPublicacionesMesO] = useState('');
  const [fichaGoogle, setFichaGoogle] = useState(false);
  const [fichaGoogleControl, setFichaGoogleControl] = useState(false);
  const [fichaGoogleUbica, setFichaGoogleUbica] = useState(false);
  const [fichaGoogleHora, setFichaGoogleHora] = useState(false);
  const [fichaGoogleDesc, setFichaGoogleDesc] = useState(false);
  const [fichaGoogleServ, setFichaGoogleServ] = useState(false);
  const [ventaEntradas, setVentaEntradas] = useState(false);
  const [platafVtaEntrName, setPlatafVtaEntrName] = useState('');
  const [platafVtaEntrAccWeb, setPlatafVtaEntrAccWeb] = useState(false);
  const [platafVtaEntrAccRrss, setPlatafVtaEntrAccRrss] = useState(false);
  const [platafVtaEntrO, setPlatafVtaEntrO] = useState(false);
  const [platafVtaEntrNameO, setPlatafVtaEntrNameO] = useState('');
  const [platafVtaEntrAccWebO, setPlatafVtaEntrAccWebO] = useState(false);
  const [platafVtaEntrAccRrssO, setPlatafVtaEntrAccRrssO] = useState(false);
  const [reservaOnline, setReservaOnline] = useState(false);
  const [reservaOnlineName, setReservaOnlineName] = useState('');
  const [reservaOnlineAccWeb, setReservaOnlineAccWeb] = useState(false);
  const [reservaOnlineAccRrss, setReservaOnlineAccRrss] = useState(false);
  const [reservaListaPuerta, setReservaListaPuerta] = useState(false);
  const [reservaListaPtaWeb, setReservaListaPtaWeb] = useState(false);
  const [reservaListaPtaRrss, setReservaListaPtaRrss] = useState(false);
  const [reservaListaPtaTel, setReservaListaPtaTel] = useState(false);
  const [reservaListaPtaRrpp, setReservaListaPtaRrpp] = useState(false);
  const [reservaMesa, setReservaMesa] = useState(false);
  const [reservaMesaWeb, setReservaMesaWeb] = useState(false);
  const [reservaMesaRrss, setReservaMesaRrss] = useState(false);
  const [reservaMesaTel, setReservaMesaTel] = useState(false);
  const [reservaMesaRrpp, setReservaMesaRrpp] = useState(false);
  const [observMarketing, setObservMarketing] = useState('');
  const [encuestaMarca, setSearchMarca] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');
  const navigate = useNavigate();

  const clearFields = () => {
    setObservMarketing('');
  };

  const handleChangeFacebook = (e) => {
    const selectedValue = e.target.value;
    setFacebookPublicacionesMes(selectedValue);
    if (selectedValue === 'otro') {
      setFacebookPublicacionesMesO('');
    }
  };

  const handleOtroChangeF = (e) => {
    const value = e.target.value;
    setFacebookPublicacionesMesO(value);
  };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await store(e);
      if (isSuccess) {
        // setIsModalOpen(true);
        setCreatePrecioOpen(false);
        openCreatePrecioModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const handleChangeInstagram = (e) => {
    const selectedValue = e.target.value;
    setInstagramPublicacionesMes(selectedValue);
    if (selectedValue === 'otro') {
      setInstagramPublicacionesMesO('');
    }
  };

  const handleOtroChangeI = (e) => {
    const value = e.target.value;
    setInstagramPublicacionesMesO(value);
  };

  const handleChangeOtrasRedes = (e) => {
    const selectedValue = e.target.value;
    setOtrasRedesPublicacionesMes(selectedValue);
    if (selectedValue === 'otro') {
      setOtrasRedesPublicacionesMesO('');
    }
  };

  const handleOtroChangeOR = (e) => {
    const value = e.target.value;
    setOtrasRedesPublicacionesMesO(value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  const store = async (e) => {
    e.preventDefault();
    setHasErrors(false);
    try {
      const valorFinalFacebook = facebookPublicacionesMes === 'otro' ? facebookPublicacionesMesO : facebookPublicacionesMes;
      const valorFinalInstagram = instagramPublicacionesMes === 'otro' ? instagramPublicacionesMesO : instagramPublicacionesMes;
      const valorFinalOtrasR = otrasRedesPublicacionesMes === 'otro' ? otrasRedesPublicacionesMesO : otrasRedesPublicacionesMes;

      const response = await axios.post(URI, {
        link_drive: linkDrive,
        web_activo: web_activo,
        quienes_somos: quienes_somos,
        servicios: servicios,
        eventos: eventos,
        contacto: contacto,
        facebbok: facebook,
        facebook_act: facebookAct,
        facebook_publ_mes: valorFinalFacebook,
        instagram: instagram,
        instagram_act: instagramAct,
        instagram_publ_mes: valorFinalInstagram,
        otras_redes: otrasRedes,
        otras_redes_cual: otrasRedesCual,
        otras_redes_act: otrasRedesAct,
        otras_redes_publ_mes: valorFinalOtrasR,
        ficha_google: fichaGoogle,
        ficha_google_control: fichaGoogleControl,
        ficha_google_ubica: fichaGoogleUbica,
        ficha_google_hora: fichaGoogleHora,
        ficha_google_desc: fichaGoogleDesc,
        ficha_google_serv: fichaGoogleServ,
        venta_entradas: ventaEntradas,
        plataf_vta_entr_name: platafVtaEntrName,
        plataf_vta_entr_accweb: platafVtaEntrAccWeb,
        plataf_vta_entr_accrrss: platafVtaEntrAccRrss,
        plataf_vta_entr_o: platafVtaEntrO,
        plataf_vta_entr_name_o: platafVtaEntrNameO,
        plataf_vta_entr_accweb_o: platafVtaEntrAccWebO,
        plataf_vta_entr_accrrss_o: platafVtaEntrAccRrssO,
        reserva_online: reservaOnline,
        reserva_online_name: reservaOnlineName,
        reserva_online_accweb: reservaOnlineAccWeb,
        reserva_online_accrrss: reservaOnlineAccRrss,
        reserva_lista_puerta: reservaListaPuerta,
        reserva_lista_pta_web: reservaListaPtaWeb,
        reserva_lista_pta_rrss: reservaListaPtaRrss,
        reserva_lista_pta_tel: reservaListaPtaTel,
        reserva_lista_pta_rrpp: reservaListaPtaRrpp,
        reserva_mesa: reservaMesa,
        reserva_mesa_web: reservaMesaWeb,
        reserva_mesa_rrss: reservaMesaRrss,
        reserva_mesa_tel: reservaMesaTel,
        reserva_mesa_rrpp: reservaMesaRrpp,
        Observ_marketing: observMarketing,
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
      alert(
        'Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.'
      );
    }
  };

  return (
    <div className='container form-container'>
      <h3>FICHA MARKETING</h3>
      <label className='parent-label form-label'>Offline Imagen local. Contenidos. Fotos
      </label>
      <Form onSubmit={store} className='my-form'>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Link carpeta en Drive</label>
            <input value={linkDrive} onChange={(e) => setLinkDrive(e.target.value)} type="text" className='form-control' />
          </div>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Sitio Web Activo?</label>
            <Form.Select value={web_activo ? 'Si' : 'No'} onChange={(e) => setWebActiva(e.target.value === 'Si' ? true : false)} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Quienes Somos?</label>
            <Form.Select value={quienes_somos ? 'Si' : 'No'} onChange={(e) => setQuienesSomos(e.target.value === 'Si' ? true : false)} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
          </div>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Servicio?</label>
            <Form.Select value={servicios ? 'Si' : 'No'} onChange={(e) => setServicio(e.target.value === 'Si' ? true : false)} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Eventos?</label>
            <Form.Select value={eventos ? 'Si' : 'No'} onChange={(e) => setEventos(e.target.value === 'Si' ? true : false)} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
          </div>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Datos de Contacto?</label>
            <Form.Select value={contacto ? 'Si' : 'No'} onChange={(e) => setContacto(e.target.value === 'Si' ? true : false)} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Utiliza Facebook?</label>
            <Form.Select value={facebook ? 'Si' : 'No'} onChange={(e) => {
              setFacebook(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") { setFacebookAct(''); setFacebookPublicacionesMes(''); }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {facebook && (
              <div>
                <label className='parent-label form-label'>Facebook Actualizada:</label>
                <Form.Select value={facebookAct ? "Si" : "No"}
                  onChange={(e) => setFacebookAct(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>

                <label className='parent-label form-label'>Nº publicaciones al mes:</label>
                <Form.Select value={facebookPublicacionesMes} onChange={handleChangeFacebook}>
                  <option value="">Selecciona una opción</option>
                  <option value="1">1</option>
                  <option value="4">4</option>
                  <option value="10">10</option>
                  <option value="otro">Otro</option>
                </Form.Select>
                {facebookPublicacionesMes === 'otro' && (
                  <div>
                    <label>Otro:</label>
                    <input type="text" value={facebookPublicacionesMesO} onChange={handleOtroChangeF} />
                  </div>)}
              </div>)}
          </div>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Utiliza Instagram?</label>
            <Form.Select value={instagram ? 'Si' : 'No'} onChange={(e) => {
              setInstagram(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") { setInstagramAct(''); setInstagramPublicacionesMes(''); }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {instagram && (
              <div>
                <label className='parent-label form-label'>Instagram Actualizada:</label>
                <Form.Select value={instagramAct ? "Si" : "No"}
                  onChange={(e) => setInstagramAct(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>

                <label className='parent-label form-label'>Nº publicaciones al mes:</label>
                <Form.Select value={instagramPublicacionesMes} onChange={handleChangeInstagram}>
                  <option value="">Selecciona una opción</option>
                  <option value="1">1</option>
                  <option value="4">4</option>
                  <option value="10">10</option>
                  <option value="otro">Otro</option>
                </Form.Select>
                {instagramPublicacionesMes === 'otro' && (
                  <div>
                    <label>Otro:</label>
                    <input type="text" value={instagramPublicacionesMesO} onChange={handleOtroChangeI} />
                  </div>)}
              </div>)}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>¿Usa otra red social?</label>
            <Form.Select value={otrasRedes ? 'Si' : 'No'} onChange={(e) => {
              setOtrasRedes(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") { setOtrasRedesAct(''); setOtrasRedesCual(''); setOtrasRedesPublicacionesMes(''); }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {otrasRedes && (
              <div>
                <label className='parent-label form-label'>Otra red (nombre)</label>
                <input value={otrasRedesCual} onChange={(e) => setOtrasRedesCual(e.target.value)} type='text' className='form-control' />
                <label className='parent-label form-label'>Actualizada:</label>
                <Form.Select value={otrasRedesAct ? "Si" : "No"}
                  onChange={(e) => setOtrasRedesAct(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>

                <label className='parent-label form-label'>Nº publicaciones al mes:</label>
                <Form.Select value={otrasRedesPublicacionesMes} onChange={handleChangeOtrasRedes}>
                  <option value="">Selecciona una opción</option>
                  <option value="1">1</option>
                  <option value="4">4</option>
                  <option value="10">10</option>
                  <option value="otro">Otro</option>
                </Form.Select>
                {otrasRedesPublicacionesMes === 'otro' && (
                  <div>
                    <label>Otro:</label>
                    <input type="text" value={otrasRedesPublicacionesMesO} onChange={handleOtroChangeOR} />
                  </div>)}
              </div>)}
          </div>

          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Ficha Google:</label>
            <Form.Select value={fichaGoogle ? 'Si' : 'No'} onChange={(e) => {
              setFichaGoogle(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setFichaGoogleControl(''); setFichaGoogleDesc('');
                setFichaGoogleHora(''); setFichaGoogleServ('');
                setFichaGoogleUbica('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {fichaGoogle && (
              <div>
                <label className='parent-label form-label'>Controlada por la sala:</label>
                <Form.Select value={fichaGoogleControl ? "Si" : "No"} onChange={(e) => setFichaGoogleControl(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Ubicación correcta:</label>
                <Form.Select value={fichaGoogleUbica ? "Si" : "No"} onChange={(e) => setFichaGoogleUbica(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Horarios actualizados:</label>
                <Form.Select value={fichaGoogleHora ? "Si" : "No"} onChange={(e) => setFichaGoogleHora(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Descripcion:</label>
                <Form.Select value={fichaGoogleDesc ? "Si" : "No"} onChange={(e) => setFichaGoogleDesc(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Servicio:</label>
                <Form.Select value={fichaGoogleServ ? "Si" : "No"} onChange={(e) => setFichaGoogleServ(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Plataformas de venta de entradas:</label>
            <Form.Select value={ventaEntradas ? 'Si' : 'No'} onChange={(e) => {
              setVentaEntradas(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setPlatafVtaEntrName(''); setPlatafVtaEntrAccWeb('');
                setPlatafVtaEntrAccRrss('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {ventaEntradas && (
              <div>
                <label className='parent-label form-label'>Nombre:</label>
                <input value={platafVtaEntrName} onChange={(e) => setPlatafVtaEntrName(e.target.value)} type='text' className='form-control' />
                <label className='parent-label form-label'>Accesible desde sitio web:</label>
                <Form.Select value={platafVtaEntrAccWeb ? "Si" : "No"} onChange={(e) => setPlatafVtaEntrAccWeb(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Accesible desde RRSS:</label>
                <Form.Select value={platafVtaEntrAccRrss ? "Si" : "No"} onChange={(e) => setPlatafVtaEntrAccRrss(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>

          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Otra Plataformas de venta de entradas:</label>
            <Form.Select value={platafVtaEntrO ? 'Si' : 'No'} onChange={(e) => {
              setPlatafVtaEntrO(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setPlatafVtaEntrNameO(''); setPlatafVtaEntrAccWebO('');
                setPlatafVtaEntrAccRrssO('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {platafVtaEntrO && (
              <div>
                <label className='parent-label form-label'>Nombre:</label>
                <input value={platafVtaEntrNameO} onChange={(e) => setPlatafVtaEntrNameO(e.target.value)} type='text' className='form-control' />
                <label className='parent-label form-label'>Accesible desde sitio web:</label>
                <Form.Select value={platafVtaEntrAccWebO ? "Si" : "No"} onChange={(e) => setPlatafVtaEntrAccWebO(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Accesible desde RRSS:</label>
                <Form.Select value={platafVtaEntrAccRrssO ? "Si" : "No"} onChange={(e) => setPlatafVtaEntrAccRrssO(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Reserva online de entradas:</label>
            <Form.Select value={reservaOnline ? 'Si' : 'No'} onChange={(e) => {
              setReservaOnline(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setReservaOnlineName(''); setReservaOnlineAccRrss('');
                setReservaOnlineAccWeb('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {reservaOnline && (
              <div>
                <label className='parent-label form-label'>Nombre:</label>
                <input value={reservaOnlineName} onChange={(e) => setReservaOnlineName(e.target.value)} type='text' className='form-control' />
                <label className='parent-label form-label'>Accesible desde sitio web:</label>
                <Form.Select value={reservaOnlineAccWeb ? "Si" : "No"} onChange={(e) => setReservaOnlineAccWeb(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Accesible desde RRSS:</label>
                <Form.Select value={reservaOnlineAccRrss ? "Si" : "No"} onChange={(e) => setReservaOnlineAccRrss(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>

          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Reserva lista puerta:</label>
            <Form.Select value={reservaListaPuerta ? 'Si' : 'No'} onChange={(e) => {
              setReservaListaPuerta(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setReservaListaPtaWeb('');
                setReservaListaPtaRrpp(''); setReservaListaPtaTel('');
                setReservaListaPtaRrss('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {reservaListaPuerta && (
              <div>
                <label className='parent-label form-label'>Accesible desde sitio web:</label>
                <Form.Select value={reservaListaPtaWeb ? "Si" : "No"} onChange={(e) => setReservaListaPtaWeb(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Accesible desde RRSS:</label>
                <Form.Select value={reservaListaPtaRrss ? "Si" : "No"} onChange={(e) => setReservaListaPtaRrss(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Telefónicamente:</label>
                <Form.Select value={reservaListaPtaTel ? "Si" : "No"} onChange={(e) => setReservaListaPtaTel(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>A través de RRPP:</label>
                <Form.Select value={reservaListaPtaRrpp ? "Si" : "No"} onChange={(e) => setReservaListaPtaRrpp(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label className='parent-label form-label'>Reserva Mesa:</label>
            <Form.Select value={reservaMesa ? 'Si' : 'No'} onChange={(e) => {
              setReservaMesa(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setReservaMesaWeb('');
                setReservaMesaRrpp(''); setReservaMesaTel('');
                setReservaMesaRrss('');
              }
            }} >
              <option value=''>Selecciona una opción</option>
              <option value='Si'>Si</option>
              <option value='No'>No</option>
            </Form.Select>
            {reservaMesa && (
              <div>
                <label className='parent-label form-label'>Accesible desde sitio web:</label>
                <Form.Select value={reservaMesaWeb ? "Si" : "No"} onChange={(e) => setReservaMesaWeb(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Accesible desde RRSS:</label>
                <Form.Select value={reservaMesaRrss ? "Si" : "No"} onChange={(e) => setReservaMesaRrss(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>Telefónicamente:</label>
                <Form.Select value={reservaMesaTel ? "Si" : "No"} onChange={(e) => setReservaMesaTel(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
                <label className='parent-label form-label'>A través de RRPP:</label>
                <Form.Select value={reservaMesaRrpp ? "Si" : "No"} onChange={(e) => setReservaMesaRrpp(e.target.value === "Si" ? true : false)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>)}
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mb-3'>
            <label className='parent-label form-label'>Observaciones (Módulo Marketing):</label>
            <input value={observMarketing} onChange={(e) => setObservMarketing(e.target.value)} type='text' className='form-control' />
          </div>
        </div>

        <div className="mt-3">
          {!isModalOpen && (
            <button className='btn btn-success btn-ladda' onClick={(e) => handleFirstButtonClick(e)}>Registrar Datos</button>
          )}
          {isModalOpen && (
            <ShowModalPrecios onClick={handleModalClose} isOpen={isModalOpen} onClose={handleModalClose} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateMarketing;


