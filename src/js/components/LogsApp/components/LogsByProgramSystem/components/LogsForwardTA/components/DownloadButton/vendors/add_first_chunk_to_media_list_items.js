


export const add_first_chunk_to_media_list_items = ( cut_segments, items ) => {

    let chank_index_list = [];

    for( let key in cut_segments ){
        let first_chunk_index = null;

        let arr = [ ...cut_segments[ key ] ];

        for( let i = 0; i < arr.length; i++ ){
            let {
                index,
                mark_in,
                segment_duration,
            } = arr[ i ];

            let MARK_OUT = mark_in.ms + segment_duration.expected.ms;
            let MARK_OUT_NEXT = null;
            if( arr[ i + 1 ] ){
                MARK_OUT_NEXT = arr[ i + 1 ].mark_in.ms + arr[ i + 1 ].segment_duration.expected.ms;
            };

            if( MARK_OUT_NEXT === null ){

                if( first_chunk_index === null ){
                chank_index_list.push({
                    first_chunk: index,
                    chunk: index,
                    key,
                });
                }else{
                    chank_index_list.push({
                        first_chunk: first_chunk_index,
                        chunk: index,
                        key,
                    });
                };

            }else{

                if( MARK_OUT < MARK_OUT_NEXT ){
                    if( first_chunk_index === null ){
                        first_chunk_index = index;

                        chank_index_list.push({
                            first_chunk: first_chunk_index,
                            chunk: index,
                            key,
                        });

                    }else{
                        chank_index_list.push({
                            first_chunk: first_chunk_index,
                            chunk: index,
                            key,
                        });
                    };

                }else{

                    chank_index_list.push({
                        first_chunk: first_chunk_index,
                        chunk: index,
                        key,
                    });

                    first_chunk_index = null;

                };

            };

        }

    }

    let chunks = {};

    for( let i = 0; i < chank_index_list.length; i++ ){
        let { first_chunk, chunk } = { ...chank_index_list[ i ] }
        chunks[ chunk ] = { first_chunk };
    };

    let result = [];

    for( let index = 0; index < items.length; index++ ){
        let first_chunk = null;
        if( chunks[ index ] ){
            first_chunk = chunks[ index ].first_chunk;
        }else{
            first_chunk = index;
        };

        result.push( { ...items[ index ], first_chunk });

    };

    return result;
    
};