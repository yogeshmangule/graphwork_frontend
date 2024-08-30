import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../servicios/api";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const URI = api + 'horario/';

const CompEditHorario = ({ id, getEncuestas, abrirModal }) => {
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
  const userId = localStorage.getItem('userId');
  const encuestaId = localStorage.getItem('encuestaId1');
  const navigate = useNavigate();

  const clearFields = () => {
    setHoraLde('');
    setHoraLa('');
  };

  const update = async (e) => {
    e.preventDefault();

    try {
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

      await axios.put(URI + id, {
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
        horaotras: horaotras,
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
      setHoraLde(res.data.horaLde ? new Date(`2024-01-01 ${res.data.horaLde}`) : null);
      setHoraLa(res.data.horaLa ? new Date(`2024-01-01 ${res.data.horaLa}`) : null);
      setHoraMde(new Date(`2024-01-01 ${res.data.horaMde}`));
      setHoraMa(new Date(`2024-01-01 ${res.data.horaMa}`));
      setHoraXde(new Date(`2024-01-01 ${res.data.horaXde}`));
      setHoraXa(new Date(`2024-01-01 ${res.data.horaXa}`));
      setHoraJde(new Date(`2024-01-01 ${res.data.horaJde}`));
      setHoraJa(new Date(`2024-01-01 ${res.data.horaJa}`));
      setHoraVde(new Date(`2024-01-01 ${res.data.horaVde}`));
      setHoraVa(new Date(`2024-01-01 ${res.data.horaVa}`));
      setHoraSde(new Date(`2024-01-01 ${res.data.horaSde}`));
      setHoraSa(new Date(`2024-01-01 ${res.data.horaSa}`));
      setHoraDde(new Date(`2024-01-01 ${res.data.horaDde}`));
      setHoraDa(new Date(`2024-01-01 ${res.data.horaDa}`));
      setHoraOtras(res.data.horaotras);
    };

    getUserById();
  }, [id]);

  return (
    <div className='form-container'>
      <h3>FICHA HORARIO</h3>
      <Form onSubmit={update} className="my-form">
        {[
          { label: 'Lunes', fromTime: horaLde, toTime: horaLa, setFromTime: setHoraLde, setToTime: setHoraLa },
          { label: 'Martes', fromTime: horaMde, toTime: horaMa, setFromTime: setHoraMde, setToTime: setHoraMa },
          { label: 'Miércoles', fromTime: horaXde, toTime: horaXa, setFromTime: setHoraXde, setToTime: setHoraXa },
          { label: 'Jueves', fromTime: horaJde, toTime: horaJa, setFromTime: setHoraJde, setToTime: setHoraJa },
          { label: 'Viernes', fromTime: horaVde, toTime: horaVa, setFromTime: setHoraVde, setToTime: setHoraVa },
          { label: 'Sábado', fromTime: horaSde, toTime: horaSa, setFromTime: setHoraSde, setToTime: setHoraSa },
          { label: 'Domingo', fromTime: horaDde, toTime: horaDa, setFromTime: setHoraDde, setToTime: setHoraDa }
        ].map((day, index) => (
          <div className='mb-3' key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <label className='parent-label form-label'>{day.label} de:</label>
              <DatePicker
                selected={day.fromTime}
                onChange={(date) => day.setFromTime(date)}
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
              <label className='parent-label form-label'>a:</label>
              <DatePicker
                selected={day.toTime}
                onChange={(date) => day.setToTime(date)}
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
        ))}

        <div className='mb-3'>
          <label className='parent-label form-label'>Otras (explicar)</label>
          <input
            value={horaotras}
            onChange={(e) => setHoraOtras(e.target.value)}
            type="text"
            className='form-control'
          />
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

        @media (max-width: 768px) {
          .form-container {
            padding: 15px;
          }

          .mb-3 {
            flex-direction: column !important;
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

          .form-label {
            font-size: 14px;
          }

          .btn-ladda {
            width: 100%;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default CompEditHorario;
