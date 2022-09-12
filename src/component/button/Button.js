import React from 'react'
import styles from  "../../../styles/Button.module.css"

function Button(props) {
  const style={
   width:"224px",
    height:'48px',
    backgroundColor: props.color||'#3067F1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'white',
    borderRadius:'25px'  ,
    borderColor: '#06070a',
    cursor: 'pointer',
   }


  return (
    <div>
        <div style={style}>
            {props.title}
        </div>
    </div>
  )
}

export default Button