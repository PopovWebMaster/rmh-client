


export const get_point_list_for_server = ( weekKeyPointList ) => {

    let result = [];

    for( let day_num = 0; day_num < weekKeyPointList.length; day_num++ ){
        for( let i = 0; i < weekKeyPointList[ day_num ].length; i++ ){
            result.push({
                time:           weekKeyPointList[ day_num ][ i ].time,
                description:    weekKeyPointList[ day_num ][ i ].description,
                ms:             weekKeyPointList[ day_num ][ i ].ms,
                dayNum:         day_num,
            });
        };
    };

    return result;
    
};