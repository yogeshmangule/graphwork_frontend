// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import {  api } from "../servicios/api";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


// const URI = api + 'espectaculo/';

// const CompEditEspecta = ({id}) => {
//   const history = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const userId = localStorage.getItem('userId');
//   const userRole = localStorage.getItem('userRol');
//   const isAutenticado = localStorage.getItem('isAutenticado');
//   const [encuestas, setEncuesta] = useState([]);
//   const [ambMusicalNo, setAmbMusicalNo] = useState(false);
//   const [ambMusicalResidente, setAmbMusicalResidente] = useState(false);
//   const [ambMusicalPlaylist, setAmbMusicalPlaylist] = useState(false);
//   const [ambMusicalLiveset, setAmbMusicalLiveset] = useState(false);
//   const [ambMusicalGruposM, setAmbMusicalGruposM] = useState(false);
//   const [estiloMusicalComercial, setEstiloMusicalComercial] = useState(false);
//   const [estiloMusicalReggaeton, setEstiloMusicalReggaeton] = useState(false);
//   const [estiloMusicalElectro, setEstiloMusicalElectro] =useState(false);
//   const [estiloMusicalRemember, setEstiloMusicalRemember] = useState(false);
//   const [estiloMusical, setEstiloMusical] = useState('');
//   const [estiloMusicalOtro, setEstiloMusicalOtro] = useState('');
//   const [volumenMusica, setVolumenMusica] = useState('');
//   const [animacion, setAnimacion] = useState('');
//   const [visuales, setVisuales] = useState(false);
//   const [visualesSiEfecto, setVisualesSiEfecto] = useState(false);
//   const [visualesSiProyeccion, setVisualesSiProyeccion] = useState(false);
//   const [visualesSiPantalla, setVisualesSiPantalla] = useState(false);
//   const [bengalas, setBengalas] = useState(false);
//   const [bengalasSiUsoMesas, setBengalasSiUsoMesas] = useState(false);
//   const [bengalasSiUsoEquipos, setBengalasSiUsoEquipos] = useState(false);
//   const [bengalasSiUsoPublico, setBengalasSiUsoPublico] = useState(false);
//   const [ropia, setRopia] = useState(false);
//   const [ropiaPrecio, setRopiaPrecio] = useState('');
//   const [ropiaEstado, setRopiaEstado] = useState('');
//   const [observEspectaculos, setObservEspectaculos] = useState('');
//   const [marcaComercial, setSearchMarca] = useState('');
//   const [showSecondModal, setShowSecondModal] = useState(false);
//     const encuestaId = localStorage.getItem('encuestaId1');
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };

//   const handleAmbienteChange = () => {
//     setAmbMusicalNo((prev) => !prev);
//   };

//   const handleAmbResidenteChange = () => {
//     setAmbMusicalResidente((prev) => !prev);
//   };

//   const handleAmbPlayChange = () => {
//     setAmbMusicalPlaylist((prev) => !prev);
//   };

//   const handleAmbieLiveChange = () => {
//     setAmbMusicalLiveset((prev) => !prev);
//   };
//   const handleAmbieGruposChange = () => {
//     setAmbMusicalGruposM((prev) => !prev);
//   };

//   const handleVisEfectChange = () => {
//     setVisualesSiEfecto((prev) => !prev);
//   };
//   const handleVisProytChange = () => {
//     setVisualesSiProyeccion((prev) => !prev);
//   };
//   const handleVisPantatChange = () => {
//     setVisualesSiPantalla((prev) => !prev);
//   }; 
//   const handleBenMesasChange = () => {
//     setBengalasSiUsoMesas((prev) => !prev);
//   };
//   const handleBenEquiChange = () => {
//     setBengalasSiUsoEquipos((prev) => !prev);
//   };
//   const handleBenPubChange = () => {
//     setBengalasSiUsoPublico((prev) => !prev);
//   };

//   const update = async (e) => {
//     e.preventDefault();
//     try {

