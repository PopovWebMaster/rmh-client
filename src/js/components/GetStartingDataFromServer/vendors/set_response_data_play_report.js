
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setPlayReportList } from './../../../redux/playReportSlice.js';


export const set_response_data_play_report = ( response ) => {

    let {
        userData,
        files,
    } = response;

    let list = {};

    for( let i = 0; i < files.length; i++ ){
        let arr = files[i].split( '/' );
        let str = arr[ arr.length - 1 ];
        let arr_2 = str.split( '.' );
        let name = arr_2[ 0 ];

        list[ name ] = true;
    
    };

    store.dispatch( setUserData( userData ) );
    store.dispatch( setPlayReportList( list ) );


};