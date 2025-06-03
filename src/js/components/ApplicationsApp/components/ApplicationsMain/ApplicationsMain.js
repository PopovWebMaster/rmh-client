
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ApplicationsMain.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ApplicationsPageContainer } from './../ApplicationsPageContainer/ApplicationsPageContainer.js';
import { AddAppButton } from './components/AddAppButton/AddAppButton.js';
import { ApplicationList } from './components/ApplicationList/ApplicationList.js';

const ApplicationsMainComponent = ( props ) => {

    let {
        
    } = props;


    
    return (

        <ApplicationsPageContainer 
            className = 'applicationsMain'
            controlPanelContainer = { <>
                <AddAppButton />
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
