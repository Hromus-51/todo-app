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

const TodoBody = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const sort = useSelector(selectSortItem);
    const sortedList = todoList.filter(obj => obj.status === sort || sort === 'all');

    const handleOrder = (newList: TodoState["todoList"]) => {
        sort === 'all' ?
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


