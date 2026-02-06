import Link from "next/link";

export default function CTA() {
    return (
        <section className="final-cta section-padding text-center">
            <div className="container">
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
            </div>
        </section>
    );
}
