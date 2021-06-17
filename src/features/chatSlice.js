import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "user",
  initialState: {
    chatid: null,
    chatname: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatid = action.payload.chatid;
      state.chatname = action.payload.chatname;
    },
  },
});

export const { setChat } = chatSlice.actions;
export const selectChatName = (state) => state.chat.chatname;
export const selectChatId = (state) => state.chat.chatid;
export default chatSlice.reducer;
