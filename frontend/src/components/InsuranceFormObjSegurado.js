import React from 'react'
import { Field} from 'redux-form'


const normalizeCPF = value => {
    if (!value) {
      return value
    }
  
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) {
      return onlyNums
    }
    if (onlyNums.length <= 6) {
      return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`
    }
    if (onlyNums.length <= 9) {
      return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3,6)}.${onlyNums.slice(6)}`
    }
    if (onlyNums.length > 9) {
      return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3,6)}.${onlyNums.slice(6,9)}-${onlyNums.slice(9,11)}`
    }
    return value
  }

export default props => {
    if(props.tipo == 'vida')
        return(
        <div className="form-group">
            <label htmlFor="objSegurado">CPF</label>
            <Field name="objSegurado" component="input" type="text" className="form-control" normalize={normalizeCPF}/>
        </div>)
    return(
    <div className="form-group">
        <label htmlFor="objSegurado">objSegurado</label>
        <Field name="objSegurado" component="input" type="text" className="form-control"/>
    </div>)
}