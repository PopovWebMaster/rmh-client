
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewGridEventComponent.scss';

import { selectorData as layoutSlice, setEventList }    from './../../../../../../redux/layoutSlice.js';
import { selectorData as navigationSlice }              from './../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { DayName } from './components/DayName/DayName.js';
import { GridEventType } from './components/GridEventType/GridEventType.js';
import { SelectedEvent } from './components/SelectedEvent/SelectedEvent.js';
import { TimeSelected } from './components/TimeSelected/TimeSelected.js';


const AddNewGridEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        timeSpaceFrom,
        timeSpaceTo,

        gridCurrentDayName,
        

    } = props;

    let [ isAKeyOneEvent, setIsAKeyOneEvent ] = useState( false );
    let [ eventId, setEventId ] = useState( null );
    let [ startTime, setStartTime ] = useState( null );


    
    // let [ hh, set_hh ] = useState( '' );
    // let [ mm, set_mm ] = useState( '' );
    // let [ ss, set_ss ] = useState( '' );


    useEffect( () => {
        if( isOpen === false ){
            setIsAKeyOneEvent( false );
            setEventId( null );
            setStartTime( null );

            // set_hh('');
            // set_mm('');
            // set_ss('');

        };
    }, [ isOpen ]);



    // const create = () => {
    //     if( name.trim() !== '' ){

    //         setSpinnerIsActive( true );

    //         send_request_to_server({
    //             route: `${currentPage}/add-new-event`,
    //             data: { 
    //                 eventName:  name,
    //                 eventNotes: notes,
    //                 eventType:  eventType, // file block
    //                 categoryId: categoryIdValue,
    //                 eventDurationTime: getDurationTime(),
    //             },

    //             callback: ( response ) => {
    //                 console.dir( 'response' );
    //                 console.dir( response );

    //                 if( response.ok ){
    //                     setSpinnerIsActive( false );
    //                     setEventList( response.list );
    //                     setIsOpen( false );
    //                 };

    //             },
    //         });



    //     };
    // }


    
    return (

        <div className = 'G_AddNewGridEventComponent' >
            <DayName />
            
            <GridEventType 
                isAKeyOneEvent =    { isAKeyOneEvent }
                setIsAKeyOneEvent = { setIsAKeyOneEvent }
            />

            <SelectedEvent 
                eventId =       { eventId }
                setEventId =    { setEventId }
                durationLimit = { timeSpaceTo - timeSpaceFrom }
            />

            <p>{startTime}</p>

            <TimeSelected
                eventId =       { eventId }
                timeSpaceTo =   { timeSpaceTo }
                timeSpaceFrom = { timeSpaceFrom }
                setStartTime =  { setStartTime }
            />


            
        </div>

    )

};

export function AddNewGridEventComponent( props ){

    const layout = useSelector( layoutSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <AddNewGridEventComponentComponent
            { ...props }
            gridCurrentDayName = { layout.gridCurrentDayName }




            currentPage = { navigation.currentPage }
            // // categoryList = { layout.categoryList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEventList = { ( val ) => { dispatch( setEventList( val ) ) } }


        />
    );


}
