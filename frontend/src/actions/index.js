import API from '../API'

export const fetchInsurance = () => async dispatch => {
        var result = await API.get();
        dispatch( {
            type: 'FETCH_INSURANCES',
            payload:result.data
        });
    };

export const insertInsurance = insurance => async dispatch => {
    var result;
    if(!insurance.cod)
        result  = API.post('',insurance);
    else
        result = API.put('',insurance);
    fetchInsurance();

}
export const selectInsurance = insurance =>
    ({
        type: 'SELECT_INSURANCE',
        payload: insurance
    });

