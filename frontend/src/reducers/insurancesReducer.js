import {reduxConstants as rc} from '../constants'


export default (insurances=[],action) => {
    
    if(action.type === rc.FETCH_INSURANCES)
    {
        return action.payload;
    }
    return insurances;
} 

export const selectInsuranceRedux = (insurance,action) => {
    
    if(action.type === rc.SELECT_INSURANCE)
    {
        return action.payload;
    }
    return {};
} 

