import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from "../servicios/api";
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShowModalAmbiente from '../enc_ambiente/ShowCreateAmbiente';


const URI = api + 'horario/'
const CompCreateEncuesta = ({ onClose, setHorarioModalOpen, openAmbiteModel }) => {
  const [encuestas, setEncuesta] = useState(new Date());
  const [horaLde, setHoraLde] = useState(new Date());
  const [horaLa, setHoraLa] = useState(new Date());
  const [horaMde, setHoraMde] = useState(new Date());
  const [horaMa, setHoraMa] = useState(new Date());
  const [horaXde, setHoraXde] = useState(new Date());
  const [horaXa, setHoraXa] = useState(new Date());
  const [horaJde, setHoraJde] = useState(new Date());
  const [horaJa, setHoraJa] = useState(new Date());
  const [horaVde, setHoraVde] = useState(new Date());
  const [horaVa, setHoraVa] = useState(new Date());
  const [horaSde, setHoraSde] = useState(new Date());
  const [horaSa, setHoraSa] = useState(new Date());
  const [horaDde, setHoraDde] = useState(new Date());
  const [horaDa, setHoraDa] = useState(new Date());
  const [horaotras, setHoraOtras] = useState('');
  const [userIdEncuesta, setUserId] = useState(0); // Inicializado en 0, ya que no se proporciona en los datos de la encuesta
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Luego, podrías utilizar estos estados para configurar tus campos de formulario o realizar otras operaciones según sea necesario.
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // const handleFirstButtonClick = async (e) => {
  //   try {
  //     // Supongamos que store() devuelve una promesa con la respuesta del servidor
  //     const isSuccess = await store(e);
  //     if (isSuccess) {
  //       setIsModalOpen(true);
  //       // onClose()
  //     } else { }
  //   } catch (error) {
  //     console.error('Error al ejecutar store:', error);
  //     // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
  //   }
  // };

  const handleFirstButtonClick = async (e) => {
    try {
      const isSuccess = await store(e); // Replace with your actual store logic
      if (isSuccess) {
        setHorarioModalOpen(false);
        // setTimeout(() => {
        openAmbiteModel();
        // }, 2000);
      }
    } catch (error) {
      console.error('Error al ejecutar store:', error);
    }
  };

  const [hasErrors, setHasErrors] = useState(false);
  // const userId = localStorage.getItem('userId');
  const userId = localStorage.getItem('userIdEncuesta');
  const encuestaId = localStorage.getItem('encuestaId1');

  const clearFields = () => {
    setHoraLde('');
    setHoraLa('');

  };

  const store = async (e) => {
    e.preventDefault();
    setHasErrors(false);

    // Verificar campos obligatorios
    const requiredFields = [horaDde, horaDa, horaMde, horaMa, horaXde, horaXa, horaJde,
      horaVde, horaVa, horaSde, horaSa, horaDde, horaDa, horaotras];
    const emptyFields = requiredFields.filter(field => field === '');

    // if (emptyFields.length > 0) {
    //   setHasErrors(true);
    //   alert('Por favor, complete todos los campos obligatorios.'); // O muestra un mensaje de error más amigable
    //   return; // Evita enviar el formulario si hay errores
    // }

    try {
      // Antes de enviar al servidor
      const horaL1 = horaLde.getHours() + ':' + ('0' + horaLde.getMinutes()).slice(-2);
      const horaL2 = horaLa.getHours() + ':' + ('0' + horaLa.getMinutes()).slice(-2);
      const horaM1 = horaMde.getHours() + ':' + ('0' + horaMde.getMinutes()).slice(-2);
      const horaM2 = horaMa.getHours() + ':' + ('0' + horaMa.getMinutes()).slice(-2);
      const horaX1 = horaXde.getHours() + ':' + ('0' + horaXde.getMinutes()).slice(-2);
      const horaX2 = horaXa.getHours() + ':' + ('0' + horaXa.getMinutes()).slice(-2);
      const horaJ1 = horaJde.getHours() + ':' + ('0' + horaJde.getMinutes()).slice(-2);
      const horaJ2 = horaJa.getHours() + ':' + ('0' + horaJa.getMinutes()).slice(-2);
      const horaV1 = horaVde.getHours() + ':' + ('0' + horaVde.getMinutes()).slice(-2);
      const horaV2 = horaVa.getHours() + ':' + ('0' + horaVa.getMinutes()).slice(-2);
      const horaS1 = horaSde.getHours() + ':' + ('0' + horaSde.getMinutes()).slice(-2);
      const horaS2 = horaSa.getHours() + ':' + ('0' + horaSa.getMinutes()).slice(-2);
      const horaD1 = horaDde.getHours() + ':' + ('0' + horaDde.getMinutes()).slice(-2);
      const horaD2 = horaDa.getHours() + ':' + ('0' + horaDa.getMinutes()).slice(-2);
      // Realiza la solicitud POST aquí con los datos de la encuesta
      const response = await axios.post(URI, {
        horaLde: horaL1,
        horaLa: horaL2,
        horaMde: horaM1,
        horaMa: horaM2,
        horaXde: horaX1,
        horaXa: horaX2,
        horaJde: horaJ1,
        horaJa: horaJ2,
        horaVde: horaV1,
        horaVa: horaV2,
        horaSde: horaS1,
        horaSa: horaS2,
        horaDde: horaD1,
        horaDa: horaD2,
        encuesta_id: encuestaId,
        user_id: userId,
        horaotras: horaotras
      });
      // Restablece los campos después de una operación exitosa
      // clearFields();
      // window.location.reload(); 
      if (response.status === 201) {
        // Operación exitosa, devuelve true
        return true;
      } else {
        // Operación fallida, devuelve false
        return false;
      }

    } catch (error) {
      console.error('Error al enviar la solicitud POST:', error);
      // Puedes manejar el error de diferentes maneras, por ejemplo, mostrar un mensaje al usuario
      alert('Se produjo un error al enviar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };



  return (
    <div className='form-container'>

      <h3>FICHA HORARIO</h3>
      <Form onSubmit={store} className="my-form">
        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Lunes de:</label>
            <DatePicker
              selected={horaLde}
              onChange={(date) => setHoraLde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Lunes a:</label>
            <DatePicker
              selected={horaLa}
              onChange={(date) => setHoraLa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Martes de:</label>
            <DatePicker
              selected={horaMde}
              onChange={(date) => setHoraMde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Martes a:</label>
            <DatePicker
              selected={horaMa}
              onChange={(date) => setHoraMa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Miercoles de:</label>
            <DatePicker
              selected={horaXde}
              onChange={(date) => setHoraXde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Miercoles a:</label>
            <DatePicker
              selected={horaXa}
              onChange={(date) => setHoraXa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Jueves de:</label>
            <DatePicker
              selected={horaJde}
              onChange={(date) => setHoraJde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Jueves a:</label>
            <DatePicker
              selected={horaJa}
              onChange={(date) => setHoraJa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Viernes de:</label>
            <DatePicker
              selected={horaVde}
              onChange={(date) => setHoraVde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Viernes a:</label>
            <DatePicker
              selected={horaVa}
              onChange={(date) => setHoraVa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Sabado de:</label>
            <DatePicker
              selected={horaSde}
              onChange={(date) => setHoraSde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Sabado a:</label>
            <DatePicker
              selected={horaSa}
              onChange={(date) => setHoraSa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>


        <div className='mb-3' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <label className='parent-label form-label'>Domingo de:</label>
            <DatePicker
              selected={horaDde}
              onChange={(date) => setHoraDde(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
          <div>
            <label className='parent-label form-label'>Domingo a:</label>
            <DatePicker
              selected={horaDa}
              onChange={(date) => setHoraDa(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="HH:mm"
              placeholderText="Seleccionar hora"
              className='form-control'
            />
          </div>
        </div>
        <div className='mb-3'>
          <label className='parent-label form-label'>Otras (explicar)</label>
          <input
            value={horaotras}
            onChange={(e) => setHoraOtras(e.target.value)}
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
            <ShowModalAmbiente
              onClick={handleModalClose}
              isOpen={isModalOpen}
              onClose={handleModalClose}
            />
          </div>
        )}

      </Form>
    </div>
  )
}

export default CompCreateEncuesta