
import { IdFaction } from './faction_id.reducer'
import { FormNewChampion } from './newChampionreducer'
import { combineReducers } from 'redux'


const ReducerIndex = combineReducers({
    FormNewChampion,
    IdFaction
})

export default ReducerIndex;

