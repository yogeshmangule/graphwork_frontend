// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { api } from "../servicios/api";
// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalMarketing from '../enc_marketing/ShowCreateMarketing';


// const URI = api + 'personal/'
// const CompCreatePersonal = () => {
//   const [encuestas, setEncuesta] = useState(new Date());
//   const [ambMusicalNo, setAmbMusicalNo] = useState(false);
//   const [persSeguridad, setPersSeguridad] = useState(0);
//   const [persSegImagen, setPersSegImagen] = useState('');
//   const [persSegActitud, setPersSegActitud] = useState('');
//   const [persSegIdiomaIngles, setPersSegIdiomaIngles] = useState(false);
//   const [persSegIdiomaFrances, setPersSegIdiomaFrances] = useState(false);
//   const [persSegIdiomaOtra, setPersSegIdiomaOtra] = useState('');
//   const [persSegIdiomaO, setPersSegIdiomaO] = useState('');
//   const [persBarra, setPersBarra] = useState(0);
//   const [persBarraImagen, setPersBarraImagen] = useState('');
//   const [persBarraActitud, setPersBarraActitud] = useState('');
//   const [persBarraIdiomaIngles, setPersBarraIdiomaIngles] = useState(false);
//   const [persBarraIdiomaFrances, setPersBarraIdiomaFrances] = useState(false);
//   const [persBarraIdiomaOtro, setPersBarraIdiomaOtro] = useState('');
//   const [persBarraIdiomaO, setPersBarraIdiomaO] = useState('');
//   const [persCocteleria, setPersCocteleria] = useState(false);
//   const [observPersonal, setObservPersonal] = useState('');
//   const [encuestaMarca, setSearchMarca] = useState('');
//   const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
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

//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');

//   const clearFields = () => {
//     setObservPersonal('');

//   };

//   const navigate = useNavigate()



//   // Luego, en tu componente, puedes llamar a esta función cuando necesites manejar la edición.


//   //procedimiento guardar
//   const store = async (e) => {
//     e.preventDefault();
//     setHasErrors(false);
//     try {

//       // Realiza la solicitud POST aquí con los datos de la encuesta
//       const response = await axios.post(URI, {
//         pers_seguridad: persSeguridad,
//         pers_seg_imagen: persSegImagen,
//         pers_seg_actitud: persSegActitud,
//         pers_seg_idioma_ingles: persSegIdiomaIngles,
//         pers_seg_idioma_frances: persSegIdiomaFrances,
//         pers_seg_idioma_otra: persSegIdiomaOtra,
//         pers_barra: persBarra,
//         pers_barra_imagen: persBarraImagen,
//         pers_barra_actitud: persBarraActitud,
//         pers_barra_idioma_ingles: persBarraIdiomaIngles,
//         pers_barra_idioma_frances: persBarraIdiomaFrances,
//         pers_barra_idioma_otro: persBarraIdiomaOtro,
//         pers_cocteleria: persCocteleria,
//         observ_personal: observPersonal,
//         encuesta_id: encuestaId,
//         user_id: userId
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

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };



//   return (
//     <div className='form-container'>

//       <h3>FICHA PERSONAL</h3>
//       <Form onSubmit={store} className="my-form">

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Número trabajadores de Seguridad y control accesos:</label>
//           <input value={persSeguridad} onChange={(e) => setPersSeguridad(e.target.value)}
//             type="text" className='form-control' />
//         </div>

//         <div>
//           <label className='parent-label form-label'>Imagen: (Seguridad y control accesos:)</label>
//           <Form.Select
//             value={persSegImagen}
//             onChange={(e) => setPersSegImagen(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Clásica">Clásica</option>
//             <option value="Casual">Casual</option>
//             <option value="Moderna">Moderna</option>
//             <option value="Descuidada">Descuidada</option>

//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Actitud: (Seguridad y control accesos:)</label>
//           <Form.Select
//             value={persSegActitud}
//             onChange={(e) => setPersSegActitud(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy amable">Muy amable</option>
//             <option value="Bastante Amable">Bastante Amable</option>
//             <option value="Bastante antipática">Bastante antipática</option>
//             <option value="Muy antipática">Muy antipática</option>

