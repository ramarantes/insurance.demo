import API from '../API'
import {reduxConstants as rc} from '../constants'

export const fetchInsurance = () => async dispatch => {
        var result = await API.get();
        dispatch( {
            type: rc.FETCH_INSURANCES,
            payload:result.data
        });
    };

export const insertInsurance = insurance => () => {
    var result;
    debugger;
    if(!insurance.cod)
        result  = API.post('',insurance);
    else
        result = API.put('',insurance);
    if(result)
        fetchInsurance();

}
export const selectInsurance = insurance =>
    ({
        type: rc.SELECT_INSURANCE,
        payload: insurance
    });

