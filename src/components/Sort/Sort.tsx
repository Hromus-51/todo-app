import { useDispatch, useSelector } from 'react-redux';
//========================================
import { SortEl, SortItem } from './styled-components';
//========================================
import { selectSortItem, selectTodoList, setSort } from '../../redux/todoSlice/slice';
import { getLength } from '../../utils/utils';

const sortItems = ['All', 'Active', 'Completed'];

const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(selectSortItem)
    const todoList = useSelector(selectTodoList);
    const active = getLength({ todoList, status: 'Active' });
    const completed = getLength({ todoList, status: 'Completed' });

    return (
        <SortEl>
            {sortItems.map(item => (
                <SortItem
                    onClick={() => { dispatch(setSort(item)) }}
                    active={sort === item ? '--active' : '--color-text-secondary'}
                    hover={sort === item ? '--active' : '--color-text-hover'}
                    disabled={!completed || !active}
                    key={item}>

                    {item}
                </SortItem>
            ))}
        </SortEl>
    );
}

export default Sort;