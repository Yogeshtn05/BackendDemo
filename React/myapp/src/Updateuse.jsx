import { useState,useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

export default function Updateuse(){
    const {id}=useParams();
    let [name,setName]=useState("");
    let [age,setAge]=useState("");
    let [email,setEmail]=useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({ name, age, email });
        axios.put(`http://localhost:3000/api/update/${id}`, { name, age, email })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    };
    return(
        <div>
            <div>UpdateUser</div>
            <form onSubmit={submit}>
                <label for="name">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <label for="age">Age</label>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}></input>
                <br></br>
                <label for="email">Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <br></br>
                <button type="submit">SUBMIT</button>
            </form>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </div>
    )
}