import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Arcs */}
            <div className="hero-bg-arcs">
                <svg
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="arc-svg"
                >
                    {/* Wide spanning arcs - Thinner and Higher */}
                    <path
                        d="M0 600 Q 720 250 1440 600"
                        stroke="#D0BCFF"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M0 750 Q 720 450 1440 750"
                        stroke="#D0BCFF"
                        strokeWidth="1.5"
                        style={{ opacity: 0.5 }}
                    />
                </svg>
            </div>

            <div className="container hero-container">
                {/* Person 1 (Top Left) */}
                <div
                    className="hero-person person-1"
                    style={{ top: "-15%", left: "2%", alignItems: "flex-start" }}
                >
                    <div className="speech-bubble bubble-blue">
                        <p>
                            “Candidates wait 3 weeks for replies while I&apos;m juggling
                            everything. We&apos;re losing great talent to competitors.”
                        </p>
                    </div>
                    <div className="person-info">
                        <div className="avatar-circle">
                            <img
                                src="/assets/ellipse 1.png"
                                alt="SK"
                            />
                        </div>
                        <div className="details">
                            <strong>Sarah K</strong>
                            <span>Founder at TechStart</span>
                        </div>
                    </div>
                </div>

                {/* Person 2 (Top Right) */}
                <div
                    className="hero-person person-2"
                    style={{ top: "-10%", right: "5%", alignItems: "flex-end" }}
                >
                    <div className="speech-bubble bubble-purple">
                        <p>
                            “Posted on LinkedIn. Got 200 applications. Skimmed through 20.
                            Hired on gut feeling. They quit in 2 months.”
                        </p>
                    </div>
                    <div className="person-info right-align">
                        <div className="avatar-circle">
                            <img
                                src="/assets/ellipse 2.png"
                                alt="RM"
                            />
                        </div>
                        <div className="details">
                            <strong>Rahul M</strong>
                            <span>Hiring Manager at GrowthCo</span>
                        </div>
                    </div>
                </div>

                {/* Person 3 (Bottom Left) */}
                <div
                    className="hero-person person-3"
                    style={{ top: "60%", left: "6%", alignItems: "flex-start" }}
                >
                    <div className="speech-bubble bubble-purple">
                        <p>
                            “I&apos;m the CEO, product lead, AND now doing HR? There&apos;s
                            zero time to read 200 resumes properly.”
                        </p>
                    </div>
                    <div className="person-info">
                        <div className="avatar-circle">
                            <img
                                src="/assets/ellipse 3.png"
                                alt="PS"
                            />
                        </div>
                        <div className="details">
                            <strong>Priya S</strong>
                            <span>CEO at InnovateLabs</span>
                        </div>
                    </div>
                </div>

                {/* Person 4 (Bottom Right) */}
                <div
                    className="hero-person person-4"
                    style={{ top: "55%", right: "2%", alignItems: "flex-end" }}
                >
                    <div className="speech-bubble bubble-blue">
                        <p>
                            “Our best candidate accepted another offer while we were still
                            scheduling interviews. This keeps happening.”
                        </p>
                    </div>
                    <div className="person-info right-align">
                        <div className="avatar-circle">
                            <img
                                src="/assets/ellipse 4.png"
                                alt="AT"
                            />
                        </div>
                        <div className="details">
                            <strong>Amit T</strong>
                            <span>Head of HR at ScaleUp</span>
                        </div>
                    </div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Every <span className="serif-blue">Hire</span>,<br /> Faster and
                        Better
                    </h1>
                    <p className="hero-subtitle">
                        Stop losing great candidates to slow, manual hiring processes. Let
                        AI handle the heavy lifting while you focus on building your team.
                    </p>
                    <div className="hero-actions">
                        <Link href="#" className="btn btn-primary btn-pill btn-lg">
                            Start Hiring Smarter
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="btn btn-outline btn-pill btn-lg btn-icon"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            See How It Works
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
