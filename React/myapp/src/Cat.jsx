import { useContext } from 'react'
import { nameContext } from './Cow.jsx'
import Dog from './Dog.jsx'

export default function Cat(props){
    let name=useContext(nameContext)
    return(
        <>
        <h1>Grand Father : {props.name}</h1>
        <Dog name={props.name}/>
        </>
    )
}