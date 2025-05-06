
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventNameItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


const EventNameItemComponent = ( props ) => {

    let {
        eventType,
        category,
        eventName,

        layout,

    } = props;
    console.dir( layout );


    return (
        <div className = 'CTS_EventNameItem'>


        </div>

    )

};

export function EventNameItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventNameItemComponent
            { ...props }
            layout = { layout }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
