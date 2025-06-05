
import store from './../../../../../../../../../redux/store.js';

import { setSpinnerIsActive } from './../../../../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../../../../helpers/send_request_to_server.js';

import { set_application_data_to_store } from './../../../../../vendors/set_application_data_to_store.js';

export const save_sub_app_changes_on_server = ( params ) => {
    let {
        subApplicationId,
        // applicationId,
        changedData,
        callback,
    } = params;

    let { application, navigation } = store.getState();
    let {
        currentApplicationId,
        applicationById,
    } = application;

    let {
        currentPage
    } = navigation;

    let { sub_application_list } = applicationById[ currentApplicationId ];

    let subApplication = {};

    for( let i = 0; i < sub_application_list.length; i++ ){
        let { id } = sub_application_list[ i ];
        if( id === subApplicationId ){
            subApplication = { ...sub_application_list[ i ] };
            break;
        };
    };

    let subAppData = { ...subApplication, ...changedData };


    store.dispatch( setSpinnerIsActive( true ) );




}