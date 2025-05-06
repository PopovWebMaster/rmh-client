
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GrigItemWrap.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const GrigItemWrapComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        children,
    } = props;
    
    return (
        <div className = 'grigItem'>
            <div className = 'grigItemWrap'>
                <div className = 'grigItemTime'>
                    <span className = 'ETS_time'>{ startTime }</span>
                    <span className = 'ETS_duration'>{ durationTime }</span>
                </div>
                <div className = 'grigItemBody'>
                    { children }
                </div>
            </div>
        </div>
    )

};

export function GrigItemWrap( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GrigItemWrapComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
