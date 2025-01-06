import { useState } from "react";
import './Home.css'
import {link,Router} from 'react-router-dom';

function Elan(props){
    let [value,setValue]=useState(0)
    let k=()=>{
        setTimeout(()=>{
        setValue(value+1);
    },1000)
    }
    let k1=()=>{
        setTimeout(()=>{
            setValue(value-1);
        },1000)
    }
    let nam=""
    let [name,setName]=useState("elango")
    let l2=()=>{
        setName(name+"bca")
    }
    let l3=()=>{
        setName(" ")
    }
    let a=parseInt(props.val1)+parseInt(props.val2)
    let [val,setVal]=useState(0)
    let han = (event) => {
        setVal(parseInt(event.target.value));
    };
    return (
        <>
            {/* <h1 value="Hello">Hello</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.Target.value)}/>
            <button onClick={l2}>SEE</button>
            <button onClick={l3}>RESET</button>
            <h1>{name}</h1>
            <button onMouseOver={k1}>(-)</button>
            <button onMouseOver={k} onClick={k}>(+)</button>
            <h1>{value}</h1>
            <input type="number" value={name} onChange={(e)=>setName(e.Target.value)}/> */}
            {/* <input type="number" value={val} onChange={han} />
            <h1>{a+val}</h1> */}
            <h1>HELLO</h1>
        <Router>
            <div class="div">
                <div class="div3">
                        ES
                </div>
                <div class="div2">
                    <ol>
                        <li><link to='/'>HOME</link></li>
                        <li><link to='/about'>ABOUT US</link></li>
                        <li><link to='/contact'>CONTACT</link></li>
                    </ol>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
        </>
    )
}


export default Elan