
import { createSlice } from '@reduxjs/toolkit';

export const logsForwardTASlise = createSlice({

    name: 'logsForwardTA',

    initialState: {
        logDateMain: '',
        logDateBackup: '',
  

    },

    reducers: {

        setLogDateMain: ( state, action ) => {
            state.logDateMain =  action.payload;
        },

        setLogDateBackup: ( state, action ) => {
            state.logDateBackup =  action.payload;
        },


        
    },

})

export const {  
    setLogDateMain,
    setLogDateBackup,

   

} = logsForwardTASlise.actions;

export const selectorData = ( state ) => {
    return {
        logDateMain:        state.logsForwardTA.logDateMain,
        logDateBackup:      state.logsForwardTA.logDateBackup,


  
    };
};

export default logsForwardTASlise.reducer;






