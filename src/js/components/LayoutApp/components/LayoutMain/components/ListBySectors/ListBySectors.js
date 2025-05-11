

import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ListBySectors.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { OneSector } from './../OneSector/OneSector.js';


const ListBySectorsComponent = ( props ) => {

    let {
        gridOneDayList,
    } = props;

    const create = ( arr ) => {

        let sectors = arr.map( ( item, index ) => {
            return (
                <OneSector 
                    key = { index }
                    sector_start_time =         { item.sector_start_time }
                    sector_completed_duration = { item.sector_completed_duration  }
                    sector_duration =           { item.sector_duration  }
                    sector_list =               { item.sector_list  }

                />
            );
        } );

        return sectors;

    };

    return (
        <React.Fragment>
            { create( gridOneDayList ) }
        </React.Fragment>
    )

};

export function ListBySectors( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ListBySectorsComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
