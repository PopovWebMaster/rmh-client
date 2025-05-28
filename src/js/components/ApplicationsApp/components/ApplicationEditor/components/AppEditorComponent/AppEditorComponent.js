
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppEditorComponent.scss';

import { selectorData as applicationSlice } from './../../../../../../redux/applicationSlice.js';

import { A_Header } from './components/A_Header/A_Header.js';
import { A_Category } from './components/A_Category/A_Category.js';
import { A_ManagerNotes } from './components/A_ManagerNotes/A_ManagerNotes.js';

import { APPLICATION_TYPE } from './../../../../../../config/application.js';

import { A_AddSeriesButton } from './components/A_AddSeriesButton/A_AddSeriesButton.js';
import { A_AddReleaseButton } from './components/A_AddReleaseButton/A_AddReleaseButton.js';

import { RemoveApplication } from './components/RemoveApplication/RemoveApplication.js';


const AppEditorComponentComponent = ( props ) => {

    let {
        currentAppType
    } = props;


    
    
    return (
        <div className = 'appEditorComponent'>

            <A_Header />
            <A_Category />
            <A_ManagerNotes />

            { currentAppType === APPLICATION_TYPE.SERIES? (<>
                <A_AddSeriesButton />
            </>): currentAppType === APPLICATION_TYPE.RELEASE? (<>
                <A_AddReleaseButton />
            </>): ''}

            <RemoveApplication />


        </div>
    )

};

export function AppEditorComponent( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <AppEditorComponentComponent
            { ...props }
            currentAppType = { application.currentAppType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
