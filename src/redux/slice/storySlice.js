import { createSlice } from '@reduxjs/toolkit';

export const storySlice = createSlice({
	name: 'story',
	initialState: {
		activeStory: {},
	},
	reducers: {
		SET_ACTIVE_STORY: (state, action) => {
			state.activeStory = action.payload;
		},
	},
});

export const {SET_ACTIVE_STORY} = storySlice.actions;
export default storySlice.reducer;
