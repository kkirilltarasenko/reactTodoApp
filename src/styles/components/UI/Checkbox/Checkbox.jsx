import React from "react";

const Checkbox = ({x, ...props}) => {
    return (
        <input {...props} checked={x} style={{width: 20, height: 20, marginLeft: 20}} type="checkbox"></input>
    );
};

export default Checkbox;
