
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AutoSaveChangesOnServer.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { get_point_list_for_server } from './../../../../vendors/get_point_list_for_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';


const AutoSaveChangesOnServerComponent = ( props ) => {

    let {
        weekKeyPointList,
        currentPage,

        setSpinnerIsActive,
    } = props;

    useEffect(() => {

        setSpinnerIsActive( true );
        console.dir( 'weekKeyPointList' );
        console.dir( weekKeyPointList );

        let list = get_point_list_for_server( weekKeyPointList );

        send_request_to_server({
            route: `${currentPage}/save-key-point-list`,
            data: { 
                list,
            },
            callback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                setSpinnerIsActive( false );


            },
        });
        
        console.dir( 'list' );
        console.dir( list );


    }, [weekKeyPointList]);
    
    return (<></>)

};

export function AutoSaveChangesOnServer( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AutoSaveChangesOnServerComponent
            { ...props }
            currentPage = { navigation.currentPage }
            weekKeyPointList = { layout.weekKeyPointList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
