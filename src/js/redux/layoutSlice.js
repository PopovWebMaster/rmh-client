
import { createSlice } from '@reduxjs/toolkit';

// import { get_all_colors_from_category_list } from './vendors/get_all_colors_from_category_list.js';
import { get_all_lists_of_values_from_category_list } from './vendors/get_all_lists_of_values_from_category_list.js';

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
            // state.allUsedColors = get_all_colors_from_category_list( action.payload );
            let { allUsedColors, allUsedNames, allUsedPrefixes } = get_all_lists_of_values_from_category_list( action.payload );
            state.allUsedColors = allUsedColors;
            state.allUsedNames = allUsedNames;
            state.allUsedPrefixes = allUsedPrefixes;
        },

        setCategoryListAsChanged: ( state, action ) => {
            state.categoryList =  action.payload;
            state.categoryesIsChanged =  true;
            // state.allUsedColors = get_all_colors_from_category_list( action.payload );
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
        allUsedColors: state.layout.allUsedColors,
        allUsedNames: state.layout.allUsedNames,
        allUsedPrefixes: state.layout.allUsedPrefixes,



    };
};

export default layoutSlice.reducer;






