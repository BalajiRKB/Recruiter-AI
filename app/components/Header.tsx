"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="#" className="logo">
                    Recruiter<span className="text-primary">AI</span>
                </Link>

                {/* Mobile Toggle */}
                <input
                    type="checkbox"
                    id="nav-toggle"
                    className="nav-toggle"
                    checked={isMenuOpen}
                    onChange={(e) => setIsMenuOpen(e.target.checked)}
                />
                <label
                    htmlFor="nav-toggle"
                    className="nav-toggle-label"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                </label>

                <nav className="nav">
                    <Link href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        Features
                    </Link>
                    <Link href="#impact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        Impact
                    </Link>
                    <Link href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        Testimonials
                    </Link>
                    <Link href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                        FAQ
                    </Link>
                    <Link href="#" className="btn btn-outline btn-pill mobile-only">
                        Log In
                    </Link>
                    <Link href="#" className="btn btn-primary btn-pill mobile-only">
                        Get Started
                    </Link>
                </nav>

                <div className="header-actions">
                    <Link href="#" className="btn btn-outline btn-pill">
                        Log In
                    </Link>
                    <Link href="#" className="btn btn-primary btn-pill">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
