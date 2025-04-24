
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
// import { OneCategory } from './../OneCategory/OneCategory.js';
import { OneEvent } from './../OneEvent/OneEvent.js';


const EventListComponent = ( props ) => {

    let {
        eventList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                // id,
                // name,
                // prefix,
                // colorText,
                // colorBG,
            } = item;
            return (
                <OneEvent 
                    // id =        { id }
                    // name =      { name }
                    // prefix =    { prefix }
                    // colorText = { colorText }
                    // colorBG =   { colorBG }
                    key =       { index }
                />
            );

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
