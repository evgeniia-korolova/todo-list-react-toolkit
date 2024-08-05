
import { configureStore } from '@reduxjs/toolkit';

import tasksSlice from './TodoListSlice';

let store = configureStore({
    reducer: {
        tasks : tasksSlice
    }
});

export default store;
