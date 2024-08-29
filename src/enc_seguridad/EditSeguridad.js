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
// //import ShowModal from '../enc_/ShowCreate';


// const URI = api+'seguridad/'
// const CompEditEncuesta = ({id}) => {
//     const [encuestas, setEncuesta] = useState(new Date());
//     const [evacuacion_entrada, setEvacuacionEntrada] = useState(false);
//     const [evacuacion_pista, setEvacuacionPista] = useState(false);
//     const [evacuacion_accesoWC, setEvacuacionAccesoWC] =useState(false);
//     const [evacuacion_barras, setEvacuacionBarra] = useState(false);
//     const [evacuacion_otro, setEvacuacionOtro] = useState('');
//     const [evacuacionO, setEvacuacionO] = useState('');
//     const [controlaforo, setControlaforo] = useState(false);
//     const [Camaras, setCamaras] = useState(false);
//     const [ocupacion, setOcupacion] = useState('');
//     const [Observ_segur, setObservSegur] = useState('');
//     const [hora_actv, setHoraActv] = useState('');
//     const [Pago_efectivo, setPagoEfectivo] = useState(false);
//     const [Pago_tarjeta, setPagoTarjeta] = useState(false);
//     const [Pago_cashless, setPagoCashless] = useState(false);
//     const [Pago_bizum, setPagoBizum] = useState(false);
//     const [Cuño, setCuño] = useState(false);
//     const [Cuño_precio, setCuñoPrecio] = useState('');
//     const [observ_func, setObservFunc] = useState('');

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
//         setObservSegur('');

//       };


//     const navigate = useNavigate()    
//     const handlePagoEfectivoChange = () => {
//       setPagoEfectivo((prev) => !prev);
//     };

//     const handlePagoTarjetaChange = () => {
//       setPagoTarjeta((prev) => !prev);
//     };

//     const handlePagoCashlessChange = () => {
//       setPagoCashless((prev) => !prev);
//     };

//     const handlePagoBizumChange = () => {
//       setPagoBizum((prev) => !prev);
//     };
//     //procedimiento guardar
//     const update = async (e) => {
//         e.preventDefault();
//         setHasErrors(false);

//         // Verificar campos obligatorios
//         const requiredFields = [ observ_func];
//         const emptyFields = requiredFields.filter(field => field === '');


//         try {
//           //const opcionesGuardadas = ['Pista', 'Acceso WC', 'Barras', 'Entrada', 'KASH'];
// //const textoParaBD = convertArrayToText(opcionesGuardadas);
// // Ahora `textoParaBD` contiene 'Pista-Acceso WC-Barras-Entrada-KASH'


//           // Realiza la solicitud POST aquí con los datos de la encuesta
//           const response = await axios.put(URI + id, {
//             evacuacion_entrada: evacuacion_entrada,
//             evacuacion_pista: evacuacion_pista,
//             evacuacion_accesoWC: evacuacion_accesoWC,
//             evacuacion_barras: evacuacion_barras,
//             evacuacion_otro: evacuacion_otro,
//             controlaforo: controlaforo,
//             Camaras: Camaras,
//             ocupacion: ocupacion,
//             Observ_segur: Observ_segur,
//             hora_actv: hora_actv,
//             Pago_efectivo: Pago_efectivo,
//             Pago_tarjeta: Pago_tarjeta,
//             Pago_cashless: Pago_cashless,
//             Pago_bizum: Pago_bizum,
//             Cuño: Cuño,
//             Cuño_precio: Cuño_precio,
//             observ_func: observ_func
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

//             setEvacuacionAccesoWC(res.data.evacuacion_accesoWC)
//             setEvacuacionBarra(res.data.evacuacion_barras)
//             setEvacuacionEntrada(res.data.evacuacion_entrada)
//             setEvacuacionPista(res.data.evacuacion_pista)
//             setEvacuacionOtro(res.data.evacuacion_otro)
//             setEvacuacionO(res.data.evacuacion_otro !== '' ? 'otro' : '');
//             setControlaforo(res.data.controlaforo)
//             setCamaras(res.data.Camaras)
//             setOcupacion(res.data.ocupacion)
//             setObservSegur(res.data.Observ_segur)
//             setHoraActv(res.data.hora_actv)
//             setPagoTarjeta(res.data.Pago_tarjeta)
//             setPagoEfectivo(res.data.Pago_efectivo)
//             setPagoCashless(res.data.Pago_cashless)
//             setPagoBizum(res.data.Pago_bizum)
//             setCuño(res.data.Cuño)
//             setCuñoPrecio(res.data.Cuño_precio)
//             setObservFunc(res.data.observ_func)

