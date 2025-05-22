
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './ApplicationsMenu.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';
import { MenuItem } from './MenuItem/MenuItem.js';

const ApplicationsMenuComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;
    
    return (
        <div className = 'applicationsMenu'>
            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'fa-reorder' }
                    title = { 'Список' }
                />
                
            </NavLink>

            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}/${ ROUTE.APPLICATIONS.CREATE }` }
                className={ ({ isActive }) => isActive ? "active" : "" }
            >
                <MenuItem 
                    icon = { 'icon-feather' }
                    title = { 'Создать' }
                />

            </NavLink>

        </div>
    )

};

export function ApplicationsMenu( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationsMenuComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
