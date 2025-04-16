
import { ROUTE } from './../../../config/routes.js';

import { set_response_data_home } from './set_response_data_home.js';
import { set_response_data_main } from './set_response_data_main.js';
import { set_response_data_access_is_closed } from './set_response_data_access_is_closed.js';
import { set_response_data_schedule } from './set_response_data_schedule.js';
import { set_response_data_logs } from './set_response_data_logs.js';
import { set_response_data_play_report } from './set_response_data_play_report.js'
import { set_response_data_layout } from './set_response_data_layout.js';

export const set_response_data = ( currentPage, response ) => {

    switch( currentPage ){
        case ROUTE.PAGE.HOME:
            set_response_data_home( response );
            break;

        case ROUTE.PAGE.MAIN:
            set_response_data_main( response );
            break;

        case ROUTE.PAGE.ACCESS_IS_CLOSED:
            set_response_data_access_is_closed( response );
            break;

        case ROUTE.PAGE.SCHEDULE:
            set_response_data_schedule( response );
            break;

        case ROUTE.PAGE.PLAY_REPORT:
            set_response_data_play_report( response );
            break;

        case ROUTE.PAGE.LOGS:
            set_response_data_logs( response );
            break;

        case ROUTE.PAGE.LAYOUT:
            set_response_data_layout( response );
            break;


    };

}