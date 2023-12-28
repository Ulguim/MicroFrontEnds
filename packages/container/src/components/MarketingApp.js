import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        // Gets the reference to the div with id of "marketing-dev-root"
        const { pathname } = history.location;

        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                if (pathname === nextPathName) return;
                history.push(nextPathName);
            }
        });
        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref} />;
}