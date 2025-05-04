
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CP_ButtonComponent.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const CP_ButtonComponentComponent = ( props ) => {

    let {
        title,
        icon,
        clickHandler,
        className = '',

    } = props;


    
    return (
        <div 
            className = { `${ className } CP_ButtonComponent` }
            onClick = { clickHandler }
        >
            <span className = { `${icon} CP_ButtonComponent_icon` }></span>
            <span className = ''>{ title }</span>
        </div>

    )

};

export function CP_ButtonComponent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CP_ButtonComponentComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
