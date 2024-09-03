// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { api } from "../servicios/api";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import ShowModalEspectaculos from '../enc_espectaculos/ShowCreateEspectaculo';


// const URI = api + 'servicio/'

// const CompCreateServicio = () => {

//     const [parent, setParent] = useState('')
//     const [marca_bebidas_premium, setMarcaBebidasPremium] = useState(false);
//     const [marca_bebidas_standar, setMarcaBebidasStandar] = useState(false);
//     const [marca_bebidas_blancas, setMarcaBebidasBlancas] = useState(false);
//     const [marca_bebidas_otras, setMarcaBebidasOtras] = useState('');
//     const [vajilla_tubo_extra, setVajillaTuboExtra] = useState(false);
//     const [vajilla_tubo_standar, setVajillaTuboStandar] = useState(false);
//     const [vajilla_copa_balon, setVajillaCopaBalon] = useState(false);
//     const [vajilla_sidra, setVajillaSidra] = useState(false);
//     const [vajilla_plastico, setVajillaPlastico] = useState(false);
//     const [vajilla_otras, setVajillaOtras] = useState('');
//     const [marcaBebidasO, setMarcaBebidasO] = useState('');
//     const [vajillaO, setVajillaO] = useState('');
//     const [hielo, setHielo] = useState('');
//     const [refresco, setRefresco] = useState('');
//     const [amabilidad, setAmabilidad] = useState('');
//     const [esperaBarra, setEsperaBarra] = useState('');
//     const [dispAlimentos, setDispAlimentos] = useState('');
//     const [mesasReservadas, setMesasReservadas] = useState(false);
//     const [mesasNum, setMesasNum] = useState('');
//     const [mesasPercent, setMesasPercent] = useState('');
//     const [ventaBotellas, setVentaBotellas] = useState(false);
//     const [shisas, setShisas] = useState(false);
//     const [observServicio, setObservServicio] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [hasErrors, setHasErrors] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const userId = localStorage.getItem('userIdEncuesta');
//     const encuestaId = localStorage.getItem('encuestaId1');
//     const [showSecondModal, setShowSecondModal] = useState(false);
//     const handleModalClose = () => {
//         setIsModalOpen(false);
//     };

//     const handleShowSecondModal = () => {
//         setShowSecondModal(true);
//         setIsModalOpen(false);
//     };

//     const clearFields = () => {
//         setObservServicio('');
//     };
//     const handleFirstButtonClick = async (e) => {
//         try {
//             // Supongamos que store() devuelve una promesa con la respuesta del servidor
//             const isSuccess = await store(e);
//             if (isSuccess) {
//                 setIsModalOpen(true);
//             } else { }
//         } catch (error) {
//             console.error('Error al ejecutar store:', error);
//             // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
//         }
//     };


//     const navigate = useNavigate()

//     //procedimiento guardar
//     const store = async (e) => {
//         e.preventDefault()
//         const response = await axios.post(URI, {
//             marca_bebidas_premium: marca_bebidas_premium,
//             marca_bebidas_standar: marca_bebidas_standar,
//             marca_bebidas_blancas: marca_bebidas_blancas,
//             marca_bebidas_otras: marca_bebidas_otras,
//             vajilla_tubo_extra: vajilla_tubo_extra,
//             vajilla_tubo_standar: vajilla_tubo_standar,
//             vajilla_copa_balon: vajilla_copa_balon,
//             vajilla_sidra: vajilla_sidra,
//             vajilla_plastico: vajilla_plastico,
//             vajilla_otras: vajilla_otras,
//             hielo: hielo,
//             refresco: refresco,
//             amabilidad: amabilidad,
//             esperabarra: esperaBarra,
//             disp_alimentos: dispAlimentos,
//             mesas_reservados: mesasReservadas,
//             mesas_num: mesasNum,
//             mesas_percent: mesasPercent,
//             venta_botellas: ventaBotellas,
//             shisas: shisas,
//             observ_servicio: observServicio,
//             encuesta_id: encuestaId,
//             user_id: userId
//         })
//         // clearFields(); // Limpia los campos después de enviar el formulario
//         if (response.status === 201) {
//             // Operación exitosa, devuelve true
//             return true;
//         } else {
//             // Operación fallida, devuelve false
//             return false;
//         }
//     }

//     return (
//         <div className='form-container'>

