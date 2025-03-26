import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({

    name: 'userInfo',

    initialState: {
        userName: 'PlayReport',
        





    },

    reducers: {

        setFileExtension: ( state, action ) => {
            state.userName =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setFileExtension,
   

} = userInfoSlice.actions;





export const selectorData = ( state ) => {
    return {
        userName:    state.userInfo.userName,


    };
};

export default userInfoSlice.reducer;






