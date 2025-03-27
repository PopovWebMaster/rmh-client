
import { 
    get_href,
    // get_action,
    get_data,
    get_successCallback,
    get_errorCallback,
    get_token,
    get_method,

} from './vendors/send_to_server/params_handler.js';
import { fetsh_data_to_server } from './vendors/send_to_server/fetch_handler.js';

const DEFAULT_FETCH_METHOD = 'POST';
// const DEFAULT_HREF_TO_API_SERVER = get_puth_to_server_api('en');


/*
        send_to_server - отправляет данные на сервер и вызывает указанную функцию-обработчик после того,
    как получит ответ. 

        Так же, перед отправкой данных, он считывает csrf-token и добавляет его в тело запроса. Данный csrf-token должен 
    быть добавлен сервером или в coocies, или в meta-tag

        принимате в params: {
            href:            (не обязательный) - строка, путь на api сервера. 
            action:          (не обязательный ) - строка, это команда серверу, некое условное слово, 
                                                согласно которому сервер что-то должен выполнить
            data:            (не обязательный) - объект с данными 
            method:          (не обязательный) - метод отправки данных на сервер, по умолчанию POST
            successCallback: (не обязательный ) - этот метод будет вызван в случае успеха. В него будут 
                                                переданы данные от сервера
            errorCallback:   (не обязательный) - этот метод будет вызван в случае неудачи
        }
    
        Все возможные ошибки выводит в консоль

*/


export const  send_to_server = ( params = undefined ) => {

    let href =              get_href( params/*, DEFAULT_HREF_TO_API_SERVER */);
    let token =             get_token();
    // let action =            get_action( params );
    let data =              get_data( params );
    let method =            get_method( params, DEFAULT_FETCH_METHOD );
    let successCallback =   get_successCallback( params );
    let errorCallback =     get_errorCallback( params );


        // console.log('');
        // console.log('Отправляем на сервер это');

        // console.log( 'href',            href );
        // console.log( 'token',           token );
        // console.log( 'action',          action );
        // console.log( 'data',            data );
        // console.log( 'method',          method );



    // execute_only_on_development(() => {
    //     console.log('Отправляем на сервер это');
    //     console.log( 'href',            href );
    //     console.log( 'token',           token );
    //     console.log( 'action',          action );
    //     console.log( 'data',            data );
    //     console.log( 'method',          method );
    //     console.log( 'successCallback', successCallback );
    //     console.log( 'errorCallback',   errorCallback );
    //     console.log('');
    // });


    fetsh_data_to_server({
        href,
        token,
        // action,
        data,
        method,
        successCallback,
        href,
        href,
        errorCallback,
    });


};









