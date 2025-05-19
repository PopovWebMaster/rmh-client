
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './RemoveBtn.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

const RemoveBtnComponent = ( props ) => {

    let {

        gridEventsParts,
        index,
        setGridEventsParts,

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        if( gridEventsParts[ index - 1 ] ){
            setIsShow( true );
        }else{
            setIsShow( false );
        };

    }, [ gridEventsParts, index ] );

    const click = () => {

    };


    return (<>{ isShow? (
        <div className = 'AOASGE_RemoveBtn'>
            <span
                onClick = { click }
            >удалить</span>
        </div>

    ): ''}</>
        
    )

};

export function RemoveBtn( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <RemoveBtnComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
