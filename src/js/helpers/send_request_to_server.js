
import store from './../redux/store.js';
import { send_to_server }  from './send_to_server.js';

export const send_request_to_server = ( params ) => {

    let {
        route,
        data = {},
        callback,
        errorCallback = () => {},
    } = params;

    let { navigation, company } = store.getState();

    let { currentPage } = navigation;
    let { currentCompanyAlias } = company;

    let data_complete = { ...data };
    data_complete.page = currentPage;
    data_complete.companyAlias = currentCompanyAlias;

    let href = '';

    if( IS_DEVELOPMENT ){

        data_complete.route = route;
        href = `${HOST_TO_API_SERVER}/api`;
    }else{
        href = `${HOST_TO_API_SERVER}/${route}`;
    };

    send_to_server({
        href,
        data: data_complete,
        successCallback: callback,
        errorCallback: errorCallback,
    });

};