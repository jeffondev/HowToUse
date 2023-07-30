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

export let { setUserUses } = uses.actions;
export default configureStore({
  reducer: {
    uses: uses.reducer,
  }
}) 