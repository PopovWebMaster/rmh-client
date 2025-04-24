
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutEvents.scss';

// import { SaveCChangesButton } from './components/SaveCChangesButton/SaveCChangesButton.js';
// import { AddCategoryButton } from './components/AddCategoryButton/AddCategoryButton.js';
import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';
// import { CategoryList } from './components/CategoryList/CategoryList.js';

import { AddEventButton } from './components/AddEventButton/AddEventButton.js';
import { SaveEventChangesButton } from './components/SaveEventChangesButton/SaveEventChangesButton.js';
import { EventList } from './components/EventList/EventList.js';

const LayoutEventsComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'layoutEvents'>
            <div className = 'LE_ControlPanel'>
                <AddEventButton />
                <SaveEventChangesButton />
            </div>

            <div className = 'LE_scroll_container'>
                <ScrollContainer>
                    <EventList />


                </ScrollContainer>
            </div>
        </div>
    )

};

export function LayoutEvents( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutEventsComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
