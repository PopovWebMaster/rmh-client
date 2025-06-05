
import { 
    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppNum,
    setCurrentAppManagerNotes,
    setCurrentSubAppList,
    setCurrentAppIsChanged,

} from './../../../../../../../../../redux/applicationSlice.js';

import store from './../../../../../../../../../redux/store.js';

export const set_application_data_to_store = ( response ) => {
    let {
        application_id,
        category_id,
        manager_id,
        name,
        num,
        manager_notes,
        sub_application_list,

    } = response;

    store.dispatch( setCurrentAppName( name ) );
    store.dispatch( setCurrentAppCategoryId( category_id ) );
    store.dispatch( setCurrentAppNum( num ) );
    store.dispatch( setCurrentAppManagerNotes( manager_notes ) );
    store.dispatch( setCurrentSubAppList( sub_application_list ) );
    store.dispatch( setCurrentAppIsChanged( false ) );

}