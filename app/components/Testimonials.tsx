"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Loved by Founders</h2>
                </motion.div>
                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="testimonial-card" variants={cardVariants}>
                        <p className="quote">
                            &quot;We went from 6 weeks to hire a developer to just 10 days.
                            RecruiterAI handled everything from screening to scheduling.&quot;
                        </p>
                        <div className="author">
                            <div className="avatar">
                                <img src="/assets/ellipse 2.png" alt="SJ" />
                            </div>
                            <div className="info">
                                <strong>Rahul Mehta</strong>
                                <span>Founder, TechStart Solutions</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="testimonial-card" variants={cardVariants}>
                        <p className="quote">
                            &quot;The AI interviews are surprisingly accurate. It saved us
                            hundreds of hours on initial screening calls.&quot;
                        </p>
                        <div className="author">
                            <div className="avatar">
                                <img src="/assets/ellipse 1.png" alt="RM" />
                            </div>
                            <div className="info">
                                <strong>Sarah Jenkins</strong>
                                <span>Head of People, GrowthCo</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
