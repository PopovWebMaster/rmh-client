
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './KeyPointsControlPanel.scss';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import { SaveKPChangesButton } from './../SaveKPChangesButton/SaveKPChangesButton.js';


const KeyPointsControlPanelComponent = ( props ) => {

    let {
        
    } = props;
    
    return (
        <div className = 'LP_KeyPointsControlPanel'>

            <SaveKPChangesButton />
            
            

        </div>
    )

};

export function KeyPointsControlPanel( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <KeyPointsControlPanelComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
