
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './GetCurrentApplicationDataFromServer.scss';

import { 
    selectorData as applicationSlice,
    // setCurrentAppName,
    // setCurrentAppCategoryId,
    // setCurrentAppNum,
    // setCurrentAppManagerNotes,
    // setCurrentSubAppList,
    // setCurrentAppIsChanged,

} from './../../../../../../redux/applicationSlice.js';

import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../redux/navigationSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

// import { set_sub_application_data_to_store } from './../../vendors/set_sub_application_data_to_store.js';
import { set_application_data_to_store } from './../../vendors/set_application_data_to_store.js'

const GetCurrentApplicationDataFromServerComponent = ( props ) => {

    let {
        children,

        currentApplicationId,
        currentPage,
        setSpinnerIsActive,

        // setCurrentAppName,
        // setCurrentAppCategoryId,
        // setCurrentAppNum,
        // setCurrentSubAppList,
        // setCurrentAppIsChanged,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        setIsReady( false );
        setSpinnerIsActive( true );

        send_request_to_server({
            route: `${currentPage}/get-application-data`,
            data: { 
                applicationId: currentApplicationId,
            },

            callback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){

                    let {
                        application_id,
                        category_id,
                        manager_id,
                        name,
                        num,
                        manager_notes,
                        sub_application_list,

                    } = response;

                    set_application_data_to_store( response.application );

                    // setCurrentAppName( name );
                    // setCurrentAppCategoryId( category_id );
                    // setCurrentAppNum( num );
                    // setCurrentAppManagerNotes( manager_notes );
                    // setCurrentSubAppList( sub_application_list );

                    // setCurrentAppIsChanged( false );

                    setSpinnerIsActive( false );
                    setIsReady( true );


                };

            },
        });

       
    }, [ currentApplicationId ] );

    return (<>{ isReady? children: '' }</>)

};

export function GetCurrentApplicationDataFromServer( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <GetCurrentApplicationDataFromServerComponent
            { ...props }
            currentApplicationId = { application.currentApplicationId }

            currentPage = { navigation.currentPage }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

            // setCurrentAppName =         { ( val ) => { dispatch( setCurrentAppName( val ) ) } }
            // setCurrentAppCategoryId =   { ( val ) => { dispatch( setCurrentAppCategoryId( val ) ) } }
            // setCurrentAppNum =          { ( val ) => { dispatch( setCurrentAppNum( val ) ) } }
            // setCurrentAppManagerNotes =        { ( val ) => { dispatch( setCurrentAppManagerNotes( val ) ) } }
            // setCurrentSubAppList =       { ( val ) => { dispatch( setCurrentSubAppList( val ) ) } }

            // setCurrentAppIsChanged =    { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


            

        />
    );


}
