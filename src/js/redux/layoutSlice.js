
import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({

    name: 'layout',

    initialState: {

        weekKeyPointList: [
            [], [], [], [], [], [], [] // time,description, ms
        ],
        pointListIsChanged: false,

        categoryList: [],
        categoryesIsChanged: false,


        eventList: [],
        eventsIsChanged: false,


    },

    reducers: {



        setWeekKeyPointList: ( state, action ) => {
            state.weekKeyPointList =  action.payload;
        },

        setWeekKeyPointListAsChanged: ( state, action ) => {
            state.weekKeyPointList =  action.payload;
            state.pointListIsChanged =  true;
        },

        setPointListIsChanged: ( state, action ) => {
            state.pointListIsChanged =  action.payload;
        },





        setCategoryesIsChanged: ( state, action ) => {
            state.categoryesIsChanged =  action.payload;
        },
    
        setCategoryList: ( state, action ) => {
            state.categoryList =  action.payload;
        },

        setCategoryListAsChanged: ( state, action ) => {
            state.categoryList =  action.payload;
            state.categoryesIsChanged =  true;
        },





        setEventsIsChanged: ( state, action ) => {
            state.eventsIsChanged =  action.payload;
        },
    
        setEventList: ( state, action ) => {
            state.eventList =  action.payload;
        },

        setEventListAsChanged: ( state, action ) => {
            state.eventList =  action.payload;
            state.eventsIsChanged =  true;
        },
        
        
    },

})

export const {  
    setWeekKeyPointList,
    setPointListIsChanged,
    setWeekKeyPointListAsChanged,

    setCategoryesIsChanged,
    setCategoryList,
    setCategoryListAsChanged,


    setEventsIsChanged,
    setEventList,
    setEventListAsChanged,

   

} = layoutSlice.actions;

export const selectorData = ( state ) => {
    return {
        weekKeyPointList:   state.layout.weekKeyPointList,
        pointListIsChanged: state.layout.pointListIsChanged,

        categoryList: state.layout.categoryList,
        categoryesIsChanged: state.layout.categoryesIsChanged,

        eventList: state.layout.eventList,
        eventsIsChanged: state.layout.eventsIsChanged,


    };
};

export default layoutSlice.reducer;






