import React, { useState } from "react";

// Define the types for the props in the ApiKeyDisplay function
interface ApiKeyDisplayProps {
    apiKey: string; // Define apiKey as a string
    companyInfo: any; // Adjust type as needed based on the structure of companyInfo
}

export default function ApiKeyDisplay({ apiKey, companyInfo }: ApiKeyDisplayProps) {
    const [copied, setCopied] = useState(false);

    const copyApiKey = () => {
        navigator.clipboard.writeText(apiKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div>
            <h2>API Key</h2>
            <p>{apiKey}</p>
            <button onClick={copyApiKey}>
                {copied ? "Copied!" : "Copy API Key"}
            </button>
        </div>
    );
}