//       // Realiza la solicitud POST aquí con los datos de la encuesta
//       const response = await axios.put(URI + id, {
//         amb_musical_no: ambMusicalNo,
//         amb_musical_residente: ambMusicalResidente,
//         amb_musical_playlist: ambMusicalPlaylist,
//         amb_musical_liveset: ambMusicalLiveset,
//         amb_musical_gruposm: ambMusicalGruposM,
//         estilo_musical_comercial: estiloMusicalComercial,
//         estilo_musical_reggaeton: estiloMusicalReggaeton,
//         estilo_musical_electro: estiloMusicalElectro,
//         estilo_musical_remember: estiloMusicalRemember,
//         estilo_musical_otro: estiloMusicalOtro,
//         volumen_musica: volumenMusica,
//         animacion: animacion,
//         visuales: visuales,
//         visuales_si_efecto: visualesSiEfecto,
//         visuales_si_proyeccion: visualesSiProyeccion,
//         visuales_si_pantalla: visualesSiPantalla,
//         bengalas: bengalas,
//         bengalas_si_uso_mesas: bengalasSiUsoMesas,
//         bengalas_si_uso_eqipos: bengalasSiUsoEquipos,
//         bengalas_si_uso_publico: bengalasSiUsoPublico,
//         ropia: ropia,
//         ropia_precio: ropiaPrecio,
//         ropia_estado: ropiaEstado,
//         observ_espectaculos: observEspectaculos

//       });

//       window.location.reload(); 

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };

//   useEffect(() => {
//     // Incluye getBlogById en el array de dependencias
//     const getUserById = async () => {
//         const res = await axios.get(URI + id)
//         setAmbMusicalNo(res.data.amb_musical_no);
//             setAmbMusicalResidente(res.data.amb_musical_residente);
//             setAmbMusicalPlaylist(res.data.amb_musical_playlist);
//             setAmbMusicalLiveset(res.data.amb_musical_liveset);
//             setAmbMusicalGruposM(res.data.amb_musical_gruposm);
//             setEstiloMusicalComercial(res.data.estilo_musical_comercial);
//             setEstiloMusicalReggaeton(res.data.estilo_musical_reggaeton);
//             setEstiloMusical(res.data.estilo_musical_otro !== '' ? 'otro' : '');
//             setEstiloMusicalElectro(res.data.estilo_musical_electro);
//             setEstiloMusicalRemember(res.data.estilo_musical_remember);
//             setEstiloMusicalOtro(res.data.estilo_musical_otro);
//             setVolumenMusica(res.data.volumen_musica);
//             setAnimacion(res.data.animacion);
//             setVisuales(res.data.visuales);
//             setVisualesSiEfecto(res.data.visuales_si_efecto);
//             setVisualesSiProyeccion(res.data.visuales_si_proyeccion);
//             setVisualesSiPantalla(res.data.visuales_si_pantalla);
//             setBengalas(res.data.bengalas);
//             setBengalasSiUsoMesas(res.data.bengalas_si_uso_mesas);
//             setBengalasSiUsoEquipos(res.data.bengalas_si_uso_eqipos);
//             setBengalasSiUsoPublico(res.data.bengalas_si_uso_publico);
//             setRopia(res.data.ropia);
//             setRopiaPrecio(res.data.ropia_precio);
//             setRopiaEstado(res.data.ropia_estado);
//             setObservEspectaculos(res.data.observ_espectaculos);

//     }
//     getUserById();
// }, [id]);

