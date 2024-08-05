

import { useDispatch, useSelector } from 'react-redux';
import Task from './Task/Task';
import { ChangeTaskText, AddTask, DeleteAll, SetFilter } from '../Redux/TodoListSlice';
import './TodoList.css';



const TodoList = () => {

    const tasks = useSelector((state) => state.tasks.tasks);
    const taskText = useSelector((state) => state.tasks.taskText);
    const filter = useSelector((state) => state.tasks.filter)

    // const state = useSelector((state) => {
    //     return {
    //         tasks: state.tasks,
    //         taskText: state.taskText
    //     }
    // })
    const dispatch = useDispatch();

    console.log(tasks)

    const onChangeTaskHandler = (e) => {
        dispatch(ChangeTaskText(e.target.value))
    }

    const AddTaskHandler = () => {
        dispatch(AddTask())
    }

    const DeleteAllHandler = () => {
        dispatch(DeleteAll())
    }

const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
        return task.completed;
    }
    if (filter === 'active') {
        return !task.completed;
    }
    return true;
     });
    
    const handleFilterChange = (filter) => {
    dispatch(SetFilter(filter));
  };
    
return (
    <div className='TodoList'>
        <div className="inputPanel">
            <input type="text" onChange={(e) => onChangeTaskHandler(e)} value={taskText} />
            <button onClick={AddTaskHandler} >Add task</button>
            <button onClick={DeleteAllHandler} >Delete All</button>
        </div>
        <div className="btns">
            <button onClick={() => handleFilterChange('all')}>All</button>
            <button onClick={() => handleFilterChange('completed')}>Completed</button>
            <button onClick={() => handleFilterChange('active')}>Active</button>
        </div>
        <div className='TasksList'>
            {
                // tasks.map(task => <Task task={ task} key={task.id}/>)
                filteredTasks.map(task => <Task task={task} key={task.id}/>)
            }
        </div>
    </div>
  )
}

export default TodoList;
