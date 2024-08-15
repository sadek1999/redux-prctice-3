import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/fetures/todoSlice'
import { baseApi } from "./Api/api";

export const store=configureStore({
    reducer:{

        [baseApi.reducerPath]:baseApi.reducer,
        todo:todoReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch