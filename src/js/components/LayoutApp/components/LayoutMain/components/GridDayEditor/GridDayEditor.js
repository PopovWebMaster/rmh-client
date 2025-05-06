
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GridDayEditor.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { EmptyTimeSegment } from './../EmptyTimeSegment/EmptyTimeSegment.js';
import { CompletedTimeSegment } from './../CompletedTimeSegment/CompletedTimeSegment.js';

import { set_max_height_em_for_empty_time_segment } from './../../../../vendors/set_max_height_em_for_empty_time_segment.js';


const GridDayEditorComponent = ( props ) => {

    let {
    } = props;

    let refEd = useRef();

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        set_max_height_em_for_empty_time_segment( refEd.current.parentElement );
        setIsReady( true );
    }, [] );

    

    let category_id = 9;
    let durationTime = "00:01:00";
    let id = 7;
    let name = "Погода";
    let notes = "0+";
    let type = "file";








    
    return (
       <div 
            className = 'gridDayEditor'
            ref = { refEd }
        >
            { isReady? (<>

                <EmptyTimeSegment 
                    startTime =      { '00:00:00' }
                    durationTime =  { '00:01:00' }
                />

                <CompletedTimeSegment 
                    startTime =     { '00:00:00' }
                    durationTime =  { durationTime }
                    category_id =   { category_id }
                    eventId =       { id }
                    eventName =     { name }
                    eventNotes =    { notes }
                    eventType =     { type }
                />

                <EmptyTimeSegment 
                    startTime =      { '00:00:00' }
                    durationTime =  { '06:00:00' }
                />


            </>): '' }
       </div>
    )

};

export function GridDayEditor( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GridDayEditorComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
