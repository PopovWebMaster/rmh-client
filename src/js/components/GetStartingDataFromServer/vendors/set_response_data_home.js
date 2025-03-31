
import store from './../../../redux/store.js';

import { setCompanyList } from './../../../redux/companySlice.js';
import { setUserData } from './../../../redux/userInfoSlice.js';


export const set_response_data_home = ( response ) => {

    let {
        companyList,
        userData,
    } = response;

    store.dispatch( setCompanyList( companyList ) );
    store.dispatch( setUserData( userData ) );


};