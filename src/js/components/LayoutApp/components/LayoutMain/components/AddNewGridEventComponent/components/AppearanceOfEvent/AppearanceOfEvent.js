
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppearanceOfEvent.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';
import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { EVENT_TYPE } from './../../../../../../../../config/layout.js';

const AppearanceOfEventComponent = ( props ) => {

    let {
        eventId,
        startTime,
        eventListById,
        categoryListById,

    } = props;

    let [ isReady, setIsReady] = useState( false );
    let [ duration, setDuration ] = useState( 0 );
    let [ prefix, setPrefix ] = useState( '' );

    let [ eventName, setEventName ] = useState('');
    let [ eventType, setEventType ] = useState('');
    let [ categoryColorBG, setCategoryColorBG ] = useState('');
    let [ categoryColorText, setCategoryColorText ] = useState('');
    let [ eventNotes, setEventNotes ] = useState('');


    useEffect( () => {
        if( eventId === null ){
            // setDuration( null );
            setIsReady( false );
            setDuration( 0 );
            setPrefix( '' );
            setCategoryColorBG( '' );
            setCategoryColorText( '' );
            setEventName( '' );
            setEventType( '' );
            setEventNotes( '' );

        }else{
            setIsReady( true );

            let { durationTime, category_id, name, type, notes } = eventListById[ eventId ];
            
            setDuration( convert_time_str_to_sec( durationTime ) );
            setEventName( name );
            setEventType( type );
            setEventNotes( notes );

            if( categoryListById[ category_id ] ){
                let {
                    prefix,
                    colorBG,
                    colorText,
                } = categoryListById[ category_id ];

                setPrefix( prefix );
                setCategoryColorBG( colorBG );
                setCategoryColorText( colorText );

            }else{
                setPrefix( '' );
                setCategoryColorBG( '' );
                setCategoryColorText( '' );
                
            };
        };


    }, [ eventId ] );

    const get_style = ( type ) => {
    
        let result = {
            backgroundColor: '#ffffff00',
            color: '#ffffff00',
        };

        if( type === EVENT_TYPE.FILE ){
            result.backgroundColor = categoryColorBG;
            result.color = categoryColorText;

        }else if( type === EVENT_TYPE.BLOCK ){
            result.backgroundColor = '#ffffff00';
            result.color = '#000000';
            result.borderColor = categoryColorBG;
        };

        return result;

    }

    return (<>{
        isReady? (
            <div className = 'G_ANG_AppearanceOfEvent'>
                <div className = 'G_ANG_AOE_Wrap'>
                    <div className = 'G_ANG_AOE_Time'>
                        <span className = 'AOE_time'>{ convert_sec_to_time( startTime ) }</span>
                        <span className = 'AOE_duration'>{ convert_sec_to_time( duration ) }</span>
                    </div>
                    <div className = 'G_ANG_AOE_Body'>

                        <div className = 'AOE_PrefixItem'>
                            <span>{ prefix }</span>
                        </div>

                        <div className = 'AOE_EventNameItem'>
                            <input 
                                type =      'text'
                                value =     { eventName }
                                maxLength = { 255 }
                                onChange =  { () => {} }
                                style =     { get_style( eventType ) }
                            />
                        </div>

                        <div className = 'AOE_EventNotesItem'>
                            <input 
                                type =      'text'
                                value =     { eventNotes }
                                onChange =  { () => {} }
                            />
                        </div>
                                        
                    </div>
                </div>
                
            </div>
        ): ''}</>
    )

};

export function AppearanceOfEvent( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AppearanceOfEventComponent
            { ...props }
            // eventList = { layout.eventList }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
