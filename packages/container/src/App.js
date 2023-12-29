import React, { lazy, Suspense, useEffect, useState } from "react";
// import AuthApp from "./components/AuthApp";
// import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch,Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Progress from "./components/Progress";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const generateClassname = createGenerateClassName({
    productionPrefix: "co"
});
// Only load the component when it is needed
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));
const history = createBrowserHistory();
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }

    }, [isSignedIn]);

    return <Router history={history}>
        <StylesProvider generateClassName={generateClassname}>
            <div>
                <Header onSignOut={() => setIsSignedIn(false)}
                    isSignedIn={isSignedIn} />
                <Suspense fallback={<>Loading</>}>
                    <Switch>
                        <Route path="/auth"  >
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard" >
                            {!isSignedIn && <Redirect to="/" />}
                            {isSignedIn && <DashboardApp />}
                        </Route>
                        <Route path="/" component={MarketingApp} />
                 
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </Router>

}