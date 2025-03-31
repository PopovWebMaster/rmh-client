
import { ROUTE } from './../../../config/routes.js';

import { set_response_data_home } from './set_response_data_home.js';
import { set_response_data_main } from './set_response_data_main.js';

export const set_response_data = ( currentPage, response ) => {

    switch( currentPage ){
        case ROUTE.PAGE.HOME:
            set_response_data_home( response );
            break;

        case ROUTE.PAGE.MAIN:
            set_response_data_main( response );
            break;


    };

}