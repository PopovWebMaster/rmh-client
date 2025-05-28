
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_ManagerNotes.scss';

import { selectorData as applicationSlice, setCurrentAppNotes, setCurrentAppIsChanged } from './../../../../../../../../redux/applicationSlice.js';


const A_ManagerNotesComponent = ( props ) => {

    let {
        currentAppNotes,
        setCurrentAppIsChanged,
        setCurrentAppNotes,
    } = props;

    let [ notesValue, setNotesValue ] = useState( currentAppNotes );
    let inputRef = useRef();

    useEffect( () => {
        setNotesValue( currentAppNotes );
    }, [ currentAppNotes ] );

    const change = ( e ) => {
        let val = e.target.value;
        setNotesValue( val );
    }

    const accept = () => {
        if( Number( currentAppNotes ) !== Number( notesValue ) ){
            setCurrentAppNotes( notesValue );
            setCurrentAppIsChanged( true );
        };
    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            accept();
            inputRef.current.blur();
        };
    };

    const blur = () => {
        accept();
    }

   


    return (
        <div className = 'A_ManagerNotes'>
            <h4>Заметки для менеджера:</h4>
            <input
                type = 'text'
                ref =       { inputRef }
                maxLength = { 255 }
                value =     { notesValue }
                onChange = { change }
                onKeyDown = { enter }
                onBlur =    { blur }
            
            />

            

        </div>
    )

};

export function A_ManagerNotes( props ){

    const application = useSelector( applicationSlice );
    // const layout = useSelector( layoutSlice );
    
    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <A_ManagerNotesComponent
            { ...props }

            currentAppNotes = { application.currentAppNotes }

            setCurrentAppNotes = { ( val ) => { dispatch( setCurrentAppNotes( val ) ) } }
            setCurrentAppIsChanged = { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


        />
    );


}
