
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './GetCurrentApplicationDataFromServer.scss';

import { 
    selectorData as applicationSlice,
    setCurrentAppName,
    setCurrentAppCategoryId,
    setCurrentAppNum,
    setCurrentAppManagerNotes,
    // setCurrentAppType,
    // setCurrentAppOrders,
    setCurrentAppIsChanged,

} from './../../../../../../redux/applicationSlice.js';

import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../redux/navigationSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

const GetCurrentApplicationDataFromServerComponent = ( props ) => {

    let {
        children,

        currentApplicationId,
        currentPage,
        setSpinnerIsActive,


        setCurrentAppName,
        setCurrentAppCategoryId,
        setCurrentAppNum,
        // setCurrentAppType,
        // setCurrentAppNotes,
        // setCurrentAppOrders,
        setCurrentAppIsChanged,

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

                    } = response;

                    setCurrentAppName( name );
                    setCurrentAppCategoryId( category_id );
                    setCurrentAppNum( num );
                    setCurrentAppManagerNotes( manager_notes );

                    setCurrentAppIsChanged( false );

                    setSpinnerIsActive( false );
                    setIsReady( true );


                };

                // if( response.ok ){
                    
                //     let {
                //         name,
                //         category_id,
                //         num,
                //         type,
                //         notes,
                //         orders,
                //     } = response.application;

                //     setCurrentAppName( name );
                //     setCurrentAppCategoryId( category_id );
                //     setCurrentAppNum( num );
                //     setCurrentAppType( type );
                //     setCurrentAppNotes( notes );
                //     setCurrentAppOrders( orders );

                //     setCurrentAppIsChanged( false );

                //     setSpinnerIsActive( false );
                //     setIsReady( true );

                // };

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

            setCurrentAppName =         { ( val ) => { dispatch( setCurrentAppName( val ) ) } }
            setCurrentAppCategoryId =   { ( val ) => { dispatch( setCurrentAppCategoryId( val ) ) } }
            setCurrentAppNum =          { ( val ) => { dispatch( setCurrentAppNum( val ) ) } }
            // setCurrentAppType =         { ( val ) => { dispatch( setCurrentAppType( val ) ) } }
            setCurrentAppManagerNotes =        { ( val ) => { dispatch( setCurrentAppManagerNotes( val ) ) } }
            // setCurrentAppOrders =       { ( val ) => { dispatch( setCurrentAppOrders( val ) ) } }

            setCurrentAppIsChanged =    { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


            

        />
    );


}
