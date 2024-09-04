// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';

// const URI = api + 'precio/';

// const CompEditPrecios = ({id}) => {
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
//   const userId = localStorage.getItem('userId');
//   const encuestaId = localStorage.getItem('encuestaId1');
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const navigate = useNavigate();

//   const clearFields = () => {
//     // Clear all state variables
//   };
//   const handleChangeEntrada = (e) => {
//     const selectedValue = e.target.value;
//     setTipoEntradas(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setTipoEntradasO(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleOtroChangeEnt = (e) => {
//     const value = e.target.value;
//     setTipoEntradasO(value);
//   };

//   const update = async (e) => {
//     e.preventDefault();
//     try {
//         const valorFinalE = (tipoEntradas === 'otro') ? tipoEntradasO : tipoEntradas;
//       // Send a POST request to your API endpoint
//       const response = await axios.put(URI + id, {
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
//         Obsrv_att_turist: obsrvAttTurist
//       });

//       clearFields();
//       window.location.reload(); 
//       // Optionally, you can perform additional actions after successful submission
//       // For example, redirecting to another page
//       // navigate('/viewuser');
//     } catch (error) {
//       console.error('Error while saving data:', error);
//       setHasErrors(true);
//       setEmailError('Error occurred while saving data.');
//     }
//   };
//   useEffect(() => {
//     // Incluye getBlogById en el array de dependencias
//     const getUserById = async () => {
//         const response = await axios.get(URI + id)
//         setTipoEntradas(response.data.tipo_entradas);
//       setTipoEntradasO(response.data.tipo_entradas_o);
//       setPrecioAnticipada(response.data.precio_anticipada);
//       setPrecioTaquilla(response.data.precio_taquilla);
//       setDescuentos(response.data.descuentos);
//       setListaPuerta(response.data.lista_puerta);
//       setListaPuertaCond(response.data.lista_puerta_cond);
//       setPrecioAgua(response.data.precio_agua);
//       setPrecioRefresco(response.data.precio_refresco);
//       setPrecioCerveza(response.data.precio_cerveza);
//       setPrecioCombinado(response.data.precio_combinado);
//       setPrecioCombinadoPrem(response.data.precio_combinado_prem);
//       setPrecioChupito(response.data.precio_chupito);
//       setPrecioBotella(response.data.precio_botella);
//       setPrecioMesa(response.data.precio_mesa);
//       setPrecioGuardarropia(response.data.precio_guardarropia);
//       setPrecioMarchandising(response.data.precio_marchandising);
//       setPrecioOtros(response.data.precio_otros);
//       setObservPrecios(response.data.observ_precios);
//       setTuristasPorc(response.data.turistas_porc);
//       setTuristicPersIdiomas(response.data.turistic_pers_idiomas);
//       setTuristicPersIdiomasCualIngles(response.data.turistic_pers_idiomas_cual_ingles);
//       setTuristicPersIdiomasCualFrances(response.data.turistic_pers_idiomas_cual_frances);
//       setTuristicPersIdiomasCualOtro(response.data.turistic_pers_idiomas_cual_otro);
//       setIdiomaOtroTu(response.data.idioma_otro_tu);
//       setIdiomaOtroSe(response.data.idioma_otro_se);
//       setIdiomaOtroVe(response.data.idioma_otro_ve);
//       setSenalIdiomas(response.data.senal_idiomas);
//       setSenalIdiomasCualIngles(response.data.senal_idiomas_cual_ingles);
//       setSenalIdiomasCualFrances(response.data.senal_idiomas_cual_frances);
//       setSenalIdiomasCualOtro(response.data.senal_idiomas_cual_otro);
//       setPersAttGrupos(response.data.pers_att_grupos);
//       setPersAttGruposCual(response.data.pers_att_grupos_cual);
//       setVentaOnlineIdiomas(response.data.venta_online_idiomas);
//       setVentaOnlineIdiomasCualIngles(response.data.venta_online_idiomas_cual_ingles);
//       setVentaOnlineIdiomasCualFrances(response.data.venta_online_idiomas_cual_frances);
//       setVentaOnlineIdiomasCualOtro(response.data.venta_online_idiomas_cual_otro);
//       setObsrvAttTurist(response.data.obsrv_att_turist);
//     }

