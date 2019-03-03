import React from 'react'
import InsuranceForm from './InsuranceForm'
import {insertInsurance} from '../actions'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import History from '../classes/history'
import {withAppContext} from '../provider'


class Insurance extends React.Component {
  submit = values => {

    values.userName = this.props.appContext.userName;
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
export default withAppContext(connect(null,mapDispatchToProps)(Insurance))