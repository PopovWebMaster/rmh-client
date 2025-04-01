
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setCompanyProgramSystem } from './../../../redux/companySlice.js';

export const set_response_data_logs = ( response ) => {

    let {
        userData,
        companyProgramSystem,

    } = response;

    store.dispatch( setUserData( userData ) );
    store.dispatch( setCompanyProgramSystem( companyProgramSystem ) );


    

};