// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import { api } from "../servicios/api";
// import FileBase64 from 'react-file-base64';

// const URI = api + 'valoracion/';

// const CreateValoracion = () => {
//   const [valLocal, setValLocal] = useState('');
//   const [valPersonal, setValPersonal] = useState('');
//   const [valAmbiente, setValAmbiente] = useState('');
//   const [valInteres, setValInteres] = useState('');
//   const [observVal, setObservVal] = useState('');
//   const [archivo, setArchivo] = useState(null);


//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');

//   const clearFields = () => {
//     setValLocal('');
//     setValPersonal('');
//     setValAmbiente('');
//     setValInteres('');
//     setObservVal('');
//     setArchivo(null);
//   };
//   const store = async (e) => {
//     console.log("store:-", URI)
//     e.preventDefault();

//     try {
//       await axios.post(URI, {
//         val_local: valLocal,
//         val_personal: valPersonal,
//         val_ambiente: valAmbiente,
//         val_interes: valInteres,
//         observ_val: observVal,
//         archivo: archivo,
//         encuesta_id: encuestaId,
//         user_id: userId,
//       });

//       // clearFields();
//       window.location.reload();
//     } catch (error) {
//       console.error('Error al enviar la valoración:', error);
//     }
//   };

//   return (
//     <div className='form-container'>
//       <h3>Crear Valoración</h3>
//       <Form className='my-form'>
//         <div>
//           <label className='parent-label form-label'>Local e instalaciones:</label>
//           <Form.Select
//             value={valLocal}
//             onChange={(e) => setValLocal(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy buena">Muy buena</option>
//             <option value="Bastante buena">Bastante buena</option>
//             <option value="Muy mala">Muy mala</option>
//             <option value="Bastante mala">Bastante mala</option>
//           </Form.Select>
//         </div>

//         <div>
//           <label className='parent-label form-label'>Personal:</label>
//           <Form.Select
//             value={valPersonal}
//             onChange={(e) => setValPersonal(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy buena">Muy buena</option>
//             <option value="Bastante buena">Bastante buena</option>
//             <option value="Muy mala">Muy mala</option>
//             <option value="Bastante mala">Bastante mala</option>
//           </Form.Select>
//         </div>

//         <div>
//           <label className='parent-label form-label'>Ambiente:</label>
//           <Form.Select
//             value={valAmbiente}
//             onChange={(e) => setValAmbiente(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy buena">Muy buena</option>
//             <option value="Bastante buena">Bastante buena</option>
//             <option value="Muy mala">Muy mala</option>
//             <option value="Bastante mala">Bastante mala</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Interes:</label>
//           <Form.Select
//             value={valInteres}
//             onChange={(e) => setValInteres(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Muy buena">Muy buena</option>
//             <option value="Bastante buena">Bastante buena</option>
//             <option value="Muy mala">Muy mala</option>
//             <option value="Bastante mala">Bastante mala</option>
//           </Form.Select>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Enlace de Drive*(Imagenes):</label>
//           <input
//             value={archivo}
//             onChange={(e) => setArchivo(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Módulo Valoraciones):</label>
//           <input
//             value={observVal}
//             onChange={(e) => setObservVal(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//         </div>


//         <div className='mt-3'>
//           <button type='submit' className='btn btn-success btn-ladda' onClick={(e) => { store(e) }}>
//             Guardar
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default CreateValoracion;



import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { api } from "../servicios/api";
import 'bootstrap/dist/css/bootstrap.min.css';

const URI = api + 'valoracion/';

const CreateValoracion = ({ setCreateValoracionOpen }) => {
  const [valLocal, setValLocal] = useState('');
  const [valPersonal, setValPersonal] = useState('');
  const [valAmbiente, setValAmbiente] = useState('');
  const [valInteres, setValInteres] = useState('');
  const [observVal, setObservVal] = useState('');
  const [archivo, setArchivo] = useState('');

  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

  const clearFields = () => {
    setValLocal('');
    setValPersonal('');
    setValAmbiente('');
    setValInteres('');
    setObservVal('');
    setArchivo('');
  };

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URI, {
        val_local: valLocal,
        val_personal: valPersonal,
        val_ambiente: valAmbiente,
        val_interes: valInteres,
        observ_val: observVal,
        archivo: archivo,
        encuesta_id: encuestaId,
        user_id: userId,
      });
      setCreateValoracionOpen(false)
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar la valoración:', error);
    }
  };

  return (
    <div className='container form-container'>
      <h3 className='my-3'>Crear Valoración</h3>
      <Form className='my-form' onSubmit={store}>
        <div className='form-group'>
          <label className=' form-label'>Local e instalaciones:</label>
          <Form.Select
            className='form-control'
            value={valLocal}
            onChange={(e) => setValLocal(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Bastante buena">Bastante buena</option>
            <option value="Muy mala">Muy mala</option>
            <option value="Bastante mala">Bastante mala</option>
          </Form.Select>
        </div>

        <div className='form-group'>
          <label className=' form-label'>Personal:</label>
          <Form.Select
            className='form-control'
            value={valPersonal}
            onChange={(e) => setValPersonal(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Bastante buena">Bastante buena</option>
            <option value="Muy mala">Muy mala</option>
            <option value="Bastante mala">Bastante mala</option>
          </Form.Select>
        </div>

        <div className='form-group'>
          <label className=' form-label'>Ambiente:</label>
          <Form.Select
            className='form-control'
            value={valAmbiente}
            onChange={(e) => setValAmbiente(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Bastante buena">Bastante buena</option>
            <option value="Muy mala">Muy mala</option>
            <option value="Bastante mala">Bastante mala</option>
          </Form.Select>
        </div>

        <div className='form-group'>
          <label className=' form-label'>Interés:</label>
          <Form.Select
            className='form-control'
            value={valInteres}
            onChange={(e) => setValInteres(e.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Bastante buena">Bastante buena</option>
            <option value="Muy mala">Muy mala</option>
            <option value="Bastante mala">Bastante mala</option>
          </Form.Select>
        </div>

        <div className='form-group'>
          <label className=' form-label'>Enlace de Drive (Imágenes):</label>
          <input
            value={archivo}
            onChange={(e) => setArchivo(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className=' form-label'>Observaciones (Módulo Valoraciones):</label>
          <input
            value={observVal}
            onChange={(e) => setObservVal(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-success btn-ladda'>
            Guardar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateValoracion;

