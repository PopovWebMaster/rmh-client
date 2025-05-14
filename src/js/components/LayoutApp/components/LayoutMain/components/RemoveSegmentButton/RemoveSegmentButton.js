
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './RemoveSegmentButton.scss';

// import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';

const RemoveSegmentButtonComponent = ( props ) => {

    let {
        clickHandler

    } = props;

    return (
        <div className = 'removeSegmentButton'>
            <div 
                className = 'RIB_btn'
                onClick = { clickHandler }
            >
                <span className = 'icon-cancel-2'></span>
            </div>
        </div>
    )

};

export function RemoveSegmentButton( props ){

        // const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <RemoveSegmentButtonComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
