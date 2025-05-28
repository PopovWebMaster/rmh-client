
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './A_SaveButton.scss';

import { 
    selectorData as applicationSlice,
    setCurrentAppIsChanged,

} from './../../../../../../redux/applicationSlice.js';

import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../redux/navigationSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { ApplicationSaveButton } from './../../../ApplicationSaveButton/ApplicationSaveButton.js';

const A_SaveButtonComponent = ( props ) => {

    let {

        currentApplicationId,
        currentPage,
        currentAppIsChanged,
        setSpinnerIsActive,
        setCurrentAppIsChanged,

    } = props;


    const click = () => {
        if( currentAppIsChanged ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/seve-application-data`,
                data: { 
                    // applicationId: currentApplicationId,
                },

                callback: ( response ) => {

                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        
                        setSpinnerIsActive( false );
                        setCurrentAppIsChanged( false );

                    };
                },
            });

        };
        
    };


    return (
        <ApplicationSaveButton 
            isChanged = { currentAppIsChanged }
            clickHandler = { click }
        />
    )

};

export function A_SaveButton( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <A_SaveButtonComponent
            { ...props }
            currentApplicationId =  { application.currentApplicationId }

            currentAppIsChanged =  { application.currentAppIsChanged }

            currentPage =           { navigation.currentPage }
            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setCurrentAppIsChanged =    { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


            


        />
    );


}
