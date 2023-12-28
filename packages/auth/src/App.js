import React from "react";
import { Switch, Route, Router as MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
//  Generate a preffix for the classnames to avoid collisions
const generateClassname = createGenerateClassName({
    productionPrefix: "at"
});
export default ({ history, onSignIn }) => {
    console.log("🚀 ~ file: App.js:11 ~ onSignIn:",history, onSignIn)
    return <div>
        <StylesProvider generateClassName={generateClassname}>
            <MemoryRouter history={history}>
                <Switch>
                    <Route path="/auth/signup"  >
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signin" >
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </MemoryRouter>
        </StylesProvider>
    </div>
}