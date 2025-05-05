
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedEvent.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';

const SelectedEventComponent = ( props ) => {

    let {
        eventId,
        setEventId,
        setEventCategoryId,
        setEventDurationTime,
        setEventName,
        setEventNotes,
        setEventType,

        eventList,
    } = props;

    let [ listIsOpen, setListIsOpen ] = useState( false );

    const itemClick = ( event ) => {
        let {
            category_id,
            durationTime,
            id,
            name,
            notes,
            type,
        } = event;

        setEventId( id );
        setEventCategoryId( category_id );
        setEventDurationTime( durationTime );
        setEventName( name );
        setEventNotes( notes );
        setEventType( type );

        setListIsOpen( false );

    };

    const createList = ( arr ) => {

        let li = arr.map( ( item, index ) => {
            let typeText = item.type === 'file'? 'файл': 'блок' ;
            return (
                <li
                    key = { index }
                    onClick = { () => {
                        itemClick( item );
                    } }
                >
                    <span className = { item.type === 'file'? 'G_ANG_list_file': 'G_ANG_list_block' } >{ typeText }</span>
                    <span className = 'G_ANG_list_name'>{ item.name }</span>
                </li>
            );
        } );

        return li;

    }


    const getEventName = ( arr, id ) => {
        let result = <span className = 'G_ANG_list_name'>-- Не выбрано --</span>
        if( id !== null ){
            for( let i = 0; i < arr.length; i++ ){
                if( arr[ i ].id === id ){
                    let typeText = arr[ i ].type === 'file'? 'файл': 'блок' ;
                    result = (
                        <>
                            <span className = { arr[ i ].type === 'file'? 'G_ANG_list_file': 'G_ANG_list_block' } >{ typeText }</span>
                            <span className = 'G_ANG_list_name'>{ arr[ i ].name }</span>
                        </>
                    );

                    break;
                };
            };

        };
        return result;
    }


    return (

        <div className = 'G_ANG_SelectedEvent'>
            <h3>Категория:</h3>
            <div 
                className = 'G_ANG_eventList_body'
                onMouseLeave = { () => { setListIsOpen( false ) } }
            >
                <h4>{ getEventName( eventList, eventId ) }</h4>
                <div 
                    className = 'G_ANG_btn'
                    onClick = { () => { setListIsOpen( !listIsOpen ) }}
                >
                    <span className = { `G_ANG_btn_icon ${listIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { listIsOpen? (
                    <ul className = 'G_ANG_eventList_list'>
                        { createList( eventList ) }
                    </ul>
                ): '' }
                
            </div>
        </div>

    )

};

export function SelectedEvent( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SelectedEventComponent
            { ...props }
            eventList = { layout.eventList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
