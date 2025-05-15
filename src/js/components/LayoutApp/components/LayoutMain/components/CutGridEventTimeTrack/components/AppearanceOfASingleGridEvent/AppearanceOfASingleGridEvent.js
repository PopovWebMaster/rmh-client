

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppearanceOfASingleGridEvent.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

const AppearanceOfASingleGridEventComponent = ( props ) => {

    let {
        cutPart,
        durationTime,
        firstSegmentId,
        id,
        isKeyPoint,
        notes,
        startTime,
        eventId,

    } = props;

    useEffect( () => {
        console.dir( 'gridEvent' );
        console.dir( {
            cutPart,
            durationTime,
            firstSegmentId,
            id,
            isKeyPoint,
            notes,
            startTime,
            eventId,
        } );

    }, [ 
        cutPart,
        durationTime,
        firstSegmentId,
        id,
        isKeyPoint,
        notes,
        startTime,
        eventId,
    ] );



    return (
        <div className = 'appearanceOfASingleGridEvent'>
            
        </div>
    )

};

export function AppearanceOfASingleGridEvent( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <AppearanceOfASingleGridEventComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
