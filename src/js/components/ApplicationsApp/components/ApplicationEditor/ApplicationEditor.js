
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ApplicationEditor.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { selectorData as applicationSlice } from './../../../../redux/applicationSlice.js';
import { SetCurrentApplicationId } from './components/SetCurrentApplicationId/SetCurrentApplicationId.js';
import { GetCurrentApplicationDataFromServer } from './components/GetCurrentApplicationDataFromServer/GetCurrentApplicationDataFromServer.js';

import { ApplicationsPageContainer } from './../ApplicationsPageContainer/ApplicationsPageContainer.js';
import { A_SaveButton } from './components/A_SaveButton/A_SaveButton.js';
import { AppEditorComponent } from './components/AppEditorComponent/AppEditorComponent.js';

const ApplicationEditorComponent = ( props ) => {

    let {
        
    } = props;



    return (

         <ApplicationsPageContainer 
            className = 'applicationEditor'
            controlPanelContainer = { <>
                <A_SaveButton />
            </>}
            bodyContainer = { (

                <SetCurrentApplicationId>
                    <GetCurrentApplicationDataFromServer>
                            
                        <AppEditorComponent />

                    </GetCurrentApplicationDataFromServer>
                </SetCurrentApplicationId> 
            ) }
        />




    )

};

export function ApplicationEditor( props ){

    const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationEditorComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
