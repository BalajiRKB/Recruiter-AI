"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flowVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const nodeVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "backOut" as const } },
};

export default function Flowchart() {
    const [activeTab, setActiveTab] = useState("flow1");

    useEffect(() => {
        const tabs = ["flow1", "flow2", "flow3"];
        const interval = setInterval(() => {
            const currentIndex = tabs.indexOf(activeTab);
            const nextIndex = (currentIndex + 1) % tabs.length;
            setActiveTab(tabs[nextIndex]);
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <div className="flowchart-wrapper">
                    {/* Sidebar: Title + Tabs */}
                    <div className="flowchart-sidebar">
                        <motion.div
                            className="section-header text-left"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title">
                                AI Recruiting Software That Works Like Your Own{" "}
                                <span className="text-primary">HR Team</span>
                            </h2>
                            <p className="section-subtitle">
                                Build custom hiring workflows in minutes. No coding required.
                            </p>
                        </motion.div>

                        <div className="flowchart-tabs">
                            <button
                                className={`tab-btn ${activeTab === "flow1" ? "active" : ""}`}
                                onClick={() => setActiveTab("flow1")}
                            >
                                Automated Screening
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "flow2" ? "active" : ""}`}
                                onClick={() => setActiveTab("flow2")}
                            >
                                Interview Process
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "flow3" ? "active" : ""}`}
                                onClick={() => setActiveTab("flow3")}
                            >
                                Re-engagement
                            </button>
                        </div>
                    </div>

                    {/* Flowchart Display */}
                    <div className="flowchart-display">
                        <AnimatePresence mode="wait">
                            {/* Flowchart 1 */}
                            {activeTab === "flow1" && (
                                <motion.div
                                    key="flow1"
                                    className="flowchart-card active"
                                    id="flow1"
                                    variants={flowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flowchart-header">
                                        <h3>Automated Candidate Screening</h3>
                                        <p className="highlight">
                                            Screen 250+ applications in minutes vs. 8 hours manually
                                        </p>
                                    </div>
                                    <div className="flowchart-visual">
                                        <motion.div className="node start" variants={nodeVariants}>New Application submitted</motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node ai" variants={nodeVariants}>
                                            <strong>AI Resume Screening</strong>
                                            <span className="node-sub">Ranks top 20% of candidates</span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node action" variants={nodeVariants}>
                                            <strong>Auto-send screening questions</strong>
                                            <span className="node-sub">
                                                via email to qualified candidates
                                            </span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="diamond" variants={nodeVariants}>
                                            <span>Score &gt; 75%?</span>
                                        </motion.div>
                                        <div className="branches">
                                            <div className="branch">
                                                <span className="label">Yes</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node success" variants={nodeVariants}>
                                                    <strong>Auto-schedule interview</strong>
                                                    <span className="node-sub">via calendar link</span>
                                                </motion.div>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node" variants={nodeVariants}>
                                                    <strong>Interview scheduled</strong>
                                                    <span className="node-sub">Send reminder 24h before</span>
                                                </motion.div>
                                            </div>
                                            <div className="branch">
                                                <span className="label">No</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node" variants={nodeVariants}>
                                                    <strong>Send thank you email</strong>
                                                    <span className="node-sub">
                                                        Keep in talent pool for future
                                                    </span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Flowchart 2 */}
                            {activeTab === "flow2" && (
                                <motion.div
                                    key="flow2"
                                    className="flowchart-card active"
                                    id="flow2"
                                    variants={flowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flowchart-header">
                                        <h3>Multi-Stage Interview Process</h3>
                                        <p className="highlight">
                                            Reduce time-to-hire from 42 days to 12 days
                                        </p>
                                    </div>
                                    <div className="flowchart-visual">
                                        <motion.div className="node start" variants={nodeVariants}>Candidate accepts interview invite</motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node ai" variants={nodeVariants}>
                                            <strong>Round 1: AI video interview</strong>
                                            <span className="node-sub">
                                                Technical screening with AI assessment
                                            </span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node ai" variants={nodeVariants}>
                                            <strong>AI scores responses</strong>
                                            <span className="node-sub">using custom rubric</span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="diamond" variants={nodeVariants}>
                                            <span>Score &gt; 80%?</span>
                                        </motion.div>
                                        <div className="branches">
                                            <div className="branch">
                                                <span className="label">Yes</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node success" variants={nodeVariants}>
                                                    <strong>Auto-schedule Round 2</strong>
                                                    <span className="node-sub">with hiring manager</span>
                                                </motion.div>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node action" variants={nodeVariants}>
                                                    Hiring manager completes interview
                                                </motion.div>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="diamond" variants={nodeVariants}>
                                                    <span>Hire?</span>
                                                </motion.div>
                                                <div className="branches-inner">
                                                    <div className="branch">
                                                        <span className="label">Hire</span>
                                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                        <motion.div className="node success" variants={nodeVariants}>
                                                            Send offer letter + Welcome kit
                                                        </motion.div>
                                                    </div>
                                                    <div className="branch">
                                                        <span className="label">Reject</span>
                                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                        <motion.div className="node" variants={nodeVariants}>
                                                            Personalized rejection + Future note
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="branch">
                                                <span className="label">No</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node" variants={nodeVariants}>
                                                    <strong>Auto-rejection email</strong>
                                                    <span className="node-sub">
                                                        with constructive feedback
                                                    </span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Flowchart 3 */}
                            {activeTab === "flow3" && (
                                <motion.div
                                    key="flow3"
                                    className="flowchart-card active"
                                    id="flow3"
                                    variants={flowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flowchart-header">
                                        <h3>Passive Candidate Re-engagement</h3>
                                        <p className="highlight">
                                            Build a qualified talent pipeline automatically
                                        </p>
                                    </div>
                                    <div className="flowchart-visual">
                                        <motion.div className="node start" variants={nodeVariants}>
                                            <strong>Candidate rejected</strong>
                                            <span className="node-sub">but scored 60-74%</span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node action" variants={nodeVariants}>
                                            <strong>Add to &apos;Future Talent&apos; database</strong>
                                            <span className="node-sub">for long-term nurturing</span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="node time" variants={nodeVariants}>
                                            <strong>Wait 3 months</strong>
                                            <span className="node-sub">Automated patience period</span>
                                        </motion.div>
                                        <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                        <motion.div className="diamond" variants={nodeVariants}>
                                            <span>New relevant position?</span>
                                        </motion.div>
                                        <div className="branches">
                                            <div className="branch">
                                                <span className="label">Yes</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node ai" variants={nodeVariants}>
                                                    <strong>AI sends personalized email</strong>
                                                    <span className="node-sub">mentioning new role</span>
                                                </motion.div>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node action" variants={nodeVariants}>Check interest</motion.div>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node success" variants={nodeVariants}>
                                                    <strong>Interested?</strong>
                                                    <span className="node-sub">
                                                        Yes: Fast-track to interview
                                                    </span>
                                                    <span className="node-sub">
                                                        No Response: Continue in pool
                                                    </span>
                                                </motion.div>
                                            </div>
                                            <div className="branch">
                                                <span className="label">No</span>
                                                <motion.div className="arrow" variants={nodeVariants}>↓</motion.div>
                                                <motion.div className="node" variants={nodeVariants}>Check again next quarter</motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
