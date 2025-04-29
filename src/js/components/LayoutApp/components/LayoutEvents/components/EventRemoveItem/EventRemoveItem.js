
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventRemoveItem.scss';

import { selectorData as layoutSlice, setEventList } from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';
import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

const EventRemoveItemComponent = ( props ) => {

    let {
        id,
        currentPage,
        setEventList,
        setSpinnerIsActive,

    } = props;

    let [ isOpen, setIsOpen] = useState( false );

    const remove_event = () => {
        setIsOpen( false );
        
        setSpinnerIsActive( true );
        
        send_request_to_server({
            route: `${currentPage}/remove-event`,
            data: { 
                eventId: id,
            },

            callback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setEventList( response.list );
                    setIsOpen( false );
                };

            },
        });
    }



    return (<>

        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            width = '25em'
            height = '10em'
        >
            <div className = 'LE_Event_remove'>
                <p>Пожалуйста, подтвердите удаление события</p>
                <p>
                    <span 
                        className = 'LE_Event_remove_btn'
                        onClick = { remove_event}
                    >Удалить</span>
                    <span 
                        className = 'LE_Event_no_remove_btn'
                        onClick = { () => { setIsOpen( false ) } }
                    >Отмена</span>
                </p>
            </div>

        </AlertWindowContainer>

        <div 
            className = 'LE_EventRemoveItem'
            onClick = { () => { setIsOpen( true ) } }
        >
            <span className = 'icon-cancel-2'></span>
        </div>
                

    </>)

};

export function EventRemoveItem( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <EventRemoveItemComponent
            { ...props }
            // eventList = { layout.eventList }
            // categoryesIsChanged = { layout.categoryesIsChanged }
            currentPage = { navigation.currentPage }


            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


            // setCategoryList = { ( val ) => { dispatch( setCategoryList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
