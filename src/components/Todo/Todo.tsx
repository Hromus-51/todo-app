import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from '../TodoInput/TodoInput';
import TodoBody from '../TodoBody/TodoBody';
import TodoFooter from '../TodoFooter/TodoFooter';
import Sort from '../Sort/Sort';
import {
    HeaderBackground, TodoEl, Group,
    Tip, SortVisibility
} from './styled-components';
//========================================
import { Container } from '../../styles/components';

const Todo = () => {
    return (
        <>
            <HeaderBackground />
            <TodoEl>
                <Container>
                    <TodoHeader />
                    <TodoInput />
                    <Group>
                        <TodoBody />
                        <TodoFooter />
                    </Group>
                    <SortVisibility>
                        <Sort />
                    </SortVisibility>
                    <Tip>
                        Drag and drop to reorder list
                    </Tip>
                </Container>
            </TodoEl>
        </>
    );
}

export default Todo;