import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICandidate, IGetRoles, ISetStatus } from "../types";

const T1_BASE_URL = 'http://193.19.100.32:7000/'
const MY_BASE_URL = 'http://localhost:9000'

interface IMyResponse{
  message: string
}

export const candidateWithRolesApi = createApi({
  reducerPath: 'api/candidateWithRoles',
  baseQuery: fetchBaseQuery({
    baseUrl: T1_BASE_URL
  }),
  endpoints: (build) => ({
    getRoles: build.query<IGetRoles, any>({
      query: () => 'api/get-roles'
    }),
    singUp: build.mutation<string, ICandidate>({
      query: (data) => ({
        url: 'api/sign-up',
        method: 'POST',
        body: data
      }),
    }),
    getCode: build.mutation<string, string>({
      query: (email) => `api/get-code?email=${email}`
    })
  })
})

export const myOwnBackendApi = createApi({
  reducerPath: 'api/myOwnBackendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: MY_BASE_URL
  }),
  endpoints: (build) => ({
    setStatus: build.mutation<IMyResponse, ISetStatus>({
      query: (data) => ({
        url: '/set-status',
        method: 'POST',
        body: data
      }),
    })
  })
})


export const {
  useGetRolesQuery,
  useGetCodeMutation,
  useSingUpMutation
} = candidateWithRolesApi

export const {
  useSetStatusMutation
} = myOwnBackendApi