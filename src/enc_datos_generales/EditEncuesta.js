// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { api } from "../servicios/api";
// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const URI = api + 'encuesta/';

// const CompEditEncuesta = ({ id, getEncuestas, abrirModal }) => {
//   const [fechaVisita, setFechaVisita] = useState(new Date());
//   const [horaVisita, setHoraVisita] = useState(new Date());
//   const [marcaComercial, setMarcaComercial] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [direccion2, setDireccion2] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [provincia, setProvincia] = useState('');
//   const [codigoPostal, setCodigoPostal] = useState('');
//   const [licencia, setLicencia] = useState('');
//   const [dimensiones, setDimensiones] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [isFormInvalid, setIsFormInvalid] = useState(false);
//   const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
//   const [hasErrors, setHasErrors] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   const clearFields = () => {
//     setFechaVisita('');
//     setHoraVisita('');
//     setMarcaComercial('');
//     setFullName('');
//     setDireccion('');
//     setDireccion2('');
//     setCiudad('');
//     setProvincia('');
//     setCodigoPostal('');
//     setLicencia('');
//     setDimensiones('');
//     setEmail('');
//     setTelefono('');
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
//       setEmailError('');
//     } else {
//       setEmailError('Formato de correo electrónico no válido');
//     }
//   };

//   const update = async (e) => {
//     e.preventDefault();

//     // if (!fullName.trim() || !email.trim() || !marcaComercial.trim() || !direccion.trim() || emailError) {
//     //   setHasErrors(true);
//     //   setIsFormInvalid(true);
//     //   return;
//     // }

//     setHasErrors(false);
//     setIsFormInvalid(false);
//     try {
//       const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

//       await axios.put(URI + id, {
//         fecha_visita: fechaVisita,
//         hora_visita: horaVisitaFormateada,
//         marca_comercial: marcaComercial,
//         full_name: fullName,
//         dir: direccion,
//         dir2: direccion2,
//         city: ciudad,
//         prov: provincia,
//         postal: codigoPostal,
//         licencia: licencia,
//         dimensiones: dimensiones,
//         email: email,
//         phone: telefono,
//         user_id: userId,
//       });

//       getEncuestas()
//       clearFields();
//       abrirModal()
//       // window.location.reload();

//     } catch (error) {
//       console.error('Error al enviar la solicitud POST:', error);
//       alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
//     }
//   };

//   useEffect(() => {
//     const getUserById = async () => {
//       const res = await axios.get(URI + id);
//       setFechaVisita(new Date(res.data.fecha_visita));
//       setHoraVisita(new Date(`2024-01-01 ${res.data.hora_visita}`));
//       setMarcaComercial(res.data.marca_comercial);
//       setFullName(res.data.full_name);
//       setDireccion(res.data.dir);
//       setDireccion2(res.data.dir2);
//       setCiudad(res.data.city);
//       setProvincia(res.data.prov);
//       setCodigoPostal(res.data.postal);
//       setLicencia(res.data.licencia);
//       setDimensiones(res.data.dimensiones);
//       setEmail(res.data.email);
//       setTelefono(res.data.phone);
//     };

//     getUserById();
//   }, [id]);

//   return (
//     <div className='form-container'>
//       <h3>FICHA ENCUESTA</h3>
//       <Form onSubmit={update} className="my-form">
//         <div className='mb-3'>
//           <label className='parent-label form-label'>Fecha de Visita</label>
//           <DatePicker
//             selected={fechaVisita}
//             onChange={(date) => setFechaVisita(date)}
//             dateFormat="yyyy-MM-dd"
//             placeholderText="Seleccionar fecha"
//             className='form-control'
//           />
//           {hasErrors && !fechaVisita && <span className="error-message">Requiere que ingrese Fecha de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Hora de Visita</label>
//           <DatePicker
//             selected={horaVisita}
//             onChange={(date) => setHoraVisita(date)}
//             showTimeSelect
//             showTimeSelectOnly
//             timeIntervals={15}
//             timeCaption="Hora"
//             dateFormat="HH:mm"
//             placeholderText="Seleccionar hora"
//             className='form-control'
//           />
//           {hasErrors && !horaVisita && <span className="error-message">Requiere que ingrese Hora de Visita.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Marca Comercial</label>
//           <input
//             value={marcaComercial}
//             onChange={(e) => setMarcaComercial(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {hasErrors && !marcaComercial && <span className="error-message">Requiere que ingrese Nombre Completo.</span>}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Nombre Completo</label>
//           <input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !fullName && <span className="error-message">Requiere que ingrese Nombre Completo.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dirección</label>
//           <input
//             value={direccion}
//             onChange={(e) => setDireccion(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !direccion && <span className="error-message">Requiere que ingrese Dirección.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <input
//             value={direccion2}
//             onChange={(e) => setDireccion2(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !direccion2 && <span className="error-message">Requiere que ingrese Dirección.</span>} */}
//         </div>

