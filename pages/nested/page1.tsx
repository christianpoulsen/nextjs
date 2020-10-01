import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import Link from "next/link";

const Page1: React.FC = () => {

    return (
        <DashboardContainer>
            1
            <Link href="/nested/page2">
                Change page
            </Link>
        </DashboardContainer>
    )
}

export default Page1;
