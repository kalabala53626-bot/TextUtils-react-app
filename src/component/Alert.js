import React from 'react'

export default function Alert(props) {

    const Capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    


  return (
    props.alert && <div className="d-flex justify-content-center">
        <div className={`alert float alert-${props.alert.type} alert-dismissible fade show w-50`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    </div>
  )
}
