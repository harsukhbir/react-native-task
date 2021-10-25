import React, { useReducer } from "react";

import FullInfoContext from "./FullInfoContext";
import FullInfoReducer from "./FullInfoReducer";


import { SET_FULL_INFO_ITEM } from "./types"

const FullInfoState = (props) => {

    const initialState = {
        item: {},
        showFullInfo: false
    }

    const [state, dispatch] = useReducer(FullInfoReducer, initialState)

    const setFullInfoItem = (item) => {
        dispatch({ type: SET_FULL_INFO_ITEM, payload: item })
    }


    return <FullInfoContext.Provider value={{
        item: state.item,
        showFullInfo: state.showFullInfo,
        setFullInfoItem
    }}>{props.children}</FullInfoContext.Provider>

}

export default FullInfoState;