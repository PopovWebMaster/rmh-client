// SaveCutResultBtn


import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SaveCutResultBtn.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

const SaveCutResultBtnComponent = ( props ) => {

    let {

        gridEventsParts,
        index,
        setGridEventsParts,

    } = props;

    const click = () => {
        console.dir( 'gridEventsParts' );
        console.dir( gridEventsParts );

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

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SaveCutResultBtnComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
