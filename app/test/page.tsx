'use client'

import { useState } from "react";

const TestPage = () => {
    
    const [pageName, setPageName] = useState<string>('Test Page');

    return (
        <div>
            <h1 className="mt-10 text-center text-cyan-500 text-5xl" >Welcome to {pageName} </h1>
        </div>
    )
}

export default TestPage;
