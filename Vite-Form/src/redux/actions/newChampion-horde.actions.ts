import { DEFAULT_NEW_FORM, ERROR_NEW_FORM, START_NEW_FORM, SUCCES_NEW_FORM } from '../types/newForm'

export const Startnewchampion = (payload: any) => { 
return { type: START_NEW_FORM, payload }
}

export const Errornewchampion = (error: any) => {
    return { type: ERROR_NEW_FORM, error }
}

export const Succesnewchampion = (payload: any) => {
    return { type: SUCCES_NEW_FORM, payload }
}
export const Defaultnewchampion = (data: any) => {
    return { type: DEFAULT_NEW_FORM, data }
}