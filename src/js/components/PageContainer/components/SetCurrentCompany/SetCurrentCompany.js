
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectorData as companySlice, 
    setCurrentCompanyAlias, 
    setCurrentCompanyName,
    setCurrentCompanyType,
} from './../../../../redux/companySlice.js';

// import './SetCurrentCompany.scss';

const SetCurrentCompanyComponent = ( props ) => {

    let {
        children,
        setCurrentCompanyAlias, 
        setCurrentCompanyName,
        setCurrentCompanyType,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        
        const companyAlias = document.querySelector('meta[name="company-alias"]').content;
        const companyName = document.querySelector('meta[name="company-name"]').content;
        const companyType = document.querySelector('meta[name="company-type"]').content;


        setCurrentCompanyAlias( companyAlias );
        setCurrentCompanyName( companyName );
        setCurrentCompanyType( companyType );

        setIsReady( true );
    }, [] );

    return (
        <>{ isReady? children: '' }</>
    )

};

export function SetCurrentCompany( props ){

    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SetCurrentCompanyComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            setCurrentCompanyName = { ( val ) => { dispatch( setCurrentCompanyName( val ) ) } }
            setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            setCurrentCompanyType = { ( val ) => { dispatch( setCurrentCompanyType( val ) ) } }


            
        />
    );


}
