

export const divide_day_into_sectors = ( day_array ) => {

    let result = [];
    let last_point = 24 * 60 * 60 - 1;

    let sector_list = [];
    let sector_start_time = 0;
    let sector_duration = 0;
    let sector_completed_duration = 0;

    for( let i = 0; i < day_array.length; i++ ){

        let {
            isKeyPoint,
            startTime, 
            durationTime, 

        } = day_array[ i ];

        if( isKeyPoint ){

            sector_duration = startTime - 1 - sector_start_time;

            result.push({
                sector_start_time,
                sector_completed_duration,
                sector_duration,
                sector_list: [ ...sector_list ],
            });

            sector_list = [];
            sector_start_time = startTime;
            sector_completed_duration = durationTime;

        }else{
            sector_completed_duration = sector_completed_duration + durationTime;
        };

        sector_list.push( { ...day_array[ i ] } );

    };

    result.push({
        sector_start_time,
        sector_completed_duration,
        sector_duration: last_point - sector_duration,
        sector_list: [ ...sector_list ],
    });

    return result;
};