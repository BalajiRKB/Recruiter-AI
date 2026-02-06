"use client";

import { useState } from "react";

export default function Flowchart() {
    const [activeTab, setActiveTab] = useState("flow1");

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <div className="flowchart-wrapper">
                    {/* Sidebar: Title + Tabs */}
                    <div className="flowchart-sidebar">
                        <div className="section-header text-left">
                            <h2 className="section-title">
                                AI Recruiting Software That Works Like Your Own{" "}
                                <span className="text-primary">HR Team</span>
                            </h2>
                            <p className="section-subtitle">
                                Build custom hiring workflows in minutes. No coding required.
                            </p>
                        </div>

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
                        {/* Flowchart 1 */}
                        <div
                            className={`flowchart-card ${activeTab === "flow1" ? "active" : ""}`}
                            id="flow1"
                        >
                            <div className="flowchart-header">
                                <h3>Automated Candidate Screening</h3>
                                <p className="highlight">
                                    Screen 250+ applications in minutes vs. 8 hours manually
                                </p>
                            </div>
                            <div className="flowchart-visual">
                                <div className="node start">New Application submitted</div>
                                <div className="arrow">↓</div>
                                <div className="node ai">
                                    <strong>AI Resume Screening</strong>
                                    <span className="node-sub">Ranks top 20% of candidates</span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="node action">
                                    <strong>Auto-send screening questions</strong>
                                    <span className="node-sub">
                                        via email to qualified candidates
                                    </span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="diamond">
                                    <span>Score &gt; 75%?</span>
                                </div>
                                <div className="branches">
                                    <div className="branch">
                                        <span className="label">Yes</span>
                                        <div className="arrow">↓</div>
                                        <div className="node success">
                                            <strong>Auto-schedule interview</strong>
                                            <span className="node-sub">via calendar link</span>
                                        </div>
                                        <div className="arrow">↓</div>
                                        <div className="node">
                                            <strong>Interview scheduled</strong>
                                            <span className="node-sub">Send reminder 24h before</span>
                                        </div>
                                    </div>
                                    <div className="branch">
                                        <span className="label">No</span>
                                        <div className="arrow">↓</div>
                                        <div className="node">
                                            <strong>Send thank you email</strong>
                                            <span className="node-sub">
                                                Keep in talent pool for future
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flowchart 2 */}
                        <div
                            className={`flowchart-card ${activeTab === "flow2" ? "active" : ""}`}
                            id="flow2"
                        >
                            <div className="flowchart-header">
                                <h3>Multi-Stage Interview Process</h3>
                                <p className="highlight">
                                    Reduce time-to-hire from 42 days to 12 days
                                </p>
                            </div>
                            <div className="flowchart-visual">
                                <div className="node start">Candidate accepts interview invite</div>
                                <div className="arrow">↓</div>
                                <div className="node ai">
                                    <strong>Round 1: AI video interview</strong>
                                    <span className="node-sub">
                                        Technical screening with AI assessment
                                    </span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="node ai">
                                    <strong>AI scores responses</strong>
                                    <span className="node-sub">using custom rubric</span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="diamond">
                                    <span>Score &gt; 80%?</span>
                                </div>
                                <div className="branches">
                                    <div className="branch">
                                        <span className="label">Yes</span>
                                        <div className="arrow">↓</div>
                                        <div className="node success">
                                            <strong>Auto-schedule Round 2</strong>
                                            <span className="node-sub">with hiring manager</span>
                                        </div>
                                        <div className="arrow">↓</div>
                                        <div className="node action">
                                            Hiring manager completes interview
                                        </div>
                                        <div className="arrow">↓</div>
                                        <div className="diamond">
                                            <span>Hire?</span>
                                        </div>
                                        <div className="branches-inner">
                                            <div className="branch">
                                                <span className="label">Hire</span>
                                                <div className="arrow">↓</div>
                                                <div className="node success">
                                                    Send offer letter + Welcome kit
                                                </div>
                                            </div>
                                            <div className="branch">
                                                <span className="label">Reject</span>
                                                <div className="arrow">↓</div>
                                                <div className="node">
                                                    Personalized rejection + Future note
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="branch">
                                        <span className="label">No</span>
                                        <div className="arrow">↓</div>
                                        <div className="node">
                                            <strong>Auto-rejection email</strong>
                                            <span className="node-sub">
                                                with constructive feedback
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flowchart 3 */}
                        <div
                            className={`flowchart-card ${activeTab === "flow3" ? "active" : ""}`}
                            id="flow3"
                        >
                            <div className="flowchart-header">
                                <h3>Passive Candidate Re-engagement</h3>
                                <p className="highlight">
                                    Build a qualified talent pipeline automatically
                                </p>
                            </div>
                            <div className="flowchart-visual">
                                <div className="node start">
                                    <strong>Candidate rejected</strong>
                                    <span className="node-sub">but scored 60-74%</span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="node action">
                                    <strong>Add to &apos;Future Talent&apos; database</strong>
                                    <span className="node-sub">for long-term nurturing</span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="node time">
                                    <strong>Wait 3 months</strong>
                                    <span className="node-sub">Automated patience period</span>
                                </div>
                                <div className="arrow">↓</div>
                                <div className="diamond">
                                    <span>New relevant position?</span>
                                </div>
                                <div className="branches">
                                    <div className="branch">
                                        <span className="label">Yes</span>
                                        <div className="arrow">↓</div>
                                        <div className="node ai">
                                            <strong>AI sends personalized email</strong>
                                            <span className="node-sub">mentioning new role</span>
                                        </div>
                                        <div className="arrow">↓</div>
                                        <div className="node action">Check interest</div>
                                        <div className="arrow">↓</div>
                                        <div className="node success">
                                            <strong>Interested?</strong>
                                            <span className="node-sub">
                                                Yes: Fast-track to interview
                                            </span>
                                            <span className="node-sub">
                                                No Response: Continue in pool
                                            </span>
                                        </div>
                                    </div>
                                    <div className="branch">
                                        <span className="label">No</span>
                                        <div className="arrow">↓</div>
                                        <div className="node">Check again next quarter</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
