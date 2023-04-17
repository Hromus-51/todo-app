import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
//========================================
import {
    TodoLi, LiContent, IconCross,
    Check, CheckCircle, Content,
    CheckIcon
} from './styled-components';
//========================================
import {
    deleteItem,
    setSort,
    сheckСompleted,
    TodoState
} from '../../redux/todoSlice/slice'
import crossIcon from '../../assets/images/icon-cross.svg';
import checkIcon from '../../assets/images/icon-check.svg';

interface ListProps {
    sortedList: TodoState['todoList'];
    todoList: TodoState['todoList'];
}

const List: React.FC<ListProps> = ({ sortedList, todoList }) => {
    const dispatch = useDispatch();

    const handleCrossClick = (id: string, length: number) => {
        dispatch(deleteItem(id))
        length === 1 && dispatch(setSort('All'));
    }

    const handleCheckClick = (status: string, id: string) => {
        const length = todoList.filter(obj => obj.status === status).length;
        dispatch(сheckСompleted(id))
        length === 1 && dispatch(setSort('All'));
    }

    return (
        <AnimatePresence>
            {sortedList.map((item, index, arr) => (
                <TodoLi
                    value={item}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    whileDrag={{ scale: 1.03 }}
                    transition={{ duration: 0.16 }}
                    key={item.id}>

                    <LiContent>
                        <Check
                            onClick={() => { handleCheckClick(item.status, item.id) }}
                            bg={item.status === 'Completed' ? '--check-bg-hover' : '--color-line'}
                        >
                            <CheckIcon src={checkIcon} alt="icon-check" />
                            <CheckCircle
                                visible={item.status === 'Completed' ? '0' : '1'}
                            />
                        </Check>

                        <Content
                            decoration={item.status === 'Completed' ? 'line-through' : 'none'}
                            color={item.status === 'Completed' ? '--color-text-completed' : 'inherit'}
                        >
                            {item.name}
                        </Content>

                        <IconCross
                            onClick={() => { handleCrossClick(item.id, arr.length) }}
                            src={crossIcon}
                        />
                    </LiContent>

                </TodoLi>
            ))}
        </AnimatePresence>
    );
}

export default List;