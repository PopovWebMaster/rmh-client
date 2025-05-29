// SerialDurationItem


import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SerialDurationItem.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../../../config/layout.js';
import { InputDuration } from './../../../../../../../../../InputDuration/InputDuration.js';


const SerialDurationItemComponent = ( props ) => {

    let {
        isOpen,
        durationSec,
        setDurationSec,


    } = props;

    let [ HH, setHH ] = useState( '00' );
    let [ MM, setMM ] = useState( '00' );
    let [ SS, setSS ] = useState( `${MIN_EVENT_DURATION_SEC}`.padStart( 2, "0" ) );


    const enter = () => {

    };


   

    return (
        <div className = 'ASC_item_serial_duration'>
            <h3>Длительность одной серии:</h3>
            <div className = 'ASC_time_wrap'>
                <InputDuration 
                    HH = { HH }
                    MM = { MM }
                    SS = { SS }
                    setHH = { setHH }
                    setMM = { setMM }
                    setSS = { setSS }
                    enterHandler = { enter }
                />
            </div>            

        </div>

    )

};

export function SerialDurationItem( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <SerialDurationItemComponent
            { ...props }
            // currentAppNum =     { application.currentAppNum }
            // currentAppName =    { application.currentAppName }
            // currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
