// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);