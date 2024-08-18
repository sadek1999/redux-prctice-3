import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "b",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        return {
          url: "/tasks",
          method: "GET",
        };
      },
    }),
    addTodos: builder.mutation({
      query: (data) => {
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseApi;
