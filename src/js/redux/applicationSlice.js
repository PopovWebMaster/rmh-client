
import { createSlice } from '@reduxjs/toolkit';

import { get_all_lists_of_values_from_application_list } from './vendors/get_all_lists_of_values_from_application_list.js';


export const applicationSlice = createSlice({

    name: 'application',

    initialState: {

        applicationList: [],
        applicationById: {},

    },

    reducers: {

        setApplicationList: ( state, action ) => {
            state.applicationList =  action.payload;
            let { applicationById } = get_all_lists_of_values_from_application_list( action.payload );
            state.applicationById = applicationById;

        },

        
    },

})

export const {  
    setApplicationList,

   

} = applicationSlice.actions;

export const selectorData = ( state ) => {
    return {
        applicationList:   state.application.applicationList,
        applicationById: state.application.applicationById,
        


        


    };
};

export default applicationSlice.reducer;






