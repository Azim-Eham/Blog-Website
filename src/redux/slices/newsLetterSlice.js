import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    subscribers : [],
    submitting : false,
    success : false, 
    error : null,
}

const newsLetterSlice = createSlice({
    name: 'newsletter',
    initialState,
    reducers: {
        loadSubscribers : (state, action) => {
            state.subscribers = action.payload;
        },
        setSubmitting : (state, action) => {
            state.submitting = action.payload;
            if (action.payload){
                state.success = false;
                state.error = null;
            }
        },
        setSuccess : (state, action) => {
            state.success = action.payload;
            if (action.payload){
                state.submitting = false;
                state.error = null;
            }
        },
        addSubscriber : (state, action) => {
            const emailExists = state.subscribers.find(subscriber => subscriber.email === action.payload.email);
            if (!emailExists){
                state.subscribers.push(action.payload);
            }
            state.submitting = false;
            state.success = true;
        }
    }
})

export const {
    loadSubscribers,
    setSubmitting,
    setSuccess,
    addSubscriber,
} = newsletterSlice.actions;

export default newsLetterSlice.reducer;