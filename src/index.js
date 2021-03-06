import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";

ReactDom.render(
        <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
        </StateProvider>
,document.getElementById('root'));