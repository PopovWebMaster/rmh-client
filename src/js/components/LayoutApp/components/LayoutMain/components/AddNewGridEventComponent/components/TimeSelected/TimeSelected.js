
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeSelected.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';
import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';
import { TimeTrack } from './components/TimeTrack/TimeTrack.js';
import { TimeButtons } from './components/TimeButtons/TimeButtons.js';

const TimeSelectedComponent = ( props ) => {

    let {
        eventId,

        timeSpaceTo,
        timeSpaceFrom,
        startTime,
        setStartTime,
        timeTarget,
        setTimeTarget,
        // eventList,
        eventListById,

    } = props;

    let [ duration, setDuration ] = useState( null );

    useEffect( () => {
        if( eventId === null ){
            setDuration( null );
        }else{
            let { durationTime } = eventListById[ eventId ];
            setDuration( convert_time_str_to_sec( durationTime ) );
        };

    }, [ eventId ] );

    return (

        <div className = 'G_ANG_TimeSelected'>

            <TimeButtons 
                timeSpaceTo =   { timeSpaceTo }
                timeSpaceFrom = { timeSpaceFrom }
                duration =      { duration }
                startTime =     { startTime }
                setStartTime =  { setStartTime }
            />


            <TimeTrack 
                timeSpaceTo =   { timeSpaceTo }
                timeSpaceFrom = { timeSpaceFrom }
                duration =      { duration }
                target =        { timeTarget }
                setTimeTarget = { setTimeTarget }
                startTime =     { startTime }
                setStartTime =  { setStartTime }

            />
            
        </div>

    )

};

export function TimeSelected( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TimeSelectedComponent
            { ...props }
            // eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
