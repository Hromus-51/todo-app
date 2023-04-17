import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE, PAUSE, PERSIST,
    PURGE, REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//=============================================
import themeReducer from './themeSlice/slice';
import todoReducer from './todoSlice/slice';

const persistConfig = {
    key: 'todo',
    storage,
}

const rootReducer = combineReducers({
    themeReducer,
    todoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
