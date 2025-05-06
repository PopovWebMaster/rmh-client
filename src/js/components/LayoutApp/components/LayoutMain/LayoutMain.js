
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { NavLink } from "react-router";

import './LayoutMain.scss';

import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';

import { GridDayMenu } from './../GridDayMenu/GridDayMenu.js';

import { LayoutPageContainer } from './../LayoutPageContainer/LayoutPageContainer.js';
import { AddGridEventButton } from './components/AddGridEventButton/AddGridEventButton.js';
import { SaveGridChangesButton } from './components/SaveGridChangesButton/SaveGridChangesButton.js';
import { GridDayEditor } from './components/GridDayEditor/GridDayEditor.js';

const LayoutMainComponent = ( props ) => {

    let {
        gridCurrentDay,
    } = props;
    
    return (

        <LayoutPageContainer 
            className = 'layoutMain'
            controlPanelContainer = {<>
                <GridDayMenu />
                {/* <AddGridEventButton /> */}
                <SaveGridChangesButton />
            </>}
            bodyContainer = { (
                <GridDayEditor />
            ) }
        />
    )

};

export function LayoutMain( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <LayoutMainComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
