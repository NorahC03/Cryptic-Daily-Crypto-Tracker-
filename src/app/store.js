import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../Services/ApiService'
import { cryptoNews } from '../Services/NewsApiService'
const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNews.reducerPath]: cryptoNews.reducer
    }
})

export default store;