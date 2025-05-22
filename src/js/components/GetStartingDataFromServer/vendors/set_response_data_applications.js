
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setWeekKeyPointList, setCategoryList, setEventList, setGridDayEventsList } from './../../../redux/layoutSlice.js';
// import { setPlayReportList, setMinYear, setMonth } from './../../../redux/playReportSlice.js';


export const set_response_data_applications = ( response ) => {

    let {
        userData,
        // keyPountList,
        categoryList,
        eventsList,
        gridEventsList,

    } = response;

    // let weekKeyPointList = [
    //     [], [], [], [], [], [], [] // time,description, ms
    // ];

    // for( let i = 0; i < keyPountList.length; i++ ){
    //     let {
    //         dayNum,
    //         description,
    //         ms,
    //         time,
    //     } = keyPountList[ i ];

    //     weekKeyPointList[ dayNum ].push({
    //         time,
    //         description: description === null? '': description,
    //         ms,
    //     });

    // };

    store.dispatch( setUserData( userData ) );
    store.dispatch( setCategoryList( categoryList ) );
    store.dispatch( setEventList( eventsList ) );
    store.dispatch( setGridDayEventsList( gridEventsList ) );
    // store.dispatch( setWeekKeyPointList( weekKeyPointList ) );

};