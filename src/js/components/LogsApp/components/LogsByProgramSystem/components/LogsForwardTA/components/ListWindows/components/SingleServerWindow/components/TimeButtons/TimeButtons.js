
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../../../redux/logsForwardTASlise.js';

import './TimeButtons.scss';

const TimeButtonsComponent = ( props ) => {

    let {
        server,

        borderMoverWidtnPx,

    } = props;

    let TIME_LIST = [
        '0:00',
        '7:00',
        '7:30',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '19:30',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ];



    const create = () => {
        let li = TIME_LIST.map( ( item, index) => {

            return (
            <li key = { index } >
                <span
                    onClick = { () => { click( item ) } }
                >
                    { item }
                </span>
            </li>);

        } );

        return li;

    }

    return (

        <div 
            className = 'FTA_List_TimeButtons'
            style = {{ paddingLeft: `${borderMoverWidtnPx/2}px` }}
        >
            <ul>
                { create() }
            </ul>
        </div>
    )

};

export function TimeButtons( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <TimeButtonsComponent
            { ...props }

            borderMoverWidtnPx = { logsForwardTA.borderMoverWidtnPx }


            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
