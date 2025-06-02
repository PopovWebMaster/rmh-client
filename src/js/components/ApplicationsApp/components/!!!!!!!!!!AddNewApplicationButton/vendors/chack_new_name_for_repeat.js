
import store from './../../../../../redux/store.js';

export const chack_new_name_for_repeat = ( new_name ) => {

    let result = false;

    let { application } = store.getState();
    let { applicationList } = application;

    for( let i = 0; i < applicationList.length; i++ ){
        if( applicationList[ i ].name === new_name ){
            result = true;
            break;
        };
    };

    return result;

};