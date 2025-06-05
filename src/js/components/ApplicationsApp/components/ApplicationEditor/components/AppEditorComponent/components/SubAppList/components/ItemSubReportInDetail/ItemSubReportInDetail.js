// ItemReportInDetail


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubReportInDetail.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';


const ItemSubReportInDetailComponent = ( props ) => {

    let {
        currentSubAppList
        
    } = props;


    
    
    return (
        <div className = 'SA_ItemSubReportInDetail'>
           
ItemSubReportInDetail
        </div>
    )

};

export function ItemSubReportInDetail( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubReportInDetailComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
