import { DEFAULT_TYPE_ID,SUCCESS_TYPE_ID,INSERT_TYPE_ID,ERROR_TYPE_ID } from '../types/general'

export const START_INSERT_ID = (payload: any) => { 
return { type: INSERT_TYPE_ID, payload }
}

export const ERROR_INSERT_ID = (error: any) => {
    return { type: ERROR_TYPE_ID, error }
}

export const SUCCESS_INSERT_ID = (payload: any) => {
    return { type: SUCCESS_TYPE_ID, payload }
}
export const DEFAULT_ID = (data: any) => {
    return { type: DEFAULT_TYPE_ID, data }
}