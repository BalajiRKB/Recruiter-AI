"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQ() {
    return (
        <section id="faq" className="faq section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </motion.div>
                <motion.div
                    className="faq-list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.details className="faq-item" variants={itemVariants}>
                        <summary>How does AI screening work?</summary>
                        <div className="faq-content">
                            <p>
                                Our AI analyzes resumes against your job description, ranking
                                candidates based on skills, experience, and relevance. It
                                highlights top talent so you can focus on the best matches.
                            </p>
                        </div>
                    </motion.details>
                    <motion.details className="faq-item" variants={itemVariants}>
                        <summary>Does RecruiterAI integrate with our existing ATS?</summary>
                        <div className="faq-content">
                            <p>
                                Yes, we offer seamless integrations with most major ATS
                                platforms including Greenhouse, Lever, and workable.
                            </p>
                        </div>
                    </motion.details>
                    <motion.details className="faq-item" variants={itemVariants}>
                        <summary>What&apos;s the pricing structure?</summary>
                        <div className="faq-content">
                            <p>
                                We offer flexible plans for startups and enterprises. Start with
                                our free trial to explore the features.
                            </p>
                        </div>
                    </motion.details>
                    <motion.details className="faq-item" variants={itemVariants}>
                        <summary>How long does setup take?</summary>
                        <div className="faq-content">
                            <p>
                                Setup is quick and easy. You can get started in minutes, and our
                                team is available to help with any custom configurations.
                            </p>
                        </div>
                    </motion.details>
                    <motion.details className="faq-item" variants={itemVariants}>
                        <summary>Is candidate data secure?</summary>
                        <div className="faq-content">
                            <p>
                                Absolutely. We prioritize data security and comply with all
                                major data protection regulations to keep your candidate
                                information safe.
                            </p>
                        </div>
                    </motion.details>
                </motion.div>
            </div>
        </section>
    );
}
