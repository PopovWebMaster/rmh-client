
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './PageNoCreatedInfo.scss';

import { InfoBlock } from './../../../../../InfoBlock/InfoBlock.js';

const PageNoCreatedInfoComponent = ( props ) => {

    let {
        companyProgramSystem,
    } = props;

    return (
        <InfoBlock margin = {'2em 0'}>
            <p>Возможность использовать логи от <span style = {{ fontWeight: 'bold'}}>"{ companyProgramSystem }"</span> ещё находится на стадии разработки.</p>
            <p>Приносим свои извинения.</p>
        </InfoBlock>
    )

};

export function PageNoCreatedInfo( props ){
    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <PageNoCreatedInfoComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
