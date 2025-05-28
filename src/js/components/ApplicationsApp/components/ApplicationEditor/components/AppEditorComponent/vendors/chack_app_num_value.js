

export const chack_app_num_value = ( str ) => {
    let result = {
        isValid: false,
        value: '',
    };

    if( str === '' ){
        result.isValid = true;
        result.value = '';
    }else{
        let expression = /^[+-]?\d+$/;
        if( expression.test( str ) ){
            result.isValid = true;
            result.value = Number( str );
        };
    };

    return result;

};