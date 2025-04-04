
import { createSlice } from '@reduxjs/toolkit';

export const logsForwardTASlise = createSlice({

    name: 'logsForwardTA',

    initialState: {
        logDateMain: '',
        logDateBackup: '',

        windowLeftWidth: 50, // %
        windowRightWidth: 50, // %
        minWidth: 20, // %
        borderMoverWidtnPx: 22,

        selectedAll: 'main', // backup
  

    },

    reducers: {

        setLogDateMain: ( state, action ) => {
            state.logDateMain =  action.payload;
        },

        setLogDateBackup: ( state, action ) => {
            state.logDateBackup =  action.payload;
        },


        setWindowLeftWidth: ( state, action ) => {
            state.windowLeftWidth =  action.payload;
        },
        setWindowRightWidth: ( state, action ) => {
            state.windowRightWidth =  action.payload;
        },
        setMinWidth: ( state, action ) => {
            state.minWidth =  action.payload;
        },

        setBorderMoverWidtnPx: ( state, action ) => {
            state.borderMoverWidtnPx =  action.payload;
        },

        setSelectedAll: ( state, action ) => {
            state.selectedAll =  action.payload;
        },

        
        
    },

})

export const {  
    setLogDateMain,
    setLogDateBackup,
    setWindowLeftWidth,
    setWindowRightWidth,
    setMinWidth,
    setBorderMoverWidtnPx,
    setSelectedAll,

   

} = logsForwardTASlise.actions;

export const selectorData = ( state ) => {
    return {
        logDateMain:        state.logsForwardTA.logDateMain,
        logDateBackup:      state.logsForwardTA.logDateBackup,
        windowLeftWidth:    state.logsForwardTA.windowLeftWidth,
        windowRightWidth:   state.logsForwardTA.windowRightWidth,
        minWidth:           state.logsForwardTA.minWidth,
        borderMoverWidtnPx: state.logsForwardTA.borderMoverWidtnPx,
        selectedAll:        state.logsForwardTA.selectedAll,



        


  
    };
};

export default logsForwardTASlise.reducer;






