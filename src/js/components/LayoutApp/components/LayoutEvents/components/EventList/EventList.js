
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventList.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { OneEventTypeFile } from './../OneEventTypeFile/OneEventTypeFile.js';
import { OneEventTypeBlock } from './../OneEventTypeBlock/OneEventTypeBlock.js';

import { EVENT_TYPE } from './../../../../../../config/events.js';

import { DEFAULT_CATEGORY } from './../../../../../../config/layout.js';


const EventListComponent = ( props ) => {

    let {
        eventList,
        // eventsIsChanged,
        categoryList,

    } = props;

    const get_category_object = ( arr ) => {

        let result = {};
        for( let i = 0; i < arr.length; i++ ){
            let {
                colorBG,
                colorText,
                id,
                name,
                prefix,
            } = arr[ i ];
            result[ id ] = {
                colorBG,
                colorText,
                id,
                name,
                prefix,
            };
        };

        return result;

    };



    const create = ( arr, arr_2 ) => {

        let category_obj = get_category_object( arr_2 );

        let div = arr.map( ( item, index ) => {
            let {
                id,
                name,
                category_id,
                notes,
                type,
            } = item;

            // if( type === EVENT_TYPE.FILE  ){
                return (
                    <OneEventTypeFile 
                        id =            { id }
                        name =          { name }
                        category =      { category_obj[ category_id ]? category_obj[ category_id ]: { ...DEFAULT_CATEGORY } }
                        notes =         { notes }
                        type =          { type }
                        key =           { index }
                    />
                );
            // }else{
            //     return (
            //         <OneEventTypeBlock 
            //             id =            { id }
            //             name =          { name }
            //             category =      { category_obj[ category_id ]? category_obj[ category_id ]: { ...DEFAULT_CATEGORY } }
            //             notes =         { notes }
            //             key =           { index }
            //         />
            //     );
            // };



        } );

        return div;

    };

    return (

        <div className = 'LC_EventList' >

            { create( eventList, categoryList ) }
            
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
            // eventsIsChanged = { layout.eventsIsChanged }

            categoryList = { layout.categoryList }



            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
