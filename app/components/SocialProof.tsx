"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function SocialProof() {
    return (
        <section
            className="hire-everywhere section-padding"
            style={{
                backgroundColor: "var(--bg-secondary)",
                borderBottom: "1px solid var(--border-color)",
            }}
        >
            <motion.div
                className="container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="section-header text-center">
                    <motion.h2 className="section-title" variants={itemVariants}>Post Once, Reach Everywhere</motion.h2>
                    <motion.p className="section-subtitle" variants={itemVariants}>
                        RecruiterAI automatically syncs your job postings across all major
                        platforms
                    </motion.p>
                </div>
                <motion.div className="slider-wrapper" variants={itemVariants}>
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
                </motion.div>
            </motion.div>
        </section>
    );
}
