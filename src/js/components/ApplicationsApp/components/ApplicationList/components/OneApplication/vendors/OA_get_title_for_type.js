
import { APPLICATION_TYPE } from './../../../../../../../config/application.js';

export const OA_get_title_for_type = ( type ) => {
    let result = '';

    switch( type ){
        case APPLICATION_TYPE.SERIES:
            result = 'Серии';
            break;

        case APPLICATION_TYPE.RELEASE:
            result = 'Выпуски';
            break;
    };

    return result;
};