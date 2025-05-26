
import store from './../../../redux/store.js';

import { setUserData } from './../../../redux/userInfoSlice.js';
import { setWeekKeyPointList, setCategoryList, setEventList, setGridDayEventsList } from './../../../redux/layoutSlice.js';
import { setApplicationList } from './../../../redux/applicationSlice.js';
// import { setPlayReportList, setMinYear, setMonth } from './../../../redux/playReportSlice.js';


export const set_response_data_applications = ( response ) => {

    let {
        userData,
        // keyPountList,
        categoryList,
        eventsList,
        gridEventsList,
        applicationList,

    } = response;

    store.dispatch( setUserData( userData ) );
    store.dispatch( setCategoryList( categoryList ) );
    store.dispatch( setEventList( eventsList ) );
    store.dispatch( setGridDayEventsList( gridEventsList ) );
    store.dispatch( setApplicationList( applicationList ) );


    
    // store.dispatch( setWeekKeyPointList( weekKeyPointList ) );

};