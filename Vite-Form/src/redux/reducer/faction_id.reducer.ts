import { SUCCESS_TYPE_ID, ERROR_TYPE_ID, INSERT_TYPE_ID, DEFAULT_TYPE_ID } from '../types/general'
const initialState = {
    faction: {
        id: null
    },
    loading: false
}
export const IdFaction = (state = initialState, action: any) => {
    switch (action.type) {
        case INSERT_TYPE_ID:
            return {
                data: action.payload
            }
        case SUCCESS_TYPE_ID:
            return {
                data: action.payload,
                loading: false
            }
        case ERROR_TYPE_ID:
            return {
                data: action.payload,
                loading: false
            }
        case DEFAULT_TYPE_ID:
            return {
                data: initialState,
                loading: false
            }
        default:
            return state
    }
}