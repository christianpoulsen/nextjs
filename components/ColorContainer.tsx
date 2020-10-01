import React from "react";

const ColorContainer: React.FC<{ color: string }> = ({ color, children }) => {

    const style: React.CSSProperties = {
        backgroundColor: color,
        height: "max",
        width: "max",
        padding: 96,
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default ColorContainer;
