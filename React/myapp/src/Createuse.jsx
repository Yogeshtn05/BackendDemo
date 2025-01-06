import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Createuse(){
    let [name,setName]=useState("");
    let [age,setAge]=useState("");
    let [email,setEmail]=useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({ name, age, email });
        axios.post("http://localhost:3000/api/fetch", { name, age, email })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return(
        <div>
            <div>CreateUser</div>
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