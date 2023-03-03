import React from 'react';

import GlobalStyled from './styles/GlobalStyled';
import Header from './components/header';
import Pages from './pages';

function App() {
    return (
        <>
            <GlobalStyled />
            <Header />
            <Pages />
        </>
    );
}

export default App;
