
import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({

    name: 'company',

    initialState: {
        currentCompanyAlias: '1-resp',
        currentCompanyName: 'Первый республиканский',
        currentCompanyType: 'tv',


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

        setCurrentCompanyType: ( state, action ) => {
            state.currentCompanyType =  action.payload;
        },

        
        
        
        
    },

})

export const {  
    setCurrentCompanyAlias,
    setCurrentCompanyName,
    setCompanyList,
    setCurrentCompanyType,
   

} = companySlice.actions;

export const selectorData = ( state ) => {
    return {
        currentCompanyAlias: state.company.currentCompanyAlias,
        currentCompanyName: state.company.currentCompanyName,
        companyList: state.company.companyList,

        currentCompanyType: state.company.currentCompanyType,



        
        
        

        


    };
};

export default companySlice.reducer;






