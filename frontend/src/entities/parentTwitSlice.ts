import { createSlice } from '@reduxjs/toolkit';

const parentTwitSlice = createSlice({
  name: 'parentTwit',
  initialState: {
    parentTweet: [],
  },
  reducers: {
    setParentTwit(state, action) {
      state.parentTweet.push(action.payload);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    delParentTwit(state, action) {
      state.parentTweet.pop();
    },
  },
});

export const { setParentTwit, delParentTwit } = parentTwitSlice.actions;

export default parentTwitSlice.reducer;