//           </Form.Select>
//         </div>

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label'>Idiomas: (Seguridad y control accesos:)</label>
//           {/* Opciones de vías de evacuación */} <br />
//           <input type="checkbox" checked={persSegIdiomaIngles}
//             onChange={() => setPersSegIdiomaIngles(prev => !prev)} /> Inglés <br />
//           <input type="checkbox" checked={persSegIdiomaFrances}
//             onChange={() => setPersSegIdiomaFrances(prev => !prev)} /> Fránces <br />
//           <input type="checkbox" checked={persSegIdiomaO}
//             onChange={() => {
//               setPersSegIdiomaO(prev => !prev);
//               if (!persSegIdiomaO) {
//                 setPersSegIdiomaOtra('');
//               }
//             }}
//           /> Otras <br />
//           {persSegIdiomaO && (
//             <div>
//               <label>Otro(Especifique):</label>
//               <input type="text" value={persSegIdiomaOtra}
//                 onChange={(e) => setPersSegIdiomaOtra(e.target.value)} />
//             </div>)}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Número trabajadores Barras y office:</label>
//           <input
//             value={persBarra}
//             onChange={(e) => setPersBarra(e.target.value)}
//             type="text"
//             className='form-control' />
//         </div>


//         <div>
//           <label className='parent-label form-label'>Imagen: (Barras y office:)</label>
//           <Form.Select
//             value={persBarraImagen}
//             onChange={(e) => setPersBarraImagen(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Clásica">Clásica</option>
//             <option value="Casual">Casual</option>
//             <option value="Moderna">Moderna</option>
//             <option value="Descuidada">Descuidada</option>

//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Actitud: (Barras y office:)</label>
//           <Form.Select
//             value={persBarraActitud}
//             onChange={(e) => setPersBarraActitud(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy amable">Muy amable</option>
//             <option value="Bastante Amable">Bastante Amable</option>
//             <option value="Bastante antipática">Bastante antipática</option>
//             <option value="Muy antipática">Muy antipática</option>

//           </Form.Select>
//         </div>

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label'>Idiomas: (Barras y office:)</label>
//           {/* Opciones de vías de evacuación */} <br />
//           <input type="checkbox" checked={persBarraIdiomaIngles}
//             onChange={() => setPersBarraIdiomaIngles(prev => !prev)} /> Inglés <br />
//           <input type="checkbox" checked={persBarraIdiomaFrances}
//             onChange={() => setPersBarraIdiomaFrances(prev => !prev)} /> Fránces <br />
//           <input type="checkbox" checked={persBarraIdiomaO}
//             onChange={() => {
//               setPersBarraIdiomaO(prev => !prev);
//               if (!persBarraIdiomaO) {
//                 setPersBarraIdiomaOtro('');
//               }
//             }}
//           /> Otras <br />
//           {persBarraIdiomaO && (
//             <div>
//               <label>Otro(Especifique):</label>
//               <input type="text" value={persBarraIdiomaOtro}
//                 onChange={(e) => setPersBarraIdiomaOtro(e.target.value)} />
//             </div>)}
//         </div>
//         <div>
//           <label className='parent-label form-label'>Coctelería:</label>
//           <Form.Select
//             value={persCocteleria ? "Si" : "No"}
//             onChange={(e) => setPersCocteleria(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>

//           </Form.Select>
//         </div>
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Módulo Personal):</label>
//           <input
//             value={observPersonal}
//             onChange={(e) => setObservPersonal(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>
//         <div className="mt-3"> {/* Add margin-top for spacing */}

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
//             <ShowModalMarketing
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

// export default CompCreatePersonal

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalMarketing from '../enc_marketing/ShowCreateMarketing';

const URI = api + 'personal/';