//             <h3>FICHA SERVICIO</h3>
//             <Form onSubmit={store} className="my-form">
//                 <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 25px' }}>
//                     <div style={{ textAlign: 'left', marginRight: '5px' }}>
//                         <label className='parent-label form-label'>Marcas bebidas:</label>
//                         {/* Opciones de vías de evacuación */}<br /><br />
//                         <input type="checkbox" checked={marca_bebidas_premium}
//                             onChange={() => setMarcaBebidasPremium(prev => !prev)} /> Premium<br />
//                         <input type="checkbox" checked={marca_bebidas_standar}
//                             onChange={() => setMarcaBebidasStandar(prev => !prev)} /> Marcas estándar<br />
//                         <input type="checkbox" checked={marca_bebidas_blancas}
//                             onChange={() => setMarcaBebidasBlancas(prev => !prev)} /> Marcas blancas<br />
//                         <input type="checkbox" checked={marcaBebidasO}
//                             onChange={() => setMarcaBebidasO(prev => !prev)} /> Otras<br />
//                         {marcaBebidasO && (
//                             <div>
//                                 <input type="text" value={marca_bebidas_otras} onChange={(e) => setMarcaBebidasOtras(e.target.value)} />
//                             </div>)}
//                     </div>

//                     <div style={{ textAlign: 'left' }}>
//                         <label className='parent-label form-label'>Vajilla:</label>
//                         {/* Opciones de vías de evacuación */}<br /><br />
//                         <input type="checkbox" checked={vajilla_tubo_extra}
//                             onChange={() => setVajillaTuboExtra(prev => !prev)} /> Vaso tubo extra<br />
//                         <input type="checkbox" checked={vajilla_tubo_standar}
//                             onChange={() => setVajillaTuboStandar(prev => !prev)} />Vaso tubo estándar<br />
//                         <input type="checkbox" checked={vajilla_copa_balon}
//                             onChange={() => setVajillaCopaBalon(prev => !prev)} />Copa balón<br />
//                         <input type="checkbox" checked={vajilla_sidra}
//                             onChange={() => setVajillaSidra(prev => !prev)} />Vaso sidra<br />
//                         <input type="checkbox" checked={vajilla_plastico}
//                             onChange={() => setVajillaPlastico(prev => !prev)} />Vasos plástico<br />
//                         <input type="checkbox" checked={vajillaO}
//                             onChange={() => setVajillaO(prev => !prev)} /> Otras<br />
//                         {vajillaO && (
//                             <div>
//                                 <input type="text" value={vajilla_otras} onChange={(e) => setVajillaOtras(e.target.value)} />
//                             </div>)}
//                     </div>
//                 </div>

//                 <div>
//                     <label className='parent-label form-label'>Calidad hielo:</label>
//                     <Form.Select
//                         value={hielo}
//                         onChange={(e) => setHielo(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Macizo grande">Macizo grande</option>
//                         <option value="Macizo pequeño">Macizo pequeño</option>
//                         <option value="Hueco">Hueco</option>

//                     </Form.Select>
//                 </div>

//                 <div>
//                     <label className='parent-label form-label'>Uso de refresco:</label>
//                     <Form.Select
//                         value={refresco}
//                         onChange={(e) => setRefresco(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Botellín vidrio">Botellín vidrio</option>
//                         <option value="Pistola">Pistola</option>
//                         <option value="Plástico">Plástico</option>
//                         <option value="Lata">Lata</option>
//                     </Form.Select>
//                 </div>

//                 <div>
//                     <label className='parent-label form-label'>Amabilidad Personal:</label>
//                     <Form.Select
//                         value={amabilidad}
//                         onChange={(e) => setAmabilidad(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Muy mala">Muy mala</option>
//                         <option value="Bastante mala">Bastante mala</option>
//                         <option value="Bastante buena">Bastante buena</option>
//                         <option value="Muy buena">Muy buena</option>
//                     </Form.Select>
//                 </div>

//                 <div>
//                     <label className='parent-label form-label'>Tiempo de espera en barra:</label>
//                     <Form.Select
//                         value={esperaBarra}
//                         onChange={(e) => setEsperaBarra(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Inmediata">Inmediata</option>
//                         <option value="De 1 a 3 min.">De 1 a 3 min.</option>
//                         <option value="De 3 a 5 min.">De 3 a 5 min.</option>
//                         <option value="Más de 5 min.">Más de 5 min.</option>
//                         <option value="Barra colapsada">Barra colapsada</option>
//                     </Form.Select>
//                 </div>

