import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
const mount = (el, { onNavigate, defaultHistory,initialPath, onSignIn }) => {
    console.log("🚀 ~ file: bootstrap.js:6 ~ mount ~ initialPath:", initialPath)
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    // If history changes, call onNavigate
    if (onNavigate) { history.listen(onNavigate) };
    ReactDom.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}
export { mount };