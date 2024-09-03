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


// const URI = api+'instalacion/'
// const opcionesPista = ["25m2", "25m2 y 50m2", "Más de 50m2"];
// const options = [
//     { value: "", label: "Elige una opcion" },
//     { value: "Si", label: "Si" },
//     { value: "No", label: "No" },
//   ];
// const options_bu = [
//     { value: "", label: "Elige una opcion" },
//     { value: "Muy Bueno", label: "Muy Bueno" },
//     { value: "Bastante bueno", label: "Bastante bueno" },
//     { value: "Bastante malo", label: "Bastante malo" },
//     { value: "Muy Malo", label: "Muy Malo" },
//   ];



// const CompEditEncuesta = ({id}) => {
//     const [encuestas, setEncuesta] = useState(new Date());
//     const [pista, setPista] =  useState('');
//   const [escenario, setEscenario] =  useState('');
//   const [zonamesas, setZonamesas] =  useState('');
//   const [perc_mesas, setPerc_mesas] =  useState('');
//   const [barras, setBarras] =  useState('');
//   const [barrasmetros, setBarrasmetros] =  useState('');
//   const [barraspersons, setBarraspersons] =  useState('');
//   const [decoracion, setDecoracion] =  useState('');
//   const [decoracionO, setDecoracionO] =  useState('');
//   const [climatizacion, setClimatizacion] =  useState('');
//   const [climat_temp, setClimat_temp] =  useState('');
//   const [limp_durante, setLimp_durante] =  useState('');
//   const [limp_ensesion, setLimp_ensesion] =  useState('');
//   const [Mantenimiento, setMantenimiento] =  useState('');
//   const [Observ_instal, setObserv_instal] =  useState('');
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
//         setObserv_instal('');
//         setMantenimiento('');

//       };


//     const navigate = useNavigate()    
//     const handleChangeDe = (e) => {
//         const selectedValue = e.target.value;
//         setDecoracion(selectedValue);
//         // Si el usuario selecciona "Otro", muestra el campo de texto
//         if (selectedValue === 'otro') {
//           setDecoracionO(''); // Reinicia el valor del campo de texto
//         }
//       };
//       const handleOtroChangeDe = (e) => {
//         const value = e.target.value;
//         setDecoracionO(value);
//       };

//     //procedimiento guardar
//     const update = async (e) => {
//       const valorFinalD = (decoracion === 'otro') ? decoracionO : decoracion;
//         e.preventDefault();
//         setHasErrors(false);

//         // Verificar campos obligatorios
//         const requiredFields = [pista, escenario];
//         const emptyFields = requiredFields.filter(field => field === '');


//         try {

//           // Realiza la solicitud POST aquí con los datos de la encuesta
//           const response = await axios.put(URI + id, {
//             pista: pista,
//             escenario: escenario,
//             zonamesas: zonamesas,
//             perc_mesas: perc_mesas,
//             barras: barras,
//             barrasmetros: barrasmetros,
//             barraspersons:barraspersons,
//             decoracion: valorFinalD,
//             climatizacion: climatizacion,
//             climat_temp: climat_temp,
//             limp_durante: limp_durante,
//             limp_ensesion: limp_ensesion,
//             Mantenimiento:Mantenimiento,
//             Observ_instal: Observ_instal
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
//             const res = await axios.get(URI + id)
//             setPista(res.data.pista)
//             setEscenario(res.data.escenario)
//             setZonamesas(res.data.zonamesas)
//             setPerc_mesas(res.data.perc_mesas)
//             setBarras(res.data.barras)
//             setBarrasmetros(res.data.barrasmetros)
//             setBarraspersons(res.data.barraspersons)
//             setDecoracion(res.data.decoracion)
//             setDecoracionO(res.data.decoracionO)
//             setClimatizacion(res.data.climatizacion)
//             setClimat_temp(res.data.climat_temp)
//             setLimp_durante(res.data.limp_durante)
//             setLimp_ensesion(res.data.limp_ensesion)
//             setMantenimiento(res.data.Mantenimiento)
//             setObserv_instal(res.data.Observ_instal)
//         }
//         getUserById();
//     }, [id]);



