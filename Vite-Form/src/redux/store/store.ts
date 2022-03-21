import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import ReducerIndex from '../reducer/index'
import WatchFormSagas from '../sagas/newForm.sagas';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: { ReducerIndex },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    //     thunk: false
    //   }).concat(sagaMiddleware)
})
// sagaMiddleware.run(WatchFormSagas)


// export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

