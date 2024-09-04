// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../servicios/api';
// import React from 'react';
// import { Form } from 'react-bootstrap';

// const URI = api + 'rscbuena/';

// const CompEditBuenasPracticas = ({id}) => {
//   const [infoOnline, setInfoOline] = useState('');
//   const [medicionSala, setMedicionSala] = useState(false);
//   const [ruido, setRuido] = useState(false);
//   const [seguridadVial, setSeguridadVial] = useState(false);
//   const [puntoViolencia, setPuntoViolencia] = useState(false);
//   const [responsabilidadBebidas, setResponsabilidadBebidas] = useState(false);
//   const [reciclaje, setReciclaje] = useState(false);
//   const [selloCalidad, setSelloCalidad] = useState(false);
//   const [observaciones, setObservaciones] = useState('');

//   const userId = localStorage.getItem('userId');
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
//   const update = async (e) => {
//     e.preventDefault();
//     const response = await axios.put(URI + id, {
//         info_online: infoOnline,
//       mediacion_sala: medicionSala,
//       ruido: ruido,
//       seg_vial: seguridadVial,
//       Punto_viol: puntoViolencia,
//       respon_bebidas: responsabilidadBebidas,
//       reciclaje: reciclaje,
//       sello_calidad: selloCalidad,
//       observ_buenas: observaciones,
//     });
//     clearFields();
//     window.location.reload(); 
//     // Puedes redirigir o hacer otras acciones después de enviar el formulario
//   };
//   useEffect(() => {
//     // Incluye getBlogById en el array de dependencias
//     const getUserById = async () => {
//         const response = await axios.get(URI + id)
//         setInfoOline(response.data.info_online);
//         setMedicionSala(response.data.mediacion_sala);
//         setRuido(response.data.ruido);
//         setSeguridadVial(response.data.seg_vial);
//         setPuntoViolencia(response.data.Punto_viol);
//         setResponsabilidadBebidas(response.data.respon_bebidas);
//         setReciclaje(response.data.reciclaje);
//         setSelloCalidad(response.data.sello_calidad);
//         setObservaciones(response.data.observ_buenas);
//     }

//     getUserById();
// }, [id]);

//   return (
//     <div className='form-container'>
//       <h3>FICHA BUENAS PRÁCTICAS</h3>
//       <Form onSubmit={update} className='my-form'>
//       <p>Seleccionas Aquellas que SI se cumplan</p>
//       <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Realiza campañas informativas online:</label>
//             <input type='checkbox' checked={infoOnline} onChange={() => setInfoOline((prev) => !prev)} />
//          </div> <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Personal mediación en sala:</label>
//             <input type='checkbox' checked={medicionSala} onChange={() => setMedicionSala((prev) => !prev)} />
//          </div> <br />

//           <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Ruido:</label>
//             <input type='checkbox' checked={ruido} onChange={() => setRuido((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Seguridad Vial:</label>
//             <input type='checkbox' checked={seguridadVial} onChange={() => setSeguridadVial((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Punto Violeta:</label>
//             <input type='checkbox' checked={puntoViolencia} onChange={() => setPuntoViolencia((prev) => !prev)} />
//          </div>  <br /> 

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Dispensación responsable de bebidas alcohólicas:</label>
//             <input type='checkbox' checked={responsabilidadBebidas} onChange={() => setResponsabilidadBebidas((prev) => !prev)} />
//          </div>  <br /> 

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Reciclaje y sostenibilidad:</label>
//             <input type='checkbox' checked={reciclaje} onChange={() => setReciclaje((prev) => !prev)} />
//          </div>  <br />

//          <div style={{ textAlign: 'left' }}>
//             <label className='parent-label form-label' style={{ marginRight: '10px' }}>Sello de Calidad:</label>
//             <input type='checkbox' checked={selloCalidad} onChange={() => setSelloCalidad((prev) => !prev)} />
//          </div>  <br />

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

//         <div className='mt-3'>
//           <button type='submit' className='btn btn-primary'>
//             Guardar
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default CompEditBuenasPracticas;


import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../servicios/api';
import React from 'react';
import { Form } from 'react-bootstrap';

const URI = api + 'rscbuena/';

const CompEditBuenasPracticas = ({ id, getEncuestas, abrirModal }) => {
  const [infoOnline, setInfoOline] = useState('');
  const [medicionSala, setMedicionSala] = useState(false);
  const [ruido, setRuido] = useState(false);
  const [seguridadVial, setSeguridadVial] = useState(false);
  const [puntoViolencia, setPuntoViolencia] = useState(false);
  const [responsabilidadBebidas, setResponsabilidadBebidas] = useState(false);
  const [reciclaje, setReciclaje] = useState(false);
  const [selloCalidad, setSelloCalidad] = useState(false);
  const [observaciones, setObservaciones] = useState('');

  const userId = localStorage.getItem('userId');
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

  const update = async (e) => {
    e.preventDefault();
    const response = await axios.put(URI + id, {
      info_online: infoOnline,
      mediacion_sala: medicionSala,
      ruido: ruido,
      seg_vial: seguridadVial,
      Punto_viol: puntoViolencia,
      respon_bebidas: responsabilidadBebidas,
      reciclaje: reciclaje,
      sello_calidad: selloCalidad,
      observ_buenas: observaciones,
    });
    // clearFields();
    // window.location.reload();
    getEncuestas();
    abrirModal()
  };

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(URI + id)
      setInfoOline(response.data.info_online);
      setMedicionSala(response.data.mediacion_sala);
      setRuido(response.data.ruido);
      setSeguridadVial(response.data.seg_vial);
      setPuntoViolencia(response.data.Punto_viol);
      setResponsabilidadBebidas(response.data.respon_bebidas);
      setReciclaje(response.data.reciclaje);
      setSelloCalidad(response.data.sello_calidad);
      setObservaciones(response.data.observ_buenas);
    };

    getUserById();
  }, [id]);

  return (
    // <div className='container form-container my-4' style={{ padding: '32px 62px' }}>
    <div className="my-form form-style">
      <h3>FICHA BUENAS PRÁCTICAS</h3>
      <Form onSubmit={update} >
        <p>Seleccionas Aquellas que SI se cumplan</p>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Realiza campañas informativas online:</label>
          <input type='checkbox' checked={infoOnline} onChange={() => setInfoOline((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Personal mediación en sala:</label>
          <input type='checkbox' checked={medicionSala} onChange={() => setMedicionSala((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Ruido:</label>
          <input type='checkbox' checked={ruido} onChange={() => setRuido((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Seguridad Vial:</label>
          <input type='checkbox' checked={seguridadVial} onChange={() => setSeguridadVial((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Punto Violeta:</label>
          <input type='checkbox' checked={puntoViolencia} onChange={() => setPuntoViolencia((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Dispensación responsable de bebidas alcohólicas:</label>
          <input type='checkbox' checked={responsabilidadBebidas} onChange={() => setResponsabilidadBebidas((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Reciclaje y sostenibilidad:</label>
          <input type='checkbox' checked={reciclaje} onChange={() => setReciclaje((prev) => !prev)} />
        </div>

        <div className='form-group d-flex align-items-center mb-3'>
          <label className='flex-grow-1'>Sello de Calidad:</label>
          <input type='checkbox' checked={selloCalidad} onChange={() => setSelloCalidad((prev) => !prev)} />
        </div>

        <div className='form-group'>
          <label>Observaciones:</label>
          <input
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-primary w-auto'>
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

export default CompEditBuenasPracticas;
