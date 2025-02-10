import React from 'react';
import Link from 'next/link'; // Ensure you have this import

// Define the types for the props in the NavLink function
interface NavLinkProps {
    href: string; // Define href as a string
    icon: JSX.Element | string; // Allow icon to be a React element or a string
    text: string; // Define text as a string
}

function NavLink({ href, icon, text }: NavLinkProps) {
    return (
        <Link href={href}>
            <div className="flex items-center space-x-2">
                <span className="text-xl">{icon}</span> {/* Use text or icon here */}
                <span>{text}</span>
            </div>
        </Link>
    );
}

// Example usage of NavLink in the SideHeader component
export default function SideHeader() {
    return (
        <nav>
            {/* Example usage of NavLink */}
            <NavLink href="/some-path" icon="🏠" text="Home" /> {/* Use an emoji as a placeholder */}
            <NavLink href="/about" icon="ℹ️" text="About" />
            <NavLink href="/contact" icon="📞" text="Contact" />
            {/* Add more links as needed */}
        </nav>
    );
}