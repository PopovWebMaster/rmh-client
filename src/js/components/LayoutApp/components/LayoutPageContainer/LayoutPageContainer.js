import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutPageContainer.scss';

import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';

const LayoutPageContainerComponent = ( props ) => {

    let {
        className = '',
        controlPanelContainer,
        bodyContainer,

    } = props;
    
    return (
        <div className = { `layoutPageContainer ${className}` }>

            <div className = 'LPC_ControlPanel'>
                { controlPanelContainer }
            </div>

            <div className = 'LPC_scroll_container'>
                <ScrollContainer>
                    { bodyContainer }
                </ScrollContainer>
            </div>
        </div>
    )

};

export function LayoutPageContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();
    return (
        <LayoutPageContainerComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
