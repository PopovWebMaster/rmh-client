
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice } from './../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../redux/spinnerSlice.js';
import { set_response_data } from './vendors/set_response_data.js';

// import './SetCurrentPage.scss';

import { send_request_to_server } from './../../helpers/send_request_to_server.js';
import { ROUTE } from './../../config/routes.js';

const GetStartingDataFromServerComponent = ( props ) => {

    let {
        children,
        setSpinnerIsActive,
        currentPage,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        
        console.dir( currentPage );

        let execute = true;

        switch( currentPage ){
            case ROUTE.PAGE.PAGE_NOT_FOUND:
                execute = false;
                break;

            // case ROUTE.PAGE.ACCESS_IS_CLOSED:
            //     execute = false;
            //     break;

        };

        if( execute ){
            send_request_to_server({
                route: `get-starting-data/${currentPage}`,
                data: {},
                callback: ( response ) => {
    
                    console.dir( `get-starting-data/${currentPage}`);
                    console.dir( response );
    
                    if( response.ok ){
                        set_response_data( currentPage, response );
                    };
    
                    setIsReady( true );
                    setSpinnerIsActive( false );
                }
            });
        }else{
            setIsReady( true );
            setSpinnerIsActive( false );
        };

    }, [] );

   
    return (
        <>{ isReady? children: '' }</>
    )

};

export function GetStartingDataFromServer( props ){

    const navigation = useSelector( navigationSlice );

    const dispatch = useDispatch();

    return (
        <GetStartingDataFromServerComponent
            { ...props }
            currentPage =       { navigation.currentPage }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setCompanyList =    { ( val ) => { dispatch( setCompanyList( val ) ) } }


            

        />
    );


}
