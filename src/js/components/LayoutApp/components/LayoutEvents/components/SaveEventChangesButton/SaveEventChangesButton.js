
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveEventChangesButton.scss';


import { selectorData as layoutSlice, setEventList, setEventsIsChanged } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice } from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { CP_SaveButtonComponent } from './../../../CP_SaveButtonComponent/CP_SaveButtonComponent.js';


const SaveEventChangesButtonComponent = ( props ) => {

    let {

        eventsIsChanged,
        eventList,
        // pointListIsChanged,

        // categoryesIsChanged,
        currentPage,
        // categoryList,




        // setCategoryList,
        // setCategoryesIsChanged,
        setSpinnerIsActive,
        // setWeekKeyPointList,

        setEventList,
        setEventsIsChanged,

    } = props;

    const click = () => {
        if( eventsIsChanged ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `${currentPage}/save-event-list`,
                data: { 
                    list: eventList,
                },
                callback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setEventList(response.list);
                        setEventsIsChanged( false );
                    };

                },
            });
            
        };

    }
    
    return (
        <CP_SaveButtonComponent 
            isChanged = { eventsIsChanged }
            clickHandler = { click }
        />
    )

};

export function SaveEventChangesButton( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SaveEventChangesButtonComponent
            { ...props }
            eventsIsChanged = { layout.eventsIsChanged }

            currentPage = { navigation.currentPage }
            eventList = { layout.eventList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }
            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEventList =          { ( val ) => { dispatch( setEventList( val ) ) } }
            setEventsIsChanged =    { ( val ) => { dispatch( setEventsIsChanged( val ) ) } }



        />
    );


}
