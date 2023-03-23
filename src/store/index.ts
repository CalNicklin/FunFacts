import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook,
  useSelector as useGenericSelector,
  useDispatch as useGenericDispatch
} from "react-redux";
import { Dispatch } from 'redux';
import FactsReducer from "./modules/Facts";

const rootReducer = combineReducers({
  facts: FactsReducer,
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;
export const useDispatch: () => Dispatch<RootAction> = useGenericDispatch;

const store = configureStore({ reducer: rootReducer });

export default store;