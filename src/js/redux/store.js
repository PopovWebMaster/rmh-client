import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice   from './userInfoSlice.js';
import spinnerSlice   from './spinnerSlice.js';
import navigationSlice   from './navigationSlice.js';


export default configureStore({

    reducer: {
        userInfo:  userInfoSlice,
        spinner:  spinnerSlice,
        navigation:  navigationSlice,




    },
    
})