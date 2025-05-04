
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CP_SaveButtonComponent.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const CP_SaveButtonComponentComponent = ( props ) => {

    let {
        isChanged,
        clickHandler,

    } = props;

    return (
        <div 
            className = { `CP_SaveButtonComponent ${ isChanged? 'isActive': ''}` }
            onClick = { clickHandler }
        >
            <span className = 'icon-floppy CP_SaveButtonComponent_icon'></span>
            <span className = ''>Сохранить изменения</span>
        </div>
    )

};

export function CP_SaveButtonComponent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CP_SaveButtonComponentComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
