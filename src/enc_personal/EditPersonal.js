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
// //import ShowModalPersonal from '../enc_personal/ShowCreatePersonal';


// const URI = api+'personal/'
// const CompEditEncuesta = ({id}) => {
//     const [encuestas, setEncuesta] = useState(new Date());
//     const [ambMusicalNo, setAmbMusicalNo] = useState(false);
//     const [persSeguridad, setPersSeguridad] = useState(0);
//     const [persSegImagen, setPersSegImagen] = useState('');
//     const [persSegActitud, setPersSegActitud] = useState('');
//     const [persSegIdiomaIngles, setPersSegIdiomaIngles] = useState(false);
//     const [persSegIdiomaFrances, setPersSegIdiomaFrances] = useState(false);
//     const [persSegIdiomaOtra, setPersSegIdiomaOtra] = useState('');
//     const [persSegIdiomaO, setPersSegIdiomaO] = useState('');
//     const [persBarra, setPersBarra] = useState(0);
//     const [persBarraImagen, setPersBarraImagen] = useState('');
//     const [persBarraActitud, setPersBarraActitud] = useState('');
//     const [persBarraIdiomaIngles, setPersBarraIdiomaIngles] = useState(false);
//     const [persBarraIdiomaFrances, setPersBarraIdiomaFrances] = useState(false);
//     const [persBarraIdiomaOtro, setPersBarraIdiomaOtro] = useState('');
//     const [persBarraIdiomaO, setPersBarraIdiomaO] = useState('');
//     const [persCocteleria, setPersCocteleria] = useState(false);
//     const [observPersonal, setObservPersonal] = useState('');
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
//         setObservPersonal('');

//       };

//     const navigate = useNavigate()    



//       // Luego, en tu componente, puedes llamar a esta función cuando necesites manejar la edición.


//     //procedimiento guardar
//     const update = async (e) => {
//         e.preventDefault();
//         setHasErrors(false);
//         try {

//           // Realiza la solicitud POST aquí con los datos de la encuesta
//           const response = await axios.put(URI + id, {
//             pers_seguridad: persSeguridad,
//             pers_seg_imagen: persSegImagen,
//             pers_seg_actitud: persSegActitud,
//             pers_seg_idioma_ingles: persSegIdiomaIngles,
//             pers_seg_idioma_frances: persSegIdiomaFrances,
//             pers_seg_idioma_otra: persSegIdiomaOtra,
//             pers_barra: persBarra,
//             pers_barra_imagen: persBarraImagen,
//             pers_barra_actitud: persBarraActitud,
//             pers_barra_idioma_ingles: persBarraIdiomaIngles,
//             pers_barra_idioma_frances: persBarraIdiomaFrances,
//             pers_barra_idioma_otro: persBarraIdiomaOtro,
//             pers_cocteleria: persCocteleria,
//             observ_personal: observPersonal
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
//           const res = await axios.get(URI + id)

//           setPersSeguridad(res.data.pers_seguridad)
//           setPersSegImagen(res.data.pers_seg_imagen)
//           setPersSegActitud(res.data.pers_seg_actitud)
//           setPersSegIdiomaIngles(res.data.pers_seg_idioma_ingles)
//           setPersSegIdiomaFrances(res.data.pers_seg_idioma_frances)
//           setPersSegIdiomaOtra(res.data.pers_seg_idioma_otra)  
//           setPersSegIdiomaO(res.data.pers_seg_idioma_otra !== '' ? 'otro' : '');
//           setPersBarra(res.data.pers_barra)
//           setPersBarraImagen(res.data.pers_barra_imagen)
//           setPersBarraActitud(res.data.pers_barra_actitud)
//           setPersBarraIdiomaIngles(res.data.pers_barra_idioma_ingles)
//           setPersBarraIdiomaFrances(res.data.pers_barra_idioma_frances)
//           setPersBarraIdiomaOtro(res.data.pers_barra_idioma_otro)
//           setPersBarraIdiomaO(res.data.pers_barra_idioma_otro !== '' ? 'otro' : '');
//           setPersCocteleria(res.data.pers_cocteleria)
//           setObservPersonal(res.data.observ_personal) 
//         }
//         getUserById();
//     }, [id]);



//     return (
//         <div className='form-container'>

//            <h3>FICHA PERSONAL</h3>
//            <Form onSubmit={update} className="my-form"> 

//            <div className='mb-3'>
//                 <label className='parent-label form-label'>Número trabajadores de Seguridad y control accesos:</label>
//                 <input value={persSeguridad} onChange={(e) => setPersSeguridad(e.target.value)}
//                 type="text" className='form-control' />
//             </div>

