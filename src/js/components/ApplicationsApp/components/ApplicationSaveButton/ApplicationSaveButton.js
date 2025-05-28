
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ApplicationSaveButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

const ApplicationSaveButtonComponent = ( props ) => {

    let {
        isChanged,
        clickHandler,

    } = props;

    return (
        <div 
            className = { `applicationSaveButton ${ isChanged? 'isActive': ''}` }
            onClick = { clickHandler }
        >
            <span className = 'icon-floppy applicationSaveButton_icon'></span>
            <span className = ''>Сохранить изменения</span>
        </div>
    )

};

export function ApplicationSaveButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationSaveButtonComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
