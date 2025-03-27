
import { send_to_server }  from './send_to_server.js';

export const get_data_from_server_by_route = ( params ) => {
    let {
        route,
        action,
        data = {},
        callback,
        errorCallback = () => {},
    } = params;

    // let { editor } = store.getState();
    // let { editor_version } = editor;

    // let href = get_puth_to_server_for_POST( locale, route );

    send_to_server({
        href: route,
        action,
        data,
        successCallback: callback,
        errorCallback: errorCallback,
    });




    





    


};