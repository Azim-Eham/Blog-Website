import {configureStore} from '@reduxjs/toolkit'
import blogReducer from './slices/blogSlice'
import newsletterReducer from './slices/newsletterSlice'

export const store = configureStore({
    reducer : {
        blog : blogReducer,
        newsletter : newsletterReducer,
    }
});

