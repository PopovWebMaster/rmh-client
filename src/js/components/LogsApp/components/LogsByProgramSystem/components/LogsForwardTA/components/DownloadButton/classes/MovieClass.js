
import { get_time_with_ms } from './../vendors/get_time_with_ms.js';
import { get_markIn_with_ms } from './../vendors/get_markIn_with_ms.js';
import { add_first_chunk_to_media_list_items } from './../vendors/add_first_chunk_to_media_list_items.js';

export class MovieClass{
    constructor(){

        this.list = {};
        this.cut_segments = {};
        this.items = [];

        this.AddItem = this.AddItem.bind(this);
        this.CreateList = this.CreateList.bind(this);


        

    }
    
    AddItem( item ){
        let {
            attributes,
            elements,
        } = item;

        let date = attributes.date;
        let time = attributes.time;

        let filePuth = attributes.file;
        let arr = filePuth.split( '\\' );
        let fileName = arr[ arr.length - 1 ];

        let file = {
            puth: filePuth,
            name: fileName,
        };

        let segment_duration = {
            expected:       get_time_with_ms( attributes.duration ),
            real:           get_time_with_ms( attributes.realDuration )
        };
        let file_duration = get_time_with_ms( elements[0].attributes.file_duration );
        let mark_in =       get_markIn_with_ms( attributes.markIn );

        if(  attributes.markIn !== undefined  ){
            if( !this.cut_segments[ file.name ] ){
                this.cut_segments[ file.name ] = [];
            };
            this.cut_segments[ file.name ].push( {
                file_duration,
                time,
                mark_in,
                segment_duration,
                index: this.items.length,
            } );
        };

        this.items.push( {
            date,
            time,
            file,
            segment_duration,
            file_duration,
            mark_in,
        } );



    }

    CreateList(){

        let items_with_first_chank = add_first_chunk_to_media_list_items( this.cut_segments, this.items );

        for( let index = 0; index < items_with_first_chank.length; index++ ){
            this.list[ index ] = { ...items_with_first_chank[ index ] };
        };

    }

}