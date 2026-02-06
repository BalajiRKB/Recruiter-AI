export default function ImpactResults() {
    return (
        <section id="impact" className="impact section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">The RecruiterAI Advantage</h2>
                    <p className="section-subtitle">
                        Real results from real companies hiring smarter.
                    </p>
                </div>

                <div className="impact-content">
                    {/* 1. Vertical Bar Chart */}
                    <div className="impact-chart-wrapper">
                        <div className="impact-chart">
                            {/* Item 1 */}
                            <div className="chart-row">
                                <div className="chart-label">Faster screening</div>
                                <div
                                    className="chart-bar bar-blue"
                                    style={{ width: "60%" }}
                                ></div>
                                <div className="chart-value">10x</div>
                            </div>
                            {/* Item 2 */}
                            <div className="chart-row">
                                <div className="chart-label">Faster time to hire</div>
                                <div
                                    className="chart-bar bar-purple"
                                    style={{ width: "70%" }}
                                ></div>
                                <div className="chart-value">70%</div>
                            </div>
                            {/* Item 3 */}
                            <div className="chart-row">
                                <div className="chart-label">More interview capacity</div>
                                <div
                                    className="chart-bar bar-lightblue"
                                    style={{ width: "90%" }}
                                ></div>
                                <div className="chart-value">25x</div>
                            </div>
                            {/* Item 4 */}
                            <div className="chart-row">
                                <div className="chart-label">Application completion</div>
                                <div
                                    className="chart-bar bar-white"
                                    style={{ width: "95%" }}
                                ></div>
                                <div className="chart-value">95%</div>
                            </div>
                            {/* Item 5 */}
                            <div className="chart-row">
                                <div className="chart-label">More qualified applications</div>
                                <div
                                    className="chart-bar bar-teal"
                                    style={{ width: "89%" }}
                                ></div>
                                <div className="chart-value">89%</div>
                            </div>
                            {/* Item 6 */}
                            <div className="chart-row">
                                <div className="chart-label">Less recruitment costs</div>
                                <div
                                    className="chart-bar bar-black"
                                    style={{ width: "80%" }}
                                ></div>
                                <div className="chart-value">80%</div>
                            </div>
                            {/* Item 7 */}
                            <div className="chart-row">
                                <div className="chart-label">Reduction in bad hires</div>
                                <div
                                    className="chart-bar bar-pink"
                                    style={{ width: "50%" }}
                                ></div>
                                <div className="chart-value">50%</div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Benefit Cards */}
                    <div className="benefits-grid">
                        {/* Card 1 */}
                        <div className="benefit-card border-blue">
                            <h3>Fast resume processing</h3>
                            <p className="benefit-stat">10x Faster Resume Screening</p>
                            <p className="benefit-desc">
                                AI parses and ranks 250+ applications per day vs 25 manually.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="benefit-card border-purple">
                            <h3>Quick time-to-hire</h3>
                            <p className="benefit-stat">70% Faster Time-to-Hire</p>
                            <p className="benefit-desc">
                                Average hiring timeline drops from 42 days to just 12 days.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="benefit-card border-lightblue">
                            <h3>Massive capacity increase</h3>
                            <p className="benefit-stat">25x Interview Capacity</p>
                            <p className="benefit-desc">
                                AI conducts 200+ automated screening interviews daily vs 8
                                manual calls.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="benefit-card border-white">
                            <h3>Less drop-off</h3>
                            <p className="benefit-stat">95% Application Completion Rate</p>
                            <p className="benefit-desc">
                                Smart application forms reduce candidate drop-off dramatically.
                            </p>
                        </div>
                        {/* Card 5 */}
                        <div className="benefit-card border-teal">
                            <h3>Better applicants</h3>
                            <p className="benefit-stat">89% More Qualified Applications</p>
                            <p className="benefit-desc">
                                AI job description optimizer attracts higher-quality candidate
                                pipelines.
                            </p>
                        </div>
                        {/* Card 6 */}
                        <div className="benefit-card border-gray">
                            <h3>Lower expenses</h3>
                            <p className="benefit-stat">80% Lower Recruitment Costs</p>
                            <p className="benefit-desc">
                                vs traditional recruiting agencies and multiple software
                                subscriptions.
                            </p>
                        </div>
                        {/* Card 7 */}
                        <div className="benefit-card border-pink">
                            <h3>Fewer mistakes</h3>
                            <p className="benefit-stat">50% Reduction in Bad Hires</p>
                            <p className="benefit-desc">
                                AI skills assessment and matching improves hiring accuracy
                                dramatically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
