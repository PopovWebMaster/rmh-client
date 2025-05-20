
import { GRID_SEGMENT_TYPE } from './../../../../../../../config/layout.js';

export const get_data_for_empty_segment = ( pointFrom, pointTo ) => {

    let startTime = pointFrom;
    // if( pointFrom === 0 ){
    //     startTime = pointFrom + 1;
    // };

    let durationTime = pointTo - pointFrom;

    let result = { 
        type: GRID_SEGMENT_TYPE.EMPTY,
        startTime, 
        durationTime,
    };
    result.type = GRID_SEGMENT_TYPE.EMPTY;

    return result;
}