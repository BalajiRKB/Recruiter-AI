"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="final-cta section-padding text-center">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                >
                    <h2 className="cta-title">Ready to Hire Better, Faster?</h2>
                    <p className="cta-subtitle">
                        Join 500+ companies hiring smarter with AI
                    </p>
                    <div className="cta-actions">
                        <Link href="#" className="btn btn-primary btn-pill btn-lg">
                            Start Free Trial
                        </Link>
                        <Link href="#" className="btn btn-outline btn-pill btn-lg">
                            Schedule Demo
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
