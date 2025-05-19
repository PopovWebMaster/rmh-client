
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SettingTimeTrack.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

const SettingTimeTrackComponent = ( props ) => {

    let {
        maxDurationTime,
        gridEventsParts,
        index,
        setGridEventsParts,

    } = props;

    let [ widthProc, setWidthProc ] = useState( 0 );

    useEffect( () => {

        let { durationTime } = gridEventsParts[ index ];
        
        setWidthProc( durationTime * 100 / maxDurationTime ) 

    }, [ gridEventsParts ] );

    
    return (
        <div className = 'AOASGE_SettingTimeTrack'>

            <div className = 'AOASGE_track'>
                <div 
                    className = 'AOASGE_filled_track'
                    style = {{
                        width: `${ widthProc }%`,
                    }}
                ></div>
            </div>

        </div>

    )

};

export function SettingTimeTrack( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SettingTimeTrackComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
