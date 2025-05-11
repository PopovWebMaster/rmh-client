
import { get_data_for_completed_segment }   from './get_data_for_completed_segment.js';
import { get_data_for_empty_segment }       from './get_data_for_empty_segment.js';

export const add_empty_segments_and_types = ( sectors_arr ) => {

    let result = [];


    for( let sectorIndex = 0; sectorIndex < sectors_arr.length; sectorIndex++ ){

        let {
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list,
        } = sectors_arr[ sectorIndex ];

        let list = [];
        let next_point = sector_start_time;

        for( let i = 0; i < sector_list.length; i++ ){
            let {
                startTime,
                durationTime,
            } = sector_list[ i ];

            if( next_point === startTime ){
                list.push( get_data_for_completed_segment( sector_list[ i ] ) );
                next_point = next_point + durationTime;

            }else{
                if( startTime > next_point ){

                    list.push( get_data_for_empty_segment( next_point, startTime ) );
                    list.push( get_data_for_completed_segment( sector_list[ i ] ) );

                    next_point = next_point + durationTime;

                }else{
                    console.error( 'Внимание, ошибка в get_grid_one_day_list !!!!!!!!' );
                    console.error( 'startTime меньше чем next_point' );
                };

            };
        };

        list.push( get_data_for_empty_segment( next_point, sector_start_time + sector_duration ) );

        result.push({
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list: list,
        });

    };

    return result;

};