//     getUserById();
// }, [id]);

//   return (
//     <div className="form-container">
//       <h3>PRECIO ENTRADAS</h3>
//       <Form onSubmit={update} className="my-form">
//       <div>
//                 <label className='parent-label form-label'>Observaciones:</label>
//                 <Form.Select
//                 value={tipoEntradas}
//                 onChange={handleChangeEntrada}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Individual">Individual</option>
//                     <option value="Por grupos">Por grupos</option>
//                     <option value="Por horarios">Por horarios</option>
//                     <option value="Zona">Zona</option>
//                     <option value="Mesa">Mesa</option>
//                     <option value="otro">Llenar Observaciones manualmente</option>

//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {tipoEntradas === 'otro' && (
//                 <div>
//                 <label>Otro:</label>
//                 <input
//                     type="text"
//                     value={tipoEntradasO}
//                     onChange={handleOtroChangeEnt}/>
//                 </div>)}
//             </div>


//             <div className="mb-3">
//                 <label className="parent-label form-label">Venta anticipada:</label>
//                 <input value={precioAnticipada} type="text" className="form-control"
//                     onChange={(e) => setPrecioAnticipada(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio en taquilla:</label>
//                 <input value={precioTaquilla} type="text" className="form-control"
//                     onChange={(e) => setPrecioTaquilla(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Tipo de Descuentos y modalidades:</label>
//                 <input value={descuentos} type="text" className="form-control"
//                     onChange={(e) => setDescuentos(e.target.value)}  />
//             </div>
//             <div>
//                 <label className='parent-label form-label'>Lista de puerta:</label>
//                 <Form.Select
//                 value={listaPuerta ? "Si" : "No"}
//                 onChange={(e) => setListaPuerta(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>
//                 </Form.Select>
//                 {!listaPuerta && (
//                     <div className='mb-3'>
//                         <label className='parent-label form-label'>Condicionados:</label>
//                             <input value={listaPuertaCond} onChange={(e) => setListaPuertaCond(e.target.value)}
//                                 type="text" className='form-control' /> 
//                     </div> )}
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Agua:</label>
//                 <input value={precioAgua} type="text" className="form-control"
//                     onChange={(e) => setPrecioAgua(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Refresco:</label>
//                 <input value={precioRefresco} type="text" className="form-control"
//                     onChange={(e) => setPrecioRefresco(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Cerveza:</label>
//                 <input value={precioCerveza} type="text" className="form-control"
//                     onChange={(e) => setPrecioCerveza(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Combinados Standar:</label>
//                 <input value={precioCombinado} type="text" className="form-control"
//                     onChange={(e) => setPrecioCombinado(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Combinados Premium:</label>
//                 <input value={precioCombinadoPrem} type="text" className="form-control"
//                     onChange={(e) => setPrecioCombinadoPrem(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Chupitos:</label>
//                 <input value={precioChupito} type="text" className="form-control"
//                     onChange={(e) => setPrecioChupito(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Botellas:</label>
//                 <input value={precioBotella} type="text" className="form-control"
//                     onChange={(e) => setPrecioBotella(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Mesa:</label>
//                 <input value={precioMesa} type="text" className="form-control"
//                     onChange={(e) => setPrecioMesa(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Guardarropía:</label>
//                 <input value={precioGuardarropia} type="text" className="form-control"
//                     onChange={(e) => setPrecioGuardarropia(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Precio Merchandising:</label>
//                 <input value={precioMarchandising} type="text" className="form-control"
//                     onChange={(e) => setPrecioMarchandising(e.target.value)}  />
//             </div>

