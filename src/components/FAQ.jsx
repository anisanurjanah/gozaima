export default function FrequentlyAskedQuestions() {
    return (
        <>
            <section id="faq">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            Frequently Asked Questions
                        </h2>

                        <p className="section-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <hr className="faq-divider" />

                    <div>
                        <div className="faq-item">
                            <button className="faq-btn">
                                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                                <h1 className="faq-question">How can I pay for my appointment ?</h1>
                            </button>

                            <div className="faq-answer">
                                <span className="faq-answer-border"></span>

                                <p className="faq-answer-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                </p>
                            </div>
                        </div>

                        <hr className="faq-divider" />

                        <div className="faq-item">
                            <button className="faq-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>

                                <h1 className="faq-question">What can I expect at my first consultation ?</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}