//     return (
//         <div className='form-container'>

//            <h3>FICHA FUNCIONAMIENTO E INSTALACIONES</h3>
//            <Form onSubmit={update} className="my-form"> 
//            <div>
//                 <label className='parent-label form-label'>Tamaño aprox. pista:</label>
//                  <Form.Select value={pista} onChange={(e) => setPista(e.target.value)}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="25m2">25m2</option>
//                     <option value="25m2 y 50m2">25m2 y 50m2</option>
//                     <option value="Más de 50m2">Más de 50m2</option>
//                     </Form.Select>
//             </div>

//             <div>
//                 <label className='parent-label form-label'>Escenario</label>
//                 <Form.Select
//                 value={escenario}
//                 onChange={(e) => setEscenario(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Dispone de zona de mesas (% ocupación superficie local):</label>
//                 <Form.Select
//                 value={zonamesas}
//                 onChange={(e) => setZonamesas(e.target.value)}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {zonamesas === 'Si' && (
//                 <div>
//                 <label className='parent-label form-label'>Sí, dispone de zona de mesas</label>
//                 <Form.Select
//                 value={perc_mesas}
//                 onChange={(e) => setPerc_mesas(e.target.value)}>
//                      <option value="">Selecciona una opción</option>
//                     <option value="Hasta 25%">Hasta 25%</option>
//                     <option value="Del 25% al 50%">Del 25% al 50%</option>
//                     <option value="Más del 50%">Más del 50%</option>

//             </Form.Select>
//         </div>)}
//         </div>

//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Número de barras</label>
//                 <input
//                 value={barras}
//                 onChange={(e) => setBarras(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Metros lineales totales</label>
//                 <input
//                 value={barrasmetros}
//                 onChange={(e) => setBarrasmetros(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className='parent-label form-label'>Número de personas trabajando:</label>
//                 <input
//                 value={barraspersons}
//                 onChange={(e) => setBarraspersons(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>

//             <div>
//                 <label className='parent-label form-label'>Decoración y originalidad:</label>
//                  <Form.Select value={decoracion} onChange={handleChangeDe}>
//                     {/* Opción por defecto */}
//                     <option value="">Selecciona una opción</option>
//                     <option value="Moderno/Espectacular">Moderno/Espectacular</option>
//                     <option value="Elegante/Clasico">Elegante/Clasico</option>
//                     <option value="Underground">Underground</option>
//                     <option value="otro">Otro</option>
//                     </Form.Select>
//                     {decoracion === 'otro' && (
//                         <div>
//                         <label>Otro:</label>
//                         <input
//                             type="text"
//                             value={decoracionO}
//                             onChange={handleOtroChangeDe}/>
//                         </div>)}
//                     </div>

//                 <div>
//                 <label className='parent-label form-label'>Climatización Temperatura:</label>
//                 <Form.Select
//                 value={climatizacion}
//                 onChange={(e) => setClimatizacion(e.target.value)}>
//                 {options.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//             {climatizacion === 'Si' && (
//                 <div>
//                 <label className='parent-label form-label'>Temperatura de la climatización</label>
//                 <Form.Select
//                 value={climat_temp}
//                 onChange={(e) => setClimat_temp(e.target.value)}>
//                      <option value="">Selecciona una opción</option>
//                     <option value="Calor">Calor</option>
//                     <option value="Frio">Frio</option>
//                     <option value="Agradable">Agradable</option>

//             </Form.Select>
//         </div>)}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Limpieza de los servicios durante la sesión:</label>
//                 <Form.Select
//                 value={limp_durante}
//                 onChange={(e) => setLimp_durante(e.target.value)}>
//                 {options_bu.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Limpieza de los servicios en sesión:</label>
//                 <Form.Select
//                 value={limp_ensesion}
//                 onChange={(e) => setLimp_ensesion(e.target.value)}>
//                     <option value="">Selecciona una opción</option>
//                     <option value="Si">Si</option>
//                     <option value="No">No</option>

//             </Form.Select>
//         </div>

