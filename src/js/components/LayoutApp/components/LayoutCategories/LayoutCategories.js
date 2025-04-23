// LayoutCategories


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutCategories.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

// import { KeyPointsControlPanel } from './components/KeyPointsControlPanel/KeyPointsControlPanel.js';
import { SaveCChangesButton } from './components/SaveCChangesButton/SaveCChangesButton.js';
import { AddCategoryButton } from './components/AddCategoryButton/AddCategoryButton.js'

const LayoutCategoriesComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'layoutCategories'>
            <div className = 'LC_CategoriesControlPanel'>
                <AddCategoryButton />
                <SaveCChangesButton />
            </div>



        </div>
    )

};

export function LayoutCategories( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutCategoriesComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
