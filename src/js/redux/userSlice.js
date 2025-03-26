
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({

    name: 'user',

    initialState: {
        name: '',
        company: '',
        email: '',





    },

    reducers: {

        setUserName: ( state, action ) => {
            state.name =  action.payload;
        },

        setUserCompany: ( state, action ) => {
            state.company =  action.payload;
        },

        setUserEmail: ( state, action ) => {
            state.email =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setUserName,
    setUserCompany,
    setUserEmail,

} = userSlice.actions;

export const selectorData = ( state ) => {
    return {
        currentPage: state.user.currentPage,


    };
};

export default userSlice.reducer;






