export const insuranceFormReducer = (typeSelected = '',action) => {
    

    if(action.type == '@@redux-form/CHANGE' && action.meta.field == 'insType')
    {
        return action.payload;
    }
    return typeSelected;
} 
