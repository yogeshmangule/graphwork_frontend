import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  api } from "../servicios/api";
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';

const URI = api+'usuarios/'
const options = [
    { value: "administrador", label: "Administrador" },
    { value: "operario", label: "Operario" },
    { value: "encuestador", label: "Encuestador" },
  ];

const CompEditUser = ({ id }) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [passwd, setPass] = useState('')
    const [role, setRole] = useState('')
    const [hasErrors, setHasErrors] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [isFormInvalid, setIsFormInvalid] = useState(false); 
    const navigate = useNavigate()
 //const { id } = useParams()
    console.log(id);

    const userId = localStorage.getItem('userId');

  

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

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();

        // Validar campos antes de enviar la solicitud
        if (!username.trim() || !email.trim() || !passwd.trim() || !role.trim() || emailError) {
            setHasErrors(true);
            setIsFormInvalid(true);
            return;
        }

        // Si llegamos aquí, no hay errores
        setHasErrors(false);
        setIsFormInvalid(false);

        await axios.put(URI + id, {
            parent: userId,
                    username:username,
                    email: email,
                    passwd:passwd,
                    role:role
        })
        window.location.reload();
        //navigate('/viewusers')
    }

    useEffect(() => {
        // Incluye getBlogById en el array de dependencias
        const getUserById = async () => {
            const res = await axios.get(URI + id)
            
            setUserName(res.data.username)
            setEmail(res.data.email)
            setRole(res.data.role)
        
        }

        getUserById();
    }, [id]); // Agrega id al array de dependencias

    return (
        <div className='form-container'>
      <h3>FICHA USUARIO</h3>
      <Form onSubmit={update} className="my-form">
            <div className='mb-3'>
                <label className='parent-label form-label'>Alias</label>
               <input
                   value={username}
                   onChange={ (e)=> setUserName(e.target.value)} 
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
                   onChange={ (e)=> setPass(e.target.value)} 
                   type="text"
                   className='form-control'
               />  
               {hasErrors && <span className="error-message">Requiere que ingrese NUEVA Contraseña.</span>}               
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
           {isFormInvalid && <span className="error-message">Completa todos los campos correctamente.</span>}
                <button type='submit' className='btn btn-success btn-ladda'>Actualizar</button>
</div>
      </Form>
   </div>
       
    )
}

export default CompEditUser;