//         <div className='row'>
//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Ciudad</label>
//             <input
//               value={ciudad}
//               onChange={(e) => setCiudad(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !ciudad && <span className="error-message">Requiere que ingrese Ciudad.</span>} */}
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Provincia</label>
//             <input
//               value={provincia}
//               onChange={(e) => setProvincia(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !provincia && <span className="error-message">Requiere que ingrese Provincia.</span>} */}
//           </div>

//           <div className='col-md-4 mb-3'>
//             <label className='parent-label form-label'>Código Postal</label>
//             <input
//               value={codigoPostal}
//               onChange={(e) => setCodigoPostal(e.target.value)}
//               type="text"
//               className='form-control'
//             />
//             {/* {hasErrors && !codigoPostal && <span className="error-message">Requiere que ingrese Código Postal.</span>} */}
//           </div>
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Licencia</label>
//           <input
//             value={licencia}
//             onChange={(e) => setLicencia(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !licencia && <span className="error-message">Requiere que ingrese Licencia.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Dimensiones</label>
//           <Form.Select
//             value={dimensiones}
//             onChange={(e) => setDimensiones(e.target.value)}
//             className='form-control'
//           >
//             <option value="">Selecciona una opción</option>
//             <option value="0-200">0 a 200m2</option>
//             <option value="200-500">200 a 500m2</option>
//             <option value="500-1000">500 a 1.000m2</option>
//             <option value="1000+">Más de 1.000m2</option>
//           </Form.Select>
//           {/* {hasErrors && !dimensiones && <span className="error-message">Selecciona las Dimensiones.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Teléfono</label>
//           <input
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//             type="text"
//             className='form-control'
//           />
//           {/* {hasErrors && !telefono && <span className="error-message">Requiere que ingrese Teléfono.</span>} */}
//         </div>

//         <div className='mb-3'>
//           <label className='parent-label form-label'>Email</label>
//           <input
//             value={email}
//             onChange={handleEmailChange}
//             type="text"
//             className={`form-control ${emailError ? 'is-invalid' : ''}`}
//           />
//           {/* {emailError && <span className="error-message">{emailError}</span>} */}
//         </div>

//         <div className="mt-3">
//           {isFormInvalid && <span className="error-message">Completa todos los campos correctamente.</span>}
//           <button type='submit' className='btn btn-success btn-ladda'>
//             Modificar
//           </button>
//         </div>
//       </Form>

//       <style jsx>{`
//                 .form-container {
//                     max-width: 800px;
//                     margin: 0 auto;
//                     padding: 20px;
//                     background-color: #f9f9f9;
//                     border-radius: 8px;
//                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                 }

//                 .form-label {
//                     font-weight: bold;
//                 }

//                 @media (max-width: 768px) {
//                     .form-container {
//                         padding: 15px;
//                     }

//                     .row {
//                         display: flex;
//                         flex-direction: column;
//                     }

//                     .col-md-4 {
//                         margin-bottom: 10px;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .form-container {
//                         padding: 10px;
//                     }

//                     .form-label {
//                         font-size: 14px;
//                     }

//                     .row {
//                         display: flex;
//                         flex-direction: column;
//                     }

//                     .col-md-4 {
//                         margin-bottom: 15px;
//                     }

//                     .btn-ladda {
//                         width: 100%;
//                         font-size: 16px;
//                     }
//                 }

//                 .error-message {
//                     color: red;
//                     font-size: 12px;
//                     margin-top: 5px;
//                 }

//                 .is-invalid {
//                     border-color: red;
//                 }
//             `}</style>
//     </div>
//   );
// }

// export default CompEditEncuesta;

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'encuesta/';

