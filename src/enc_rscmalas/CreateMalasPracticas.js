// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import ShowModalValoracion from '../enc_valoracion/ShowCreateValoracion';

// const URI = api + 'rscmala/';

// const CompCreateMalaPracticas = () => {
//   const [malaConsum, setMalaConsum] = useState(false);
//   const [doblesPuertas, setDoblesPuertas] = useState(false);
//   const [actiPersonal, setActiPersonal] = useState(false);
//   const [incumplAforo, setIncumplAforo] = useState(false);
//   const [incumplNorma, setIncumplNorma] = useState(false);
//   const [molestiasLocal, setMolestiasLocal] = useState(false);
//   const [consumAbus, setConsumAbus] = useState(false);
//   const [consumDrogas, setConsumDrogas] = useState(false);
//   const [observMala, setObservMala] = useState('');

//   const [incAcceso, setIncAcceso] = useState(false);
//   const [incAccesoDesc, setIncAccesoDesc] = useState('');
//   const [expulsArbitrarias, setExpulsArbitrarias] = useState(false);
//   const [expulsArbitrariasDesc, setExpulsArbitrariasDesc] = useState('');
//   const [altercados, setAltercados] = useState(false);
//   const [altercadosDesc, setAltercadosDesc] = useState('');
//   const [observIncid, setObservIncid] = useState('');

//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');
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

//   const navigate = useNavigate();

//   const clearFields = () => {
//     setMalaConsum(false);
//     setDoblesPuertas(false);
//     setActiPersonal(false);
//     setIncumplAforo(false);
//     setIncumplNorma(false);
//     setMolestiasLocal(false);
//     setConsumAbus(false);
//     setConsumDrogas(false);
//     setObservMala('');

//     setIncAcceso(false);
//     setIncAccesoDesc('');
//     setExpulsArbitrarias(false);
//     setExpulsArbitrariasDesc('');
//     setAltercados(false);
//     setAltercadosDesc('');
//     setObservIncid('');
//   };

//   // Procedimiento guardar
//   const store = async (e) => {
//     e.preventDefault();
//     const response = await axios.post(URI, {
//       mala_consum: malaConsum,
//       dobles_puertas: doblesPuertas,
//       acti_personal: actiPersonal,
//       incumpl_aforo: incumplAforo,
//       incumpl_norma: incumplNorma,
//       Molestias_local: molestiasLocal,
//       consum_abus: consumAbus,
//       consum_drogas: consumDrogas,
//       observ_malas: observMala,
//       inc_acceso: incAcceso,
//       inc_acceso_desc: incAccesoDesc,
//       expuls_arbitrarias: expulsArbitrarias,
//       expuls_arbitrarias_desc: expulsArbitrariasDesc,
//       altercados: altercados,
//       altercados_desc: altercadosDesc,
//       observ_incid: observIncid,
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
//   };

//   return (
//     <div className='form-container'>
//       <h3>FICHA MALAS PRÁCTICAS</h3>
//       <Form onSubmit={store} className='my-form'>
//         <p>Marca aquellas que SI se cumplan</p>
//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Mala calidad consumiciones: </label>
//           <input type='checkbox' checked={malaConsum} onChange={() => setMalaConsum((prev) => !prev)} />
//         </div> <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Mala calidad consumiciones:</label>
//           <input type='checkbox' checked={doblesPuertas} onChange={() => setDoblesPuertas((prev) => !prev)} />
//         </div> <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Actitud personal:</label>
//           <input type='checkbox' checked={actiPersonal} onChange={() => setActiPersonal((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Incumplimiento normativa aforos:</label>
//           <input type='checkbox' checked={incumplAforo} onChange={() => setIncumplAforo((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Incumplimiento normativa horarios:</label>
//           <input type='checkbox' checked={incumplNorma} onChange={() => setIncumplNorma((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Molestias y ruidos provocados por el local:</label>
//           <input type='checkbox' checked={molestiasLocal} onChange={() => setMolestiasLocal((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Consumos abusivos de alcohol:</label>
//           <input type='checkbox' checked={consumAbus} onChange={() => setConsumAbus((prev) => !prev)} />
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Permisibilidad consumo drogas:</label>
//           <input type='checkbox' checked={consumDrogas} onChange={() => setConsumDrogas((prev) => !prev)} />
//         </div>  <br />

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Módulo Malas Prácticas):</label>
//           <input
//             value={observMala}
//             onChange={(e) => setObservMala(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>
//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Problemas de acceso:</label>
//           <input type='checkbox' checked={incAcceso} onChange={() => {
//             setIncAcceso((prev) => !prev);
//             if (!incAcceso) {
//               setIncAccesoDesc('')
//             }
//           }} />
//           {incAcceso && (
//             <div className="mb-3">
//               <label className="parent-label form-label">Sí, Describir Problemas de acceso</label>
//               <input value={incAccesoDesc} type="text" className="form-control"
//                 onChange={(e) => setIncAccesoDesc(e.target.value)} />
//             </div>)}
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Expulsiones arbitrarias:</label>
//           <input type='checkbox' checked={expulsArbitrarias} onChange={() => {
//             setExpulsArbitrarias((prev) => !prev);
//             if (!expulsArbitrarias) {
//               setExpulsArbitrariasDesc('')
//             }
//           }} />
//           {expulsArbitrarias && (
//             <div className="mb-3">
//               <label className="parent-label form-label">Sí, Describir Expulsiones arbitrarias</label>
//               <input value={expulsArbitrariasDesc} type="text" className="form-control"
//                 onChange={(e) => setExpulsArbitrariasDesc(e.target.value)} />
//             </div>)}
//         </div>  <br />

