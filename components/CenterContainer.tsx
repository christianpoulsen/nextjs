import React from "react";

const CenterContainer: React.FC = ({ children }) => {

    const style: React.CSSProperties = {
        height: "max",
        width: "max",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default CenterContainer;
