import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
	name: 'main',
	initialState: {
		loading: false,
		showLoginPopup: false,
		showRegisterPopup: false,
		showViewStoryPopup: false,
		showAddStoryPopup: false,
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
	},
});

export const {
	SET_MAIN_LOADING,
	SET_LOGIN_POPUP,
	SET_VIEW_STORY_POPUP,
	SET_REGISTER_POPUP,
	SET_ADD_STORY_POPUP,
} = mainSlice.actions;
export default mainSlice.reducer;
