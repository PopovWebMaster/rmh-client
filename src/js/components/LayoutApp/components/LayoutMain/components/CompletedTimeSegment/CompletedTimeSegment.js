
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CompletedTimeSegment.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { GrigItemWrap } from './../GrigItemWrap/GrigItemWrap.js';

import { EventNameItem } from './components/EventNameItem/EventNameItem.js';
import { PrefixItem } from './components/PrefixItem/PrefixItem.js';
import { EventNotesItem } from './components/EventNotesItem/EventNotesItem.js';
import { RemoveItem } from './components/RemoveItem/RemoveItem.js';
import { KeyPointToggle } from './components/KeyPointToggle/KeyPointToggle.js';
import { CutEditorItem } from './components/CutEditorItem/CutEditorItem.js';


const CompletedTimeSegmentComponent = ( props ) => {

    let {
        id,
        firstSegmentId,
        eventId,
        notes,
        isKeyPoint,
        startTime,
        durationTime,

    } = props;

    return (
        <GrigItemWrap
            startTime = { startTime }
            durationTime = { durationTime }
        
        >
            <div className = 'completedTimeSegment'>

                <PrefixItem eventId = { eventId }/>
                <EventNameItem eventId = { eventId }/>
                <EventNotesItem 
                    eventId =   { eventId }
                    id =        { id }
                    notes =     { notes }
                />

                <KeyPointToggle 
                    id = { id }
                    isKeyPoint = { isKeyPoint }
                />

                <CutEditorItem 
                    id = { id }
                    firstSegmentId = { firstSegmentId }
                />

                <RemoveItem 
                    id = { id }
                />

            </div>
        </GrigItemWrap>

    )

};

export function CompletedTimeSegment( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CompletedTimeSegmentComponent
            { ...props }
            // eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
