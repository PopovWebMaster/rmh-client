import { isset } from './../../isset.js';


export const get_href = ( params/*, default_href */) => {
    return params.href;

};

export const get_action = ( params ) => {
    if( params.action ){
        return params.action;
    }else{
        return '';
    };
};

export const get_data =  ( params ) => {
    if( isset( params.data ) ){ 
        return params.data;
    }else{ 
        return {};
    };
};

export const get_successCallback = ( params ) => {

    if( isset( params.successCallback ) ){ 
        return params.successCallback;
    }else{ 
        return () =>{};
    };
};

export const get_errorCallback = ( params ) => {

    if( isset( params.errorCallback ) ){ 
        return params.errorCallback;
    }else{ 
        return () =>{};
    };
};

export const get_token = () => {
    let meta = document.querySelector('meta[name="csrf-token"]');
    if( isset( meta ) ){
        return meta.content;
    }else{
        return '';
    };
}
export const get_method = ( params, default_fetch_metod ) => {
    if(isset(params.method)){
        return params.method;
    }else{
        return default_fetch_metod;
    };
}