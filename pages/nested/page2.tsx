import React from "react";
import DashboardContainer from "../../components/DashboardContainer";
import Link from "next/link";

const Page2: React.FC = () => {
    return (
        <DashboardContainer>
            2
            <Link href="/nested/page1">
                Change page
            </Link>
        </DashboardContainer>
    )
}

export default Page2;