//         <div>
//                 <label className='parent-label form-label'>Mantenimiento instalaciones:</label>
//                 <Form.Select
//                 value={Mantenimiento}
//                 onChange={(e) => setMantenimiento(e.target.value)}>
//                 {options_bu.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                 </option>
//             ))}
//             </Form.Select>

//             {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//         </div>

//         <div className='mb-3'>
//                 <label className='parent-label form-label'>Observaciones (Módulo de Instalaciones):</label>
//                 <input
//                 value={Observ_instal}
//                 onChange={(e) => setObserv_instal(e.target.value)}
//                 type="text"
//                 className='form-control'
//                 />
//             </div>


//                 <div className="mt-3"> {/* Add margin-top for spacing */}
//                     <button type='submit'className='btn btn-success btn-ladda'>
//                     Modificar Instalaciones
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
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'instalacion/';
const opcionesPista = ["25m2", "25m2 y 50m2", "Más de 50m2"];
const options = [
  { value: "", label: "Elige una opción" },
  { value: "Si", label: "Si" },
  { value: "No", label: "No" },
];
const options_bu = [
  { value: "", label: "Elige una opción" },
  { value: "Muy Bueno", label: "Muy Bueno" },
  { value: "Bastante bueno", label: "Bastante bueno" },
  { value: "Bastante malo", label: "Bastante malo" },
  { value: "Muy Malo", label: "Muy Malo" },
];