//             <div className="mb-3">
//                 <label className="parent-label form-label">Otros (Precios):</label>
//                 <input value={precioOtros} type="text" className="form-control"
//                     onChange={(e) => setPrecioOtros(e.target.value)}  />
//             </div>
//     <div className="mb-3">
//           <label className="parent-label form-label">Observaciones (Módulo Precios):</label>
//           <input
//             value={observPrecios}
//             onChange={(e) => setObservPrecios(e.target.value)}
//             type="text"
//             className="form-control"
//           />
//         </div>
//         <div>
//                 <label className='parent-label form-label'>Porcentaje público turista</label>
//                  <Form.Select value={turistasPorc} onChange={(e) => setTuristasPorc(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="0% a 10%">0% a 10%</option>
//                     <option value="11% a 20%">11% a 20%</option>
//                     <option value="21% a 30%">21% a 30%</option>
//                     <option value="31% a 40%">31% a 40%</option>
//                     <option value="41% a 50%">41% a 50%</option>
//                     </Form.Select>
//             </div>

//             <div className='mb-3'>
//           <label className='parent-label form-label'>Capacidad atención personal en Idiomas</label>
//           <Form.Select 
//             value={turisticPersIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {setTuristicPersIdiomas(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setTuristicPersIdiomasCualFrances(''); 
//                   setTuristicPersIdiomasCualIngles(''); setTuristicPersIdiomasCualOtro('');} }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {turisticPersIdiomas && (
//              <div style={{ textAlign: 'left' }}>
//              <label className='parent-label form-label'>Sí, cuales (atención personal en idiomas)</label>
//              {/* Opciones de vías de evacuación */} <br/> <br/>
//              <input type="checkbox" checked={turisticPersIdiomasCualIngles}
//                  onChange={() => setTuristicPersIdiomasCualIngles(prev => !prev)} /> Inglés <br/>
//              <input type="checkbox" checked={turisticPersIdiomasCualFrances}
//                  onChange={() => setTuristicPersIdiomasCualFrances(prev => !prev)} /> Francés <br/>
//              <input type="checkbox" checked={IdiomaOtroTu}
//                  onChange={() => setIdiomaOtroTu(prev => !prev)} /> Otras. Cual: <br/>
//              {IdiomaOtroTu && (
//                <div>
//                  <label>Otro:</label>
//                  <input type="text" value={turisticPersIdiomasCualOtro}
//                    onChange={(e) => setTuristicPersIdiomasCualOtro(e.target.value)} />
//                </div> )}
//             </div>

//                )} </div>

//     <div className='mb-3'>
//           <label className='parent-label form-label'>Señalética en idiomas: </label>
//           <Form.Select 
//             value={senalIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {setSenalIdiomas(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setSenalIdiomasCualFrances(''); 
//                   setSenalIdiomasCualIngles(''); setSenalIdiomasCualOtro('');} }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {senalIdiomas && (
//              <div style={{ textAlign: 'left' }}>
//              <label className='parent-label form-label'>Sí, cuales (señalética en idiomas)</label>
//              {/* Opciones de vías de evacuación */} <br/> <br/>
//              <input type="checkbox" checked={senalIdiomasCualIngles}
//                  onChange={() => setSenalIdiomasCualIngles(prev => !prev)} /> Inglés <br/>
//              <input type="checkbox" checked={senalIdiomasCualFrances}
//                  onChange={() => setSenalIdiomasCualFrances(prev => !prev)} /> Francés <br/>
//              <input type="checkbox" checked={IdiomaOtroSe}
//                  onChange={() => setIdiomaOtroSe(prev => !prev)} /> Otras. Cual: <br/>
//              {IdiomaOtroSe && (
//                <div>
//                  <label>Otro:</label>
//                  <input type="text" value={senalIdiomasCualOtro}
//                    onChange={(e) => setSenalIdiomasCualOtro(e.target.value)} />
//                </div> )}
//             </div> )} </div>
//             <div className='mb-3'>
//           <label className='parent-label form-label'>Personal especializado atención grupos, etc. </label>
//           <Form.Select 
//             value={persAttGrupos ? 'Si' : 'No'}
//             onChange={(e) => {setPersAttGrupos(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setPersAttGruposCual(''); } }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {persAttGrupos && (
//             <div className="mb-3">
//             <label className="parent-label form-label">Sí, cuales (atención grupos)</label>
//             <input value={persAttGruposCual} type="text" className="form-control"
//                 onChange={(e) => setPersAttGruposCual(e.target.value)}  />
//         </div>