//         }
//         getUserById();
//     }, [id]);



//     return (
//         <div className='form-container'>

//            <h3>FICHA SEGURIDAD</h3>
//            <Form onSubmit={update} className="my-form"> 


//            <div style={{ textAlign: 'left' }}>
//   <label className='parent-label form-label'>Señalética seguridad: ¿vías evacuación?</label>
//   {/* Opciones de vías de evacuación */}
//   <br/>
//   <input
//     type="checkbox"
//     checked={evacuacion_entrada}
//     onChange={() => setEvacuacionEntrada(prev => !prev)}
//   /> Entrada
//   <br/>
//   <input
//     type="checkbox"
//     checked={evacuacion_pista}
//     onChange={() => setEvacuacionPista(prev => !prev)}
//   /> Pista
//   <br/>
//   <input
//     type="checkbox"
//     checked={evacuacion_accesoWC}
//     onChange={() => setEvacuacionAccesoWC(prev => !prev)}
//   /> Acceso WC
//   <br/>
//   <input
//     type="checkbox"
//     checked={evacuacion_barras}
//     onChange={() => setEvacuacionBarra(prev => !prev)}
//   /> Barras
//   <br/>
//   <input
//   type="checkbox"
//   checked={evacuacionO}
//   onChange={() => {
//     setEvacuacionO((prev) => !prev);
//     if (!evacuacionO) {
//       setEvacuacionOtro(''); // Establecer evacuacion_otro en vacío si se desmarca
//     }
//   }}
// /> Otras
// <br />
//   {evacuacionO && (
//     <div>
//       <label>Otras vías de evacuación:</label>
//       <input
//         type="text"
//         value={evacuacion_otro}
//         onChange={(e) => setEvacuacionOtro(e.target.value)}
//       />
//     </div>
//   )}
// </div>


//       <div>
//             <label className='parent-label form-label'>Sistema control aforos:</label>
//                 <Form.Select
//                 value={controlaforo ? "Si" : "No"}
//                 onChange={(e) => setControlaforo(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>

//         <div>
//             <label className='parent-label form-label'>Camaras de vigilancia:</label>
//                 <Form.Select
//                 value={Camaras ? "Si" : "No"}
//                 onChange={(e) => setCamaras(e.target.value === "Si" ? true : false)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>


//         <div>
//             <label className='parent-label form-label'>Grado de ocupacion:</label>
//                 <Form.Select
//                 value={ocupacion}
//                 onChange={(e) => setOcupacion(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Muy saturado">Muy saturado</option>
//                     <option value="Bastante saturado">Bastante saturado</option>
//                     <option value="Poco saturado">Poco saturado</option>
//                     <option value="Nada saturado">Nada saturado</option>

//             </Form.Select>
//         </div>


//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo de Seguridad):</label>
//                 <input
//                 value={Observ_segur}
//                 onChange={(e) => setObservSegur(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>
//             <label className='parent-label form-label'>Funcionamiento General</label>
//             <div>
//     <label className='parent-label form-label'>En que horario se produce el pico de más actividad:</label>
//     <Form.Select
//         value={hora_actv}
//         onChange={(e) => setHoraActv(e.target.value)}>
//         <option value="">Selecciona una opción</option>
//         <option value="Por la tarde">Por la tarde</option>
//         <option value="De 24:00h a 2:00h">De 24:00h a 2:00h</option>
//         <option value="De 2:00h a 4:00h">De 2:00h a 4:00h</option>
//         <option value="De 4:00 a cierre">De 4:00 a cierre</option>
//     </Form.Select>
// </div>


// <div style={{ textAlign: 'left' }}>
//   <label className='parent-label form-label'>Sistema de pago:</label>
//   <br/>
//   <input
//     type="checkbox"
//     checked={Pago_efectivo}
//     onChange={handlePagoEfectivoChange}
//   /> Efectivo
//   <br/>
//   <input
//     type="checkbox"
//     checked={Pago_tarjeta}
//     onChange={handlePagoTarjetaChange}
//   /> Tarjeta
//   <br/>
//   <input
//     type="checkbox"
//     checked={Pago_cashless}
//     onChange={handlePagoCashlessChange}
//   /> Cashless
//   <br/>
//   <input
//     type="checkbox"
//     checked={Pago_bizum}
//     onChange={handlePagoBizumChange}
//   /> Bizum
//   <br/>
// </div>


