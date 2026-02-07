"use client";

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const barVariants = {
    hidden: { width: 0 },
    visible: (customWidth: string) => ({
        width: customWidth,
        transition: { duration: 1, ease: "easeOut" as const, delay: 0.4 },
    }),
};

export default function ImpactResults() {
    return (
        <section id="impact" className="impact section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">The RecruiterAI Advantage</h2>
                    <p className="section-subtitle">
                        Real results from real companies hiring smarter.
                    </p>
                </motion.div>

                <div className="impact-content">
                    {/* 1. Vertical Bar Chart */}
                    <div className="impact-chart-wrapper">
                        <motion.div
                            className="impact-chart"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            {/* Item 1 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">Faster screening</div>
                                <motion.div
                                    className="chart-bar bar-blue"
                                    variants={barVariants}
                                    custom="60%"
                                ></motion.div>
                                <div className="chart-value">10x</div>
                            </motion.div>
                            {/* Item 2 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">Faster time to hire</div>
                                <motion.div
                                    className="chart-bar bar-purple"
                                    variants={barVariants}
                                    custom="70%"
                                ></motion.div>
                                <div className="chart-value">70%</div>
                            </motion.div>
                            {/* Item 3 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">More interview capacity</div>
                                <motion.div
                                    className="chart-bar bar-lightblue"
                                    variants={barVariants}
                                    custom="90%"
                                ></motion.div>
                                <div className="chart-value">25x</div>
                            </motion.div>
                            {/* Item 4 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">Application completion</div>
                                <motion.div
                                    className="chart-bar bar-white"
                                    variants={barVariants}
                                    custom="95%"
                                ></motion.div>
                                <div className="chart-value">95%</div>
                            </motion.div>
                            {/* Item 5 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">More qualified applications</div>
                                <motion.div
                                    className="chart-bar bar-teal"
                                    variants={barVariants}
                                    custom="89%"
                                ></motion.div>
                                <div className="chart-value">89%</div>
                            </motion.div>
                            {/* Item 6 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">Less recruitment costs</div>
                                <motion.div
                                    className="chart-bar bar-black"
                                    variants={barVariants}
                                    custom="80%"
                                ></motion.div>
                                <div className="chart-value">80%</div>
                            </motion.div>
                            {/* Item 7 */}
                            <motion.div className="chart-row" variants={itemVariants}>
                                <div className="chart-label">Reduction in bad hires</div>
                                <motion.div
                                    className="chart-bar bar-pink"
                                    variants={barVariants}
                                    custom="50%"
                                ></motion.div>
                                <div className="chart-value">50%</div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 2. Benefit Cards */}
                    <motion.div
                        className="benefits-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                    >
                        {/* Card 1 */}
                        <motion.div className="benefit-card border-blue" variants={itemVariants}>
                            <h3>Fast resume processing</h3>
                            <p className="benefit-stat">10x Faster Resume Screening</p>
                            <p className="benefit-desc">
                                AI parses and ranks 250+ applications per day vs 25 manually.
                            </p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div className="benefit-card border-purple" variants={itemVariants}>
                            <h3>Quick time-to-hire</h3>
                            <p className="benefit-stat">70% Faster Time-to-Hire</p>
                            <p className="benefit-desc">
                                Average hiring timeline drops from 42 days to just 12 days.
                            </p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div className="benefit-card border-lightblue" variants={itemVariants}>
                            <h3>Massive capacity increase</h3>
                            <p className="benefit-stat">25x Interview Capacity</p>
                            <p className="benefit-desc">
                                AI conducts 200+ automated screening interviews daily vs 8
                                manual calls.
                            </p>
                        </motion.div>
                        {/* Card 4 */}
                        <motion.div className="benefit-card border-white" variants={itemVariants}>
                            <h3>Less drop-off</h3>
                            <p className="benefit-stat">95% Application Completion Rate</p>
                            <p className="benefit-desc">
                                Smart application forms reduce candidate drop-off dramatically.
                            </p>
                        </motion.div>
                        {/* Card 5 */}
                        <motion.div className="benefit-card border-teal" variants={itemVariants}>
                            <h3>Better applicants</h3>
                            <p className="benefit-stat">89% More Qualified Applications</p>
                            <p className="benefit-desc">
                                AI job description optimizer attracts higher-quality candidate
                                pipelines.
                            </p>
                        </motion.div>
                        {/* Card 6 */}
                        <motion.div className="benefit-card border-gray" variants={itemVariants}>
                            <h3>Lower expenses</h3>
                            <p className="benefit-stat">80% Lower Recruitment Costs</p>
                            <p className="benefit-desc">
                                vs traditional recruiting agencies and multiple software
                                subscriptions.
                            </p>
                        </motion.div>
                        {/* Card 7 */}
                        <motion.div className="benefit-card border-pink" variants={itemVariants}>
                            <h3>Fewer mistakes</h3>
                            <p className="benefit-stat">50% Reduction in Bad Hires</p>
                            <p className="benefit-desc">
                                AI skills assessment and matching improves hiring accuracy
                                dramatically.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
