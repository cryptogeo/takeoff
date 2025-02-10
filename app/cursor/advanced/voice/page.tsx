'use client'; // Add this line to mark the component as a client component

import React, { useState } from 'react';

interface CompanyInfo {
    // Define the structure of the info object here
    name: string; // Example property
    // Add other properties as needed
}

export default function VoicePage() {
    const [apiKey, setApiKey] = useState("");
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null); // Adjust type as needed

    // Define the type for the info parameter
    const handleCompanySubmit = (info: CompanyInfo) => {
        setCompanyInfo(info);
        // Simulate API key generation
        setApiKey("API_" + Math.random().toString(36).substr(2, 9));
    };

    return (
        <div>
            <h1>Voice Page</h1>
            {/* Your form and other components go here */}
        </div>
    );
}