import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' 
import phoneBookReducer from './phoneBook/phoneBookReducer'
import authReducer from './auth/authSlice';

const logger = createLogger({

  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
  duration:true,
});

const persistContactsConfig = {
  key: 'contacts/filter',
  storage,
  whitelist: ['filter']
}
const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: { 
    auth:persistReducer(persistAuthConfig, authReducer),
    contacts: persistReducer(persistContactsConfig, phoneBookReducer),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(logger),
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
})
    
 const persistor = persistStore(store)

export { store, persistor };


