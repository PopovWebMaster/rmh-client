import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({

    name: 'userInfo',

    initialState: {

        user_id: '',
        user_name: '',
        user_email: '',
        user_position: '',

    },

    reducers: {

        setUserData: ( state, action ) => {

            if( action.payload !== null ){
                let {
                    email,
                    id,
                    name,
                    position,
                } = action.payload;

                state.user_id =         id;
                state.user_name =       name;
                state.user_email =      email;
                state.user_position =   position;
        
            };

        },
        

    },

})

export const {  
    // setFileExtension,
    setUserData,
   

} = userInfoSlice.actions;





export const selectorData = ( state ) => {
    return {
        user_id:        state.userInfo.user_id,
        user_name:      state.userInfo.user_name,
        user_email:     state.userInfo.user_email,
        user_position:  state.userInfo.user_position,


    };
};

export default userInfoSlice.reducer;






