
import { createSlice } from '@reduxjs/toolkit';

// import { get_all_colors_from_category_list } from './vendors/get_all_colors_from_category_list.js';
import { get_all_lists_of_values_from_category_list } from './vendors/get_all_lists_of_values_from_category_list.js';

import { WEEK_NAME } from './../config/week.js';

export const layoutSlice = createSlice({

    name: 'layout',

    initialState: {

        weekKeyPointList: [
            [], [], [], [], [], [], [] // time,description, ms
        ],
        pointListIsChanged: false,
        categoryList: [],
        categoryesIsChanged: false,
        allUsedColors: [],
        allUsedNames: [],
        allUsedPrefixes: [],
        eventList: [],
        eventsIsChanged: false,

        gridCurrentDay: 0, // 0 1 2 3 4 5 6
        gridCurrentDayName: WEEK_NAME[ 0 ],
        gridDayEventsList: [ [1], [], [], [], [], [], [] ],
        gridDayEventsIsChanges: true,


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
            let { allUsedColors, allUsedNames, allUsedPrefixes } = get_all_lists_of_values_from_category_list( action.payload );
            state.allUsedColors = allUsedColors;
            state.allUsedNames = allUsedNames;
            state.allUsedPrefixes = allUsedPrefixes;
        },

        setCategoryListAsChanged: ( state, action ) => {
            state.categoryList =  action.payload;
            state.categoryesIsChanged =  true;
            let { allUsedColors, allUsedNames, allUsedPrefixes } = get_all_lists_of_values_from_category_list( action.payload );
            state.allUsedColors = allUsedColors;
            state.allUsedNames = allUsedNames;
            state.allUsedPrefixes = allUsedPrefixes;

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




        setGridCurrentDay: ( state, action ) => {
            state.gridCurrentDay =  action.payload;
            state.gridCurrentDayName = WEEK_NAME[ action.payload ];

        },

        setGridDayEventsIsChanges: ( state, action ) => {
            state.gridDayEventsIsChanges =  action.payload;
        },
    
        setGridDayEventsList: ( state, action ) => {
            state.gridDayEventsList =  action.payload;
        },

        setGridDayEventsListAsChanged: ( state, action ) => {
            state.gridDayEventsList =  action.payload;
            state.gridDayEventsIsChanges =  true;
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

    setGridCurrentDay,

    setGridDayEventsIsChanges,
    setGridDayEventsList,
    setGridDayEventsListAsChanged,
   

} = layoutSlice.actions;

export const selectorData = ( state ) => {
    return {
        weekKeyPointList:   state.layout.weekKeyPointList,
        pointListIsChanged: state.layout.pointListIsChanged,

        categoryList: state.layout.categoryList,
        categoryesIsChanged: state.layout.categoryesIsChanged,

        eventList: state.layout.eventList,
        eventsIsChanged: state.layout.eventsIsChanged,
        allUsedColors: state.layout.allUsedColors,
        allUsedNames: state.layout.allUsedNames,
        allUsedPrefixes: state.layout.allUsedPrefixes,


        gridCurrentDay: state.layout.gridCurrentDay,
        gridCurrentDayName: state.layout.gridCurrentDayName,
        gridDayEventsList: state.layout.gridDayEventsList,
        gridDayEventsIsChanges: state.layout.gridDayEventsIsChanges,





    };
};

export default layoutSlice.reducer;






