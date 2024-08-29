import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { varAdmin } from "../servicios/api"
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';

const URI = 'http://localhost:8000/usuarios/'


const CompShowBlogs = () => {
    const userId = localStorage.getItem('userId');
    console.log("ESTOY EN SHOW" + userId);
    const userRole = localStorage.getItem('userRol');
    console.log(userId);
    const [users, setBlog] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])

    //procedimineto para mostrar todos los blogs
    const getUsers = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getUsers()
    }

    return(
       
        <div className=''>
            <>
          <Header />
            </>
            <Sidebar>
                <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user) => (
                                <tr key={ user.ID}>
                                    <td> { user.username } </td>
                                    <td> { user.email } </td>
                                    <td>  {user.status === 1 ? "Activo" : "Inactivo"} </td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        {userRole === varAdmin && (
                                            <button onClick={() => deleteBlog(user.id)} className='btn btn-danger'>
                                            <i className='fas fa-trash-alt'></i>
                                            </button>
                                        )}
                                       
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
                </div>
            </Sidebar>
        </div>
    )

}

export default CompShowBlogs