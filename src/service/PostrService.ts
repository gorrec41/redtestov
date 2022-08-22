import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const postAPI=createApi({
    reducerPath: 'postAPI',
    baseQuery:fetchBaseQuery({ baseUrl:'https://jsonplaceholder.typicode.com/users',}),
    endpoints:(build)=>({
        fetchAllPost: build.query({
            query: () => ({
                url:'/post'
            })
        })
    })

})