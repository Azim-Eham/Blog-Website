import {createSlice} from "@reduxjs/toolkit";
import blogData from '../../data/blogData'

const initialState = {
    posts : blogData,
    favorites : [],
    currentPost : null, 
    isLoading : false,
    error: null
}

const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {
        loadFavorites : (state, action) => {
            state.favorites = action.payload;
        },
        addToFavorites : (state, action) => {
            if (!state.favorites.includes(action.payload)){
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorite : (state, action) => {
            state.favorites = state.favorites.filter(id => id != action.payload);
        },
        setCurrentPost : (state, action) => {
            state.isLoading = true;
            state.error = null;
            try {
                const post = state.posts.find(post => post.id === action.payload);
                if (post){
                    state.currentPost = post;
                }
                else{
                    state.error = 'Post not found';
                }
            } catch(error){
                state.error = 'Faild to load post';
            }
            state.isLoading = false;
        },
        clearCurrentPost : (state) => {
            state.currentPost = null;
        }
    }
})

export const {
    loadFavorites,
    addToFavorites,
    removeFromFavorite,
    setCurrentPost,
    clearCurrentPost,
} = blogSlice.actions;

export default blogSlice.reducer;