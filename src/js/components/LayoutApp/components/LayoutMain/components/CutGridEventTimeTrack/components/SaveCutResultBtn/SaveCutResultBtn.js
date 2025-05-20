
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveCutResultBtn.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../../../redux/layoutSlice.js';

import { add_new_cut_group_into_dayEventsList } from './vendors/add_new_cut_group_into_dayEventsList.js';

const SaveCutResultBtnComponent = ( props ) => {

    let {

        setIsOpen,

        gridEventsParts,
        gridOneDayList,

        gridCurrentDay,
        gridDayEventsList,


        setGridDayEventsList,

    } = props;

    const click = () => {
        console.dir( 'gridEventsParts' );
        console.dir( gridEventsParts );

        console.dir( 'gridDayEventsList' );
        console.dir( gridDayEventsList );

        let newarr = add_new_cut_group_into_dayEventsList( gridEventsParts );

        
        // setGridDayEventsList( newarr );

        console.dir( 'newarr' );
        console.dir( newarr );

        // setIsOpen( false );


    }


    return (
        <div className = 'AOASGE_SaveCutResultBtn'>
            <div 
                className = 'btn_wrap'
                onClick = { click }
            >
                <span className = 'icon icon-plus'></span>
                <span className = 'text'>Добавть</span>
            </div>
        </div>
    )

};

export function SaveCutResultBtn( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <SaveCutResultBtnComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            gridCurrentDay = { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }
            // eventListById = { layout.eventListById }


            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }


        />
    );


}
