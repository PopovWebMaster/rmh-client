
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
        


        
    },

})

export const {  
    setWeekKeyPointList,
    setPointListIsChanged,
    setWeekKeyPointListAsChanged,

    setCategoryesIsChanged,
    setCategoryList,
    setCategoryListAsChanged,

   

} = layoutSlice.actions;

export const selectorData = ( state ) => {
    return {
        weekKeyPointList:   state.layout.weekKeyPointList,
        pointListIsChanged: state.layout.pointListIsChanged,

        categoryList: state.layout.categoryList,
        categoryesIsChanged: state.layout.categoryesIsChanged,



    };
};

export default layoutSlice.reducer;






