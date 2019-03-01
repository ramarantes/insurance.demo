import {combineReducers} from 'redux'
import insuranceRed, {selectInsuranceRedux} from './insurancesReducer'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    insurances: insuranceRed,
    form: formReducer,
    selectedInsurance: selectInsuranceRedux
});