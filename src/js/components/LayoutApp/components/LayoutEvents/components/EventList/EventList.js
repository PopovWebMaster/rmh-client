
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { OneEventTypeFile } from './../OneEventTypeFile/OneEventTypeFile.js';
import { OneEventTypeBlock } from './../OneEventTypeBlock/OneEventTypeBlock.js';

import { EVENT_TYPE } from './../../../../../../config/events.js';

const EventListComponent = ( props ) => {

    let {
        eventList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                id,
                name,
                category_id,
                notes,
                type,
            } = item;

            if( type === EVENT_TYPE.FILE  ){
                return (
                    <OneEventTypeFile 
                        id =            { id }
                        name =          { name }
                        category_id =   { category_id }
                        notes =         { notes }
                        key =           { index }
                    />
                );
            }else{
                return (
                    <OneEventTypeBlock 
                        id =            { id }
                        name =          { name }
                        category_id =   { category_id }
                        notes =         { notes }
                        key =           { index }
                    />
                );
            };



        } );

        return div;

    };

    return (

        <div className = 'LC_EventList' >

            { create( eventList ) }
            
        </div>

    )

};

export function EventList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventListComponent
            { ...props }
            eventList = { layout.eventList }


            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
