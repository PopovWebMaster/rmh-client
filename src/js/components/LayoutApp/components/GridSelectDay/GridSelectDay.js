
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './GridSelectDay.scss';
import './GridSelectDay.scss';

import { selectorData as layoutSlice, setGridCurrentDay } from './../../../../redux/layoutSlice.js';

const GridSelectDayComponent = ( props ) => {

    let {
        gridCurrentDay,
        setGridCurrentDay,
    } = props;
    

    const getClassName = ( currentDay, val ) => {
        return `gridMenu_item ${ currentDay === val? 'selected': ''}`;
    };

    const click = ( val ) => { 
        if( val !== gridCurrentDay ){
            setGridCurrentDay( val );
        };
     }


    
    return (
        <div className = 'gridSelectDayWWWWW'>

            <div
                className = { getClassName( gridCurrentDay, 0 ) }
                onClick = { () => { click( 0 ) } }
            >
                <span>Пн</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 1 ) }
                onClick = { () => { click( 1 ) } }
            >
                <span>Вт</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 2 ) }
                onClick = { () => { click( 2 ) } }
            >
                <span>Ср</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 3 ) }
                onClick = { () => { click( 3 ) } }
            >
                <span>Чт</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 4 ) }
                onClick = { () => { click( 4 ) } }
            >
                <span>Пт</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 5 ) }
                onClick = { () => { click( 5 ) } }
            >
                <span>Сб</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 6 ) }
                onClick = { () => { click( 6 ) } }
            >
                <span>Вс</span>
            </div>
            
        </div>

    )

};

export function GridSelectDay( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <GridSelectDayComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }

            setGridCurrentDay = { ( val ) => { dispatch( setGridCurrentDay( val ) ) } }


        />
    );


}
