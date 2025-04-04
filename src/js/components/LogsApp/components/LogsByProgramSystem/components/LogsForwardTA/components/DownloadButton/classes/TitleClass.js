
import { get_time_with_ms } from './../vendors/get_time_with_ms.js';

export class TitleClass{
    constructor(){

        this.list = [];
        this.items = {};

        this.AddItem = this.AddItem.bind(this);
        this.CreateList = this.CreateList.bind(this);

    }
    
    AddItem( item ){

        let {
            attributes,
        } = item;

        let {
            date,
            error,
            name,
            duration ,
            realDuration,
            task,
            time,

        } = attributes;
        
        let errortext = '';

        if( error !== '0' ){
            errortext = attributes.errortext;
        };

        let obj = {
            date,
            error,
            errortext,
            name,
            duration: {
                real:       get_time_with_ms( realDuration ),
                expectad:   get_time_with_ms( duration === undefined? '00:00:00.00': duration ),
            },
            task,
            time,
        };

        if( this.items[ name ] ){
            this.items[ name ].push( { ...obj } );
        }else{
            this.items[ name ] = [];
            this.items[ name ].push( { ...obj } );
        };

    }

    CreateList(){
        // return this.items;
    }

}