//             <div>
//             <label className='parent-label form-label'>Imagen: (Seguridad y control accesos:)</label>
//                 <Form.Select
//                 value={persSegImagen}
//                 onChange={(e) => setPersSegImagen(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Clásica">Clásica</option>
//                     <option value="Casual">Casual</option>
//                     <option value="Moderna">Moderna</option>
//                     <option value="Descuidada">Descuidada</option>

//             </Form.Select>
//         </div>
//         <div>
//             <label className='parent-label form-label'>Actitud: (Seguridad y control accesos:)</label>
//                 <Form.Select
//                 value={persSegActitud}
//                 onChange={(e) => setPersSegActitud(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy amable">Muy amable</option>
//                     <option value="Bastante Amable">Bastante Amable</option>
//                     <option value="Bastante antipática">Bastante antipática</option>
//                     <option value="Muy antipática">Muy antipática</option>

//             </Form.Select>
//         </div>

//            <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Idiomas: (Seguridad y control accesos:)</label>
//               {/* Opciones de vías de evacuación */} <br/>
//               <input type="checkbox" checked={persSegIdiomaIngles}
//                   onChange={() => setPersSegIdiomaIngles(prev => !prev)} /> Inglés <br/>
//               <input type="checkbox" checked={persSegIdiomaFrances}
//                   onChange={() => setPersSegIdiomaFrances(prev => !prev)} /> Fránces <br/>
//               <input type="checkbox" checked={persSegIdiomaO}
//                   onChange={() => {
//                     setPersSegIdiomaO(prev => !prev);
//                     if (!persSegIdiomaO) {
//                         setPersSegIdiomaOtra(''); 
//                     }
//                   }}
//                   /> Otras <br/>
//               {persSegIdiomaO && (
//                 <div>
//                   <label>Otro(Especifique):</label>
//                   <input type="text" value={persSegIdiomaOtra}
//                     onChange={(e) => setPersSegIdiomaOtra(e.target.value)} />
//                 </div> )}
//            </div>

//            <div className='mb-3'>
//                 <label className='parent-label form-label'>Número trabajadores Barras y office:</label>
//                 <input
//                 value={persBarra}
//                 onChange={(e) => setPersBarra(e.target.value)}
//                 type="text"
//                 className='form-control' />
//             </div>


//             <div>
//             <label className='parent-label form-label'>Imagen: (Barras y office:)</label>
//                 <Form.Select
//                 value={persBarraImagen}
//                 onChange={(e) => setPersBarraImagen(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Clásica">Clásica</option>
//                     <option value="Casual">Casual</option>
//                     <option value="Moderna">Moderna</option>
//                     <option value="Descuidada">Descuidada</option>

//             </Form.Select>
//         </div>
//         <div>
//             <label className='parent-label form-label'>Actitud: (Barras y office:)</label>
//                 <Form.Select
//                 value={persBarraActitud}
//                 onChange={(e) => setPersBarraActitud(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy amable">Muy amable</option>
//                     <option value="Bastante Amable">Bastante Amable</option>
//                     <option value="Bastante antipática">Bastante antipática</option>
//                     <option value="Muy antipática">Muy antipática</option>

//             </Form.Select>
//         </div>

//            <div style={{ textAlign: 'left' }}>
//               <label className='parent-label form-label'>Idiomas: (Barras y office:)</label>
//               {/* Opciones de vías de evacuación */} <br/>
//               <input type="checkbox" checked={persBarraIdiomaIngles}
//                   onChange={() => setPersBarraIdiomaIngles(prev => !prev)} /> Inglés <br/>
//               <input type="checkbox" checked={persBarraIdiomaFrances}
//                   onChange={() => setPersBarraIdiomaFrances(prev => !prev)} /> Fránces <br/>
//               <input type="checkbox" checked={persBarraIdiomaO}
//                   onChange={() => {
//                     setPersBarraIdiomaO(prev => !prev);
//                     if (!persBarraIdiomaO) {
//                         setPersBarraIdiomaOtro(''); 
//                     }
//                   }}
//                   /> Otras <br/>
//               {persBarraIdiomaO && (
//                 <div>
//                   <label>Otro(Especifique):</label>
//                   <input type="text" value={persBarraIdiomaOtro}
//                     onChange={(e) => setPersBarraIdiomaOtro(e.target.value)} />
//                 </div> )}
//            </div>
//            <div>
//             <label className='parent-label form-label'>Coctelería:</label>
//                 <Form.Select
//                 value={persCocteleria ? "Si" : "No"}
//                 onChange={(e) => setPersCocteleria(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>
//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo Personal):</label>
//                 <input
//                 value={observPersonal}
//                 onChange={(e) => setObservPersonal(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>
//                 <div className="mt-3"> {/* Add margin-top for spacing */}

