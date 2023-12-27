import {mount} from "marketing/MarketingApp";
import React, {useRef, useEffect} from "react";

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        // Gets the reference to the div with id of "marketing-dev-root"
        mount(ref.current);
    });
    return <div ref={ref} />;
}