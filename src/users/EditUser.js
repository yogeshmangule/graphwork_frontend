// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { api } from "../servicios/api";
// import React from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Form } from 'react-bootstrap';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';

// const URI = api + 'usuarios/'
// const options = [
//     { value: "administrador", label: "Administrador" },
//     { value: "operario", label: "Operario" },
//     { value: "encuestador", label: "Encuestador" },
// ];

// const CompEditUser = ({ id }) => {
//     const [username, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [passwd, setPass] = useState('')
//     const [role, setRole] = useState('')
//     const [hasErrors, setHasErrors] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const [isFormInvalid, setIsFormInvalid] = useState(false);
//     const navigate = useNavigate()
//     //const { id } = useParams()
//     console.log(id);

//     const userId = localStorage.getItem('userId');



//     const handleEmailChange = (e) => {
//         const newEmail = e.target.value;
//         setEmail(newEmail);

//         // Expresión regular para validar el formato de correo electrónico
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


//         // Validar el formato del correo electrónico
//         if (newEmail.trim() === '' || emailRegex.test(newEmail)) {
//             setEmailError('');
//         } else {
//             setEmailError('Formato de correo electrónico no válido');
//         }
//     };

//     const handleChange = (e) => {
//         setRole(e.target.value);
//     };

//     //procedimiento para actualizar
//     const update = async (e) => {
//         e.preventDefault();

//         // Validar campos antes de enviar la solicitud
//         if (!username.trim() || !email.trim() || !passwd.trim() || !role.trim() || emailError) {
//             setHasErrors(true);
//             setIsFormInvalid(true);
//             return;
//         }

//         // Si llegamos aquí, no hay errores
//         setHasErrors(false);
//         setIsFormInvalid(false);

//         await axios.put(URI + id, {
//             parent: userId,
//             username: username,
//             email: email,
//             passwd: passwd,
//             role: role
//         })
//         window.location.reload();
//         //navigate('/viewusers')
//     }

//     useEffect(() => {
//         // Incluye getBlogById en el array de dependencias
//         const getUserById = async () => {
//             const res = await axios.get(URI + id)

//             setUserName(res.data.username)
//             setEmail(res.data.email)
//             setRole(res.data.role)

//         }

//         getUserById();
//     }, [id]); // Agrega id al array de dependencias

//     return (
//         // <div className='form-container' style={{ padding: '32px 62px' }} >
//         <div className="my-form form-style">
//             <h3>FICHA USUARIO</h3>
//             <Form onSubmit={update} >
//                 <div className='mb-3'>
//                     <label className='parent-label form-label'>Alias</label>
//                     <input
//                         value={username}
//                         onChange={(e) => setUserName(e.target.value)}
//                         type="text"
//                         className='form-control'
//                     />
//                     {hasErrors && <span className="error-message">Requiere que ingrese Alias.</span>}
//                 </div>
//                 <div className='mb-3'>
//                     <label className='parent-label form-label'>Email</label>
//                     <input
//                         value={email}
//                         onChange={handleEmailChange}
//                         type="text"
//                         className='form-control'
//                     />
//                     {hasErrors && <span className="error-message">Requiere que ingrese Email.</span>}
//                     {emailError && <span className="error-message">{emailError}</span>}
//                 </div>
//                 <div className='mb-3'>
//                     <label className='parent-label form-label'>Password</label>
//                     <input
//                         value={passwd}
//                         onChange={(e) => setPass(e.target.value)}
//                         type="text"
//                         className='form-control'
//                     />
//                     {hasErrors && <span className="error-message">Requiere que ingrese NUEVA Contraseña.</span>}
//                 </div>
//                 <div>
//                     <label className='parent-label form-label'>Rol</label>
//                     <Form.Select
//                         value={role}
//                         onChange={handleChange}
//                     >
//                         {options.map((opt) => (
//                             <option key={opt.value} value={opt.value}>
//                                 {opt.label}
//                             </option>
//                         ))}
//                     </Form.Select>
//                     {hasErrors && <span className="error-message">Selecciona el Rol.</span>}
//                 </div>
//                 <div className="mt-3"> {/* Add margin-top for spacing */}
//                     {isFormInvalid && <span className="error-message">Completa todos los campos correctamente.</span>}
//                     <button type='submit' className='btn btn-success btn-ladda'>Actualizar</button>
//                 </div>
//             </Form>
//             <style jsx>{`
//       .form-style{
//        padding: 32px 62px
//       }

//         @media (max-width: 480px) {
//          .form-style{
//        padding: 0px
//       }}

//         `}</style>
//         </div>

//     )
// }

// export default CompEditUser;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../servicios/api";
import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";