const CompEditEncuesta = ({ id, getEncuestas, abrirModal }) => {
  const [fechaVisita, setFechaVisita] = useState(new Date());
  const [horaVisita, setHoraVisita] = useState(new Date());
  const [marcaComercial, setMarcaComercial] = useState('');
  const [fullName, setFullName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [direccion2, setDireccion2] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [licencia, setLicencia] = useState('');
  const [dimensiones, setDimensiones] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [emailError, setEmailError] = useState('');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const clearFields = () => {
    setFechaVisita(new Date());
    setHoraVisita(new Date());
    setMarcaComercial('');
    setFullName('');
    setDireccion('');
    setDireccion2('');
    setCiudad('');
    setProvincia('');
    setCodigoPostal('');
    setLicencia('');
    setDimensiones('');
    setEmail('');
    setTelefono('');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
      setEmailError('');
    } else {
      setEmailError('Formato de correo electrónico no válido');
    }
  };

  const update = async (e) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

    try {
      const horaVisitaFormateada = horaVisita.getHours() + ':' + ('0' + horaVisita.getMinutes()).slice(-2);

      await axios.put(URI + id, {
        fecha_visita: fechaVisita,
        hora_visita: horaVisitaFormateada,
        marca_comercial: marcaComercial,
        full_name: fullName,
        dir: direccion,
        dir2: direccion2,
        city: ciudad,
        prov: provincia,
        postal: codigoPostal,
        licencia: licencia,
        dimensiones: dimensiones,
        email: email,
        phone: telefono,
        user_id: userId,
      });

      getEncuestas();
      clearFields();
      abrirModal();

    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  useEffect(() => {
    const getUserById = async () => {
      const res = await axios.get(URI + id);
      setFechaVisita(new Date(res.data.fecha_visita));
      setHoraVisita(new Date(`2024-01-01 ${res.data.hora_visita}`));
      setMarcaComercial(res.data.marca_comercial);
      setFullName(res.data.full_name);
      setDireccion(res.data.dir);
      setDireccion2(res.data.dir2);
      setCiudad(res.data.city);
      setProvincia(res.data.prov);
      setCodigoPostal(res.data.postal);
      setLicencia(res.data.licencia);
      setDimensiones(res.data.dimensiones);
      setEmail(res.data.email);
      setTelefono(res.data.phone);
    };

    getUserById();
  }, [id]);

  return (
    // <div className='form-container' style={{ padding: '32px 62px' }}>
    <div className="my-form form-style">
      <h3>FICHA ENCUESTA</h3>
      <Form onSubmit={update} >
        <div className='mb-3'>
          <label className='form-label'>Fecha de Visita</label>
          <DatePicker
            selected={fechaVisita}
            onChange={(date) => setFechaVisita(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Seleccionar fecha"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Hora de Visita</label>
          <DatePicker
            selected={horaVisita}
            onChange={(date) => setHoraVisita(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="HH:mm"
            placeholderText="Seleccionar hora"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Marca Comercial</label>
          <input
            value={marcaComercial}
            onChange={(e) => setMarcaComercial(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Nombre Completo</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <input
            value={direccion2}
            onChange={(e) => setDireccion2(e.target.value)}
            type="text"
            className='form-control'
            placeholder="Dirección secundaria (opcional)"
          />
        </div>

        <div className='row'>
          <div className='col-md-4 mb-3'>
            <label className='form-label'>Ciudad</label>
            <input
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>

          <div className='col-md-4 mb-3'>
            <label className='form-label'>Provincia</label>
            <input
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>

          <div className='col-md-4 mb-3'>
            <label className='form-label'>Código Postal</label>
            <input
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
              type="text"
              className='form-control'
            />
          </div>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Licencia</label>
          <input
            value={licencia}
            onChange={(e) => setLicencia(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Dimensiones</label>
          <Form.Select
            value={dimensiones}
            onChange={(e) => setDimensiones(e.target.value)}
            className='form-control'
          >
            <option value="">Selecciona una opción</option>
            <option value="0-200">0 a 200m2</option>
            <option value="200-500">200 a 500m2</option>
            <option value="500-1000">500 a 1.000m2</option>
            <option value="1000+">Más de 1.000m2</option>
          </Form.Select>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Teléfono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="mt-3">
          <button type='submit' className='btn btn-success btn-ladda'>
            Modificar
          </button>
        </div>
      </Form>

      <style jsx>{`
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .form-label {
          font-weight: bold;
        }

         .form-style{
       padding: 32px 62px
      }

        @media (max-width: 768px) {
          .form-container {
            padding: 15px;
          }

          .row {
            display: flex;
            flex-direction: column;
          }

          .col-md-4 {
            margin-bottom: 10px;
          }

          .btn-ladda {
            width: 100%;
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .form-container {
            padding: 10px;
          }

            .form-style{
       padding: 0px
      }

          .form-label {
            font-size: 14px;
          }

          .row {
            display: flex;
            flex-direction: column;
          }

          .col-md-4 {
            margin-bottom: 15px;
          }

          .btn-ladda {
            width: 100%;
            font-size: 16px;
          }
        }

        .error-message {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }

        .is-invalid {
          border-color: red;
        }
      `}</style>
    </div>
  );
}

export default CompEditEncuesta;

