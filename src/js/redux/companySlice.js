
import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({

    name: 'company',

    initialState: {
        currentCompanyAlias: '1-resp',
        currentCompanyName: 'Первый республиканский',

        companyList: [],


    },

    reducers: {

        setCurrentCompanyAlias: ( state, action ) => {
            state.currentCompanyAlias =  action.payload;
        },

        setCurrentCompanyName: ( state, action ) => {
            state.currentCompanyName =  action.payload;
        },

        setCompanyList: ( state, action ) => {
            state.companyList =  action.payload;
        },
        
        
        
    },

})

export const {  
    setCurrentCompanyAlias,
    setCurrentCompanyName,
    setCompanyList,
   

} = companySlice.actions;

export const selectorData = ( state ) => {
    return {
        currentCompanyAlias: state.company.currentCompanyAlias,
        currentCompanyName: state.company.currentCompanyName,
        companyList: state.company.companyList,



        
        

        


    };
};

export default companySlice.reducer;






