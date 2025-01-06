import {useEffect, useRef, useState} from 'react'
function Exmp(){
    // const [value,setValue] = useState(" ")
    // const val=useRef(" ")
    // const f=(event)=>{
    //     setValue(event.Target.value)
    //     //setValue(value+1)
    //     val.current=val.current+(event.target.value)
    //     console.log('Referene : '+val.current)
    //     console.log('Value : '+value)
    // }
    // useEffect(()=>{
    //     console.log("Updated")
    //     return(()=>{
    //         console.log("The is Update")
    //     })
    // },[value])
    const [nam,setNam]=useState("")
    let eventt=(event)=>{
        setNam(event.target.nam)
    }
    useEffect(()=>{
            console.log("Updated")
        },[nam])
    return(
        <div>
            {/* {/* <button onClick={f}>(+)</button>
            <h1>{val.current}</h1>
            <h1>{value}</h1> 
            <input type="text" value={value} onChange={f}/> */}
            <input type="text" value={nam} onChange={eventt}/>
        </div>
    )
}
export default Exmp;