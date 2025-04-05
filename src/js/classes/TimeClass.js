
import { convert_duration_to_ms } from './../helpers/convert_duration_to_ms.js';

export class TimeClass {
    constructor( time ){

        this.time = time;
        this.ms = convert_duration_to_ms( time );

        this.GetDataAsObject = this.GetDataAsObject.bind(this);

    }

    GetDataAsObject(){
        return {
            time:   this.time,
            ms:     this.ms,
        };

    }

    


}