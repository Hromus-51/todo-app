import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
//========================================
import { TodoBodyEl, TodoUl, EmptyList, EmptyContent } from './styled-components';
import List from '../List/List';
//========================================
import {
    selectSortItem, selectTodoList,
    setTodoList, TodoState, setNewList
} from '../../redux/todoSlice/slice';


import { useEffect } from 'react';
const a = [
    {
        id: '53cc67de-ae1b-4bea-bb86-c04c221aef01',
        name: 'Complete online JavaScript course',
        status: 'Completed',
    },
    {
        id: 'f8f150ed-67cf-42b4-8ba7-830c8ecd886f',
        name: 'Jog around the park 3x',
        status: 'Active',
    },
    {
        id: 'e5272592-d1ee-4987-b065-f2f90d3e5302',
        name: '10 minutes meditation',
        status: 'Active',
    },
    {
        id: '509b27ff-c6b1-4a00-a933-7984e058a60a',
        name: 'Read for 1 hour',
        status: 'Active',
    },
    {
        id: '9818fe60-9157-4df6-ac1e-131090144464',
        name: 'Pick up groceries',
        status: 'Active',
    },
    {
        id: '133f722a-e7c3-40df-a1d6-1f91b03c1770',
        name: 'Complete Todo App on Frontend Mentor',
        status: 'Active',
    },
]

const TodoBody = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const sort = useSelector(selectSortItem);
    const sortedList = todoList.filter(obj => obj.status === sort || sort === 'All');

    useEffect(() => {
        dispatch(setTodoList(a))
    }, [])

    const handleOrder = (newList: TodoState["todoList"]) => {
        sort === 'All' ?
            dispatch(setTodoList(newList)) :
            dispatch(setNewList({ newList, sort }))
    }

    return (
        <TodoBodyEl>
            <AnimatePresence>

                {todoList.length > 0 ?
                    <TodoUl axis="y" values={sortedList} onReorder={handleOrder}>
                        <List
                            sortedList={sortedList}
                            todoList={todoList}
                        />
                    </TodoUl> :
                    <EmptyList
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.42 }}
                    >
                        <EmptyContent>
                            Your to-do list is empty!
                        </EmptyContent>
                    </EmptyList>
                }

            </AnimatePresence>
        </TodoBodyEl >
    );
}

export default TodoBody;


