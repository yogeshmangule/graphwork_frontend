// import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import { api } from "../servicios/api";
// import FileBase64 from 'react-file-base64';

// const URI = api + 'valoracion/';

// const EditValoracion = ({id}) => {
//   const [valLocal, setValLocal] = useState('');
//   const [valPersonal, setValPersonal] = useState('');
//   const [valAmbiente, setValAmbiente] = useState('');
//   const [valInteres, setValInteres] = useState('');
//   const [observVal, setObservVal] = useState('');
//   const [archivo, setArchivo] = useState(null);

//   const userId = localStorage.getItem('userId');
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
//     e.preventDefault();

//     try {
//         const response = await axios.put(URI + id, {
//         val_local: valLocal,
//         val_personal: valPersonal,
//         val_ambiente: valAmbiente,
//         val_interes: valInteres,
//         observ_val: observVal,
//         archivo: archivo, 
//         encuesta_id: encuestaId,
//         user_id: userId,
//       });

//       clearFields();
//       window.location.reload(); 
//     } catch (error) {
//       console.error('Error al enviar la valoración:', error);
//     }
//   };
//   useEffect(() => {
//     // Incluye getBlogById en el array de dependencias
//     const getUserById = async () => {
//         const response = await axios.get(URI + id)
//         setValLocal(response.data.val_local);
//         setValPersonal(response.data.val_personal);
//         setValAmbiente(response.data.val_ambiente);
//         setValInteres(response.data.val_interes);
//         setObservVal(response.data.observ_val);
//         setArchivo(response.data.archivo);
//     }

//     getUserById();
// }, [id]);

//   return (
//     <div className='form-container'>
//       <h3>Crear Valoración</h3>
//       <Form onSubmit={store} className='my-form'>
//       <div>
//             <label className='parent-label form-label'>Local e instalaciones:</label>
//                 <Form.Select
//                 value={valLocal}
//                 onChange={(e) => setValLocal(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy buena">Muy buena</option>
//                     <option value="Bastante buena">Bastante buena</option>
//                     <option value="Muy mala">Muy mala</option>
//                     <option value="Bastante mala">Bastante mala</option>
//                 </Form.Select>
//             </div>

//             <div>
//             <label className='parent-label form-label'>Personal:</label>
//                 <Form.Select
//                 value={valPersonal}
//                 onChange={(e) => setValPersonal(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy buena">Muy buena</option>
//                     <option value="Bastante buena">Bastante buena</option>
//                     <option value="Muy mala">Muy mala</option>
//                     <option value="Bastante mala">Bastante mala</option>
//                 </Form.Select>
//             </div> 

//             <div>
//             <label className='parent-label form-label'>Ambiente:</label>
//                 <Form.Select
//                 value={valAmbiente}
//                 onChange={(e) => setValAmbiente(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy buena">Muy buena</option>
//                     <option value="Bastante buena">Bastante buena</option>
//                     <option value="Muy mala">Muy mala</option>
//                     <option value="Bastante mala">Bastante mala</option>
//                 </Form.Select>
//             </div> 
//             <div>
//             <label className='parent-label form-label'>Interes:</label>
//                 <Form.Select
//                 value={valInteres}
//                 onChange={(e) => setValInteres(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy buena">Muy buena</option>
//                     <option value="Bastante buena">Bastante buena</option>
//                     <option value="Muy mala">Muy mala</option>
//                     <option value="Bastante mala">Bastante mala</option>
//                 </Form.Select>
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Enlace de Drive*(Imagenes):</label>
//                 <input
//                 value={archivo}
//                 onChange={(e) => setArchivo(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo Valoraciones):</label>
//                 <input
//                 value={observVal}
//                 onChange={(e) => setObservVal(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>


//         <div className='mt-3'>
//           <button type='submit' className='btn btn-primary'>
//             Guardar
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default EditValoracion;


import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { api } from "../servicios/api";
import 'bootstrap/dist/css/bootstrap.min.css';

const URI = api + 'valoracion/';

const EditValoracion = ({ id, getEncuestas, abrirModal }) => {
  const [valLocal, setValLocal] = useState('');
  const [valPersonal, setValPersonal] = useState('');
  const [valAmbiente, setValAmbiente] = useState('');
  const [valInteres, setValInteres] = useState('');
  const [observVal, setObservVal] = useState('');
  const [archivo, setArchivo] = useState('');

  const userId = localStorage.getItem('userId');
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
      const response = await axios.put(URI + id, {
        val_local: valLocal,
        val_personal: valPersonal,
        val_ambiente: valAmbiente,
        val_interes: valInteres,
        observ_val: observVal,
        archivo: archivo,
        // encuesta_id: encuestaId,
        user_id: userId,
      });

      // clearFields();
      // window.location.reload();
      getEncuestas();
      abrirModal();
    } catch (error) {
      console.error('Error al enviar la valoración:', error);
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(URI + id);
      setValLocal(response.data.val_local);
      setValPersonal(response.data.val_personal);
      setValAmbiente(response.data.val_ambiente);
      setValInteres(response.data.val_interes);
      setObservVal(response.data.observ_val);
      setArchivo(response.data.archivo);
    };

    getUserById();
  }, [id]);

  return (
    // <div className='container form-container' style={{ padding: '32px 62px' }}>
    <div className="my-form form-style">
      <h3 className=' my-3'>Editar Valoración</h3>
      <Form onSubmit={store} >
        <div className='form-group'>
          <label className='parent-label form-label'>Local e instalaciones:</label>
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
          <label className='parent-label form-label'>Personal:</label>
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
          <label className='parent-label form-label'>Ambiente:</label>
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
          <label className='parent-label form-label'>Interés:</label>
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

        <div className='form-group mb-3'>
          <label className='parent-label form-label'>Enlace de Drive (Imágenes):</label>
          <input
            value={archivo}
            onChange={(e) => setArchivo(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='form-group mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo Valoraciones):</label>
          <input
            value={observVal}
            onChange={(e) => setObservVal(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-primary'>
            Guardar
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

export default EditValoracion;

