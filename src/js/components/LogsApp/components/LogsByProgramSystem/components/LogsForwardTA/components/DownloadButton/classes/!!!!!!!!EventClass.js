
import { DateClass } from './../../../../../../../../../classes/DateClass.js';
import { TimeClass } from './../../../../../../../../../classes/TimeClass.js';
import { FileClass } from './../../../../../../../../../classes/FileClass.js';

export class EventClass{

    constructor( item ){

        let {
            attributes,
            elements,

        } = item;

        let { 
            date,
            time,
            file,
            duration,
            realDuration,
            markIn,

        } = attributes;

        this.Date =                     new DateClass( date );
        this.StartTime =                new TimeClass( time );
        this.FileDuration =             new TimeClass( elements[0].attributes.file_duration );
        this.SegmentExpectedDuration =  new TimeClass( duration );
        this.SegmentRealDuration =      new TimeClass( realDuration );
        this.MarkIn =                   new TimeClass( markIn );
        this.File =                     new FileClass( file );


    }



}