//                 <div>
//                     <label className='parent-label form-label'>Dispensación de alimentos:</label>
//                     <Form.Select
//                         value={dispAlimentos}
//                         onChange={(e) => setDispAlimentos(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="No">No</option>
//                         <option value="Vending">Vending</option>
//                         <option value="Hamburguesía">Hamburguesía</option>
//                         <option value="Servicio de restauración">Servicio de restauración</option>
//                         <option value="Desgustación gratuita">Desgustación gratuita</option>
//                     </Form.Select>
//                 </div>
//                 <div>
//                     <label className='parent-label form-label'>Mesas y reservados:</label>
//                     <Form.Select
//                         value={mesasReservadas ? "Si" : "No"}
//                         onChange={(e) => setMesasReservadas(e.target.value === "Si" ? true : false)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Si">Si</option>
//                         <option value="No">No</option>
//                     </Form.Select>
//                     {mesasReservadas && (
//                         <div className='mb-3'>
//                             <label className='parent-label form-label'>Numero de mesas:</label>
//                             <input value={mesasNum} onChange={(e) => setMesasNum(e.target.value)}
//                                 type="text" className='form-control' />
//                             <label className='parent-label form-label'>% superficie local:</label>
//                             <input value={mesasPercent} onChange={(e) => setMesasPercent(e.target.value)}
//                                 type="text" className='form-control' />
//                             <label className='parent-label form-label'>Venta por botellas:</label>
//                             <Form.Select value={ventaBotellas ? "Si" : "No"}
//                                 onChange={(e) => setVentaBotellas(e.target.value === "Si" ? true : false)}>
//                                 <option value="">Selecciona una opción</option>
//                                 <option value="Si">Si</option>
//                                 <option value="No">No</option>
//                             </Form.Select>
//                             <label className='parent-label form-label'>Shishas:</label>
//                             <Form.Select value={shisas ? "Si" : "No"}
//                                 onChange={(e) => setShisas(e.target.value === "Si" ? true : false)}>
//                                 <option value="">Selecciona una opción</option>
//                                 <option value="Si">Si</option>
//                                 <option value="No">No</option>
//                             </Form.Select>
//                         </div>)}
//                 </div>
//                 <div className='mb-3'>
//                     <label className='parent-label form-label'>Observaciones (Módulo Prestación Servicios):</label>
//                     <input
//                         value={observServicio}
//                         onChange={(e) => setObservServicio(e.target.value)}
//                         type="text"
//                         className='form-control'
//                     />
//                 </div>
//                 {!isModalOpen && (
//                     <div className="mt-3">
//                         <button
//                             className='btn btn-success btn-ladda'
//                             onClick={(e) => handleFirstButtonClick(e)}
//                         >
//                             Registrar Datos
//                         </button>
//                     </div>
//                 )}


//                 {isModalOpen && (
//                     <div className="mt-3">
//                         <ShowModalEspectaculos
//                             onClick={handleModalClose}
//                             isOpen={isModalOpen}
//                             onClose={handleModalClose}
//                         />
//                     </div>
//                 )}


//                 <div className="mt-3">

//                 </div>
//             </Form>
//         </div>
//     )
// }

// export default CompCreateServicio


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import ShowModalEspectaculos from '../enc_espectaculos/ShowCreateEspectaculo';

const URI = api + 'servicio/';

