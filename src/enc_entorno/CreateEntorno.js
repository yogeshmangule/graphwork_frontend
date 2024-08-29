// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { api } from "../servicios/api";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import ShowModalServicio from '../enc_servicio/ShowCreateServicio';


// const URI = api + 'entorno/'

// const CompCreateEncuesta = () => {
//   const [encuestas, setEncuesta] = useState(new Date());
//   const [urbanismo, setUrbanismo] = useState('');
//   const [org_colas, setOrgColas] = useState('');
//   const [espera_colas, setEsperaColas] = useState('');
//   const [espera_colaso, setEsperaColasO] = useState('');
//   const [cola_reservas, setColaReservas] = useState(false);
//   const [cola_vip, setColaVip] = useState(false);
//   const [ruido_esterior, setRuidoExterior] = useState('');
//   const [botellon_ext, setBotellonExterior] = useState(false);
//   const [protestas, setProtestas] = useState(false);
//   const [observ_entorno, setObservEntorno] = useState('');
//   const [encuestaMarca, setSearchMarca] = useState('');
//   const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
//   const [showSecondModal, setShowSecondModal] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
//   const handleModalClose = () => {
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

//   const handleShowSecondModal = () => {
//     setShowSecondModal(true);
//     setIsModalOpen(false);
//   };

//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const userId = localStorage.getItem('userIdEncuesta');
//   const encuestaId = localStorage.getItem('encuestaId1');

//   const clearFields = () => {
//     setColaVip('');

//   };


//   const handleChangeEs = (e) => {
//     const selectedValue = e.target.value;
//     setEsperaColas(selectedValue);
//     // Si el usuario selecciona "Otro", muestra el campo de texto
//     if (selectedValue === 'otro') {
//       setEsperaColasO(''); // Reinicia el valor del campo de texto
//     }
//   };
//   const handleOtroChangeEs = (e) => {
//     const value = e.target.value;
//     setEsperaColasO(value);
//   };

//   //procedimiento guardar
//   const store = async (e) => {
//     const valorFinalD = (espera_colas === 'otro') ? espera_colaso : espera_colas;
//     e.preventDefault();
//     setHasErrors(false);

//     // Verificar campos obligatorios
//     const requiredFields = [espera_colas];
//     const emptyFields = requiredFields.filter(field => field === '');


//     try {

//       // Realiza la solicitud POST aquí con los datos de la encuesta
//       const response = await axios.post(URI, {
//         urbanismo: urbanismo,
//         org_colas: org_colas,
//         espera_colas: valorFinalD,
//         cola_reservas: cola_reservas,
//         cola_vip: cola_vip,
//         ruido_esterior: ruido_esterior,
//         botellon_ext: botellon_ext,
//         protestas: protestas,
//         observ_entorno: observ_entorno,
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
//       // window.location.reload(); 

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };



//   return (
//     <div className='form-container'>

//       <h3>FICHA ENTORNO</h3>
//       <Form onSubmit={store} className="my-form">

//         <div>
//           <label className='parent-label form-label'>Configuración urbanística:</label>
//           <Form.Select
//             value={urbanismo}
//             onChange={(e) => setUrbanismo(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Local en zona de ocio saturada">Local en zona de ocio saturada</option>
//             <option value="Local aislado fuera casco urbano">Local aislado fuera casco urbano</option>
//             <option value="Local aislado en casco urbano">Local aislado en casco urbano</option>
//             <option value="Local en zona de ocio">Local en zona de ocio</option>

//           </Form.Select>
//         </div>

//         <div>
//           <label className='parent-label form-label'>Sistema organización colas:</label>
//           <Form.Select
//             value={org_colas}
//             onChange={(e) => setOrgColas(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Vallas">Vallas</option>
//             <option value="Catenarias">Catenarias</option>
//             <option value="Personal">Personal</option>
//             <option value="Nada Organizado">Nada Organizado</option>
//             <option value="Poco Organizado">Poco Organizado</option>
//             <option value="Bastante Organizado">Bastante Organizado</option>
//             <option value="Muy Organizado">Muy Organizado</option>

//           </Form.Select>
//         </div>