const CompEditEncuesta = ({ id, getEncuestas, abrirModal }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [pista, setPista] = useState('');
  const [escenario, setEscenario] = useState('');
  const [zonamesas, setZonamesas] = useState('');
  const [perc_mesas, setPerc_mesas] = useState('');
  const [barras, setBarras] = useState('');
  const [barrasmetros, setBarrasmetros] = useState('');
  const [barraspersons, setBarraspersons] = useState('');
  const [decoracion, setDecoracion] = useState('');
  const [decoracionO, setDecoracionO] = useState('');
  const [climatizacion, setClimatizacion] = useState('');
  const [climat_temp, setClimat_temp] = useState('');
  const [limp_durante, setLimp_durante] = useState('');
  const [limp_ensesion, setLimp_ensesion] = useState('');
  const [Mantenimiento, setMantenimiento] = useState('');
  const [Observ_instal, setObserv_instal] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const userId = localStorage.getItem('userId');
  const encuestaId = localStorage.getItem('encuestaId1');
  const navigate = useNavigate();

  const clearFields = () => {
    setObserv_instal('');
    setMantenimiento('');
  };

  const handleChangeDe = (e) => {
    const selectedValue = e.target.value;
    setDecoracion(selectedValue);
    if (selectedValue === 'otro') {
      setDecoracionO('');
    }
  };

  const handleOtroChangeDe = (e) => {
    const value = e.target.value;
    setDecoracionO(value);
  };

  const update = async (e) => {
    const valorFinalD = (decoracion === 'otro') ? decoracionO : decoracion;
    e.preventDefault();
    setHasErrors(false);

    try {
      await axios.put(URI + id, {
        pista: pista,
        escenario: escenario,
        zonamesas: zonamesas,
        perc_mesas: perc_mesas,
        barras: barras,
        barrasmetros: barrasmetros,
        barraspersons: barraspersons,
        decoracion: valorFinalD,
        climatizacion: climatizacion,
        climat_temp: climat_temp,
        limp_durante: limp_durante,
        limp_ensesion: limp_ensesion,
        Mantenimiento: Mantenimiento,
        Observ_instal: Observ_instal,
      });

      // clearFields();
      // window.location.reload();
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
      setPista(res.data.pista);
      setEscenario(res.data.escenario);
      setZonamesas(res.data.zonamesas);
      setPerc_mesas(res.data.perc_mesas);
      setBarras(res.data.barras);
      setBarrasmetros(res.data.barrasmetros);
      setBarraspersons(res.data.barraspersons);
      setDecoracion(res.data.decoracion);
      setDecoracionO(res.data.decoracionO);
      setClimatizacion(res.data.climatizacion);
      setClimat_temp(res.data.climat_temp);
      setLimp_durante(res.data.limp_durante);
      setLimp_ensesion(res.data.limp_ensesion);
      setMantenimiento(res.data.Mantenimiento);
      setObserv_instal(res.data.Observ_instal);
    };
    getUserById();
  }, [id]);

  return (
    // <div className='form-container'>
    <div style={{ padding: '32px 62px' }} className="my-form">
      <h3>FICHA FUNCIONAMIENTO E INSTALACIONES</h3>
      <Form onSubmit={update} className="my-form">
        <div className='mb-3'>
          <label className='parent-label form-label'>Tamaño aprox. pista:</label>
          <Form.Select value={pista} onChange={(e) => setPista(e.target.value)} className="form-control">
            <option value="">Selecciona una opción</option>
            <option value="25m2">25m2</option>
            <option value="25m2 y 50m2">25m2 y 50m2</option>
            <option value="Más de 50m2">Más de 50m2</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Escenario</label>
          <Form.Select value={escenario} onChange={(e) => setEscenario(e.target.value)} className="form-control">
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Dispone de zona de mesas (% ocupación superficie local):</label>
          <Form.Select value={zonamesas} onChange={(e) => setZonamesas(e.target.value)} className="form-control">
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {zonamesas === 'Si' && (
            <div className='mt-3'>
              <label className='parent-label form-label'>Sí, dispone de zona de mesas</label>
              <Form.Select value={perc_mesas} onChange={(e) => setPerc_mesas(e.target.value)} className="form-control">
                <option value="">Selecciona una opción</option>
                <option value="Hasta 25%">Hasta 25%</option>
                <option value="Del 25% al 50%">Del 25% al 50%</option>
                <option value="Más del 50%">Más del 50%</option>
              </Form.Select>
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Número de barras</label>
          <input value={barras} onChange={(e) => setBarras(e.target.value)} type="text" className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Metros lineales totales</label>
          <input value={barrasmetros} onChange={(e) => setBarrasmetros(e.target.value)} type="text" className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Número de personas trabajando:</label>
          <input value={barraspersons} onChange={(e) => setBarraspersons(e.target.value)} type="text" className='form-control' />
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Decoración y originalidad:</label>
          <Form.Select value={decoracion} onChange={handleChangeDe} className="form-control">
            <option value="">Selecciona una opción</option>
            <option value="Moderno/Espectacular">Moderno/Espectacular</option>
            <option value="Elegante/Clasico">Elegante/Clasico</option>
            <option value="Underground">Underground</option>
            <option value="otro">Otro</option>
          </Form.Select>
          {decoracion === 'otro' && (
            <div className="mt-3">
              <label>Otro:</label>
              <input type="text" value={decoracionO} onChange={handleOtroChangeDe} className="form-control" />
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Climatización Temperatura:</label>
          <Form.Select value={climatizacion} onChange={(e) => setClimatizacion(e.target.value)} className="form-control">
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {climatizacion === 'Si' && (
            <div className="mt-3">
              <label className='parent-label form-label'>Temperatura de la climatización</label>
              <Form.Select value={climat_temp} onChange={(e) => setClimat_temp(e.target.value)} className="form-control">
                <option value="">Selecciona una opción</option>
                <option value="Calor">Calor</option>
                <option value="Frio">Frio</option>
                <option value="Agradable">Agradable</option>
              </Form.Select>
            </div>
          )}
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Limpieza de los servicios durante la sesión:</label>
          <Form.Select value={limp_durante} onChange={(e) => setLimp_durante(e.target.value)} className="form-control">
            {options_bu.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Limpieza de los servicios en sesión:</label>
          <Form.Select value={limp_ensesion} onChange={(e) => setLimp_ensesion(e.target.value)} className="form-control">
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Mantenimiento instalaciones:</label>
          <Form.Select value={Mantenimiento} onChange={(e) => setMantenimiento(e.target.value)} className="form-control">
            {options_bu.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='parent-label form-label'>Observaciones (Módulo de Instalaciones):</label>
          <input value={Observ_instal} onChange={(e) => setObserv_instal(e.target.value)} type="text" className='form-control' />
        </div>

        <div className="mt-3">
          <button type='submit' className='btn btn-success btn-ladda'>
            Modificar Instalaciones
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CompEditEncuesta;
