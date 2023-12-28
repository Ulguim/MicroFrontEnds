import React from "react";
import { Switch, Route, Router as MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
//  Generate a preffix for the classnames to avoid collisions
const generateClassname = createGenerateClassName({
    productionPrefix: "ma"
});
export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassname}>
            <MemoryRouter history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </MemoryRouter>
        </StylesProvider>
    </div>
}