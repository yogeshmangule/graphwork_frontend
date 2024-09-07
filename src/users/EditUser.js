// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../servicios/api";
// import React from "react";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { Form } from "react-bootstrap";

// const URI = api + "usuarios/";
// const options = [
//     { value: "administrador", label: "Administrador" },
//     { value: "operario", label: "Operario" },
//     { value: "encuestador", label: "Encuestador" },
// ];

// const CompEditUser = ({ id, abrirModal, getUsers }) => {
//     const [username, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [passwd, setPass] = useState("");
//     const [role, setRole] = useState("");

//     // Separate error states
//     const [usernameError, setUsernameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwdError, setPasswdError] = useState("");
//     const [roleError, setRoleError] = useState("");

//     const [isEdited, setIsEdited] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [apiError, setApiError] = useState("");

//     const navigate = useNavigate();
//     const userId = localStorage.getItem("userId");

//     const handleEmailChange = (e) => {
//         const newEmail = e.target.value;
//         setEmail(newEmail);

//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//         if (newEmail.trim() === "") {
//             setEmailError("Requiere que ingrese Email.");
//         } else if (!emailRegex.test(newEmail)) {
//             setEmailError("Formato de correo electrónico no válido");
//         } else {
//             setEmailError("");
//         }
//         setIsEdited(true);
//     };

//     const handleUsernameChange = (e) => {
//         const newUsername = e.target.value;
//         setUserName(newUsername);

//         if (newUsername.trim() === "") {
//             setUsernameError("Requiere que ingrese Alias.");
//         } else {
//             setUsernameError("");
//         }
//         setIsEdited(true);
//     };

//     const handlePassChange = (e) => {
//         const newPass = e.target.value;
//         setPass(newPass);

//         // if (newPass.trim() === "") {
//         //     setPasswdError("Requiere que ingrese NUEVA Contraseña.");
//         // } else 
//         if (newPass.length < 6) {
//             setPasswdError("La contraseña debe tener al menos 6 caracteres.");
//         } else {
//             setPasswdError("");
//             setIsEdited(true);
//         }
//     };

//     const handleRoleChange = (e) => {
//         const newRole = e.target.value;
//         setRole(newRole);

//         if (newRole.trim() === "") {
//             setRoleError("Selecciona el Rol.");
//         } else {
//             setRoleError("");
//         }
//         setIsEdited(true);
//     };

//     // Update function with validation
//     const update = async (e) => {
//         e.preventDefault();

//         // Check for errors before submission
//         if (usernameError || emailError || passwdError || roleError) {
//             return;
//         }

//         // Check for empty fields
//         if (!username.trim()) {
//             setUsernameError("Requiere que ingrese Alias.");
//             return;
//         }

//         if (!email.trim()) {
//             setEmailError("Requiere que ingrese Email.");
//             return;
//         }

//         if (!role.trim()) {
//             setRoleError("Selecciona el Rol.");
//             return;
//         }

//         // Prepare data for the API
//         const userData = {
//             parent: userId,
//             username,
//             email,
//             role,
//         };

//         // If the password is entered and has at least 6 characters, include it
//         if (passwd.trim() && passwd.length >= 6) {
//             userData.passwd = passwd;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.put(URI + id, userData, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (response.status === 200) {
//                 getUsers();
//                 abrirModal();
//             }
//         } catch (error) {
//             console.error("Error updating user:", error);
//             setApiError("Hubo un problema actualizando el usuario. Por favor intenta de nuevo.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Fetch user data by ID
//     useEffect(() => {
//         const getUserById = async () => {
//             try {
//                 const res = await axios.get(URI + id);
//                 setUserName(res.data.username || "");
//                 setEmail(res.data.email || "");
//                 setRole(res.data.role || "");
//             } catch (error) {
//                 console.log("Error fetching user data:", error);
//                 setApiError("Error al obtener los datos del usuario.");
//             }
//         };

//         getUserById();
//     }, [id]);

//     const isButtonDisabled = loading || usernameError || emailError || roleError;

