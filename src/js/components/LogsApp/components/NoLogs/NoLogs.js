
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './NoLogs.scss';

import { InfoBlock } from './../../../InfoBlock/InfoBlock.js';

const NoLogsComponent = ( props ) => {

    let {
        
    } = props;
    
    return (
        <div className = 'noLogs'>

            <InfoBlock>
                <p>
                    В учётной записи вашей компании нет данных о программно-аппаратном комплексе, который вы используете для осуществления телевещания. 
                </p>
                <p>
                Если вас интересует возможность сохранения данных из ваших лог-файлов, пожалуйста, обратитесь с этим вопросом к администратору сайта.
                </p>
            </InfoBlock>

            
        </div>
    )

};

export function NoLogs( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <NoLogsComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
