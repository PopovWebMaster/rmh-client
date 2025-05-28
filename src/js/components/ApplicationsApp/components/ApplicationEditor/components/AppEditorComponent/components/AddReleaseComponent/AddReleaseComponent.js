
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddReleaseComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';


const AddReleaseComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

    } = props;



    return (
        <div className = 'addReleaseComponent'>

AddReleaseComponent
        </div>
        
    )

};

export function AddReleaseComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AddReleaseComponentComponent
            { ...props }
            currentAppNum =     { application.currentAppNum }
            currentAppName =    { application.currentAppName }
            currentAppType =    { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
