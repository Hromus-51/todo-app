import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//========================================
import Todo from '../Todo/Todo';
//========================================
import GlobalStyles from '../../styles/global';
import { persistor, store } from '../../redux/store';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Todo />
                </PersistGate>
                <GlobalStyles />
            </Provider>
        </>
    );
}

export default App;