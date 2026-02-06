import Image from "next/image";

export default function SocialProof() {
    return (
        <section
            className="hire-everywhere section-padding"
            style={{
                backgroundColor: "var(--bg-secondary)",
                borderBottom: "1px solid var(--border-color)",
            }}
        >
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Post Once, Reach Everywhere</h2>
                    <p className="section-subtitle">
                        RecruiterAI automatically syncs your job postings across all major
                        platforms
                    </p>
                </div>
                <div className="slider-wrapper">
                    <div className="slider-track">
                        {/* Set 1 */}
                        <div className="slide">
                            <img src="/assets/Linkedin-Logo.png" alt="LinkedIn" />
                        </div>
                        <div className="slide">
                            <img src="/assets/naukri_new_logo.svg" alt="Naukri" />
                        </div>
                        <div className="slide">
                            <img src="/assets/Indeed-logo.png" alt="Indeed" />
                        </div>
                        <div className="slide">
                            <img src="/assets/Angel List.png" alt="AngelList" />
                        </div>
                        <div className="slide">
                            <img src="/assets/instahyre_logo.jpeg" alt="Instahyre" />
                        </div>
                        <div className="slide">
                            <img src="/assets/WellFound.png" alt="Wellfound" />
                        </div>
                        <div className="slide">
                            <img src="/assets/iimjobs.png" alt="IIMJobs" />
                        </div>
                        <div className="slide">
                            <img src="/assets/glassdoor.webp" alt="Glassdoor" />
                        </div>
                        <div className="slide">
                            <img src="/assets/monster_india_logo.jpeg" alt="Monster" />
                        </div>
                        <div className="slide">
                            <img src="/assets/cutshort.png" alt="Cutshort" />
                        </div>
                        {/* Set 2 */}
                        <div className="slide">
                            <img src="/assets/Linkedin-Logo.png" alt="LinkedIn" />
                        </div>
                        <div className="slide">
                            <img src="/assets/naukri_new_logo.svg" alt="Naukri" />
                        </div>
                        <div className="slide">
                            <img src="/assets/Indeed-logo.png" alt="Indeed" />
                        </div>
                        <div className="slide">
                            <img src="/assets/Angel List.png" alt="AngelList" />
                        </div>
                        <div className="slide">
                            <img src="/assets/instahyre_logo.jpeg" alt="Instahyre" />
                        </div>
                        <div className="slide">
                            <img src="/assets/WellFound.png" alt="Wellfound" />
                        </div>
                        <div className="slide">
                            <img src="/assets/iimjobs.png" alt="IIMJobs" />
                        </div>
                        <div className="slide">
                            <img src="/assets/glassdoor.webp" alt="Glassdoor" />
                        </div>
                        <div className="slide">
                            <img src="/assets/monster_india_logo.jpeg" alt="Monster" />
                        </div>
                        <div className="slide">
                            <img src="/assets/cutshort.png" alt="Cutshort" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
