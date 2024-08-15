
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  reducerPath: "b",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api" }),
  endpoints:(builder)=>({
    getTodos:builder.query({
        query:()=>({
            url:"/products",
            method:"GET"
        })
    })
  })
  })

 

export const {useGetTodosQuery}=baseApi