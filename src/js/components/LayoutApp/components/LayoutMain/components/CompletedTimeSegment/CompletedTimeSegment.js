
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { NavLink } from "react-router";

import './CompletedTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { GrigItemWrap } from './../GrigItemWrap/GrigItemWrap.js';

import { EventNameItem } from './components/EventNameItem/EventNameItem.js';
import { PrefixItem } from './components/PrefixItem/PrefixItem.js';


const CompletedTimeSegmentComponent = ( props ) => {

    let {
        startTime,
        durationTime,

        category_id,
        eventId,
        eventName,
        eventNotes,
        eventType,

    } = props;

    let category = {
        colorBG: "#523dbd",
        colorText: "#ffffff",
        id: 8,
        name: "Панорама",
        prefix: "PS_PAN_",
    };


    return (
        <GrigItemWrap
            startTime = { startTime }
            durationTime = { durationTime }
        
        >
            <div className = 'completedTimeSegment'>

                <PrefixItem 
                    category_id = { category_id }
                />

                <EventNameItem />

            </div>
        </GrigItemWrap>

    )

};

export function CompletedTimeSegment( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CompletedTimeSegmentComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
