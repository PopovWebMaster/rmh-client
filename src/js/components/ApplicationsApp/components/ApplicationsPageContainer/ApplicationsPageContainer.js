
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ApplicationsPageContainer.scss';

import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';

const ApplicationsPageContainerComponent = ( props ) => {

    let {
        className = '',
        controlPanelContainer,
        bodyContainer,

    } = props;
    
    return (
        <div className = { `applicationsPageContainer ${className}` }>

            <div className = 'APC_ControlPanel'>
                { controlPanelContainer }
            </div>

            <div className = 'APC_scroll_container'>
                <ScrollContainer>
                    { bodyContainer }
                </ScrollContainer>
            </div>
        </div>
    )

};

export function ApplicationsPageContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();
    return (
        <ApplicationsPageContainerComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
