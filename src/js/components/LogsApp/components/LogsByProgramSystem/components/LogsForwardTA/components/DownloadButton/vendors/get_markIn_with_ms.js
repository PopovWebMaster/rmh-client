
import { get_time_with_ms } from './get_time_with_ms.js';

export const get_markIn_with_ms = ( markIn ) => {
    let default_markIn = '00:00:00.00';

    if( markIn === undefined ){
        return get_time_with_ms( default_markIn );
    }else{
        return get_time_with_ms( markIn );
    };

};