
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeTrack.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../../../../../../../../helpers/round_to_number.js';

import { add_curtain_to_body } from './vendors/add_curtain_to_body.js';
import { add_event_mouse_move } from './vendors/add_event_mouse_move.js';

const TimeTrackComponent = ( props ) => {

    let {
        timeSpaceTo,
        timeSpaceFrom,
        target,
        duration,
        setStartTime,


    } = props;

    let [ sliderWidth, setSliderWidth ] = useState( 0 );
    let [ sliderLeft, setSliderLeft ] = useState( 0 );

    let [ currentTimeSec, setCurrentTimeSec] = useState( 0 );


    useEffect( () => {
        if( duration === null ){
            setSliderWidth( 0 );
            setSliderLeft( 0 );
        }else{
            let proc = round_to_number( ( duration * 100 )/(timeSpaceTo - timeSpaceFrom ), 2 )  ;
            if( proc <= 1){
                proc = 1;
            };
            setSliderWidth( proc );
            if( target === 'start' ){
                setSliderLeft( 0 );
            }else{
                setSliderLeft( 100 - proc );
            };

        };

    }, [ duration, target ] );


    useEffect(() => {
        let timePos = 0;
        if( target === 'start' ){
            let proc = ( sliderLeft * 100 ) / ( 100 - sliderWidth );
            timePos = Math.round( (( timeSpaceTo - timeSpaceFrom - duration ) * proc ) / 100 );
        }else{
            let proc = ( sliderLeft * 100 ) / ( 100 - sliderWidth );
            timePos = Math.round( duration + (( timeSpaceTo - timeSpaceFrom - duration ) * proc ) / 100 ) ;
        };
        setCurrentTimeSec( timePos );
        setStartTime( timePos );

    }, [ sliderLeft, target ] );



    let trackRef = useRef();
    let sliderRef = useRef();

    const mouse_down = ( e ) => {

        let { clientX } = e;
        let sliderRECT = sliderRef.current.getBoundingClientRect()
        let slider_left = sliderRECT.left;
        let slider_width = sliderRECT.width;

        let trackRECT = trackRef.current.getBoundingClientRect()
        let track_left = trackRECT.left;
        let track_right = trackRECT.right;
        let track_width = trackRECT.width;
        let ratio = clientX - slider_left;

        add_curtain_to_body();
        add_event_mouse_move( ( cursor ) => {
            if( cursor - ratio >= track_left && cursor + slider_width - ratio <= track_right ){
                let track_x = cursor - ratio - track_left;
                let left_proc = ( track_x * 100 / track_width );
                setSliderLeft( left_proc );
            }else{
                if( cursor - ratio < track_left ){
                    setSliderLeft( 0 );
                }else if( cursor + slider_width - ratio > track_right ){
                    setSliderLeft( 100 - sliderWidth );
                };
            };
        } );
    }



    return (<>{
        duration === null? '': (
            <div className = 'G_ANG_TS_track_wrap'>

                <div className = 'G_ANG_TS_track_time_point'>
                    <span>{ convert_sec_to_time( timeSpaceFrom ) }</span>
                </div>

                <div 
                    className = 'G_ANG_TS_track'
                    ref = { trackRef }
                >
                    <div 
                        className = 'G_ANG_TS_slider'
                        style = {{
                            left: `${sliderLeft}%`,
                            width: `${sliderWidth}%`,
                        }}
                        ref = { sliderRef }
                        onMouseDown = { mouse_down }
                    >
                        <div className = { `G_ANG_TS_slider_time ${ target === 'start'? 'left': 'right' }` }>
                            <span>{ convert_sec_to_time( currentTimeSec ) }</span>
                        </div>
                    </div>
                </div>

                <div className = 'G_ANG_TS_track_time_point'>
                    <span>{ convert_sec_to_time( timeSpaceTo ) }</span>
                </div>
            </div>
        )
    }</>);

};

export function TimeTrack( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TimeTrackComponent
            { ...props }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
