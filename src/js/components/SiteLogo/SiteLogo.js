
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../redux/companySlice.js';

import './SiteLogo.scss';


const SiteLogoComponent = ( props ) => {

    let {
        currentCompanyName
    } = props;
    


    return (
        <div className = 'siteLogo'>
            <span>{ currentCompanyName }</span>
        </div>
    )

};

export function SiteLogo( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <SiteLogoComponent
            { ...props }
            currentCompanyName = { company.currentCompanyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