const CompCreatePersonal = ({ setCreateMarketingOpen, openCreateMarketingModel }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [ambMusicalNo, setAmbMusicalNo] = useState(false);
  const [persSeguridad, setPersSeguridad] = useState(0);
  const [persSegImagen, setPersSegImagen] = useState('');
  const [persSegActitud, setPersSegActitud] = useState('');
  const [persSegIdiomaIngles, setPersSegIdiomaIngles] = useState(false);
  const [persSegIdiomaFrances, setPersSegIdiomaFrances] = useState(false);
  const [persSegIdiomaOtra, setPersSegIdiomaOtra] = useState('');
  const [persSegIdiomaO, setPersSegIdiomaO] = useState(false);
  const [persBarra, setPersBarra] = useState(0);
  const [persBarraImagen, setPersBarraImagen] = useState('');
  const [persBarraActitud, setPersBarraActitud] = useState('');
  const [persBarraIdiomaIngles, setPersBarraIdiomaIngles] = useState(false);
  const [persBarraIdiomaFrances, setPersBarraIdiomaFrances] = useState(false);
  const [persBarraIdiomaOtro, setPersBarraIdiomaOtro] = useState('');
  const [persBarraIdiomaO, setPersBarraIdiomaO] = useState(false);
  const [persCocteleria, setPersCocteleria] = useState(false);
  const [observPersonal, setObservPersonal] = useState('');
  const [encuestaMarca, setSearchMarca] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

  const handleModalClose = () => {
    setIsModalOpen(false);
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
        setCreateMarketingOpen(false)
        openCreateMarketingModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const clearFields = () => {
    setObservPersonal('');
  };

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    setHasErrors(false);
    try {
      const response = await axios.post(URI, {
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
    // <div className='form-container'>
    <div style={{ padding: '32px 62px' }} className="my-form">
      <h3>FICHA PERSONAL</h3>
      <Form onSubmit={store} >
        <div className='mb-3'>
          <label className=' form-label'>Número trabajadores de Seguridad y control accesos:</label>
          <input value={persSeguridad} onChange={(e) => setPersSeguridad(e.target.value)} type="text" className='form-control' />
        </div>

        <div>
          <label className=' form-label'>Imagen: (Seguridad y control accesos:)</label>
          <Form.Select value={persSegImagen} onChange={(e) => setPersSegImagen(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Clásica">Clásica</option>
            <option value="Casual">Casual</option>
            <option value="Moderna">Moderna</option>
            <option value="Descuidada">Descuidada</option>
          </Form.Select>
        </div>

        <div>
          <label className=' form-label'>Actitud: (Seguridad y control accesos:)</label>
          <Form.Select value={persSegActitud} onChange={(e) => setPersSegActitud(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Muy amable">Muy amable</option>
            <option value="Bastante Amable">Bastante Amable</option>
            <option value="Bastante antipática">Bastante antipática</option>
            <option value="Muy antipática">Muy antipática</option>
          </Form.Select>
        </div>

        <div style={{ textAlign: 'left' }}>
          <label className=' form-label'>Idiomas: (Seguridad y control accesos:)</label><br />
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

        <div className='mb-3'>
          <label className=' form-label'>Número trabajadores Barras y office:</label>
          <input value={persBarra} onChange={(e) => setPersBarra(e.target.value)} type="text" className='form-control' />
        </div>

        <div>
          <label className=' form-label'>Imagen: (Barras y office:)</label>
          <Form.Select value={persBarraImagen} onChange={(e) => setPersBarraImagen(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Clásica">Clásica</option>
            <option value="Casual">Casual</option>
            <option value="Moderna">Moderna</option>
            <option value="Descuidada">Descuidada</option>
          </Form.Select>
        </div>

        <div>
          <label className=' form-label'>Actitud: (Barras y office:)</label>
          <Form.Select value={persBarraActitud} onChange={(e) => setPersBarraActitud(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Muy amable">Muy amable</option>
            <option value="Bastante Amable">Bastante Amable</option>
            <option value="Bastante antipática">Bastante antipática</option>
            <option value="Muy antipática">Muy antipática</option>
          </Form.Select>
        </div>

        <div style={{ textAlign: 'left' }}>
          <label className=' form-label'>Idiomas: (Barras y office:)</label><br />
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

        <div>
          <label className=' form-label'>Coctelería:</label>
          <Form.Select value={persCocteleria ? "Si" : "No"} onChange={(e) => setPersCocteleria(e.target.value === "Si" ? true : false)}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className=' form-label'>Observaciones (Módulo Personal):</label>
          <input value={observPersonal} onChange={(e) => setObservPersonal(e.target.value)} type="text" className='form-control' />
        </div>

        <div className="mt-3"></div>

        {!isModalOpen && (
          <div className="mt-3">
            <button className='btn btn-success btn-ladda' onClick={(e) => handleFirstButtonClick(e)}>
              Registrar Datos
            </button>
          </div>
        )}

        {isModalOpen && (
          <div className="mt-3">
            <ShowModalMarketing onClick={handleModalClose} isOpen={isModalOpen} onClose={handleModalClose} />
          </div>
        )}
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

export default CompCreatePersonal;
