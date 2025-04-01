
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';

export const set_response_data_access_is_closed = ( response ) => {

    let {
        userData,
    } = response;

    store.dispatch( setUserData( userData ) );

};