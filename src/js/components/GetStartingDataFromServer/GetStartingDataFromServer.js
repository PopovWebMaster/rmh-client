
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice, setCurrentPage } from './../../redux/navigationSlice.js';
import { selectorData as spinnerSlice, setSpinnerIsActive } from './../../redux/spinnerSlice.js';

// import './SetCurrentPage.scss';

import { send_request_to_server } from './../../helpers/send_request_to_server.js';

const GetStartingDataFromServerComponent = ( props ) => {

    let {
        children,
        setSpinnerIsActive,
        currentPage,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        setIsReady( true );
        setSpinnerIsActive( false );

        send_request_to_server({
            route: `get-starting-data/${currentPage}`,
            data: {
                myParams: '100',
            },
            callback: ( resp ) => {

                console.dir( 'resp' );
                console.dir( resp );

                setIsReady( true );
                // setSpinnerIsActive( false );
            }
        });
 
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

        />
    );


}
