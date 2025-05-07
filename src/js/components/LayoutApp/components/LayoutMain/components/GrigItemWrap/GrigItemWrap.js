
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GrigItemWrap.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

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
                    <span className = 'ETS_time'>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'ETS_duration'>{ convert_sec_to_time( durationTime ) }</span>
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
