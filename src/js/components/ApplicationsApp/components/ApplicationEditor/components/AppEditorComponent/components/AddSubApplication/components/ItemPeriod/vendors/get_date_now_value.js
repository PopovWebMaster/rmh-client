

export const get_date_now_value = () => {
    let date = new Date;

    let str = date.toLocaleDateString( 'ru-RU' );

    let arr = str.split( '.' );
    let arr_2 = arr.reverse();
    let result = arr_2.join( '-' );

    return result;
};