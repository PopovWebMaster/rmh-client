
import { convert_duration_to_ms } from './../../../../../../../../../helpers/convert_duration_to_ms';

export const get_time_with_ms = ( time_str ) => {

    return {
        time: time_str,
        ms: convert_duration_to_ms( time_str),
    }
};