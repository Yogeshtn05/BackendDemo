import Createuse from './Createuse.jsx'
import Updateuse from './Updateuse.jsx'
import Deleteuse from './Deleteuse.jsx'
import './Index.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'


export default function Index(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/check/")
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[user])
    const deleteid=(id)=>{
        axios.delete(`http://localhost:3000/api/delete/${id}`)
        .then(res=>{console.log(res)})
        .catch(error=>{console.log(error)})
    }

    return(
        <>
    <Router>
        <h1>Hello</h1>
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
            </thead>
            <tbody>
            {
                user.map((user,index)=>(
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td><button >
                            <Link to={`/update/${user._id}`}>Update</Link>
                        </button>
                    </td>
                    <td>
                        <button onClick={(e)=>{deleteid(user._id)}}>
                            Delete
                        </button>
                    </td>
                </tr>
                ) )
        }
            </tbody>
            
           
        </table>
            
                <button>
                    <Link to="/create">Create</Link></button>

                <Routes>
                    <Route path="/create" element={<Createuse/>}>Create</Route>
                    <Route path="/update/:id" element={<Updateuse/>}>Create</Route>
                    <Route path="/delete" element={<Deleteuse/>}>Create</Route>
                </Routes>
            </Router>

        </>)
}