import { configureStore, createSlice } from '@reduxjs/toolkit'

let uses = createSlice({
  name : "uses",
  initialState : [],
  reducers : {
    setUserUses(state, action){
      return action.payload;
    }
  }
})

let comments = createSlice({
  name : "comments",
  initialState : [],
  reducers : {
    setComments(state, action){
      return action.payload;
    }
  }
})

export let { setUserUses } = uses.actions;
export let { setComments } = comments.actions
export default configureStore({
  reducer: {
    uses: uses.reducer,
    comments: comments.reducer,
  }
}) 