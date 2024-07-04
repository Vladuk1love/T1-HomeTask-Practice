import { configureStore } from "@reduxjs/toolkit";
import { candidateWithRolesApi, myOwnBackendApi } from "./tableApi";


export const store = configureStore({
  reducer: {
    [candidateWithRolesApi.reducerPath]:candidateWithRolesApi.reducer,
    [myOwnBackendApi.reducerPath]:myOwnBackendApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      [
        candidateWithRolesApi.middleware,
        myOwnBackendApi.middleware
      ]
    )
})


// export type RootState = ReturnType<typeof store.getState>