//         <div style={{ textAlign: 'left' }}>
//           <label className='parent-label form-label' style={{ marginRight: '10px' }}>Altercados:</label>
//           <input type='checkbox' checked={altercados} onChange={() => {
//             setAltercados((prev) => !prev);
//             if (!altercados) {
//               setAltercadosDesc('')
//             }
//           }} />
//           {altercados && (
//             <div className="mb-3">
//               <label className="parent-label form-label">Sí, Describir altercados</label>
//               <input value={altercadosDesc} type="text" className="form-control"
//                 onChange={(e) => setAltercadosDesc(e.target.value)} />
//             </div>)}
//         </div>  <br />
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Incidencias)</label>
//           <input
//             value={observIncid}
//             onChange={(e) => setObservIncid(e.target.value)}
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
//             <ShowModalValoracion
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

// export default CompCreateMalaPracticas;


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';
import ShowModalValoracion from '../enc_valoracion/ShowCreateValoracion';

const URI = api + 'rscmala/';

const CompCreateMalaPracticas = ({ setCreateValoracionOpen, openCreateValoracionModel }) => {
  const [malaConsum, setMalaConsum] = useState(false);
  const [doblesPuertas, setDoblesPuertas] = useState(false);
  const [actiPersonal, setActiPersonal] = useState(false);
  const [incumplAforo, setIncumplAforo] = useState(false);
  const [incumplNorma, setIncumplNorma] = useState(false);
  const [molestiasLocal, setMolestiasLocal] = useState(false);
  const [consumAbus, setConsumAbus] = useState(false);
  const [consumDrogas, setConsumDrogas] = useState(false);
  const [observMala, setObservMala] = useState('');

  const [incAcceso, setIncAcceso] = useState(false);
  const [incAccesoDesc, setIncAccesoDesc] = useState('');
  const [expulsArbitrarias, setExpulsArbitrarias] = useState(false);
  const [expulsArbitrariasDesc, setExpulsArbitrariasDesc] = useState('');
  const [altercados, setAltercados] = useState(false);
  const [altercadosDesc, setAltercadosDesc] = useState('');
  const [observIncid, setObservIncid] = useState('');

  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');
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
        setCreateValoracionOpen(false);
        openCreateValoracionModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const navigate = useNavigate();

  const clearFields = () => {
    setMalaConsum(false);
    setDoblesPuertas(false);
    setActiPersonal(false);
    setIncumplAforo(false);
    setIncumplNorma(false);
    setMolestiasLocal(false);
    setConsumAbus(false);
    setConsumDrogas(false);
    setObservMala('');
    setIncAcceso(false);
    setIncAccesoDesc('');
    setExpulsArbitrarias(false);
    setExpulsArbitrariasDesc('');
    setAltercados(false);
    setAltercadosDesc('');
    setObservIncid('');
  };

  const store = async (e) => {
    e.preventDefault();
    const response = await axios.post(URI, {
      mala_consum: malaConsum,
      dobles_puertas: doblesPuertas,
      acti_personal: actiPersonal,
      incumpl_aforo: incumplAforo,
      incumpl_norma: incumplNorma,
      Molestias_local: molestiasLocal,
      consum_abus: consumAbus,
      consum_drogas: consumDrogas,
      observ_malas: observMala,
      inc_acceso: incAcceso,
      inc_acceso_desc: incAccesoDesc,
      expuls_arbitrarias: expulsArbitrarias,
      expuls_arbitrarias_desc: expulsArbitrariasDesc,
      altercados: altercados,
      altercados_desc: altercadosDesc,
      observ_incid: observIncid,
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
      <h3>FICHA MALAS PRÁCTICAS</h3>
      <Form onSubmit={store} className='my-form'>
        <p>Marca aquellas que SI se cumplan</p>

        <div className="form-check">
          <label className='form-check-label'>Mala calidad consumiciones: </label>
          <input type='checkbox' className="form-check-input" checked={malaConsum} onChange={() => setMalaConsum((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Dobles puertas:</label>
          <input type='checkbox' className="form-check-input" checked={doblesPuertas} onChange={() => setDoblesPuertas((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Actitud personal:</label>
          <input type='checkbox' className="form-check-input" checked={actiPersonal} onChange={() => setActiPersonal((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Incumplimiento normativa aforos:</label>
          <input type='checkbox' className="form-check-input" checked={incumplAforo} onChange={() => setIncumplAforo((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Incumplimiento normativa horarios:</label>
          <input type='checkbox' className="form-check-input" checked={incumplNorma} onChange={() => setIncumplNorma((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Molestias y ruidos provocados por el local:</label>
          <input type='checkbox' className="form-check-input" checked={molestiasLocal} onChange={() => setMolestiasLocal((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Consumos abusivos de alcohol:</label>
          <input type='checkbox' className="form-check-input" checked={consumAbus} onChange={() => setConsumAbus((prev) => !prev)} />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Permisibilidad consumo drogas:</label>
          <input type='checkbox' className="form-check-input" checked={consumDrogas} onChange={() => setConsumDrogas((prev) => !prev)} />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Observaciones (Módulo Malas Prácticas):</label>
          <input
            value={observMala}
            onChange={(e) => setObservMala(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className="form-check">
          <label className='form-check-label'>Problemas de acceso:</label>
          <input type='checkbox' className="form-check-input" checked={incAcceso} onChange={() => {
            setIncAcceso((prev) => !prev);
            if (!incAcceso) {
              setIncAccesoDesc('')
            }
          }} />
          {incAcceso && (
            <div className="mb-3">
              <label className="form-label">Sí, Describir Problemas de acceso</label>
              <input value={incAccesoDesc} type="text" className="form-control"
                onChange={(e) => setIncAccesoDesc(e.target.value)} />
            </div>)}
        </div>

        <div className="form-check">
          <label className='form-check-label'>Expulsiones arbitrarias:</label>
          <input type='checkbox' className="form-check-input" checked={expulsArbitrarias} onChange={() => {
            setExpulsArbitrarias((prev) => !prev);
            if (!expulsArbitrarias) {
              setExpulsArbitrariasDesc('')
            }
          }} />
          {expulsArbitrarias && (
            <div className="mb-3">
              <label className="form-label">Sí, Describir Expulsiones arbitrarias</label>
              <input value={expulsArbitrariasDesc} type="text" className="form-control"
                onChange={(e) => setExpulsArbitrariasDesc(e.target.value)} />
            </div>)}
        </div>

        <div className="form-check">
          <label className='form-check-label'>Altercados:</label>
          <input type='checkbox' className="form-check-input" checked={altercados} onChange={() => {
            setAltercados((prev) => !prev);
            if (!altercados) {
              setAltercadosDesc('')
            }
          }} />
          {altercados && (
            <div className="mb-3">
              <label className="form-label">Sí, Describir altercados</label>
              <input value={altercadosDesc} type="text" className="form-control"
                onChange={(e) => setAltercadosDesc(e.target.value)} />
            </div>)}
        </div>

        <div className='mb-3'>
          <label className='form-label'>Observaciones (Incidencias)</label>
          <input
            value={observIncid}
            onChange={(e) => setObservIncid(e.target.value)}
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
            <ShowModalValoracion
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

export default CompCreateMalaPracticas;
