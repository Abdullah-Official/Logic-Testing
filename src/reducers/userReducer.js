import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "Ramesh",
    age: 20,
    status: "coder"
  }
  
// First, create the thunk
export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const res2 = await res.json()
      return  res2[0].name
    }
  )

const userReducer = createSlice({
    name:"person",
    initialState,
    reducers: {
        changeName(state,action){
            state.name = action.payload
        },
        changeAge(state,action){
            state.age = action.payload
        },
        changeStatus(state,action){
            state.status = action.payload
        },
    },
    extraReducers: {
        [fetchUserName.fulfilled]: (state,action) => {
            state.name = action.payload
        }
    }
    
})

export const {changeName,changeAge,changeStatus} = userReducer.actions
export default userReducer.reducer