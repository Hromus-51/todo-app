import { TodoState } from '../redux/todoSlice/slice';

interface GetLengthProps {
    todoList: TodoState['todoList'];
    status: TodoState['sort'];
}

export const getLength = ({ todoList, status }: GetLengthProps) => {
    return todoList.filter(obj => obj.status === status).length;
}

