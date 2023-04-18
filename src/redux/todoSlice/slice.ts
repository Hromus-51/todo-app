import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface TodoState {
    inputValue: string,
    sort: string,
    todoList: {
        id: string,
        name: string,
        status: string
    }[],
}

interface SortAction {
    newList: TodoState['todoList'];
    sort: TodoState['sort'];
}

const initialState: TodoState = {
    inputValue: '',
    sort: 'all',
    todoList: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setInputValue(state, action: PayloadAction<string>) {
            state.inputValue = action.payload;
        },

        addItem(state, action: PayloadAction<{ id: string, name: string, status: string }>) {
            state.todoList = [...state.todoList, action.payload];
        },

        deleteItem(state, action: PayloadAction<string>) {
            state.todoList = state.todoList.filter(obj => obj.id !== action.payload);
        },

        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },

        clearCompleted(state) {
            state.todoList = state.todoList.filter(obj => obj.status !== 'completed');
        },

        сheckСompleted(state, action: PayloadAction<string>) {
            const found = state.todoList.find(obj => obj.id === action.payload);
            if (found) {
                found.status = found.status === 'active' ? 'completed' : 'active';
            }
        },

        setTodoList(state, action: PayloadAction<TodoState["todoList"]>) {
            state.todoList = action.payload;
        },

        setNewList(state, action: PayloadAction<SortAction>) {
            const inverseSort = state.todoList.filter(obj => obj.status !== action.payload.sort)
            state.todoList = [...action.payload.newList, ...inverseSort];
        },
    }
})

export const selectTodoList = (state: RootState) => state.todoReducer.todoList;
export const selectInputValue = (state: RootState) => state.todoReducer.inputValue;
export const selectSortItem = (state: RootState) => state.todoReducer.sort;

export const {
    setInputValue,
    addItem,
    deleteItem,
    setSort,
    clearCompleted,
    сheckСompleted,
    setTodoList,
    setNewList
} = todoSlice.actions;
export default todoSlice.reducer;
