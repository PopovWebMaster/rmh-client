
export async function fetsh_data_to_server( params ){

    let _token =            params.token;
    let href =              params.href;
    let method =            params.method;
    // let action =            params.action;
    let data =              params.data;
    let successCallback =   params.successCallback;
    let errorCallback =     params.errorCallback;

    try {
        const response = await fetch( href, {
            method,  
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                _token,
                // action,
                data,
            }) 
        });

        if ( response.ok ) { 
  
            let data_respons = await response.json();

            successCallback( data_respons );

        }else{

            errorCallback( response );
        };

    } catch (error) {

        console.error( `Ошибка: ${error}. При попытке вызвать fetch` );
        console.error({
            _token,
            // action,
            href,
            data,
        });
        console.log('');
            

    };


};