//     return (
//         <div className="my-form form-style">
//             <h3>FICHA USUARIO</h3>
//             <Form onSubmit={update}>
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Alias</label>
//                     <input
//                         value={username}
//                         onChange={handleUsernameChange}
//                         type="text"
//                         className="form-control"
//                     />
//                     {usernameError && (
//                         <span className="error-message">{usernameError}</span>
//                     )}
//                 </div>
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Email</label>
//                     <input
//                         value={email}
//                         onChange={handleEmailChange}
//                         type="text"
//                         className="form-control"
//                     />
//                     {emailError && <span className="error-message">{emailError}</span>}
//                 </div>
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Password</label>
//                     <input
//                         value={passwd}
//                         onChange={handlePassChange}
//                         type="text"
//                         className="form-control"
//                     />
//                     {passwdError && (
//                         <span className="error-message">{passwdError}</span>
//                     )}
//                 </div>
//                 <div className="mb-3">
//                     <label className="parent-label form-label">Rol</label>
//                     <Form.Select value={role} onChange={handleRoleChange}>
//                         {options.map((opt) => (
//                             <option key={opt.value} value={opt.value}>
//                                 {opt.label}
//                             </option>
//                         ))}
//                     </Form.Select>
//                     {roleError && <span className="error-message">{roleError}</span>}
//                 </div>
//                 <div className="mt-3">
//                     {apiError && <span className="error-message">{apiError}</span>}
//                     <button type="submit" className="btn btn-success btn-ladda" disabled={isButtonDisabled}>
//                         {loading ? "Actualizando..." : "Actualizar"}
//                     </button>
//                 </div>
//             </Form>
//             <style jsx>{`
//                 .form-style {
//                     padding: 32px 62px;
//                 }

//                 @media (max-width: 480px) {
//                     .form-style {
//                         padding: 0px;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

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

    // Separate error states
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwdError, setPasswdError] = useState("");
    const [roleError, setRoleError] = useState("");

    const [isEdited, setIsEdited] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (newEmail.trim() === "") {
            setEmailError("Requiere que ingrese Email.");
        } else if (!emailRegex.test(newEmail)) {
            setEmailError("Formato de correo electrónico no válido");
        } else {
            setEmailError("");
        }
        setIsEdited(true);
    };

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setUserName(newUsername);

        if (newUsername.trim() === "") {
            setUsernameError("Requiere que ingrese Alias.");
        } else {
            setUsernameError("");
        }
        setIsEdited(true);
    };

    const handlePassChange = (e) => {
        const newPass = e.target.value;
        setPass(newPass);

        // Check password length and set error if needed
        if (newPass.trim() === "") {
            setPasswdError(""); // No error if password field is empty
        } else if (newPass.length < 6) {
            setPasswdError("La contraseña debe tener al menos 6 caracteres.");
        } else {
            setPasswdError(""); // Clear error if password is valid
        }
        setIsEdited(true);
    };

    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setRole(newRole);

        if (newRole.trim() === "") {
            setRoleError("Selecciona el Rol.");
        } else {
            setRoleError("");
        }
        setIsEdited(true);
    };

    // Update function with validation
    const update = async (e) => {
        e.preventDefault();

        // Check for errors before submission
        if (usernameError || emailError || passwdError || roleError) {
            return;
        }

        // Check for empty fields
        if (!username.trim()) {
            setUsernameError("Requiere que ingrese Alias.");
            return;
        }

        if (!email.trim()) {
            setEmailError("Requiere que ingrese Email.");
            return;
        }

        if (!role.trim()) {
            setRoleError("Selecciona el Rol.");
            return;
        }

        // Prepare data for the API
        const userData = {
            parent: userId,
            username,
            email,
            role,
        };

        // If the password is entered and has at least 6 characters, include it
        if (passwd.trim() && passwd.length >= 6) {
            userData.passwd = passwd;
        }

        setLoading(true);
        try {
            const response = await axios.put(URI + id, userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                getUsers();
                abrirModal();
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
                setUserName(res.data.username || "");
                setEmail(res.data.email || "");
                setRole(res.data.role || "");
            } catch (error) {
                console.log("Error fetching user data:", error);
                setApiError("Error al obtener los datos del usuario.");
            }
        };

        getUserById();
    }, [id]);

    const isButtonDisabled = loading || usernameError || emailError || passwdError || roleError;

    return (
        <div className="my-form form-style">
            <h3>FICHA USUARIO</h3>
            <Form onSubmit={update}>
                <div className="mb-3">
                    <label className="parent-label form-label">Alias</label>
                    <input
                        value={username}
                        onChange={handleUsernameChange}
                        type="text"
                        className="form-control"
                    />
                    {usernameError && (
                        <span className="error-message">{usernameError}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="parent-label form-label">Email</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        type="text"
                        className="form-control"
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <div className="mb-3">
                    <label className="parent-label form-label">Password</label>
                    <input
                        value={passwd}
                        onChange={handlePassChange}
                        type="text"
                        className="form-control"
                    />
                    {passwdError && (
                        <span className="error-message">{passwdError}</span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="parent-label form-label">Rol</label>
                    <Form.Select value={role} onChange={handleRoleChange}>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </Form.Select>
                    {roleError && <span className="error-message">{roleError}</span>}
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




