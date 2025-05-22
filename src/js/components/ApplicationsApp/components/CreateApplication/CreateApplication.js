
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CreateApplication.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ApplicationsPageContainer } from './../ApplicationsPageContainer/ApplicationsPageContainer.js';

const CreateApplicationComponent = ( props ) => {

    let {
        
    } = props;

    return (
        <ApplicationsPageContainer 
            className = 'createApplication'
            controlPanelContainer = { <></>}
            bodyContainer = { <>createApplication</> }
        />

    )

};

export function CreateApplication( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CreateApplicationComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
