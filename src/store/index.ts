import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