//   return (
//     <div className='form-container'>
//         <h3>FICHA ESPECTACULOS</h3>
//         <Form onSubmit={update} className="my-form"> 
//         <div style={{ display: 'flex', justifyContent: 'space-between' , margin: '0 25px' }}>
//             <div style={{ textAlign: 'left', marginRight: '5px' }}>
//             <label className='parent-label form-label'>Ambientación musical:</label><br/><br/>
//             <input type="checkbox" checked={ambMusicalNo} 
//             onChange={handleAmbienteChange} /> NO <br/>
//             <input type="checkbox" checked={ambMusicalResidente}
//             onChange={handleAmbResidenteChange} /> Residente <br/>
//             <input type="checkbox" checked={ambMusicalPlaylist}
//             onChange={handleAmbPlayChange} /> Play List <br/>
//             <input type="checkbox" checked={ambMusicalLiveset}
//             onChange={handleAmbieLiveChange} /> Live set <br/>
//             <input type="checkbox" checked={ambMusicalGruposM}
//             onChange={handleAmbieGruposChange} /> Grupos musicales <br/>
//         </div>
//         <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Estilo musical:</label>
//               {/* Opciones de vías de evacuación */} <br/> <br/>
//               <input type="checkbox" checked={estiloMusicalComercial}
//                   onChange={() => setEstiloMusicalComercial(prev => !prev)} /> Comercial y Grandes Éxitos <br/>
//               <input type="checkbox" checked={estiloMusicalReggaeton}
//                   onChange={() => setEstiloMusicalReggaeton(prev => !prev)} /> Reggaetón y Urbana <br/>
//               <input type="checkbox" checked={estiloMusicalElectro}
//                   onChange={() => setEstiloMusicalElectro(prev => !prev)} /> Electrónica <br/>
//               <input type="checkbox" checked={estiloMusicalRemember}
//                   onChange={() => setEstiloMusicalRemember(prev => !prev)}/> Remember <br/>
//               <input type="checkbox" checked={estiloMusical}
//                   onChange={() => {
//                     setEstiloMusical((prev) => !prev);
//                     if (!estiloMusical) {
//                         setEstiloMusicalOtro(''); // Establecer evacuacion_otro en vacío si se desmarca
//                     }
//                   }}
//                   /> Otras. Cual: <br/>
//               {estiloMusical && (
//                 <div>
//                   <label>Otro:</label>
//                   <input type="text" value={estiloMusicalOtro}
//                     onChange={(e) => setEstiloMusicalOtro(e.target.value)} />
//                 </div> )}
//       </div>
//             </div>
//             <br/>
//             <div>
//             <label className='parent-label form-label'>Volumen de la música::</label>
//                 <Form.Select
//                 value={volumenMusica}
//                 onChange={(e) => setVolumenMusica(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Alto">Alto</option>
//                     <option value="Bastante alto">Bastante alto</option>
//                     <option value="Bastante bajo">Bastante bajo</option>
//                     <option value="Bajo">Bajo</option>

//             </Form.Select>
//         </div>
//         <div>
//             <label className='parent-label form-label'>Animación y espectáculos:</label>
//                 <Form.Select
//                 value={animacion}
//                 onChange={(e) => setAnimacion(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Escenario">Escenario</option>
//                     <option value="Animación Público">Animación Público</option>
//             </Form.Select>
//         </div>
//         <div>
//             <label className='parent-label form-label'>Visuales:</label>
//                 <Form.Select
//                 value={visuales ? "Si" : "No"}
//                 onChange={(e) => {setVisuales(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setVisualesSiEfecto(false);
//                     setVisualesSiPantalla(false); setVisualesSiProyeccion(false);} }}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//             {visuales && ( 

//                 <div style={{ textAlign: 'left'}}>
//                     <br/>
//                     <label className='parent-label form-label'>Visuales sí:</label><br/><br/>
//                     <input type="checkbox" checked={visualesSiEfecto} 
//                         onChange={handleVisEfectChange} /> Efectos de iluminación <br/>
//                     <input type="checkbox" checked={visualesSiProyeccion}
//                         onChange={handleVisProytChange} />  Proyección en las paredes <br/>
//                     <input type="checkbox" checked={visualesSiPantalla}
//                         onChange={handleVisPantatChange} /> Pantallas de plasma <br/>
//                 </div>


//             )} </div>

//         <div>
//             <label className='parent-label form-label'>Bengalas:</label>
//                 <Form.Select
//                 value={bengalas ? "Si" : "No"}
//                 onChange={(e) => {setBengalas(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setBengalasSiUsoEquipos(false);
//                     setBengalasSiUsoMesas(false); setBengalasSiUsoPublico(false);} }}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//             {bengalas && ( 

