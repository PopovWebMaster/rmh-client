
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './KeyPointToggle.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../../../vendors/set_grid_event_changes_to_store.js';

const KeyPointToggleComponent = ( props ) => {

    let {
        id,
        isKeyPoint,
    } = props;

    let [ keyPointValue, setKeyPointValue ] = useState( isKeyPoint );

    useEffect( () => {
        setKeyPointValue( isKeyPoint );
    }, [ isKeyPoint ] )



    // const set_changes_to_store = () => {
    //     if( keyPointValue !== isKeyPoint ){
    //         set_grid_event_changes_to_store( id, { isKeyPoint: keyPointValue } );
    //     };
    // };

    const click = () => {
        setKeyPointValue( !keyPointValue );
    }



    return (
        <div className = 'CTS_KeyPointToggle'>
            <div 
                className = 'CTS_KeyPointToggle_wrap'
                onClick = { click }
            >
                <div className = 'CTS_KeyPointToggle_rect'>
                    <span className = { `${ keyPointValue? 'icon-ok-3': '' }` }></span>
                </div>

                <div className = 'CTS_KeyPointToggle_text'>
                    <span className = { `${ keyPointValue? 'isSelected': '' }` }>Кл. точка</span>
                </div>

            </div>
        </div>
    )

};

export function KeyPointToggle( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <KeyPointToggleComponent
            { ...props }
            layout = { layout }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
