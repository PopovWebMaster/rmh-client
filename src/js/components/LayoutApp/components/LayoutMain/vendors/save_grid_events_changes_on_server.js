
import store from './../../../../../redux/store.js';

import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';
import { setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../redux/layoutSlice.js';
import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

export const save_grid_events_changes_on_server = ( callback ) => {
    let { layout, navigation } = store.getState();
    let { gridDayEventsIsChanges, gridDayEventsList } = layout;
    let { currentPage } = navigation;

    if( gridDayEventsIsChanges ){
    
        store.dispatch( setSpinnerIsActive( true ) );

        send_request_to_server({
            route: `${currentPage}/save-grid-event-list`,
            data: { 
                list: gridDayEventsList,
            },
            callback: ( response ) => {
                // console.dir( 'response' );
                // console.dir( response );
                if( response.ok ){
                    store.dispatch( setSpinnerIsActive( false ) );
                    store.dispatch( setGridDayEventsList( response.list ) );
                    store.dispatch( setGridDayEventsIsChanges( false ) );
                    callback();
                };

            },
        });
        
    };

}