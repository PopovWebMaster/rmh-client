

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Day.scss';

import { selectorData as layoutSlice, setWeekKeyPointList } from './../../../../../../redux/layoutSlice.js';

import { get_top_position_from_time } from './vendors/get_top_position_from_time.js';

import { DayHeader } from './components/DayHeader/DayHeader.js';
import { DayPoint } from './components/DayPoint/DayPoint.js';

const DayComponent = ( props ) => {

    let {
        dayNum,

        weekKeyPointList,
        setWeekKeyPointList,

    } = props;




    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let top = get_top_position_from_time( item.time );
            return (
                <DayPoint 
                    key =           { index }
                    dayNum =        { dayNum }
                    time =          { item.time }
                    description =   { item.description }
                />
                
                // <div 
                //     className = 'LP_Day_point'
                //     style = {{ top }}
                //     key = { index }
                // >
                //     <span className = 'LP_Day_time'>{ item.time }</span>
                //     <p>{ item.description }</p>
                //     <span 
                //         className = 'LP_Day_time_remove'
                //         onClick = { () => { remove( item.time ) }  }
                //     >✖</span>

                // </div>
            ) ;
        } );

        return div;

    };
    
    return (
        <div className = 'LP_Day'>
            <DayHeader dayNum = { dayNum }/>

            <div className = 'LP_Day_field'>

                { create( weekKeyPointList[ dayNum ] ) }

            </div>
        </div>
    )

};

export function Day( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DayComponent
            { ...props }
            weekKeyPointList = { layout.weekKeyPointList }
            setWeekKeyPointList = { ( arr ) => { dispatch( setWeekKeyPointList( arr ) ) } }

        />
    );


}
