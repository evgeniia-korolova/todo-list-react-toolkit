import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: [
			{ id: 1, text: 'Complete daily workout', completed: true },
			{ id: 2, text: 'Read two chapters of a book', completed: false },
			{
				id: 3,
				text: 'Update professional LinkedIn profile',
				completed: true,
			},
			{
				id: 4,
				text: 'Plan healthy meals for the week',
				completed: false,
			},
		],
        taskText: '',
        filter: 'all'
    },
    reducers: {
        ChangeTaskText: (state, action) => {
            state.taskText = action.payload;
        },
        AddTask: (state) => {
            let task = {
                id: Date.now(),
                text: state.taskText,
                completed: false
            };
            state.tasks.push(task);
            state.taskText = ''
        },
        DeleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        ChangeTaskState: (state, action) => {
            state.tasks = state.tasks.map((task) =>
				task.id === action.payload
					? { ...task, completed: !task.completed }
					: task
			);
        },
        DeleteAll: (state) => {
            state.tasks = []
        },
        SetFilter: (state, action) => {
            state.filter = action.payload
        }
    }
});

export const { ChangeTaskText, AddTask, DeleteTask, ChangeTaskState, DeleteAll, SetFilter } = tasksSlice.actions;

export default tasksSlice.reducer;