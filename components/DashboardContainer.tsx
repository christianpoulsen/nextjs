import React from "react";
import ColorContainer from "./ColorContainer";
import CenterContainer from "./CenterContainer";

const DashboardContainer: React.FC = ({ children }) => {

    return (
        <ColorContainer color="#b3b3b3">
            <ColorContainer color="#c0c0c0">
                <ColorContainer color="#ccc">
                    <ColorContainer color="#d9d9d9">
                        <ColorContainer color="#e6e6e6">
                            <ColorContainer color="#f3f3f3">
                                <CenterContainer>
                                    {children}
                                </CenterContainer>
                            </ColorContainer>
                        </ColorContainer>
                    </ColorContainer>
                </ColorContainer>
            </ColorContainer>
        </ColorContainer>
    )
}

export default DashboardContainer;
