
import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({

    name: 'navigation',

    initialState: {
        currentPage: '',
        currentCompany: '',


    },

    reducers: {

        setCurrentPage: ( state, action ) => {
            state.currentPage =  action.payload;
        },

        setCurrentCompany: ( state, action ) => {
            state.currentCompany =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setCurrentPage,
    setCurrentCompany,
   

} = navigationSlice.actions;

export const selectorData = ( state ) => {
    return {
        currentPage: state.navigation.currentPage,
        currentCompany: state.navigation.currentCompany,


        


    };
};

export default navigationSlice.reducer;






