// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import ShowModalMalas from '../enc_rscmalas/ShowCreateMalasP';


// const URI = api + 'rscbuena/';

// const CompCreateBuenasPracticas = () => {
//   const [infoOnline, setInfoOline] = useState('');
//   const [medicionSala, setMedicionSala] = useState(false);
//   const [ruido, setRuido] = useState(false);
//   const [seguridadVial, setSeguridadVial] = useState(false);
//   const [puntoViolencia, setPuntoViolencia] = useState(false);
//   const [responsabilidadBebidas, setResponsabilidadBebidas] = useState(false);
//   const [reciclaje, setReciclaje] = useState(false);
//   const [selloCalidad, setSelloCalidad] = useState(false);
//   const [observaciones, setObservaciones] = useState('');
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

//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');

//   const navigate = useNavigate();

//   const clearFields = () => {
//     setObservaciones('');
//     setMedicionSala(false);
//     setRuido(false);
//     setSeguridadVial(false);
//     setPuntoViolencia(false);
//     setResponsabilidadBebidas(false);
//     setReciclaje(false);
//     setSelloCalidad(false);
//   };

//   // Procedimiento guardar
//   const store = async (e) => {
//     e.preventDefault();
//     const response = await axios.post(URI, {
//       info_online: infoOnline,
//       mediacion_sala: medicionSala,
//       ruido: ruido,
//       seg_vial: seguridadVial,
//       Punto_viol: puntoViolencia,
//       respon_bebidas: responsabilidadBebidas,
//       reciclaje: reciclaje,
//       sello_calidad: selloCalidad,
//       observ_buenas: observaciones,
//       encuesta_id: encuestaId,
//       user_id: userId,
//     });
//     // clearFields();
//     if (response.status === 201) {
//       // Operación exitosa, devuelve true
//       return true;
//     } else {
//       // Operación fallida, devuelve false
//       return false;
//     }
//     // Puedes redirigir o hacer otras acciones después de enviar el formulario
//   };

//   return (
//     <div className='form-container'>
//       <h3>FICHA BUENAS PRÁCTICAS</h3>
//       <Form onSubmit={store} className='my-form'>
//         <p>Seleccionas Aquellas que SI se cumplan</p>
//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Realiza campañas informativas online:</label>
//           <input type='checkbox' checked={infoOnline} onChange={() => setInfoOline((prev) => !prev)} />
//         </div> <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Personal mediación en sala:</label>
//           <input type='checkbox' checked={medicionSala} onChange={() => setMedicionSala((prev) => !prev)} />
//         </div> <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Ruido:</label>
//           <input type='checkbox' checked={ruido} onChange={() => setRuido((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Seguridad Vial:</label>
//           <input type='checkbox' checked={seguridadVial} onChange={() => setSeguridadVial((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Punto Violeta:</label>
//           <input type='checkbox' checked={puntoViolencia} onChange={() => setPuntoViolencia((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Dispensación responsable de bebidas alcohólicas:</label>
//           <input type='checkbox' checked={responsabilidadBebidas} onChange={() => setResponsabilidadBebidas((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Reciclaje y sostenibilidad:</label>
//           <input type='checkbox' checked={reciclaje} onChange={() => setReciclaje((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Sello de Calidad:</label>
//           <input type='checkbox' checked={selloCalidad} onChange={() => setSelloCalidad((prev) => !prev)} />
//         </div>  <br />

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones:</label>
//           <input
//             value={observaciones}
//             onChange={(e) => setObservaciones(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>




//         {/* Agrega más opciones según tus necesidades */}
//         {/* ... */}

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
//             <ShowModalMalas
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

// export default CompCreateBuenasPracticas;



import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';
import ShowModalMalas from '../enc_rscmalas/ShowCreateMalasP';

const URI = api + 'rscbuena/';

const CompCreateBuenasPracticas = ({ setCreateMalasOpen, openCreateMalasModel }) => {
  const [infoOnline, setInfoOline] = useState('');
  const [medicionSala, setMedicionSala] = useState(false);
  const [ruido, setRuido] = useState(false);
  const [seguridadVial, setSeguridadVial] = useState(false);
  const [puntoViolencia, setPuntoViolencia] = useState(false);
  const [responsabilidadBebidas, setResponsabilidadBebidas] = useState(false);
  const [reciclaje, setReciclaje] = useState(false);
  const [selloCalidad, setSelloCalidad] = useState(false);
  const [observaciones, setObservaciones] = useState('');
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setCreateMalasOpen(false)
        openCreateMalasModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

  const navigate = useNavigate();

  const clearFields = () => {
    setObservaciones('');
    setMedicionSala(false);
    setRuido(false);
    setSeguridadVial(false);
    setPuntoViolencia(false);
    setResponsabilidadBebidas(false);
    setReciclaje(false);
    setSelloCalidad(false);
  };

  const store = async (e) => {
    e.preventDefault();
    const response = await axios.post(URI, {
      info_online: infoOnline,
      mediacion_sala: medicionSala,
      ruido: ruido,
      seg_vial: seguridadVial,
      Punto_viol: puntoViolencia,
      respon_bebidas: responsabilidadBebidas,
      reciclaje: reciclaje,
      sello_calidad: selloCalidad,
      observ_buenas: observaciones,
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
    <div className='form-container container'>
      <h3>FICHA BUENAS PRÁCTICAS</h3>
      <Form onSubmit={store} className='my-form'>
        <p>Seleccionas Aquellas que SI se cumplan</p>
        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Realiza campañas informativas online:</label>
          <input type='checkbox' checked={infoOnline} onChange={() => setInfoOline((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Personal mediación en sala:</label>
          <input type='checkbox' checked={medicionSala} onChange={() => setMedicionSala((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Ruido:</label>
          <input type='checkbox' checked={ruido} onChange={() => setRuido((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Seguridad Vial:</label>
          <input type='checkbox' checked={seguridadVial} onChange={() => setSeguridadVial((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Punto Violeta:</label>
          <input type='checkbox' checked={puntoViolencia} onChange={() => setPuntoViolencia((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Dispensación responsable de bebidas alcohólicas:</label>
          <input type='checkbox' checked={responsabilidadBebidas} onChange={() => setResponsabilidadBebidas((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Reciclaje y sostenibilidad:</label>
          <input type='checkbox' checked={reciclaje} onChange={() => setReciclaje((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center'>
          <label className='flex-grow-1'>Sello de Calidad:</label>
          <input type='checkbox' checked={selloCalidad} onChange={() => setSelloCalidad((prev) => !prev)} />
        </div>

        <div className='mb-3'>
          <label>Observaciones:</label>
          <input
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            type='text'
            className='form-control'
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
            <ShowModalMalas
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

export default CompCreateBuenasPracticas;

