
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DayHeader.scss';

import { selectorData as layoutSlice, setWeekKeyPointList } from './../../../../../../../../redux/layoutSlice.js';

import { WEEK } from './../../../../../../../../config/week.js';

import { convert_time_hh_mm_to_ms } from './../../../../../../../../helpers/convert_time_hh_mm_to_ms.js';


const DayHeaderComponent = ( props ) => {

    let {
        dayNum,

        weekKeyPointList,
        setWeekKeyPointList,

    } = props;

    

    let [ timeValue, setTimeValue ] = useState( '00:00' );

    const addClick = () => {
        let item = {
            time: timeValue,
            description: '',
            ms: convert_time_hh_mm_to_ms( timeValue ),
        };

        let week_arr = [ ...weekKeyPointList ];
        let day_arr = [ ...week_arr[ dayNum ] ]

        let chack_uniq = true;
        for( let i = 0; i < day_arr.length; i++ ){
            if( day_arr[ i ].time === timeValue ){
                chack_uniq = false;
                break;
            };
        };

        if( chack_uniq ){
            day_arr.push( item );
            week_arr[ dayNum ] = day_arr;
            setWeekKeyPointList( week_arr );
        };
        




    }

    const changeTime = ( e ) => {
        setTimeValue( e.target.value );
    }


    
    return (
        <h2 className = 'LP_DayHeader'>
            <span>{ WEEK[ dayNum ].SHORT_NAME }</span>
            <div 
                className = 'addPoint'
            >

                <input 
                    className = 'addInput'
                    type =      'time'
                    value =     { timeValue }
                    onChange =  { changeTime }
                />
                <span 
                    className = 'icon-plus addBtn'
                    onClick = { addClick }
                ></span>

            </div>

            
        </h2>
    )

};

export function DayHeader( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DayHeaderComponent
            { ...props }
            weekKeyPointList = { layout.weekKeyPointList }
            setWeekKeyPointList = { ( arr ) => { dispatch( setWeekKeyPointList( arr ) ) } }

        />
    );


}