const URI = api + "usuarios/";
const options = [
    { value: "administrador", label: "Administrador" },
    { value: "operario", label: "Operario" },
    { value: "encuestador", label: "Encuestador" },
];

const CompEditUser = ({ id, abrirModal, getUsers }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPass] = useState("");
    const [role, setRole] = useState("");

    const [hasErrors, setHasErrors] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [isEdited, setIsEdited] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const [touchedFields, setTouchedFields] = useState({
        username: false,
        email: false,
        passwd: false,
        role: false,
    }); // Track which fields have been touched

    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    // Track when a field is touched (interacted with)
    const handleFieldTouched = (field) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
        setIsEdited(true); // Mark form as edited
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (newEmail.trim() === "" || emailRegex.test(newEmail)) {
            setEmailError("");
        } else {
            setEmailError("Formato de correo electrónico no válido");
        }
        handleFieldTouched("email");
    };

    const handleInputChange = (setFunction, field, value) => {
        setFunction(value);
        handleFieldTouched(field);
    };

    const handleChangeRole = (e) => {
        setRole(e.target.value);
        handleFieldTouched("role");
    };

    // Update function with specific field checks
    const update = async (e) => {
        e.preventDefault();
        console.log(username, email, passwd, emailError, "error")

        // Validation per field
        if (!username.trim()) {
            setHasErrors(true);
            return;
        }

        if (!email.trim() || emailError) {
            setHasErrors(true);
            return;
        }

        if (!passwd.trim()) {
            setHasErrors(true);
            return;
        }

        if (!role.trim()) {
            setHasErrors(true);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.put(
                URI + id,
                {
                    parent: userId,
                    username,
                    email,
                    passwd,
                    role,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                // window.location.reload();
                // Optionally, use navigate("/viewusers");
                getUsers();
                abrirModal()
            }
        } catch (error) {
            console.error("Error updating user:", error);
            setApiError("Hubo un problema actualizando el usuario. Por favor intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch user data by ID
    useEffect(() => {
        const getUserById = async () => {
            try {
                const res = await axios.get(URI + id);
                setUserName(res.data.username || ""); // Set username with fallback empty string
                setEmail(res.data.email || ""); // Set email with fallback empty string
                setRole(res.data.role || ""); // Set role with fallback empty string
            } catch (error) {
                console.log("Error fetching user data:", error);
                setApiError("Error al obtener los datos del usuario.");
            }
        };

        getUserById();
    }, [id]);

    const isButtonDisabled = !isEdited || emailError || loading;

    return (
        <div className="my-form form-style">
            <h3>FICHA USUARIO</h3>
            <Form onSubmit={update}>
                <div className="mb-3">
                    <label className="parent-label form-label">Alias</label>
                    <input
                        value={username}
                        onChange={(e) => handleInputChange(setUserName, "username", e.target.value)}
                        type="text"
                        className="form-control"
                        onBlur={() => handleFieldTouched("username")}
                    />
                    {touchedFields.username && hasErrors && (
                        <span className="error-message">Requiere que ingrese Alias.</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="parent-label form-label">Email</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        type="text"
                        className="form-control"
                        onBlur={() => handleFieldTouched("email")}
                    />
                    {touchedFields.email && hasErrors && (
                        <span className="error-message">Requiere que ingrese Email.</span>
                    )}
                    {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <div className="mb-3">
                    <label className="parent-label form-label">Password</label>
                    <input
                        value={passwd}
                        onChange={(e) => handleInputChange(setPass, "passwd", e.target.value)}
                        type="text"
                        className="form-control"
                        onBlur={() => handleFieldTouched("passwd")}
                    />
                    {hasErrors && (
                        <span className="error-message">Requiere que ingrese NUEVA Contraseña.</span>
                    )}
                </div>
                <div>
                    <label className="parent-label form-label">Rol</label>
                    <Form.Select value={role} onChange={handleChangeRole} onBlur={() => handleFieldTouched("role")}>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </Form.Select>
                    {touchedFields.role && hasErrors && (
                        <span className="error-message">Selecciona el Rol.</span>
                    )}
                </div>
                <div className="mt-3">
                    {apiError && <span className="error-message">{apiError}</span>}
                    <button type="submit" className="btn btn-success btn-ladda" disabled={isButtonDisabled}>
                        {loading ? "Actualizando..." : "Actualizar"}
                    </button>
                </div>
            </Form>
            <style jsx>{`
        .form-style {
          padding: 32px 62px;
        }

        @media (max-width: 480px) {
          .form-style {
            padding: 0px;
          }
        }
      `}</style>
        </div>
    );
};

export default CompEditUser;

