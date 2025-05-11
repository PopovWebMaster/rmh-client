
import { divide_day_into_sectors } from './divide_day_into_sectors.js';
import { add_empty_segments_and_types } from './add_empty_segments_and_types.js';


export const get_grid_one_day_list_by_sector = ( day_array ) => {

    let sectors_arr = divide_day_into_sectors( day_array );
    let with_empty_arr = add_empty_segments_and_types( sectors_arr );

    return with_empty_arr;

}