//                 </div>
//                 <button type='submit'className='btn btn-success btn-ladda'>
//                     Modificar 
//                     </button>
//            </Form>
//         </div>
//     )
// }

// export default CompEditEncuesta



import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

const URI = api + 'personal/';

const CompEditEncuesta = ({ id, getEncuestas, abrirModal }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [persSeguridad, setPersSeguridad] = useState(0);
  const [persSegImagen, setPersSegImagen] = useState('');
  const [persSegActitud, setPersSegActitud] = useState('');
  const [persSegIdiomaIngles, setPersSegIdiomaIngles] = useState(false);
  const [persSegIdiomaFrances, setPersSegIdiomaFrances] = useState(false);
  const [persSegIdiomaOtra, setPersSegIdiomaOtra] = useState('');
  const [persSegIdiomaO, setPersSegIdiomaO] = useState('');
  const [persBarra, setPersBarra] = useState(0);
  const [persBarraImagen, setPersBarraImagen] = useState('');
  const [persBarraActitud, setPersBarraActitud] = useState('');
  const [persBarraIdiomaIngles, setPersBarraIdiomaIngles] = useState(false);
  const [persBarraIdiomaFrances, setPersBarraIdiomaFrances] = useState(false);
  const [persBarraIdiomaOtro, setPersBarraIdiomaOtro] = useState('');
  const [persBarraIdiomaO, setPersBarraIdiomaO] = useState('');
  const [persCocteleria, setPersCocteleria] = useState(false);
  const [observPersonal, setObservPersonal] = useState('');
  const navigate = useNavigate();

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(URI + id, {
        pers_seguridad: persSeguridad,
        pers_seg_imagen: persSegImagen,
        pers_seg_actitud: persSegActitud,
        pers_seg_idioma_ingles: persSegIdiomaIngles,
        pers_seg_idioma_frances: persSegIdiomaFrances,
        pers_seg_idioma_otra: persSegIdiomaOtra,
        pers_barra: persBarra,
        pers_barra_imagen: persBarraImagen,
        pers_barra_actitud: persBarraActitud,
        pers_barra_idioma_ingles: persBarraIdiomaIngles,
        pers_barra_idioma_frances: persBarraIdiomaFrances,
        pers_barra_idioma_otro: persBarraIdiomaOtro,
        pers_cocteleria: persCocteleria,
        observ_personal: observPersonal,
      });
      // navigate('/somewhere'); // replace with your route
      getEncuestas();
      abrirModal()
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const res = await axios.get(URI + id);
      setPersSeguridad(res.data.pers_seguridad);
      setPersSegImagen(res.data.pers_seg_imagen);
      setPersSegActitud(res.data.pers_seg_actitud);
      setPersSegIdiomaIngles(res.data.pers_seg_idioma_ingles);
      setPersSegIdiomaFrances(res.data.pers_seg_idioma_frances);
      setPersSegIdiomaOtra(res.data.pers_seg_idioma_otra);
      setPersSegIdiomaO(res.data.pers_seg_idioma_otra !== '' ? 'otro' : '');
      setPersBarra(res.data.pers_barra);
      setPersBarraImagen(res.data.pers_barra_imagen);
      setPersBarraActitud(res.data.pers_barra_actitud);
      setPersBarraIdiomaIngles(res.data.pers_barra_idioma_ingles);
      setPersBarraIdiomaFrances(res.data.pers_barra_idioma_frances);
      setPersBarraIdiomaOtro(res.data.pers_barra_idioma_otro);
      setPersBarraIdiomaO(res.data.pers_barra_idioma_otro !== '' ? 'otro' : '');
      setPersCocteleria(res.data.pers_cocteleria);
      setObservPersonal(res.data.observ_personal);
    };
    getUserById();
  }, [id]);

  return (
    // <div className='form-container'>
    <div style={{ padding: '32px 62px' }} className="my-form">
      <h3>FICHA PERSONAL</h3>
      <Form onSubmit={update} >
        <div className='mb-3'>
          <label className='parent-label form-label'>Número trabajadores de Seguridad y control accesos:</label>
          <input value={persSeguridad} onChange={(e) => setPersSeguridad(e.target.value)} type="text" className='form-control' />
        </div>

        <div>
          <label className='parent-label form-label'>Imagen: (Seguridad y control accesos:)</label>
          <Form.Select value={persSegImagen} onChange={(e) => setPersSegImagen(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Clásica">Clásica</option>
            <option value="Casual">Casual</option>
            <option value="Moderna">Moderna</option>
            <option value="Descuidada">Descuidada</option>
          </Form.Select>
        </div>

        <div>
          <label className='parent-label form-label'>Actitud: (Seguridad y control accesos:)</label>
          <Form.Select value={persSegActitud} onChange={(e) => setPersSegActitud(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Muy amable">Muy amable</option>
            <option value="Bastante Amable">Bastante Amable</option>
            <option value="Bastante antipática">Bastante antipática</option>
            <option value="Muy antipática">Muy antipática</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className=' form-label'>Idiomas: (Seguridad y control accesos:)</label>
          <div style={{ textAlign: 'left' }}>
            <input type="checkbox" checked={persSegIdiomaIngles} onChange={() => setPersSegIdiomaIngles(prev => !prev)} /> Inglés <br />
            <input type="checkbox" checked={persSegIdiomaFrances} onChange={() => setPersSegIdiomaFrances(prev => !prev)} /> Fránces <br />
            <input type="checkbox" checked={persSegIdiomaO} onChange={() => {
              setPersSegIdiomaO(prev => !prev);
              if (!persSegIdiomaO) {
                setPersSegIdiomaOtra('');
              }
            }} /> Otras <br />
            {persSegIdiomaO && (
              <div>
                <label>Otro(Especifique):</label>
                <input type="text" value={persSegIdiomaOtra} onChange={(e) => setPersSegIdiomaOtra(e.target.value)} />
              </div>
            )}
          </div>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Número trabajadores Barras y office:</label>
          <input value={persBarra} onChange={(e) => setPersBarra(e.target.value)} type="text" className='form-control' />
        </div>

        <div>
          <label className='parent-label form-label'>Imagen: (Barras y office:)</label>
          <Form.Select value={persBarraImagen} onChange={(e) => setPersBarraImagen(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Clásica">Clásica</option>
            <option value="Casual">Casual</option>
            <option value="Moderna">Moderna</option>
            <option value="Descuidada">Descuidada</option>
          </Form.Select>
        </div>

        <div>
          <label className='parent-label form-label'>Actitud: (Barras y office:)</label>
          <Form.Select value={persBarraActitud} onChange={(e) => setPersBarraActitud(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Muy amable">Muy amable</option>
            <option value="Bastante Amable">Bastante Amable</option>
            <option value="Bastante antipática">Bastante antipática</option>
            <option value="Muy antipática">Muy antipática</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className=' form-label'>Idiomas: (Barras y office:)</label>
          <div style={{ textAlign: 'left' }}>
            <input type="checkbox" checked={persBarraIdiomaIngles} onChange={() => setPersBarraIdiomaIngles(prev => !prev)} /> Inglés <br />
            <input type="checkbox" checked={persBarraIdiomaFrances} onChange={() => setPersBarraIdiomaFrances(prev => !prev)} /> Fránces <br />
            <input type="checkbox" checked={persBarraIdiomaO} onChange={() => {
              setPersBarraIdiomaO(prev => !prev);
              if (!persBarraIdiomaO) {
                setPersBarraIdiomaOtro('');
              }
            }} /> Otras <br />
            {persBarraIdiomaO && (
              <div>
                <label>Otro(Especifique):</label>
                <input type="text" value={persBarraIdiomaOtro} onChange={(e) => setPersBarraIdiomaOtro(e.target.value)} />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className='parent-label form-label'>Coctelería:</label>
          <Form.Select value={persCocteleria ? "Si" : "No"} onChange={(e) => setPersCocteleria(e.target.value === "Si" ? true : false)}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo Personal):</label>
          <input value={observPersonal} onChange={(e) => setObservPersonal(e.target.value)} type="text" className='form-control' />
        </div>

        <div className="mt-3">
          <button type='submit' className='btn btn-success btn-ladda'>
            Modificar
          </button>
        </div>
      </Form>

      <style jsx>{`
        .form-container {
          margin: 20px;
          max-width: 800px;
        }

        .parent-label {
          font-weight: bold;
        }

        .form-control {
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .form-container {
            margin: 10px;
            padding: 15px;
          }

          .form-control {
            width: 100%;
            margin-bottom: 15px;
          }

          .btn {
            width: 100%;
            margin-top: 10px;
          }
        }

        @media (max-width: 480px) {
          .form-container {
            padding: 10px;
          }

          .parent-label {
            font-size: 0.9em;
          }

          .btn {
            font-size: 1em;
          }
        }
      `}</style>
    </div>
  );
};

export default CompEditEncuesta;
