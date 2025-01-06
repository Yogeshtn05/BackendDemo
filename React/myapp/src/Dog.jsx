import Ant from './Ant.jsx'
export default function Dog(props){
    return(
        <>
        <h1>Father : {props.name}</h1>
        <Ant name={props.name}/>
        </>
    )
}