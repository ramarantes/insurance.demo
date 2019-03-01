import _ from 'lodash'

export default (insurances=[],action) => {
    
    if(action.type == 'FETCH_INSURANCES')
    {
        return action.payload;
    }
    if(action.type == 'UPDATE_INSURANCE')
    {
        
        return insurances.map((item) => {
            if (item.cod !== action.payload.cod) {
              // This isn't the item we care about - keep it as-is
              return item
            }
        
            // Otherwise, this is the one we want - return an updated value
            return {
              ...item,
              ...action.payload
            }
          })
    }
    return insurances;
} 

export const selectInsuranceRedux = (insurance={},action) => {
    
    if(action.type == 'SELECT_INSURANCE')
    {
        return action.payload;
    }

    if(action.type == 'UNSELECT_INSURANCE')
    {
        return {};
    }
    return {};
} 

