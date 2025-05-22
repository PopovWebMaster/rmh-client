
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AP_ControlButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const AP_ControlButtonComponent = ( props ) => {

    let {
        title,
        icon,
        clickHandler,
        className = '',

    } = props;


    
    return (
        <div 
            className = { `${ className } AP_ControlButton` }
            onClick = { clickHandler }
        >
            <span className = { `${icon} AP_ButtonComponent_icon` }></span>
            <span className = ''>{ title }</span>
        </div>

    )

};

export function AP_ControlButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AP_ControlButtonComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
