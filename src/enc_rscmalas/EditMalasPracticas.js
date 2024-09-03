// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';

// const URI = api + 'rscmala/';

// const CompEditMalaPracticas = ({id}) => {
//     const [malaConsum, setMalaConsum] = useState(false);
//     const [doblesPuertas, setDoblesPuertas] = useState(false);
//     const [actiPersonal, setActiPersonal] = useState(false);
//     const [incumplAforo, setIncumplAforo] = useState(false);
//     const [incumplNorma, setIncumplNorma] = useState(false);
//     const [molestiasLocal, setMolestiasLocal] = useState(false);
//     const [consumAbus, setConsumAbus] = useState(false);
//     const [consumDrogas, setConsumDrogas] = useState(false);
//     const [observMala, setObservMala] = useState('');

//     const [incAcceso, setIncAcceso] = useState(false);
//     const [incAccesoDesc, setIncAccesoDesc] = useState('');
//     const [expulsArbitrarias, setExpulsArbitrarias] = useState(false);
//     const [expulsArbitrariasDesc, setExpulsArbitrariasDesc] = useState('');
//     const [altercados, setAltercados] = useState(false);
//     const [altercadosDesc, setAltercadosDesc] = useState('');
//     const [observIncid, setObservIncid] = useState('');

//   const userId = localStorage.getItem('userId');
//   const encuestaId = localStorage.getItem('encuestaId1');

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
//   const update = async (e) => {
//     e.preventDefault();
//     const response = await axios.put(URI + id, {
//         mala_consum: malaConsum,
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
//     clearFields();
//     window.location.reload(); 
//   };
//   useEffect(() => {
//     const getMalasPracticasById = async () => {
//       const response = await axios.get(URI + id);
//       setMalaConsum(response.data.mala_consum);
//       setDoblesPuertas(response.data.dobles_puertas);
//       setActiPersonal(response.data.acti_personal);
//       setIncumplAforo(response.data.incumpl_aforo);
//       setIncumplNorma(response.data.incumpl_norma);
//       setMolestiasLocal(response.data.Molestias_local);
//       setConsumAbus(response.data.consum_abus);
//       setConsumDrogas(response.data.consum_drogas);
//       setObservMala(response.data.observ_malas);

//       setIncAcceso(response.data.inc_acceso);
//       setIncAccesoDesc(response.data.inc_acceso_desc);
//       setExpulsArbitrarias(response.data.expuls_arbitrarias);
//       setExpulsArbitrariasDesc(response.data.expuls_arbitrarias_desc);
//       setAltercados(response.data.altercados);
//       setAltercadosDesc(response.data.altercados_desc);
//       setObservIncid(response.data.observ_incid);
//     };

//     getMalasPracticasById();
//   }, [id]);


//   return (
//     <div className='form-container'>
//       <h3>FICHA MALAS PRÁCTICAS</h3>
//       <Form onSubmit={update} className='my-form'>
//       <p>Marca aquellas que SI se cumplan</p>
//       <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Mala calidad consumiciones: </label>
//             <input type='checkbox' checked={malaConsum} onChange={() => setMalaConsum((prev) => !prev)} />
//          </div> <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Mala calidad consumiciones:</label>
//             <input type='checkbox' checked={doblesPuertas} onChange={() => setDoblesPuertas((prev) => !prev)} />
//          </div> <br />

//           <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Actitud personal:</label>
//             <input type='checkbox' checked={actiPersonal} onChange={() => setActiPersonal((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Incumplimiento normativa aforos:</label>
//             <input type='checkbox' checked={incumplAforo} onChange={() => setIncumplAforo((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Incumplimiento normativa horarios:</label>
//             <input type='checkbox' checked={incumplNorma} onChange={() => setIncumplNorma((prev) => !prev)} />
//          </div>  <br /> 

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Molestias y ruidos provocados por el local:</label>
//             <input type='checkbox' checked={molestiasLocal} onChange={() => setMolestiasLocal((prev) => !prev)} />
//          </div>  <br /> 

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Consumos abusivos de alcohol:</label>
//             <input type='checkbox' checked={consumAbus} onChange={() => setConsumAbus((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Permisibilidad consumo drogas:</label>
//             <input type='checkbox' checked={consumDrogas} onChange={() => setConsumDrogas((prev) => !prev)} />
//          </div>  <br />

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
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Problemas de acceso:</label>
//             <input type='checkbox' checked={incAcceso} onChange={() => { setIncAcceso((prev) => !prev);
//             if (!incAcceso) {
//                 setIncAccesoDesc('') }} } />
//             {incAcceso && (
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Sí, Describir Problemas de acceso</label>
//                     <input value={incAccesoDesc} type="text" className="form-control"
//                     onChange={(e) => setIncAccesoDesc(e.target.value)}  />
//                 </div>  )}  
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Expulsiones arbitrarias:</label>
//             <input type='checkbox' checked={expulsArbitrarias} onChange={() => { setExpulsArbitrarias((prev) => !prev);
//             if (!expulsArbitrarias) {
//                 setExpulsArbitrariasDesc('') }} } />
//             {expulsArbitrarias && (
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Sí, Describir Expulsiones arbitrarias</label>
//                     <input value={expulsArbitrariasDesc} type="text" className="form-control"
//                     onChange={(e) => setExpulsArbitrariasDesc(e.target.value)}  />
//                 </div>  )}  
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Altercados:</label>
//             <input type='checkbox' checked={altercados} onChange={() => { setAltercados((prev) => !prev);
//             if (!altercados) {
//                 setAltercadosDesc(null) }} } />
//             {altercados && (
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Sí, Describir altercados</label>
//                     <input value={altercadosDesc} type="text" className="form-control"
//                     onChange={(e) => setAltercadosDesc(e.target.value)}  />
//                 </div>  )}  
//          </div>  <br />
//          <div className='mb-3'>
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