const CompCreateServicio = ({ setCreateEspectaculoOpen, openCreateEspectaculoModel }) => {
    const [parent, setParent] = useState('');
    const [marca_bebidas_premium, setMarcaBebidasPremium] = useState(false);
    const [marca_bebidas_standar, setMarcaBebidasStandar] = useState(false);
    const [marca_bebidas_blancas, setMarcaBebidasBlancas] = useState(false);
    const [marca_bebidas_otras, setMarcaBebidasOtras] = useState('');
    const [vajilla_tubo_extra, setVajillaTuboExtra] = useState(false);
    const [vajilla_tubo_standar, setVajillaTuboStandar] = useState(false);
    const [vajilla_copa_balon, setVajillaCopaBalon] = useState(false);
    const [vajilla_sidra, setVajillaSidra] = useState(false);
    const [vajilla_plastico, setVajillaPlastico] = useState(false);
    const [vajilla_otras, setVajillaOtras] = useState('');
    const [marcaBebidasO, setMarcaBebidasO] = useState('');
    const [vajillaO, setVajillaO] = useState('');
    const [hielo, setHielo] = useState('');
    const [refresco, setRefresco] = useState('');
    const [amabilidad, setAmabilidad] = useState('');
    const [esperaBarra, setEsperaBarra] = useState('');
    const [dispAlimentos, setDispAlimentos] = useState('');
    const [mesasReservadas, setMesasReservadas] = useState(false);
    const [mesasNum, setMesasNum] = useState('');
    const [mesasPercent, setMesasPercent] = useState('');
    const [ventaBotellas, setVentaBotellas] = useState(false);
    const [shisas, setShisas] = useState(false);
    const [observServicio, setObservServicio] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    const [emailError, setEmailError] = useState('');
    const userId = localStorage.getItem('userIdEncuesta');
    const encuestaId = localStorage.getItem('encuestaId1');
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleShowSecondModal = () => {
        setShowSecondModal(true);
        setIsModalOpen(false);
    };

    const clearFields = () => {
        setObservServicio('');
    };

    const handleFirstButtonClick = async (e) => {
        try {
            const isSuccess = await store(e);
            if (isSuccess) {
                // setIsModalOpen(true);
                setCreateEspectaculoOpen(false);
                openCreateEspectaculoModel()
            }
        } catch (error) {
            console.error('Error al ejecutar store:', error);
        }
    };

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        const response = await axios.post(URI, {
            marca_bebidas_premium,
            marca_bebidas_standar,
            marca_bebidas_blancas,
            marca_bebidas_otras,
            vajilla_tubo_extra,
            vajilla_tubo_standar,
            vajilla_copa_balon,
            vajilla_sidra,
            vajilla_plastico,
            vajilla_otras,
            hielo,
            refresco,
            amabilidad,
            esperabarra: esperaBarra,
            disp_alimentos: dispAlimentos,
            mesas_reservados: mesasReservadas,
            mesas_num: mesasNum,
            mesas_percent: mesasPercent,
            venta_botellas: ventaBotellas,
            shisas,
            observ_servicio: observServicio,
            encuesta_id: encuestaId,
            user_id: userId,
        });
        if (response.status === 201) {
            return true;
        } else {
            return false;
        }
    };

    return (
        // <div className='container form-container mt-4'>
        <div style={{ padding: '32px 62px' }} className="my-form">
            <h3 className="mb-4">FICHA SERVICIO</h3>
            <Form onSubmit={store} >
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className=' form-label'>Marcas bebidas:</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={marca_bebidas_premium}
                                onChange={() => setMarcaBebidasPremium(prev => !prev)} />
                            <label className="form-check-label">Premium</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={marca_bebidas_standar}
                                onChange={() => setMarcaBebidasStandar(prev => !prev)} />
                            <label className="form-check-label">Marcas estándar</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={marca_bebidas_blancas}
                                onChange={() => setMarcaBebidasBlancas(prev => !prev)} />
                            <label className="form-check-label">Marcas blancas</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={marcaBebidasO}
                                onChange={() => setMarcaBebidasO(prev => !prev)} />
                            <label className="form-check-label">Otras</label>
                        </div>
                        {marcaBebidasO && (
                            <div className="mt-2">
                                <input type="text" value={marca_bebidas_otras} onChange={(e) => setMarcaBebidasOtras(e.target.value)} className="form-control" />
                            </div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label className=' form-label'>Vajilla:</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajilla_tubo_extra}
                                onChange={() => setVajillaTuboExtra(prev => !prev)} />
                            <label className="form-check-label">Vaso tubo extra</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajilla_tubo_standar}
                                onChange={() => setVajillaTuboStandar(prev => !prev)} />
                            <label className="form-check-label">Vaso tubo estándar</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajilla_copa_balon}
                                onChange={() => setVajillaCopaBalon(prev => !prev)} />
                            <label className="form-check-label">Copa balón</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajilla_sidra}
                                onChange={() => setVajillaSidra(prev => !prev)} />
                            <label className="form-check-label">Vaso sidra</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajilla_plastico}
                                onChange={() => setVajillaPlastico(prev => !prev)} />
                            <label className="form-check-label">Vasos plástico</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" checked={vajillaO}
                                onChange={() => setVajillaO(prev => !prev)} />
                            <label className="form-check-label">Otras</label>
                        </div>
                        {vajillaO && (
                            <div className="mt-2">
                                <input type="text" value={vajilla_otras} onChange={(e) => setVajillaOtras(e.target.value)} className="form-control" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Calidad hielo:</label>
                    <Form.Select value={hielo} onChange={(e) => setHielo(e.target.value)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="Macizo grande">Macizo grande</option>
                        <option value="Macizo pequeño">Macizo pequeño</option>
                        <option value="Hueco">Hueco</option>
                    </Form.Select>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Uso de refresco:</label>
                    <Form.Select value={refresco} onChange={(e) => setRefresco(e.target.value)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="Botellín vidrio">Botellín vidrio</option>
                        <option value="Pistola">Pistola</option>
                        <option value="Plástico">Plástico</option>
                        <option value="Lata">Lata</option>
                    </Form.Select>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Amabilidad Personal:</label>
                    <Form.Select value={amabilidad} onChange={(e) => setAmabilidad(e.target.value)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="Muy mala">Muy mala</option>
                        <option value="Bastante mala">Bastante mala</option>
                        <option value="Bastante buena">Bastante buena</option>
                        <option value="Muy buena">Muy buena</option>
                    </Form.Select>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Tiempo de espera en barra:</label>
                    <Form.Select value={esperaBarra} onChange={(e) => setEsperaBarra(e.target.value)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="Inmediata">Inmediata</option>
                        <option value="De 1 a 3 min.">De 1 a 3 min.</option>
                        <option value="De 3 a 5 min.">De 3 a 5 min.</option>
                        <option value="Más de 5 min.">Más de 5 min.</option>
                        <option value="Barra colapsada">Barra colapsada</option>
                    </Form.Select>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Dispensación de alimentos:</label>
                    <Form.Select value={dispAlimentos} onChange={(e) => setDispAlimentos(e.target.value)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="No">No</option>
                        <option value="Vending">Vending</option>
                        <option value="Hamburguesía">Hamburguesía</option>
                        <option value="Servicio de restauración">Servicio de restauración</option>
                        <option value="Desgustación gratuita">Desgustación gratuita</option>
                    </Form.Select>
                </div>

                <div className="mb-3">
                    <label className=' form-label'>Mesas y reservados:</label>
                    <Form.Select value={mesasReservadas ? "Si" : "No"} onChange={(e) => setMesasReservadas(e.target.value === "Si" ? true : false)} className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Form.Select>
                    {mesasReservadas && (
                        <div className="mt-3">
                            <label className=' form-label'>Numero de mesas:</label>
                            <input value={mesasNum} onChange={(e) => setMesasNum(e.target.value)} type="text" className='form-control' />
                            <label className=' form-label'>% superficie local:</label>
                            <input value={mesasPercent} onChange={(e) => setMesasPercent(e.target.value)} type="text" className='form-control' />
                            <label className=' form-label'>Venta por botellas:</label>
                            <Form.Select value={ventaBotellas ? "Si" : "No"} onChange={(e) => setVentaBotellas(e.target.value === "Si" ? true : false)} className="form-control">
                                <option value="">Selecciona una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Form.Select>
                            <label className=' form-label'>Shishas:</label>
                            <Form.Select value={shisas ? "Si" : "No"} onChange={(e) => setShisas(e.target.value === "Si" ? true : false)} className="form-control">
                                <option value="">Selecciona una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </div>
                    )}
                </div>

                <div className='mb-3'>
                    <label className=' form-label'>Observaciones (Módulo Prestación Servicios):</label>
                    <input value={observServicio} onChange={(e) => setObservServicio(e.target.value)} type="text" className='form-control' />
                </div>

                {!isModalOpen && (
                    <div className="mt-3 ">
                        <button className='btn btn-success btn-ladda' onClick={(e) => handleFirstButtonClick(e)}>
                            Registrar Datos
                        </button>
                    </div>
                )}

                {isModalOpen && (
                    <div className="mt-3">
                        <ShowModalEspectaculos onClick={handleModalClose} isOpen={isModalOpen} onClose={handleModalClose} />
                    </div>
                )}
            </Form>
        </div>
    );
};

export default CompCreateServicio;
