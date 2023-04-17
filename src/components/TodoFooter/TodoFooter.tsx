import { useDispatch, useSelector } from 'react-redux';
//========================================
import Sort from '../Sort/Sort';
import {
    TodoFooterEl, ItemsLeft,
    Clear, SortVisibility
} from './styled-components';
//========================================
import {
    clearCompleted, selectSortItem,
    selectTodoList, setSort,
} from '../../redux/todoSlice/slice';
import { getLength } from '../../utils/utils';

const TodoFooter = () => {
    const dispatch = useDispatch()
    const todoList = useSelector(selectTodoList);
    const sort = useSelector(selectSortItem);
    const active = getLength({ todoList, status: 'Active' });
    const completed = getLength({ todoList, status: 'Completed' });

    const handleClearClick = () => {
        dispatch(clearCompleted());
        sort === 'Completed' && dispatch(setSort('All'));
    }

    return (
        <TodoFooterEl>
            <ItemsLeft>
                {active} items left
            </ItemsLeft>
            <SortVisibility>
                <Sort />
            </SortVisibility>
            <Clear
                disabled={!completed}
                onClick={() => { handleClearClick() }}>
                Clear Completed
            </Clear>
        </TodoFooterEl>
    );
}

export default TodoFooter;