//         <div className='mt-3'>
// <button type='submit' className='btn btn-primary'>
//   Guardar
// </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default CompEditMalaPracticas;


import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const URI = api + 'rscmala/';

const CompEditMalaPracticas = ({ id, getEncuestas, abrirModal }) => {
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

  const userId = localStorage.getItem('userId');
  const encuestaId = localStorage.getItem('encuestaId1');

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

  const update = async (e) => {
    e.preventDefault();
    const response = await axios.put(URI + id, {
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
    // clearFields();
    // window.location.reload();
    getEncuestas();
    abrirModal()
  };

  useEffect(() => {
    const getMalasPracticasById = async () => {
      const response = await axios.get(URI + id);
      setMalaConsum(response.data.mala_consum);
      setDoblesPuertas(response.data.dobles_puertas);
      setActiPersonal(response.data.acti_personal);
      setIncumplAforo(response.data.incumpl_aforo);
      setIncumplNorma(response.data.incumpl_norma);
      setMolestiasLocal(response.data.Molestias_local);
      setConsumAbus(response.data.consum_abus);
      setConsumDrogas(response.data.consum_drogas);
      setObservMala(response.data.observ_malas);

      setIncAcceso(response.data.inc_acceso);
      setIncAccesoDesc(response.data.inc_acceso_desc);
      setExpulsArbitrarias(response.data.expuls_arbitrarias);
      setExpulsArbitrariasDesc(response.data.expuls_arbitrarias_desc);
      setAltercados(response.data.altercados);
      setAltercadosDesc(response.data.altercados_desc);
      setObservIncid(response.data.observ_incid);
    };

    getMalasPracticasById();
  }, [id]);

  return (
    // <div className='form-container'>
    <div style={{ padding: '32px 62px' }} className="my-form">
      <h3>FICHA MALAS PRÁCTICAS</h3>
      <Form onSubmit={update} >
        <p>Marca aquellas que SI se cumplan</p>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Mala calidad consumiciones"
              checked={malaConsum}
              onChange={() => setMalaConsum((prev) => !prev)}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Dobles puertas"
              checked={doblesPuertas}
              onChange={() => setDoblesPuertas((prev) => !prev)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Actitud personal"
              checked={actiPersonal}
              onChange={() => setActiPersonal((prev) => !prev)}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Incumplimiento normativa aforos"
              checked={incumplAforo}
              onChange={() => setIncumplAforo((prev) => !prev)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Incumplimiento normativa horarios"
              checked={incumplNorma}
              onChange={() => setIncumplNorma((prev) => !prev)}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Molestias y ruidos provocados por el local"
              checked={molestiasLocal}
              onChange={() => setMolestiasLocal((prev) => !prev)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Consumos abusivos de alcohol"
              checked={consumAbus}
              onChange={() => setConsumAbus((prev) => !prev)}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Permisibilidad consumo drogas"
              checked={consumDrogas}
              onChange={() => setConsumDrogas((prev) => !prev)}
            />
          </Col>
        </Row>

        <div className='mb-3'>
          <Form.Group controlId="observMala">
            <Form.Label>Observaciones (Módulo Malas Prácticas)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={observMala}
              onChange={(e) => setObservMala(e.target.value)}
            />
          </Form.Group>
        </div>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Problemas de acceso"
              checked={incAcceso}
              onChange={() => {
                setIncAcceso((prev) => !prev);
                if (!incAcceso) {
                  setIncAccesoDesc('');
                }
              }}
            />
            {incAcceso && (
              <Form.Group controlId="incAccesoDesc">
                <Form.Label>Describir Problemas de acceso</Form.Label>
                <Form.Control
                  type="text"
                  value={incAccesoDesc}
                  onChange={(e) => setIncAccesoDesc(e.target.value)}
                />
              </Form.Group>
            )}
          </Col>

          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Expulsiones arbitrarias"
              checked={expulsArbitrarias}
              onChange={() => {
                setExpulsArbitrarias((prev) => !prev);
                if (!expulsArbitrarias) {
                  setExpulsArbitrariasDesc('');
                }
              }}
            />
            {expulsArbitrarias && (
              <Form.Group controlId="expulsArbitrariasDesc">
                <Form.Label>Describir Expulsiones arbitrarias</Form.Label>
                <Form.Control
                  type="text"
                  value={expulsArbitrariasDesc}
                  onChange={(e) => setExpulsArbitrariasDesc(e.target.value)}
                />
              </Form.Group>
            )}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Check
              type="checkbox"
              label="Altercados"
              checked={altercados}
              onChange={() => {
                setAltercados((prev) => !prev);
                if (!altercados) {
                  setAltercadosDesc('');
                }
              }}
            />
            {altercados && (
              <Form.Group controlId="altercadosDesc">
                <Form.Label>Describir altercados</Form.Label>
                <Form.Control
                  type="text"
                  value={altercadosDesc}
                  onChange={(e) => setAltercadosDesc(e.target.value)}
                />
              </Form.Group>
            )}
          </Col>
        </Row>

        <div className='mb-3'>
          <Form.Group controlId="observIncid">
            <Form.Label>Observaciones (Incidencias)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={observIncid}
              onChange={(e) => setObservIncid(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-primary'>
            Guardar
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CompEditMalaPracticas;
