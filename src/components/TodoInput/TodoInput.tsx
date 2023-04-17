import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useRef } from 'react';
//========================================
import { Form, InputEl, Circle, CrossIcon } from './styled-components';
//========================================
import { setInputValue, selectInputValue, addItem } from '../../redux/todoSlice/slice';
import crossIcon from '../../assets/images/icon-cross.svg';

const TodoInput = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectInputValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            dispatch(addItem({
                id: uuidv4(),
                name: inputValue.trim(),
                status: 'Active'
            }))

            dispatch(setInputValue(''))
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Circle />
            <InputEl
                ref={inputRef}
                value={inputValue}
                onChange={(e) => { dispatch(setInputValue(e.target.value)) }}
            />
            <AnimatePresence>
                {inputValue &&
                    <CrossIcon
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        src={crossIcon}
                        onClick={() => { dispatch(setInputValue('')) }}
                    />}
            </AnimatePresence>
        </Form>
    );
}

export default TodoInput;