//                 <div style={{ textAlign: 'left'}}>
//                     <br/>   
//                     <label className='parent-label form-label'>Bengalas sí:</label><br/><br/>
//                     <input type="checkbox" checked={bengalasSiUsoMesas} 
//                         onChange={handleBenMesasChange} /> Uso en mesas <br/>
//                     <input type="checkbox" checked={bengalasSiUsoEquipos}
//                         onChange={handleBenEquiChange} />  Uso equipo animación <br/>
//                     <input type="checkbox" checked={bengalasSiUsoPublico}
//                         onChange={handleBenPubChange} /> Uso por público <br/>
//                 </div>


//             )} </div>

// <div>
//             <label className='parent-label form-label'>Ropia:</label>
//                 <Form.Select
//                 value={ropia ? "Si" : "No"}
//                 onChange={(e) => {setRopia(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setRopiaPrecio('');
//                                                  setRopiaEstado(''); } }}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//             {ropia && (
//                 <div className='mb-3'>
//                     <label className='parent-label form-label'>Precio:</label>
//                     <input value={ropiaPrecio} onChange={(e) => setRopiaPrecio(e.target.value)}
//                         type="text" className='form-control' />
//                     <label className='parent-label form-label'>Estado Ropia:</label>
//                     <Form.Select
//                     value={ropiaEstado}
//                     onChange={(e) => setRopiaEstado(e.target.value)}>
//                         <option value="">Selecciona una opción</option>
//                         <option value="Muy mal">Muy mal</option>
//                         <option value="Bastante mal">Bastante mal</option>
//                         <option value="Bastante bien">Bastante bien</option>
//                         <option value="Muy bien">Muy bien</option>

//                 </Form.Select>
//             </div>

//             )} </div>

//             <div className='mb-3'>
//             <label className='parent-label form-label'>Observaciones (Módulo Música y Espectáculos):</label>
//             <input value={observEspectaculos} onChange={(e) => setObservEspectaculos(e.target.value)}
//                 type="text" className='form-control' />
//         </div>
//         <button type='submit'className='btn btn-success btn-ladda'>
//                     Registrar
//                     </button>


//       </Form>
//         </div>
//   )
// }

// export default CompEditEspecta;



import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'espectaculo/';

