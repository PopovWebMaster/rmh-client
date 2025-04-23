
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setWeekKeyPointList, setCategoryList } from './../../../redux/layoutSlice.js';
// import { setPlayReportList, setMinYear, setMonth } from './../../../redux/playReportSlice.js';


export const set_response_data_layout = ( response ) => {

    let {
        userData,
        keyPountList,
        categoryList,

    } = response;

    let weekKeyPointList = [
        [], [], [], [], [], [], [] // time,description, ms
    ];

    for( let i = 0; i < keyPountList.length; i++ ){
        let {
            dayNum,
            description,
            ms,
            time,
        } = keyPountList[ i ];

        weekKeyPointList[ dayNum ].push({
            time,
            description: description === null? '': description,
            ms,
        });

    };

    store.dispatch( setUserData( userData ) );
    store.dispatch( setCategoryList( categoryList ) );

    store.dispatch( setWeekKeyPointList( weekKeyPointList ) );

};