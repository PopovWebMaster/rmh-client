
import { send_request_to_server } from './../../../helpers/send_request_to_server.js';

import { ROUTE } from './../../../config/routes.js';

export const get_one_day_entire_list_from_server = ( params ) => {
    let {
        year,
        date,
        month,
        callback,

    } = params;

    send_request_to_server({
        route: `${ ROUTE.PAGE.PLAY_REPORT }/get-one-day-entire-list`,
        data: {
            year,
            date,
            month,
        },
        callback,
    });

};