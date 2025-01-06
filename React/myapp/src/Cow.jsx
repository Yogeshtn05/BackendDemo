import Cat from './Cat.jsx'
import {createContext} from 'react'
import {useState} from 'react'

export let nameContext=createContext();

export default function Cow(props){
    


    // const [col,setCol]=useState("black")
    // // const f=(()=>{
    // //     setCol(col=="black" ? "red":"black")
    // // })
    // const f1=(()=>{
    //     setInterval(()=>{
    //         setCol(col=="black"?"red":"black")
    //     },1000)
    // })
    // return(
    //     <nameContext.Provider value="black">
    //     <h1>Great GrandFather : {props.name}</h1>
    //     <button value={col} onClick={f1}>button</button>
    //     <h1 style={{ backgroundColor: col,color:col=='black' ? 'red':'black'}}>Hello</h1>
    //     <Cat/>
    //     {/* <Cat name={props.name}/> */}
    //     </nameContext.Provider>
    // )
}

