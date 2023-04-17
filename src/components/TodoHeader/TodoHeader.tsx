import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
//========================================
import {
    TodoHeaderEl, Title,
    ThemeButton, SunIcon,
    MoonIcon, TitleIcon
} from './styled-components';
//========================================
import { setTheme, selectTheme } from '../../redux/themeSlice/slice';
import moonIcon from '../../assets/images/icon-moon.svg';
import sunIcon from '../../assets/images/icon-sun.svg';
import titleIcon from '../../assets/images/icon-title.svg';

const iconVriants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
}

const TodoHeader = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const isMobile = useMediaQuery({ maxWidth: 425 });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <TodoHeaderEl>
            {isMobile ?
                <TitleIcon src={titleIcon} /> :
                <Title>TODO</Title>
            }

            <ThemeButton
                onClick={() => {
                    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
                }}>
                <AnimatePresence>
                    {theme === 'light' ?
                        <MoonIcon
                            {...iconVriants}
                            src={moonIcon} /> :
                        <SunIcon
                            {...iconVriants}
                            src={sunIcon} />}
                </AnimatePresence>
            </ThemeButton>
        </TodoHeaderEl>
    );
}

export default TodoHeader;