
import React from "react";
import { useSelector/*, useDispatch*/ } from 'react-redux';
import { selectorData as spinnerSlice } from './../../../../redux/spinnerSlice.js';

import './Spinner.scss';

const SpinnerComponent = ( props ) => {

    let {
        isActive
    } = props;

    return (
        <>{ isActive? (

            <div className = 'spinner'>
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>

                </div>

                <div className="loading">
                    <div className="loading-text">
                        <span className="loading-text-words">L</span>
                        <span className="loading-text-words">O</span>
                        <span className="loading-text-words">A</span>
                        <span className="loading-text-words">D</span>
                        <span className="loading-text-words">I</span>
                        <span className="loading-text-words">N</span>
                        <span className="loading-text-words">G</span>
                    </div>
                </div>


            </div>

        ): '' }</>
        
    )

};

export function Spinner( props ){

    const spinner = useSelector( spinnerSlice );
    // const dispatch = useDispatch();

    return (
        <SpinnerComponent
            { ...props }
            isActive = { spinner.isActive }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
