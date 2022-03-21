import { DEFAULT_NEW_CHAMPION_ALLIANCE, ERROR_NEW_CHAMPION_ALLIANCE, START_NEW_CHAMPION_ALLIANCE, SUCCES_NEW_CHAMPION_ALLIANCE } from '../types/newChampion-alliance'
import { START_NEW_FORM, SUCCES_NEW_FORM } from '../types/newForm'
const initialState = {
    alliance: [],
    horde: []
}
export const FormNewChampion = (state = initialState, action: any) => {
    switch (action.type) {
        case START_NEW_CHAMPION_ALLIANCE:
            return {
                alliance: [...state.alliance, action.payload],
                horde: [...state.horde]
            }
        case SUCCES_NEW_CHAMPION_ALLIANCE:
            return {
                alliance: action.payload,
                horde: [...state.horde]
            }
        case START_NEW_FORM:
            return {
                horde: [...state.horde, action.payload],
                alliance: [...state.alliance]
            }
        case SUCCES_NEW_FORM:
            return {
                horde: action.payload,
            }
        default:
            return state
    }
}