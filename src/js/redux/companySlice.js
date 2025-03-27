
import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({

    name: 'company',

    initialState: {
        currentCompanyAlias: '1-resp',
        currentCompanyName: 'Первый республиканский',


    },

    reducers: {

        setCurrentCompanyAlias: ( state, action ) => {
            state.currentCompanyAlias =  action.payload;
        },

        setCurrentCompanyName: ( state, action ) => {
            state.currentCompanyName =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setCurrentCompanyAlias,
    setCurrentCompanyName,
   

} = companySlice.actions;

export const selectorData = ( state ) => {
    return {
        currentCompanyAlias: state.company.currentCompanyAlias,
        currentCompanyName: state.company.currentCompanyName,


        


        


    };
};

export default companySlice.reducer;






