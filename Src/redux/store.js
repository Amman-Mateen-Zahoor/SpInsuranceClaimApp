// import { configureStore } from '@reduxjs/toolkit'
// import languageReducer from './languageSlice'
// export const store = configureStore({
//     reducer: {
//         language:languageReducer , // Add the reducer here
//       },
// })
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import languageReducer from './languageSlice'
import AsyncStorage from  "@react-native-async-storage/async-storage"
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig={
  key: "language",
  storage:AsyncStorage 
}
const rootReducer =combineReducers({
 language:languageReducer
})
const persistedReducer =persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore actions from redux-persist
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });
     
