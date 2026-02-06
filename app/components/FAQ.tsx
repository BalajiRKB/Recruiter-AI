export default function FAQ() {
    return (
        <section id="faq" className="faq section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    <details className="faq-item">
                        <summary>How does AI screening work?</summary>
                        <div className="faq-content">
                            <p>
                                Our AI analyzes resumes against your job description, ranking
                                candidates based on skills, experience, and relevance. It
                                highlights top talent so you can focus on the best matches.
                            </p>
                        </div>
                    </details>
                    <details className="faq-item">
                        <summary>Does RecruiterAI integrate with our existing ATS?</summary>
                        <div className="faq-content">
                            <p>
                                Yes, we offer seamless integrations with most major ATS
                                platforms including Greenhouse, Lever, and workable.
                            </p>
                        </div>
                    </details>
                    <details className="faq-item">
                        <summary>What&apos;s the pricing structure?</summary>
                        <div className="faq-content">
                            <p>
                                We offer flexible plans for startups and enterprises. Start with
                                our free trial to explore the features.
                            </p>
                        </div>
                    </details>
                    <details className="faq-item">
                        <summary>How long does setup take?</summary>
                        <div className="faq-content">
                            <p>
                                Setup is quick and easy. You can get started in minutes, and our
                                team is available to help with any custom configurations.
                            </p>
                        </div>
                    </details>
                    <details className="faq-item">
                        <summary>Is candidate data secure?</summary>
                        <div className="faq-content">
                            <p>
                                Absolutely. We prioritize data security and comply with all
                                major data protection regulations to keep your candidate
                                information safe.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
