import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider , createGenerateClassName} from "@material-ui/core";

const generateClassname = createGenerateClassName({
    productionPrefix: "co"
});

export default () => {

    return <div>
        <StylesProvider generateClassName={generateClassname}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    </div>
}