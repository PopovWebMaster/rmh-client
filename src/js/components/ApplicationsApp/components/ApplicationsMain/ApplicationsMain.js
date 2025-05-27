
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ApplicationsMain.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ApplicationsPageContainer } from './../ApplicationsPageContainer/ApplicationsPageContainer.js';
import { AddNewApplicationButton } from './../AddNewApplicationButton/AddNewApplicationButton.js';
import { ApplicationList } from './../ApplicationList/ApplicationList.js';

const ApplicationsMainComponent = ( props ) => {

    let {
        
    } = props;


    
    return (

        <ApplicationsPageContainer 
            className = 'applicationsMain'
            controlPanelContainer = { <>
                <AddNewApplicationButton />
            </>}
            bodyContainer = { <ApplicationList /> }
        />

    )

};

export function ApplicationsMain( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationsMainComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