//         <div>
//           <label className='parent-label form-label'>Tiempo de espera en cola</label>
//           <Form.Select
//             value={espera_colas}
//             onChange={handleChangeEs}>
//             <option value="">Selecciona una opción</option>
//             <option value="De 0 a 5 minutos">De 0 a 5 minutos</option>
//             <option value="De 6 a 15 minutos">De 6 a 15 minutos</option>
//             <option value="De 16 a 30 minutos">De 16 a 30 minutos</option>
//             <option value="Mas de 30 minutos">Mas de 30 minutos</option>
//             <option value="otro">Otros</option>

//           </Form.Select>

//           {/* Mostrar el campo de texto solo si se selecciona "Otro" */}
//           {espera_colas === 'otro' && (
//             <div>
//               <label>Otro:</label>
//               <input
//                 type="text"
//                 value={espera_colaso}
//                 onChange={handleOtroChangeEs} />
//             </div>)}
//         </div>

//         <div>
//           <label className='parent-label form-label'>Cola reservas:</label>
//           <Form.Select
//             value={cola_reservas ? "Si" : "No"}
//             onChange={(e) => setColaReservas(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Cola VIP:</label>
//           <Form.Select
//             value={cola_vip ? "Si" : "No"}
//             onChange={(e) => setColaVip(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>
//           </Form.Select>
//         </div>

//         <div>
//           <label className='parent-label form-label'>La actividad del local produce ruido en el exterior:</label>
//           <Form.Select
//             value={ruido_esterior}
//             onChange={(e) => setRuidoExterior(e.target.value)}>
//             <option value="">Selecciona una opción</option>
//             <option value="No">No</option>
//             <option value="Si, se oye la musica del local">Si, se oye la musica del local</option>
//             <option value="Si, la gente de la puerta provoca ruido">Si, la gente de la puerta provoca ruido</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Hay lateros y/o gente haciendo botellón en el exterior:</label>
//           <Form.Select
//             value={botellon_ext ? "Si" : "No"}
//             onChange={(e) => setBotellonExterior(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>
//           </Form.Select>
//         </div>
//         <div>
//           <label className='parent-label form-label'>Hay pancartas de protesta de los vecinos:</label>
//           <Form.Select
//             value={protestas ? "Si" : "No"}
//             onChange={(e) => setProtestas(e.target.value === "Si" ? true : false)}>
//             <option value="">Selecciona una opción</option>
//             <option value="Si">Si</option>
//             <option value="No">No</option>
//           </Form.Select>
//         </div>


//         <div className='mb-3'>
//           <label className='parent-label form-label'>Observaciones (Módulo Entorno Local):</label>
//           <input
//             value={observ_entorno}
//             onChange={(e) => setObservEntorno(e.target.value)}
//             type="text"
//             className='form-control'
//           />
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
//             <ShowModalServicio
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

// export default CompCreateEncuesta


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalServicio from '../enc_servicio/ShowCreateServicio';

const URI = api + 'entorno/';

