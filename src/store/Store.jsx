import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import eventReducer from "./reducers/eventSlice";

const persistConfig = {
  key: "root",
  storage, // Default to localStorage
  whitelist: ["events"], // Persist only the events state
};

const persistedReducer = persistReducer(persistConfig, eventReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Disable serializable check for non-serializable actions
        ignoredActions: ["persist/PERSIST"], // Persist action is typically non-serializable
      },
    }),
});

const persistor = persistStore(Store);

export { Store, persistor };
