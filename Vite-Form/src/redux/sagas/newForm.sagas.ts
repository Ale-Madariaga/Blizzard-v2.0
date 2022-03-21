import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Succesnewchampion } from '../actions/newChampion-horde.actions';
import { SUCCES_NEW_FORM, ERROR_NEW_FORM,START_NEW_FORM} from '../types/newForm'

function* newForm(action: any) {
   try {
      yield put(Succesnewchampion( action.payload))
      yield put({ type: SUCCES_NEW_FORM, payload: action.payload });
   } catch (e: any) {
      yield put({ type: ERROR_NEW_FORM, message: e.message });
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* WatchNewForm() {
   yield takeEvery(START_NEW_FORM, newForm);
}

export default WatchNewForm;