import React from "react";
import { Switch,Route,BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider , createGenerateClassName} from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
//  Generate a preffix for the classnames to avoid collisions
const generateClassname = createGenerateClassName({
    productionPrefix: "ma"
});
export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassname}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}