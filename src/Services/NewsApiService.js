import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const cryptoNewsApi = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '749feeef0cmsh66154df64c72ee8p14f587jsn26cc7a6109ed',

}

const createRequest = (url) => ({ url, headers: cryptoNewsApi });

export const cryptoNews = createApi({
    reducerPath: 'cryptoNews',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}'&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {
    useGetCryptoNewsQuery
} = cryptoNews;