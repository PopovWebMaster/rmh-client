
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubDuration.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const ItemSubDurationComponent = ( props ) => {

    let {
        currentSubAppList
        
    } = props;


    
    
    return (
        <div className = 'SA_ItemSubDuration'>
           
ItemSubDuration
        </div>
    )

};

export function ItemSubDuration( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubDurationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