const CompEditEspecta = ({ id, getEncuestas, abrirModal }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRol');
  const isAutenticado = localStorage.getItem('isAutenticado');
  const [encuestas, setEncuesta] = useState([]);
  const [ambMusicalNo, setAmbMusicalNo] = useState(false);
  const [ambMusicalResidente, setAmbMusicalResidente] = useState(false);
  const [ambMusicalPlaylist, setAmbMusicalPlaylist] = useState(false);
  const [ambMusicalLiveset, setAmbMusicalLiveset] = useState(false);
  const [ambMusicalGruposM, setAmbMusicalGruposM] = useState(false);
  const [estiloMusicalComercial, setEstiloMusicalComercial] = useState(false);
  const [estiloMusicalReggaeton, setEstiloMusicalReggaeton] = useState(false);
  const [estiloMusicalElectro, setEstiloMusicalElectro] = useState(false);
  const [estiloMusicalRemember, setEstiloMusicalRemember] = useState(false);
  const [estiloMusical, setEstiloMusical] = useState('');
  const [estiloMusicalOtro, setEstiloMusicalOtro] = useState('');
  const [volumenMusica, setVolumenMusica] = useState('');
  const [animacion, setAnimacion] = useState('');
  const [visuales, setVisuales] = useState(false);
  const [visualesSiEfecto, setVisualesSiEfecto] = useState(false);
  const [visualesSiProyeccion, setVisualesSiProyeccion] = useState(false);
  const [visualesSiPantalla, setVisualesSiPantalla] = useState(false);
  const [bengalas, setBengalas] = useState(false);
  const [bengalasSiUsoMesas, setBengalasSiUsoMesas] = useState(false);
  const [bengalasSiUsoEquipos, setBengalasSiUsoEquipos] = useState(false);
  const [bengalasSiUsoPublico, setBengalasSiUsoPublico] = useState(false);
  const [ropia, setRopia] = useState(false);
  const [ropiaPrecio, setRopiaPrecio] = useState('');
  const [ropiaEstado, setRopiaEstado] = useState('');
  const [observEspectaculos, setObservEspectaculos] = useState('');
  const [marcaComercial, setSearchMarca] = useState('');
  const [showSecondModal, setShowSecondModal] = useState(false);
  const encuestaId = localStorage.getItem('encuestaId1');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  const handleAmbienteChange = () => {
    setAmbMusicalNo((prev) => !prev);
  };

  const handleAmbResidenteChange = () => {
    setAmbMusicalResidente((prev) => !prev);
  };

  const handleAmbPlayChange = () => {
    setAmbMusicalPlaylist((prev) => !prev);
  };

  const handleAmbieLiveChange = () => {
    setAmbMusicalLiveset((prev) => !prev);
  };
  const handleAmbieGruposChange = () => {
    setAmbMusicalGruposM((prev) => !prev);
  };

  const handleVisEfectChange = () => {
    setVisualesSiEfecto((prev) => !prev);
  };
  const handleVisProytChange = () => {
    setVisualesSiProyeccion((prev) => !prev);
  };
  const handleVisPantatChange = () => {
    setVisualesSiPantalla((prev) => !prev);
  };
  const handleBenMesasChange = () => {
    setBengalasSiUsoMesas((prev) => !prev);
  };
  const handleBenEquiChange = () => {
    setBengalasSiUsoEquipos((prev) => !prev);
  };
  const handleBenPubChange = () => {
    setBengalasSiUsoPublico((prev) => !prev);
  };

  const update = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST aquí con los datos de la encuesta
      const response = await axios.put(URI + id, {
        amb_musical_no: ambMusicalNo,
        amb_musical_residente: ambMusicalResidente,
        amb_musical_playlist: ambMusicalPlaylist,
        amb_musical_liveset: ambMusicalLiveset,
        amb_musical_gruposm: ambMusicalGruposM,
        estilo_musical_comercial: estiloMusicalComercial,
        estilo_musical_reggaeton: estiloMusicalReggaeton,
        estilo_musical_electro: estiloMusicalElectro,
        estilo_musical_remember: estiloMusicalRemember,
        estilo_musical_otro: estiloMusicalOtro,
        volumen_musica: volumenMusica,
        animacion: animacion,
        visuales: visuales,
        visuales_si_efecto: visualesSiEfecto,
        visuales_si_proyeccion: visualesSiProyeccion,
        visuales_si_pantalla: visualesSiPantalla,
        bengalas: bengalas,
        bengalas_si_uso_mesas: bengalasSiUsoMesas,
        bengalas_si_uso_eqipos: bengalasSiUsoEquipos,
        bengalas_si_uso_publico: bengalasSiUsoPublico,
        ropia: ropia,
        ropia_precio: ropiaPrecio,
        ropia_estado: ropiaEstado,
        observ_espectaculos: observEspectaculos
      });

      // window.location.reload();
      getEncuestas();
      abrirModal();

    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    // Incluye getBlogById en el array de dependencias
    const getUserById = async () => {
      const res = await axios.get(URI + id);
      setAmbMusicalNo(res.data.amb_musical_no);
      setAmbMusicalResidente(res.data.amb_musical_residente);
      setAmbMusicalPlaylist(res.data.amb_musical_playlist);
      setAmbMusicalLiveset(res.data.amb_musical_liveset);
      setAmbMusicalGruposM(res.data.amb_musical_gruposm);
      setEstiloMusicalComercial(res.data.estilo_musical_comercial);
      setEstiloMusicalReggaeton(res.data.estilo_musical_reggaeton);
      setEstiloMusical(res.data.estilo_musical_otro !== '' ? 'otro' : '');
      setEstiloMusicalElectro(res.data.estilo_musical_electro);
      setEstiloMusicalRemember(res.data.estilo_musical_remember);
      setEstiloMusicalOtro(res.data.estilo_musical_otro);
      setVolumenMusica(res.data.volumen_musica);
      setAnimacion(res.data.animacion);
      setVisuales(res.data.visuales);
      setVisualesSiEfecto(res.data.visuales_si_efecto);
      setVisualesSiProyeccion(res.data.visuales_si_proyeccion);
      setVisualesSiPantalla(res.data.visuales_si_pantalla);
      setBengalas(res.data.bengalas);
      setBengalasSiUsoMesas(res.data.bengalas_si_uso_mesas);
      setBengalasSiUsoEquipos(res.data.bengalas_si_uso_eqipos);
      setBengalasSiUsoPublico(res.data.bengalas_si_uso_publico);
      setRopia(res.data.ropia);
      setRopiaPrecio(res.data.ropia_precio);
      setRopiaEstado(res.data.ropia_estado);
      setObservEspectaculos(res.data.observ_espectaculos);
    };
    getUserById();
  }, [id]);

  return (
    // <div className='form-container' style={{ padding: '32px 62px' }}>
    <div  className="my-form form-style">
      <style>{`
        .form-style{
       padding: 32px 62px
      }
                .form-container {
                    margin: 20px;
                }

                .form-group-row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .form-group {
                    flex: 1;
                  
                    margin-right: 10px;
                }

                .form-group:last-child {
                    margin-right: 0;
                }

                .checkbox-group {
                    margin-top: 10px;
                    text-align: left;
                }

                .parent-label {
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    .form-group-row {
                        flex-direction: column;
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group:last-child {
                        margin-bottom: 0;
                    }
                }

                @media (max-width: 480px) {
                    .form-container {
                        margin: 10px;
                    }
                         .form-style{
       padding: 0px
      }

                    .form-group {
                        min-width: 100%;
                    }

                    .form-group-row {
                        margin-bottom: 10px;
                    }
                }
            `}</style>
      <h3>FICHA ESPECTACULOS</h3>
      <Form onSubmit={update} >
        <div className="form-group-row">
          <div className="form-group">
            <label className='parent-label form-label'>Ambientación musical:</label><br /><br />
            <input type="checkbox" checked={ambMusicalNo}
              onChange={handleAmbienteChange} /> NO <br />
            <input type="checkbox" checked={ambMusicalResidente}
              onChange={handleAmbResidenteChange} /> Residente <br />
            <input type="checkbox" checked={ambMusicalPlaylist}
              onChange={handleAmbPlayChange} /> Play List <br />
            <input type="checkbox" checked={ambMusicalLiveset}
              onChange={handleAmbieLiveChange} /> Live set <br />
            <input type="checkbox" checked={ambMusicalGruposM}
              onChange={handleAmbieGruposChange} /> Grupos musicales <br />
          </div>
          <div className="form-group">
            <label className='parent-label form-label'>Estilo musical:</label><br /><br />
            <input type="checkbox" checked={estiloMusicalComercial}
              onChange={() => setEstiloMusicalComercial(prev => !prev)} /> Comercial y Grandes Éxitos <br />
            <input type="checkbox" checked={estiloMusicalReggaeton}
              onChange={() => setEstiloMusicalReggaeton(prev => !prev)} /> Reggaetón y Urbana <br />
            <input type="checkbox" checked={estiloMusicalElectro}
              onChange={() => setEstiloMusicalElectro(prev => !prev)} /> Electrónica <br />
            <input type="checkbox" checked={estiloMusicalRemember}
              onChange={() => setEstiloMusicalRemember(prev => !prev)} /> Remember <br />
            <input type="checkbox" checked={estiloMusical}
              onChange={() => {
                setEstiloMusical((prev) => !prev);
                if (!estiloMusical) {
                  setEstiloMusicalOtro(''); // Establecer evacuacion_otro en vacío si se desmarca
                }
              }}
            /> Otras. Cual: <br />
            {estiloMusical && (
              <div>
                <label>Otro:</label>
                <input type="text" value={estiloMusicalOtro}
                  onChange={(e) => setEstiloMusicalOtro(e.target.value)} />
              </div>)}
          </div>
        </div>
        <br />
        <div>
          <label className='parent-label form-label'>Volumen de la música:</label>
          <Form.Select
            value={volumenMusica}
            onChange={(e) => setVolumenMusica(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Alto">Alto</option>
            <option value="Bastante alto">Bastante alto</option>
            <option value="Bastante bajo">Bastante bajo</option>
            <option value="Bajo">Bajo</option>

          </Form.Select>
        </div>
        <div>
          <label className='parent-label form-label'>Animación y espectáculos:</label>
          <Form.Select
            value={animacion}
            onChange={(e) => setAnimacion(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Escenario">Escenario</option>
            <option value="Animación Público">Animación Público</option>
          </Form.Select>
        </div>
        <div>
          <label className='parent-label form-label'>Visuales:</label>
          <Form.Select
            value={visuales ? "Si" : "No"}
            onChange={(e) => {
              setVisuales(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setVisualesSiEfecto(false);
                setVisualesSiPantalla(false);
                setVisualesSiProyeccion(false);
              }
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>

          </Form.Select>
          {visuales && (

            <div className="checkbox-group">
              <br />
              <label className='parent-label form-label'>Visuales sí:</label><br /><br />
              <input type="checkbox" checked={visualesSiEfecto}
                onChange={handleVisEfectChange} /> Efectos de iluminación <br />
              <input type="checkbox" checked={visualesSiProyeccion}
                onChange={handleVisProytChange} />  Proyección en las paredes <br />
              <input type="checkbox" checked={visualesSiPantalla}
                onChange={handleVisPantatChange} /> Pantallas de plasma <br />
            </div>
          )} </div>

        <div>
          <label className='parent-label form-label'>Bengalas:</label>
          <Form.Select
            value={bengalas ? "Si" : "No"}
            onChange={(e) => {
              setBengalas(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setBengalasSiUsoEquipos(false);
                setBengalasSiUsoMesas(false);
                setBengalasSiUsoPublico(false);
              }
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>

          </Form.Select>
          {bengalas && (

            <div className="checkbox-group">
              <br />
              <label className='parent-label form-label'>Bengalas sí:</label><br /><br />
              <input type="checkbox" checked={bengalasSiUsoMesas}
                onChange={handleBenMesasChange} /> Uso en mesas <br />
              <input type="checkbox" checked={bengalasSiUsoEquipos}
                onChange={handleBenEquiChange} />  Uso equipo animación <br />
              <input type="checkbox" checked={bengalasSiUsoPublico}
                onChange={handleBenPubChange} /> Uso por público <br />
            </div>
          )} </div>

        <div>
          <label className='parent-label form-label'>Ropia:</label>
          <Form.Select
            value={ropia ? "Si" : "No"}
            onChange={(e) => {
              setRopia(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") {
                setRopiaPrecio('');
                setRopiaEstado('');
              }
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>

          </Form.Select>
          {ropia && (
            <div className='mb-3'>
              <label className='parent-label form-label'>Precio:</label>
              <input value={ropiaPrecio} onChange={(e) => setRopiaPrecio(e.target.value)}
                type="text" className='form-control' />
              <label className='parent-label form-label'>Estado Ropia:</label>
              <Form.Select
                value={ropiaEstado}
                onChange={(e) => setRopiaEstado(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Muy mal">Muy mal</option>
                <option value="Bastante mal">Bastante mal</option>
                <option value="Bastante bien">Bastante bien</option>
                <option value="Muy bien">Muy bien</option>

              </Form.Select>
            </div>

          )} </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo Música y Espectáculos):</label>
          <input value={observEspectaculos} onChange={(e) => setObservEspectaculos(e.target.value)}
            type="text" className='form-control' />
        </div>
        <button type='submit' className='btn btn-success btn-ladda'>
          Registrar
        </button>

      </Form>
    </div>
  )
}

export default CompEditEspecta;
