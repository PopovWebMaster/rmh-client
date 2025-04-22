
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DayHeader.scss';

import { selectorData as layoutSlice, setWeekKeyPointListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { WEEK } from './../../../../../../../../config/week.js';

import { convert_time_hh_mm_to_ms } from './../../../../../../../../helpers/convert_time_hh_mm_to_ms.js';
import { InputTypeTimeAsWindow } from './../../../../../../../InputTypeTimeAsWindow/InputTypeTimeAsWindow.js'


const DayHeaderComponent = ( props ) => {

    let {
        dayNum,

        weekKeyPointList,
        setWeekKeyPointListAsChanged,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    

    // let [ timeValue, setTimeValue ] = useState( '00:00' );

    const addClick = () => {

        // console.dir( time );
        setIsOpen( !isOpen );


        /*let item = {
            time: time,
            description: '',
            ms: convert_time_hh_mm_to_ms( time ),
        };

        let week_arr = [ ...weekKeyPointList ];
        let day_arr = [ ...week_arr[ dayNum ] ]

        let chack_uniq = true;
        for( let i = 0; i < day_arr.length; i++ ){
            if( day_arr[ i ].time === time ){
                chack_uniq = false;
                break;
            };
        };

        if( chack_uniq ){
            day_arr.push( item );
            week_arr[ dayNum ] = day_arr;
            setWeekKeyPointListAsChanged( week_arr );
        };
        */
    }


    const add_pont = ( time ) => {
        let item = {
            time: time,
            description: '',
            ms: convert_time_hh_mm_to_ms( time ),
        };

        let week_arr = [ ...weekKeyPointList ];
        let day_arr = [ ...week_arr[ dayNum ] ]

        let chack_uniq = true;
        for( let i = 0; i < day_arr.length; i++ ){
            if( day_arr[ i ].time === time ){
                chack_uniq = false;
                break;
            };
        };

        if( chack_uniq ){
            day_arr.push( item );
            week_arr[ dayNum ] = day_arr;
            setWeekKeyPointListAsChanged( week_arr );
        };
    };

    // const changeTime = ( e ) => {
    //     setTimeValue( e.target.value );
    // }


    
    return (<>

        {/* { dayNum === 6? (<InputTypeTimeAsWindow 
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            value = { '' }
            callback = { () => {} }
        />): '' } */}

        <InputTypeTimeAsWindow 
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            // value =     { dayNum }
            callback =  { add_pont }
        />

        <h2 className = 'LP_DayHeader'>

            <span>{ WEEK[ dayNum ].SHORT_NAME }</span>
            <div 
                className = 'addPoint'
            >

                {/* <input 
                    className = 'addInput'
                    type =      'time'
                    value =     { timeValue }
                    onChange =  { changeTime }
                /> */}
                <span 
                    className = 'icon-plus addBtn'
                    onClick = { addClick }
                ></span>

            </div>

            
        </h2>
        </>)

};

export function DayHeader( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DayHeaderComponent
            { ...props }
            weekKeyPointList = { layout.weekKeyPointList }
            setWeekKeyPointListAsChanged = { ( arr ) => { dispatch( setWeekKeyPointListAsChanged( arr ) ) } }

        />
    );


}
