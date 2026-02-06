export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Loved by Founders</h2>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="quote">
                            &quot;We went from 6 weeks to hire a developer to just 10 days.
                            RecruiterAI handled everything from screening to scheduling.&quot;
                        </p>
                        <div className="author">
                            <div className="avatar">RM</div>
                            <div className="info">
                                <strong>Rahul Mehta</strong>
                                <span>Founder, TechStart Solutions</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="quote">
                            &quot;The AI interviews are surprisingly accurate. It saved us
                            hundreds of hours on initial screening calls.&quot;
                        </p>
                        <div className="author">
                            <div className="avatar">SJ</div>
                            <div className="info">
                                <strong>Sarah Jenkins</strong>
                                <span>Head of People, GrowthCo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
