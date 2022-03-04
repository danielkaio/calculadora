import React from "react";
import "./Botao.css"


const Botao =(props)=>{
    let classes ='btn'
    const {label} = props
     classes +=  props.operation ? 'operation':''
     classes +=  props.double ? 'double':''
     classes +=  props.triple ? 'triple':''


     return (
         <button onClick={e => props.click && props.click(label)} 
         className={classes}>
             
             {label}

         </button>
     )
     
}


export default Botao