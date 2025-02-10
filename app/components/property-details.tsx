import React from 'react';

// Define the types for the props in the AmenityItem function
interface AmenityItemProps {
    icon: JSX.Element | string; // Allow icon to be a React element or a string
    text: string; // Assuming text is a string
}

function AmenityItem({ icon, text }: AmenityItemProps) {
    return (
        <div className="flex items-center space-x-2">
            <span className="text-xl">{icon}</span> {/* Use text or icon here */}
            <span>{text}</span>
        </div>
    );
}

// Example of how to use AmenityItem in the PropertyDetails component
export default function PropertyDetails() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Property Details</h1>
            {/* Example usage of AmenityItem */}
            <AmenityItem icon="🔑" text="Key Feature" /> {/* Use an emoji or text as a placeholder */}
            <AmenityItem icon="📞" text="Contact Us" />
            {/* Add more amenities as needed */}
        </div>
    );
}