import { createSlice } from '@reduxjs/toolkit';
const AllCategories = [
	{ key: 'All', name: 'All', img: '/public/assets/categories/all.webp' },
	{ key: 'Food', name: 'Food', img: '/public/assets/categories/food.webp' },
	{
		key: 'Health',
		name: 'Health And Fitness',
		img: '/public/assets/categories/health.webp',
	},
	{ key: 'Travel', name: 'Travel', img: '/public/assets/categories/travel.webp' },
	{ key: 'Movie', name: 'Movies', img: '/public/assets/categories/movies.webp' },
	{
		key: 'Education',
		name: 'Education',
		img: '/public/assets/categories/education.webp',
	},
	{ key: 'Medical', name: 'Medical', img: '/public/assets/categories/medical.webp' },
	{ key: 'World', name: 'World', img: '/public/assets/categories/world.webp' },
	{ key: 'India', name: 'India', img: '/public/assets/categories/india.webp' },
];

export const mainSlice = createSlice({
	name: 'main',
	initialState: {
		loading: false,
		showLoginPopup: false,
		showRegisterPopup: false,
		showViewStoryPopup: false,
		showAddStoryPopup: false,
		selectedCategory: AllCategories[0],
		categories: AllCategories,
	},

	reducers: {
		SET_MAIN_LOADING: (state, action) => {
			state.loading = action.payload;
		},
		SET_LOGIN_POPUP: (state, action) => {
			state.showLoginPopup = action.payload;
		},
		SET_REGISTER_POPUP: (state, action) => {
			state.showRegisterPopup = action.payload;
		},
		SET_VIEW_STORY_POPUP: (state, action) => {
			state.showViewStoryPopup = action.payload;
		},
		SET_ADD_STORY_POPUP: (state, action) => {
			state.showAddStoryPopup = action.payload;
		},
		SET_SELECTED_CATEGORY: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const {
	SET_MAIN_LOADING,
	SET_LOGIN_POPUP,
	SET_VIEW_STORY_POPUP,
	SET_REGISTER_POPUP,
	SET_ADD_STORY_POPUP,
	SET_SELECTED_CATEGORY,
} = mainSlice.actions;
export default mainSlice.reducer;
