
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutSegmentButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../AlertWindowContainer/AlertWindowContainer.js';
import { CutEditorComponent } from './components/CutEditorComponent/CutEditorComponent.js';

const CutSegmentButtonComponent = ( props ) => {

    let {
        id,

        gridDayEventsListById,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ showStatus, setShowStatus ] = useState( true );
    let [ firstSegmentId, setFirstSegmentId ] = useState( null );
    let [ durationTime, setDurationTime ] = useState( 0 );
    let [ startTime, setStartTime ] = useState( 0 );


    useEffect( () => {
        if( gridDayEventsListById[ id ] ){
            let { 
                firstSegmentId,
                durationTime,
                startTime,
            } = gridDayEventsListById[ id ];

            setShowStatus( getShowStatus( firstSegmentId ) );
            setFirstSegmentId( firstSegmentId );
            setDurationTime( durationTime );
            setStartTime( startTime );


        }else{
            setShowStatus( null );
        };

    }, [ gridDayEventsListById ] );


    const click = ( status ) => {
        if( status ){
            setIsOpen( true )
        };
    }

    const getShowStatus = ( first_segment_id ) => {
        let result = false;
        if( first_segment_id === null ){
            result = true;
        }else if( first_segment_id === id ){
            result = true;
        };
        return result;
    }

    return (
        <div className = 'cutSegmentButton'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '90vw'
                height = '75vh'
                showCurrentDayName = { true }
            >
                <CutEditorComponent 
                    isOpen = { isOpen }
                    setIsOpen = { setIsOpen }
                    id = { id }
                    firstSegmentId =    { firstSegmentId }
                    durationTime =      { durationTime }
                    startTime =         { startTime }
                />
    
            </AlertWindowContainer>

            <div 
                className = { `CSB_btn ${showStatus? 'isActive': ''}` }
                onClick = { () => { click( showStatus ) } }
            >
                <span className = 'icon-scissors'></span>
            </div> 
            
        </div>
    )

};

export function CutSegmentButton( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <CutSegmentButtonComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