// <div>
//             <label className='parent-label form-label'>Cuño salida::</label>
//                 <Form.Select
//                 value={Cuño ? "Si" : "No"}
//                 onChange={(e) => {setCuño(e.target.value === "Si" ? true : false);
//                   if (e.target.value === "No") { setCuñoPrecio(0);} }}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//             {Cuño && (
//   <div>
//     <label className='parent-label form-label'>Precio Cuño:</label>
//     <input
//       type="text"
//       value={Cuño_precio}
//       onChange={(e) => setCuñoPrecio(e.target.value)}
//     />
//   </div>
// )}
//         </div>
//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo Funcionamiento general):</label>
//                 <input
//                 value={observ_func}
//                 onChange={(e) => setObservFunc(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>






//                 <div className="mt-3"> {/* Add margin-top for spacing */}
//                     <button  type='submit'className='btn btn-success btn-ladda'>
//                     Modificar Seguridad
//                     </button>
//                 </div>
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
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'seguridad/';
const CompEditEncuesta = ({ id }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [evacuacion_entrada, setEvacuacionEntrada] = useState(false);
  const [evacuacion_pista, setEvacuacionPista] = useState(false);
  const [evacuacion_accesoWC, setEvacuacionAccesoWC] = useState(false);
  const [evacuacion_barras, setEvacuacionBarra] = useState(false);
  const [evacuacion_otro, setEvacuacionOtro] = useState('');
  const [evacuacionO, setEvacuacionO] = useState('');
  const [controlaforo, setControlaforo] = useState(false);
  const [Camaras, setCamaras] = useState(false);
  const [ocupacion, setOcupacion] = useState('');
  const [Observ_segur, setObservSegur] = useState('');
  const [hora_actv, setHoraActv] = useState('');
  const [Pago_efectivo, setPagoEfectivo] = useState(false);
  const [Pago_tarjeta, setPagoTarjeta] = useState(false);
  const [Pago_cashless, setPagoCashless] = useState(false);
  const [Pago_bizum, setPagoBizum] = useState(false);
  const [Cuño, setCuño] = useState(false);
  const [Cuño_precio, setCuñoPrecio] = useState('');
  const [observ_func, setObservFunc] = useState('');

  const [encuestaMarca, setSearchMarca] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userId');
  const encuestaId = localStorage.getItem('encuestaId1');

  const clearFields = () => {
    setObservSegur('');
  };

  const navigate = useNavigate();

  const handlePagoEfectivoChange = () => {
    setPagoEfectivo((prev) => !prev);
  };

  const handlePagoTarjetaChange = () => {
    setPagoTarjeta((prev) => !prev);
  };

  const handlePagoCashlessChange = () => {
    setPagoCashless((prev) => !prev);
  };

  const handlePagoBizumChange = () => {
    setPagoBizum((prev) => !prev);
  };

  const update = async (e) => {
    e.preventDefault();
    setHasErrors(false);

    try {
      const response = await axios.put(URI + id, {
        evacuacion_entrada,
        evacuacion_pista,
        evacuacion_accesoWC,
        evacuacion_barras,
        evacuacion_otro,
        controlaforo,
        Camaras,
        ocupacion,
        Observ_segur,
        hora_actv,
        Pago_efectivo,
        Pago_tarjeta,
        Pago_cashless,
        Pago_bizum,
        Cuño,
        Cuño_precio,
        observ_func
      });
      clearFields();
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const res = await axios.get(URI + id);
      setEvacuacionAccesoWC(res.data.evacuacion_accesoWC);
      setEvacuacionBarra(res.data.evacuacion_barras);
      setEvacuacionEntrada(res.data.evacuacion_entrada);
      setEvacuacionPista(res.data.evacuacion_pista);
      setEvacuacionOtro(res.data.evacuacion_otro);
      setEvacuacionO(res.data.evacuacion_otro !== '' ? 'otro' : '');
      setControlaforo(res.data.controlaforo);
      setCamaras(res.data.Camaras);
      setOcupacion(res.data.ocupacion);
      setObservSegur(res.data.Observ_segur);
      setHoraActv(res.data.hora_actv);
      setPagoTarjeta(res.data.Pago_tarjeta);
      setPagoEfectivo(res.data.Pago_efectivo);
      setPagoCashless(res.data.Pago_cashless);
      setPagoBizum(res.data.Pago_bizum);
      setCuño(res.data.Cuño);
      setCuñoPrecio(res.data.Cuño_precio);
      setObservFunc(res.data.observ_func);
    };
    getUserById();
  }, [id]);

  return (
    <div className='container form-container mt-4'>
      <h3 className="text-center">FICHA SEGURIDAD</h3>
      <Form onSubmit={update} className="my-form">
        <div className="mb-3">
          <label className='parent-label form-label'>Señalética seguridad: ¿vías evacuación?</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={evacuacion_entrada}
              onChange={() => setEvacuacionEntrada(prev => !prev)} />
            <label className="form-check-label">Entrada</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={evacuacion_pista}
              onChange={() => setEvacuacionPista(prev => !prev)} />
            <label className="form-check-label">Pista</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={evacuacion_accesoWC}
              onChange={() => setEvacuacionAccesoWC(prev => !prev)} />
            <label className="form-check-label">Acceso WC</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={evacuacion_barras}
              onChange={() => setEvacuacionBarra(prev => !prev)} />
            <label className="form-check-label">Barras</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={evacuacionO}
              onChange={() => {
                setEvacuacionO((prev) => !prev);
                if (!evacuacionO) {
                  setEvacuacionOtro('');
                }
              }} />
            <label className="form-check-label">Otras</label>
          </div>
          {evacuacionO && (
            <div className="mt-2">
              <label>Otras vías de evacuación:</label>
              <input type="text" className="form-control" value={evacuacion_otro}
                onChange={(e) => setEvacuacionOtro(e.target.value)} />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Sistema control aforos:</label>
          <Form.Select
            value={controlaforo ? "Si" : "No"}
            onChange={(e) => setControlaforo(e.target.value === "Si" ? true : false)}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Camaras de vigilancia:</label>
          <Form.Select
            value={Camaras ? "Si" : "No"}
            onChange={(e) => setCamaras(e.target.value === "Si" ? true : false)}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Grado de ocupacion:</label>
          <Form.Select
            value={ocupacion}
            onChange={(e) => setOcupacion(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Muy saturado">Muy saturado</option>
            <option value="Bastante saturado">Bastante saturado</option>
            <option value="Poco saturado">Poco saturado</option>
            <option value="Nada saturado">Nada saturado</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo de Seguridad):</label>
          <input
            value={Observ_segur}
            onChange={(e) => setObservSegur(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <label className='parent-label form-label'>Funcionamiento General</label>
        <div className="mb-3">
          <label className='parent-label form-label'>En que horario se produce el pico de más actividad:</label>
          <Form.Select
            value={hora_actv}
            onChange={(e) => setHoraActv(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Por la tarde">Por la tarde</option>
            <option value="De 24:00h a 2:00h">De 24:00h a 2:00h</option>
            <option value="De 2:00h a 4:00h">De 2:00h a 4:00h</option>
            <option value="De 4:00 a cierre">De 4:00 a cierre</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Sistema de pago:</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Pago_efectivo}
              onChange={handlePagoEfectivoChange}
            />
            <label className="form-check-label">Efectivo</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Pago_tarjeta}
              onChange={handlePagoTarjetaChange}
            />
            <label className="form-check-label">Tarjeta</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Pago_cashless}
              onChange={handlePagoCashlessChange}
            />
            <label className="form-check-label">Cashless</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Pago_bizum}
              onChange={handlePagoBizumChange}
            />
            <label className="form-check-label">Bizum</label>
          </div>
        </div>

        <div className="mb-3">
          <label className='parent-label form-label'>Cuño salida:</label>
          <Form.Select
            value={Cuño ? "Si" : "No"}
            onChange={(e) => {
              setCuño(e.target.value === "Si" ? true : false);
              if (e.target.value === "No") { setCuñoPrecio(0); }
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
          {Cuño && (
            <div className="mt-2">
              <label className='form-label'>Precio Cuño:</label>
              <input
                type="text"
                className="form-control"
                value={Cuño_precio}
                onChange={(e) => setCuñoPrecio(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo Funcionamiento general):</label>
          <input
            value={observ_func}
            onChange={(e) => setObservFunc(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className="mt-3 text-center">
          <button type='submit' className='btn btn-success btn-ladda'>
            Modificar Seguridad
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CompEditEncuesta;
