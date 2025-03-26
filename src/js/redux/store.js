import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice   from './userInfoSlice.js';



export default configureStore({

    reducer: {
        userInfo:  userInfoSlice,

    },
    
})