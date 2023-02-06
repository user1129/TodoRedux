import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'slice',
    initialState : {
        todo:[]
    },
    reducers:{
        AddTodo:(state,action) => {
            state.todo = [...state.todo, {
                id:action.payload + (Math.random()*1000),
                text:action.payload,
                completed:false,
            }]
        },  
        clearTodo:(state,action) => {
            state.todo = state.todo.filter((el) => el.id !== action.payload)
        },
        toggleCompleted:(state,action) => {
            state.todo = state.todo.map((el) => {
                if(el.id !== action.payload) return el;
                else return {
                    ...el,
                    completed:!el.completed,
                }
            })
        }

    }
})

export const {AddTodo, clearTodo,toggleCompleted} = Slice.actions;
export default Slice.reducer