import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import ObjSegurado from './InsuranceFormObjSegurado'

let InsuranceForm = props => {
  const { handleSubmit } = props

  

  return <div className="col-6">
  <form onSubmit={handleSubmit}>
   <div className="form-group"> 
           <label htmlFor="cod">Código</label>
        <Field name="cod" component="input" type="text" disabled className="form-control"/>
    </div>
    <div className="form-group"> 
   <label>Tipo</label>
   <div>
          <div className="form-check-inline">
            <Field
              name="insType"
              component="input"
              type="radio"
              value="Automovel"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Automóvel
            </label>
          </div>
          <div className="form-check-inline">
            <Field
              name="insType"
              component="input"
              type="radio"
              value="Residencial"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Residencial
            </label>
          </div>
          <div className="form-check-inline">
            <Field
              name="insType"
              component="input"
              type="radio"
              value="Vida"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Vida
            </label>
          </div>
          </div>
      </div>
      <ObjSegurado tipo='vida'/>
      <button type="submit"  className="btn btn-primary">Submit</button>
  
  </form>
  </div>
}

InsuranceForm = reduxForm({
  form: 'insurance'
})(InsuranceForm)

InsuranceForm = connect(
  state => ({
    initialValues: state.selectedInsurance
  })
)(InsuranceForm)

export default InsuranceForm