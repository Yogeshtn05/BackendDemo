import Cat from './Cat.jsx'
import {nameContext} from './Cow.jsx'
import {useContext} from 'react'

export default function Ant(props){
    let col1=useContext(nameContext)

    return(
        <>
        <h1>Son : {col1}</h1>
        </>
    )
}