//               )} 
//             </div>

//             <div className='mb-3'>
//           <label className='parent-label form-label'>Venta online. Idiomas: </label>
//           <Form.Select 
//             value={ventaOnlineIdiomas ? 'Si' : 'No'}
//             onChange={(e) => {setVentaOnlineIdiomas(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setVentaOnlineIdiomasCualFrances(''); 
//                   setVentaOnlineIdiomasCualIngles(''); setVentaOnlineIdiomasCualOtro('');} }} >
//             <option value=''>Selecciona una opción</option>
//             <option value='Si'>Si</option>
//             <option value='No'>No</option>
//           </Form.Select>
//           {ventaOnlineIdiomas && (
//              <div style={{ textAlign: 'left' }}>
//              <label className='parent-label form-label'>Sí, cuales (señalética en idiomas)</label>
//              {/* Opciones de vías de evacuación */} <br/> <br/>
//              <input type="checkbox" checked={ventaOnlineIdiomasCualIngles}
//                  onChange={() => setVentaOnlineIdiomasCualIngles(prev => !prev)} /> Inglés <br/>
//              <input type="checkbox" checked={ventaOnlineIdiomasCualFrances}
//                  onChange={() => setVentaOnlineIdiomasCualFrances(prev => !prev)} /> Francés <br/>
//              <input type="checkbox" checked={IdiomaOtroVe}
//                  onChange={() => setIdiomaOtroVe(prev => !prev)} /> Otras. Cual: <br/>
//              {IdiomaOtroVe && (
//                <div>
//                  <label>Otro:</label>
//                  <input type="text" value={ventaOnlineIdiomasCualOtro}
//                    onChange={(e) => setVentaOnlineIdiomasCualOtro(e.target.value)} />
//                </div> )}
//             </div> )} </div>

//             <div className="mb-3">
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
//         <div className='mt-3'>
//           <button type='submit' className='btn btn-success btn-ladda'>
//             Registrar
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default CompEditPrecios;



import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';

const URI = api + 'precio/';

