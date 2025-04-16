
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
// import { setPlayReportList, setMinYear, setMonth } from './../../../redux/playReportSlice.js';


export const set_response_data_layout = ( response ) => {

    let {
        userData,
    } = response;




    store.dispatch( setUserData( userData ) );




};