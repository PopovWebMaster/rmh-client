
import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({

    name: 'layout',

    initialState: {

        weekKeyPointList: [
            [], [], [], [], [], [], [] // time,description, ms
        ],



    },

    reducers: {

        setWeekKeyPointList: ( state, action ) => {
            state.weekKeyPointList =  action.payload;
        },



        
    },

})

export const {  
    setWeekKeyPointList,

   

} = layoutSlice.actions;

export const selectorData = ( state ) => {
    return {
        weekKeyPointList: state.layout.weekKeyPointList,

    };
};

export default layoutSlice.reducer;






