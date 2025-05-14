
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddSegmentButton.scss';

// import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';

const AddSegmentButtonComponent = ( props ) => {

    let {
        clickHandler

    } = props;

    return (
        <div className = 'addSegmentButton'>
            <div 
                className = 'ASB_btn'
                onClick = { clickHandler }
            >
                <span className = 'icon-plus'></span>
            </div>
        </div>
    )

};

export function AddSegmentButton( props ){

        // const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <AddSegmentButtonComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
