import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from "../servicios/api";
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';


const URI = api + 'usuarios/'
const options = [
    { value: "administrador", label: "Administrador" },
    { value: "operario", label: "Operario" },
    { value: "encuestador", label: "Encuestador" },
];


const CompCreateUser = () => {

    const [parent, setParent] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [passwd, setPass] = useState('')
    const [role, setRole] = useState('')
    const [hasErrors, setHasErrors] = useState(false);
    const [emailError, setEmailError] = useState('');
    const userId = localStorage.getItem('userId');

    const clearFields = () => {
        setUserName('');
        setEmail('');
        setPass('');
        setRole('');
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


        // Validar el formato del correo electrónico
        if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
            setEmailError('');
        } else {
            setEmailError('Formato de correo electrónico no válido');
        }
    };

    const handleChange = (e) => {
        setRole(e.target.value);
    };


    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        setHasErrors(false);
        const requiredFields = [username, email, passwd, role];
        const emptyFields = requiredFields.filter(field => field === '');
        if (emptyFields.length > 0) {
            setHasErrors(true);
            alert('Porfavor Ingrese todos los campos.'); // Or display a more user-friendly error message
            return; // Prevent form submission if errors exist
        }
        await axios.post(URI, {
            parent: userId,
            username: username,
            email: email,
            passwd: passwd,
            role: role
        })
        clearFields(); // Limpia los campos después de enviar el formulario
        window.location.reload();
        //navigate('/viewuser');
    }

    return (
        // <div className='form-container'>
        <div style={{ padding: '32px 62px' }} className="my-form">

            <h3>FICHA USUARIO</h3>
            <Form onSubmit={store} >
                <div className='mb-3'>
                    <label className='parent-label form-label'>Alias</label>
                    <input
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    {hasErrors && <span className="error-message">Requiere que ingrese Alias.</span>}
                </div>
                <div className='mb-3'>
                    <label className='parent-label form-label'>Email</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        type="text"
                        className='form-control'
                    />
                    {hasErrors && <span className="error-message">Requiere que ingrese Email.</span>}
                    {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <div className='mb-3'>
                    <label className='parent-label form-label'>Password</label>
                    <input
                        value={passwd}
                        onChange={(e) => setPass(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    {hasErrors && <span className="error-message">Requiere que ingrese Contrase;a.</span>}
                </div>
                <div>
                    <label className='parent-label form-label'>Rol</label>
                    <Form.Select
                        value={role}
                        onChange={handleChange}
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </Form.Select>
                    {hasErrors && <span className="error-message">Selecciona el Rol.</span>}
                </div>
                <div className="mt-3"> {/* Add margin-top for spacing */}
                    <button type='submit' className='btn btn-success btn-ladda'>
                        Registrar
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default CompCreateUser