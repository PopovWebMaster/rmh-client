
import { createSlice } from '@reduxjs/toolkit';

import { get_all_lists_of_values_from_application_list } from './vendors/get_all_lists_of_values_from_application_list.js';


export const applicationSlice = createSlice({

    name: 'application',

    initialState: {

        applicationList: [],
        applicationById: {},
        currentApplicationId: null,

        currentCategoryIdOfListFilter: null,






        currentAppName: '',
        currentAppCategoryId: null,
        currentAppNum: null,
        currentAppManagerNotes: '',


        // currentAppType: null,
        // currentAppNotes: null,
        // currentAppOrders: [],
        currentAppIsChanged: false,

    },

    reducers: {

        setApplicationList: ( state, action ) => {
            state.applicationList =  action.payload;
            let { applicationById } = get_all_lists_of_values_from_application_list( action.payload );
            state.applicationById = applicationById;
        },

        setCurrentApplicationId: ( state, action ) => {
            state.currentApplicationId =  action.payload;
        },

        setCurrentCategoryIdOfListFilter: ( state, action ) => {
            state.currentCategoryIdOfListFilter =  action.payload;
        },





        setCurrentAppName: ( state, action ) => {
            state.currentAppName =  action.payload;
        },

        setCurrentAppCategoryId: ( state, action ) => {
            state.currentAppCategoryId =  action.payload;
        },

        setCurrentAppNum: ( state, action ) => {
            state.currentAppNum =  action.payload;
        },

        // setCurrentAppType: ( state, action ) => {
        //     state.currentAppType =  action.payload;
        // },

        setCurrentAppManagerNotes: ( state, action ) => {
            state.currentAppManagerNotes =  action.payload;
        },

        // setCurrentAppOrders: ( state, action ) => {
        //     state.currentAppOrders =  action.payload;
        // },

        setCurrentAppIsChanged: ( state, action ) => {
            state.currentAppIsChanged =  action.payload;
        },



        


        
    },

})

export const {  
    setApplicationList,
    setCurrentApplicationId,
    setCurrentCategoryIdOfListFilter,




    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppNum,
    // setCurrentAppType,
    setCurrentAppManagerNotes,
    // setCurrentAppOrders,
    setCurrentAppIsChanged,



} = applicationSlice.actions;

export const selectorData = ( state ) => {
    return {
        applicationList:                state.application.applicationList,
        applicationById:                state.application.applicationById,
        currentApplicationId:           state.application.currentApplicationId,
        currentCategoryIdOfListFilter:  state.application.currentCategoryIdOfListFilter,



        currentAppName:         state.application.currentAppName,
        currentAppCategoryId:   state.application.currentAppCategoryId,
        currentAppNum:          state.application.currentAppNum,
        // currentAppType:         state.application.currentAppType,
        currentAppManagerNotes:        state.application.currentAppManagerNotes,
        // currentAppOrders:       state.application.currentAppOrders,

        currentAppIsChanged:    state.application.currentAppIsChanged,

        





    };
};

export default applicationSlice.reducer;






