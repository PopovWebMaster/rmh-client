
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './LayoutMenu.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';
import { MenuItem } from './MenuItem/MenuItem.js';

const LayoutMenuComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;
    
    return (
        <div className = 'layoutMenu'>
            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'fa-navicon' }
                    title = { 'Главная' }
                />
                
            </NavLink>

            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.KEY_POINTS }` }
                className={ ({ isActive }) => isActive ? "active" : "" }
            >
                <MenuItem 
                    icon = { 'icon-ellipsis-vert' }
                    title = { 'Кл. точки' }
                />

            </NavLink>

            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.EVENTS }` }
                className={ ({ isActive }) => isActive ? "active" : "" }
            >
                <MenuItem 
                    icon = { 'icon-clipboard-1' }
                    title = { 'События' }
                />

            </NavLink>

            <NavLink
                to = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.BLOCKS }` }
                className={ ({ isActive }) => isActive ? "active" : "" }
            >
                <MenuItem 
                    icon = { 'fa-cubes' }
                    title = { 'Блоки' }
                />

            </NavLink>

        </div>
    )

};

export function LayoutMenu( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutMenuComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
