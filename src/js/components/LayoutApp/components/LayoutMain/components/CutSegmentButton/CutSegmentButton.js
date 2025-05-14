// CutSegmentButton


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CutSegmentButton.scss';

// import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';

const CutSegmentButtonComponent = ( props ) => {

    let {
        clickHandler

    } = props;

    return (
        <div className = 'cutSegmentButton'>
            <div 
                className = 'CSB_btn'
                onClick = { clickHandler }
            >
                <span className = 'icon-scissors'></span>
            </div>
        </div>
    )

};

export function CutSegmentButton( props ){

        // const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <CutSegmentButtonComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