const CompEditPrecios = ({ id, abrirModal, getEncuestas }) => {
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
  const userId = localStorage.getItem('userId');
  const encuestaId = localStorage.getItem('encuestaId1');
  const navigate = useNavigate();

  const clearFields = () => {
    // Clear all state variables
  };

  const handleChangeEntrada = (e) => {
    const selectedValue = e.target.value;
    setTipoEntradas(selectedValue);
    if (selectedValue === 'otro') {
      setTipoEntradasO('');
    }
  };

  const handleOtroChangeEnt = (e) => {
    const value = e.target.value;
    setTipoEntradasO(value);
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      const valorFinalE = (tipoEntradas === 'otro') ? tipoEntradasO : tipoEntradas;
      const response = await axios.put(URI + id, {
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
        Obsrv_att_turist: obsrvAttTurist
      });

      // clearFields();
      // window.location.reload();
      getEncuestas();
      abrirModal()
    } catch (error) {
      console.error('Error while saving data:', error);
      setHasErrors(true);
      setEmailError('Error occurred while saving data.');
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(URI + id);
      setTipoEntradas(response.data.tipo_entradas);
      setTipoEntradasO(response.data.tipo_entradas_o);
      setPrecioAnticipada(response.data.precio_anticipada);
      setPrecioTaquilla(response.data.precio_taquilla);
      setDescuentos(response.data.descuentos);
      setListaPuerta(response.data.lista_puerta);
      setListaPuertaCond(response.data.lista_puerta_cond);
      setPrecioAgua(response.data.precio_agua);
      setPrecioRefresco(response.data.precio_refresco);
      setPrecioCerveza(response.data.precio_cerveza);
      setPrecioCombinado(response.data.precio_combinado);
      setPrecioCombinadoPrem(response.data.precio_combinado_prem);
      setPrecioChupito(response.data.precio_chupito);
      setPrecioBotella(response.data.precio_botella);
      setPrecioMesa(response.data.precio_mesa);
      setPrecioGuardarropia(response.data.precio_guardarropia);
      setPrecioMarchandising(response.data.precio_marchandising);
      setPrecioOtros(response.data.precio_otros);
      setObservPrecios(response.data.observ_precios);
      setTuristasPorc(response.data.turistas_porc);
      setTuristicPersIdiomas(response.data.turistic_pers_idiomas);
      setTuristicPersIdiomasCualIngles(response.data.turistic_pers_idiomas_cual_ingles);
      setTuristicPersIdiomasCualFrances(response.data.turistic_pers_idiomas_cual_frances);
      setTuristicPersIdiomasCualOtro(response.data.turistic_pers_idiomas_cual_otro);
      setIdiomaOtroTu(response.data.idioma_otro_tu);
      setIdiomaOtroSe(response.data.idioma_otro_se);
      setIdiomaOtroVe(response.data.idioma_otro_ve);
      setSenalIdiomas(response.data.senal_idiomas);
      setSenalIdiomasCualIngles(response.data.senal_idiomas_cual_ingles);
      setSenalIdiomasCualFrances(response.data.senal_idiomas_cual_frances);
      setSenalIdiomasCualOtro(response.data.senal_idiomas_cual_otro);
      setPersAttGrupos(response.data.pers_att_grupos);
      setPersAttGruposCual(response.data.pers_att_grupos_cual);
      setVentaOnlineIdiomas(response.data.venta_online_idiomas);
      setVentaOnlineIdiomasCualIngles(response.data.venta_online_idiomas_cual_ingles);
      setVentaOnlineIdiomasCualFrances(response.data.venta_online_idiomas_cual_frances);
      setVentaOnlineIdiomasCualOtro(response.data.venta_online_idiomas_cual_otro);
      setObsrvAttTurist(response.data.obsrv_att_turist);
    };

    getUserById();
  }, [id]);

  return (
    // <div className="container form-container" style={{ padding: '32px 62px' }}>
    <div className="my-form form-style">
      <h3 className=" my-4">PRECIO ENTRADAS</h3>
      <Form onSubmit={update} >
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className='parent-label form-label'>Observaciones:</label>
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
              <div className="mt-2">
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

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Venta anticipada:</label>
            <input
              value={precioAnticipada}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioAnticipada(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio en taquilla:</label>
            <input
              value={precioTaquilla}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioTaquilla(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Tipo de Descuentos y modalidades:</label>
            <input
              value={descuentos}
              type="text"
              className="form-control"
              onChange={(e) => setDescuentos(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
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
              <div className='mt-2'>
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

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Agua:</label>
            <input
              value={precioAgua}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioAgua(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Refresco:</label>
            <input
              value={precioRefresco}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioRefresco(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Cerveza:</label>
            <input
              value={precioCerveza}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioCerveza(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Combinados Standar:</label>
            <input
              value={precioCombinado}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioCombinado(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Combinados Premium:</label>
            <input
              value={precioCombinadoPrem}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioCombinadoPrem(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Chupitos:</label>
            <input
              value={precioChupito}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioChupito(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Botellas:</label>
            <input
              value={precioBotella}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioBotella(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Mesa:</label>
            <input
              value={precioMesa}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioMesa(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Guardarropía:</label>
            <input
              value={precioGuardarropia}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioGuardarropia(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Precio Merchandising:</label>
            <input
              value={precioMarchandising}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioMarchandising(e.target.value)}
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="parent-label form-label">Otros (Precios):</label>
            <input
              value={precioOtros}
              type="text"
              className="form-control"
              onChange={(e) => setPrecioOtros(e.target.value)}
            />
          </div>
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
          <label className='parent-label form-label'>Porcentaje público turista</label>
          <Form.Select value={turistasPorc} onChange={(e) => setTuristasPorc(e.target.value)} className="form-select">
            <option value="">Selecciona una opción</option>
            <option value="0% a 10%">0% a 10%</option>
            <option value="11% a 20%">11% a 20%</option>
            <option value="21% a 30%">21% a 30%</option>
            <option value="31% a 40%">31% a 40%</option>
            <option value="41% a 50%">41% a 50%</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Capacidad atención personal en Idiomas</label>
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
            <div className="mt-2">
              <label className=' form-label'>Sí, cuales (atención personal en idiomas)</label>
              <div>
                <input type="checkbox" checked={turisticPersIdiomasCualIngles}
                  onChange={() => setTuristicPersIdiomasCualIngles(prev => !prev)} /> Inglés <br />
                <input type="checkbox" checked={turisticPersIdiomasCualFrances}
                  onChange={() => setTuristicPersIdiomasCualFrances(prev => !prev)} /> Francés <br />
                <input type="checkbox" checked={IdiomaOtroTu}
                  onChange={() => setIdiomaOtroTu(prev => !prev)} /> Otras. Cual: <br />
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
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className=' form-label'>Señalética en idiomas: </label>
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
            <div className="mt-2">
              <label className='form-label'>Sí, cuales (señalética en idiomas)</label>
              <div>
                <input type="checkbox" checked={senalIdiomasCualIngles}
                  onChange={() => setSenalIdiomasCualIngles(prev => !prev)} /> Inglés <br />
                <input type="checkbox" checked={senalIdiomasCualFrances}
                  onChange={() => setSenalIdiomasCualFrances(prev => !prev)} /> Francés <br />
                <input type="checkbox" checked={IdiomaOtroSe}
                  onChange={() => setIdiomaOtroSe(prev => !prev)} /> Otras. Cual: <br />
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
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Personal especializado atención grupos, etc. </label>
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
            <div className="mt-2">
              <label className="parent-label form-label">Sí, cuales (atención grupos)</label>
              <input
                value={persAttGruposCual}
                type="text"
                className="form-control"
                onChange={(e) => setPersAttGruposCual(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Venta online. Idiomas: </label>
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
            <div className="mt-2">
              <label className='form-label'>Sí, cuales (señalética en idiomas)</label>
              <div>
                <input type="checkbox" checked={ventaOnlineIdiomasCualIngles}
                  onChange={() => setVentaOnlineIdiomasCualIngles(prev => !prev)} /> Inglés <br />
                <input type="checkbox" checked={ventaOnlineIdiomasCualFrances}
                  onChange={() => setVentaOnlineIdiomasCualFrances(prev => !prev)} /> Francés <br />
                <input type="checkbox" checked={IdiomaOtroVe}
                  onChange={() => setIdiomaOtroVe(prev => !prev)} /> Otras. Cual: <br />
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

        <div className="mt-3">
          <button type="submit" className="btn btn-success btn-ladda">
            Registrar
          </button>
        </div>
      </Form>
      <style jsx>{`
      .form-style{
       padding: 32px 62px
      }

        @media (max-width: 480px) {
         .form-style{
       padding: 0px
      }}

        `}</style>
    </div>
  );
};

export default CompEditPrecios;
