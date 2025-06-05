
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubShedule.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const ItemSubSheduleComponent = ( props ) => {

    let {
        currentSubAppList
        
    } = props;


    
    
    return (
        <div className = 'SA_ItemSubShedule'>
           
ItemSubShedule
        </div>
    )

};

export function ItemSubShedule( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubSheduleComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
