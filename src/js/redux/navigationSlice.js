
import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({

    name: 'navigation',

    initialState: {
        currentPage: '',

    },

    reducers: {

        setCurrentPage: ( state, action ) => {
            state.currentPage =  action.payload;
        },


        
        
        
        
    },

})

export const {  
    setCurrentPage,
   

} = navigationSlice.actions;

export const selectorData = ( state ) => {
    return {
        currentPage: state.navigation.currentPage,

        


    };
};

export default navigationSlice.reducer;






