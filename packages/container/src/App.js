import React, { lazy, Suspense, useState } from "react";
// import AuthApp from "./components/AuthApp";
// import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Progress from "./components/Progress";
const generateClassname = createGenerateClassName({
    productionPrefix: "co"
});
// Only load the component when it is needed
const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    console.log("🚀 ~ file: App.js:17 ~ isSignedIn:", isSignedIn)
    return <BrowserRouter>
        <StylesProvider generateClassName={generateClassname}>
            <div>
                <Header onSignOut={() => setIsSignedIn(true)}
                    isSignedIn={isSignedIn} />
                <Suspense fallback={<>text</>}>
                    <Switch>
                        <Route path="/auth"  >
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>

}