const CompCreateEncuesta = ({ setCreateServicioOpen, openCreateServicioModel }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [urbanismo, setUrbanismo] = useState('');
  const [org_colas, setOrgColas] = useState('');
  const [espera_colas, setEsperaColas] = useState('');
  const [espera_colaso, setEsperaColasO] = useState('');
  const [cola_reservas, setColaReservas] = useState(false);
  const [cola_vip, setColaVip] = useState(false);
  const [ruido_esterior, setRuidoExterior] = useState('');
  const [botellon_ext, setBotellonExterior] = useState(false);
  const [protestas, setProtestas] = useState(false);
  const [observ_entorno, setObservEntorno] = useState('');
  const [encuestaMarca, setSearchMarca] = useState('');
  const [userIdEncuesta, setUserId] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await store(e);
      if (isSuccess) {
        // setIsModalOpen(true);
        setCreateServicioOpen(false);
        openCreateServicioModel()
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    setIsModalOpen(false);
  };

  const [hasErrors, setHasErrors] = useState(false);
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

  const clearFields = () => {
    setColaVip('');
  };

  const handleChangeEs = (e) => {
    const selectedValue = e.target.value;
    setEsperaColas(selectedValue);
    if (selectedValue === 'otro') {
      setEsperaColasO('');
    }
  };

  const handleOtroChangeEs = (e) => {
    const value = e.target.value;
    setEsperaColasO(value);
  };

  const store = async (e) => {
    const valorFinalD = (espera_colas === 'otro') ? espera_colaso : espera_colas;
    e.preventDefault();
    setHasErrors(false);

    try {
      const response = await axios.post(URI, {
        urbanismo: urbanismo,
        org_colas: org_colas,
        espera_colas: valorFinalD,
        cola_reservas: cola_reservas,
        cola_vip: cola_vip,
        ruido_esterior: ruido_esterior,
        botellon_ext: botellon_ext,
        protestas: protestas,
        observ_entorno: observ_entorno,
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
    <div className='container form-container mt-4'>
      <h3 className="mb-4">FICHA ENTORNO</h3>
      <Form onSubmit={store} className="my-form">

        <div className="mb-3">
          <label className=' form-label'>Configuración urbanística:</label>
          <Form.Select
            value={urbanismo}
            onChange={(e) => setUrbanismo(e.target.value)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Local en zona de ocio saturada">Local en zona de ocio saturada</option>
            <option value="Local aislado fuera casco urbano">Local aislado fuera casco urbano</option>
            <option value="Local aislado en casco urbano">Local aislado en casco urbano</option>
            <option value="Local en zona de ocio">Local en zona de ocio</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>Sistema organización colas:</label>
          <Form.Select
            value={org_colas}
            onChange={(e) => setOrgColas(e.target.value)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Vallas">Vallas</option>
            <option value="Catenarias">Catenarias</option>
            <option value="Personal">Personal</option>
            <option value="Nada Organizado">Nada Organizado</option>
            <option value="Poco Organizado">Poco Organizado</option>
            <option value="Bastante Organizado">Bastante Organizado</option>
            <option value="Muy Organizado">Muy Organizado</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>Tiempo de espera en cola</label>
          <Form.Select
            value={espera_colas}
            onChange={handleChangeEs}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="De 0 a 5 minutos">De 0 a 5 minutos</option>
            <option value="De 6 a 15 minutos">De 6 a 15 minutos</option>
            <option value="De 16 a 30 minutos">De 16 a 30 minutos</option>
            <option value="Mas de 30 minutos">Mas de 30 minutos</option>
            <option value="otro">Otros</option>
          </Form.Select>
          {espera_colas === 'otro' && (
            <div className="mt-2">
              <label>Otro:</label>
              <input
                type="text"
                value={espera_colaso}
                onChange={handleOtroChangeEs}
                className="form-control"
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className=' form-label'>Cola reservas:</label>
          <Form.Select
            value={cola_reservas ? "Si" : "No"}
            onChange={(e) => setColaReservas(e.target.value === "Si" ? true : false)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>Cola VIP:</label>
          <Form.Select
            value={cola_vip ? "Si" : "No"}
            onChange={(e) => setColaVip(e.target.value === "Si" ? true : false)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>La actividad del local produce ruido en el exterior:</label>
          <Form.Select
            value={ruido_esterior}
            onChange={(e) => setRuidoExterior(e.target.value)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="No">No</option>
            <option value="Si, se oye la musica del local">Si, se oye la musica del local</option>
            <option value="Si, la gente de la puerta provoca ruido">Si, la gente de la puerta provoca ruido</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>Hay lateros y/o gente haciendo botellón en el exterior:</label>
          <Form.Select
            value={botellon_ext ? "Si" : "No"}
            onChange={(e) => setBotellonExterior(e.target.value === "Si" ? true : false)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className=' form-label'>Hay pancartas de protesta de los vecinos:</label>
          <Form.Select
            value={protestas ? "Si" : "No"}
            onChange={(e) => setProtestas(e.target.value === "Si" ? true : false)}
            className="form-control"
          >
            <option value="">Selecciona una opción</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className=' form-label'>Observaciones (Módulo Entorno Local):</label>
          <input
            value={observ_entorno}
            onChange={(e) => setObservEntorno(e.target.value)}
            type="text"
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
            <ShowModalServicio
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

export default CompCreateEncuesta;
