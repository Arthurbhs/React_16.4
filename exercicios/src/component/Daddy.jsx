import React from 'react'
import { childrenWitchProps } from '../Utils/Utils'



export default props =>

<div>
    <h1>{props.name} {props.lastname}</h1>
    <h2>Filhos</h2>
    <ul>
        
        {
            childrenWitchProps(props)
          
           }

       
    </ul>
</div>