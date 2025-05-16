
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppearanceOfGridEventParts.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
// import { AppearanceOfASingleGridEvent } from './../AppearanceOfASingleGridEvent/AppearanceOfASingleGridEvent.js';
import { AppearanceOfASingleGridEvent } from './../../../AppearanceOfASingleGridEvent/AppearanceOfASingleGridEvent.js';

const AppearanceOfGridEventPartsComponent = ( props ) => {

    let {
        gridEventsParts,

    } = props;

    const create = ( arr ) => {
        let div = arr.map( ( gridEvent, index ) => {
            let {
                cutPart,
                durationTime,
                firstSegmentId,
                id,
                isKeyPoint,
                notes,
                startTime,
                eventId,
            } = gridEvent;

            return (
                <AppearanceOfASingleGridEvent 
                    key =               { index }
                    cutPart =           { cutPart }
                    durationTime =      { durationTime }
                    firstSegmentId =    { firstSegmentId }
                    id =                { id }
                    isKeyPoint =        { isKeyPoint }
                    notes =             { notes }
                    startTime =         { startTime }
                    eventId =           { eventId }

                />
            );
        } );

        return div;
    };



    return (
        <div className = 'AppearanceOfGridEventParts'>
            { create( gridEventsParts ) }
        </div>
    )

};

export function AppearanceOfGridEventParts( props ){

        // const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <AppearanceOfGridEventPartsComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
