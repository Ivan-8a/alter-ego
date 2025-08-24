"use client";

import { Toaster } from "react-hot-toast";

type ProvidersProps = {
    children: React.ReactNode;
}

const Providers = ({children}: ProvidersProps) => {
    return (
        <>
            {children}
            <Toaster position="top-center" reverseOrder={false}/>
        </>
    );
};

export default Providers