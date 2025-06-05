
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubFiles.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';



const ItemSubFilesComponent = ( props ) => {

    let {
        currentSubAppList
        
    } = props;


    
    
    return (
        <div className = 'SA_ItemSubFiles'>
           
ItemSubFiles
        </div>
    )

};

export function ItemSubFiles( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemSubFilesComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
