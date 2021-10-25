import { SET_FULL_INFO_ITEM } from "./types"

export default (state, action) => {
    switch (action.type) {
        case SET_FULL_INFO_ITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}