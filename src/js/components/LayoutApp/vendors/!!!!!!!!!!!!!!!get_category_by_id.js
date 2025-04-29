
import store from './../../../redux/store.js';

export const get_category_by_id = ( category_id ) => {

    let { layout } = store.getState();
    let { categoryList } = layout;

    for( let i = 0; i < categoryList.length; i++ ){

        console.dir( categoryList[i] );

    };
    
};