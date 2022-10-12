import React from "react";
import { Provider } from 'react-redux';
import { Store } from './store';
import NameList  from './components/NameList'
import Button from '@material-ui/core/Button';


export function App() {
    return (
        <>
            <Provider store={Store}>
                <NameList />
            </Provider>
      </>
    )
}