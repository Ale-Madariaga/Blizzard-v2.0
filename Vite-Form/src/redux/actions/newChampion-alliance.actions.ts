import { SUCCES_NEW_CHAMPION_ALLIANCE,DEFAULT_NEW_CHAMPION_ALLIANCE,ERROR_NEW_CHAMPION_ALLIANCE,START_NEW_CHAMPION_ALLIANCE } from '../types/newChampion-alliance'

export const START_NEW_ALLIANCE_CHAMPION = (payload: any) => { 
return { type: START_NEW_CHAMPION_ALLIANCE, payload }
}

export const SUCCESS_NEW_ALLIANCE_CHAMPION = (error: any) => {
    return { type: ERROR_NEW_CHAMPION_ALLIANCE, error }
}

export const ERROR_NEW_ALLIANCE_CHAMPION = (payload: any) => {
    return { type: SUCCES_NEW_CHAMPION_ALLIANCE, payload }
}
export const DEFAULT_NEW_ALLIANCE_CHAMPION = (data: any) => {
    return { type: DEFAULT_NEW_CHAMPION_ALLIANCE, data }
}