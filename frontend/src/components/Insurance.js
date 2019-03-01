import React from 'react'
import InsuranceForm from './InsuranceForm'
import {insertInsurance} from '../actions'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import History from '../history'

class Insurance extends React.Component {
  submit = values => {

    // print the form values to the console
    this.props.insertInsurance(values);
    reset('insurance');
    History.push('/insuranceList');
  }
  render() {
    return <InsuranceForm onSubmit={this.submit} />
  }
}
const mapDispatchToProps = dispatch => ({
    insertInsurance: values => dispatch(insertInsurance(values))
  })
export default connect(null,mapDispatchToProps)(Insurance)