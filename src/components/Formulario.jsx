import {useState} from 'react'



const Formulario = (props) => { 
    
    const [error, setError] = useState(false)
    
    
    const validarInput = (e) => {
        e.preventDefault()
        if (props.nombre === '' || props.password === ''){
            setError(true)
            return
            }
            setError(false)
        }
        

    

    return (
    <form onSubmit={validarInput}>
        {error ? <p className='error'>Debes Ingresar Tu Nombre y Password</p>: null}
        <h3>{props.nombre}</h3>
    <div className="form-group">
        <p>Ingresa Tu Nombre</p>
        <input className="form-control" name="Nombre" onChange={(e) => {props.setNombre(e.target.value)}}/>
        <p>Ingresa Tu Password</p>
        <input className="form-control" name="Password" onChange={(e) => {props.setPassword(e.target.value)}}/>
        
    </div> 
    </form>
    ) }


export default Formulario
