//Hook para seleccionar algo y mandarlo por objeto

import { useState } from "react";


export const useSelect = ( type, thing1, thing2 ) => {


    const [select, setSelect] = useState( type );
    const [first, setFirst] = useState( thing1 );


    const onPick = () => {
        select ? setFirst(thing1) : setFirst(thing2);
        setSelect(!select);
    };

    return {
        first,
        onPick,
    }
}