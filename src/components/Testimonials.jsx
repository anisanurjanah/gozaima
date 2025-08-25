export default function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            What Our <span className="text-blue-500 ">Clients</span> Say
                        </h2>

                        <p className="section-subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>
                        
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="testimonial-user">
                                <img className="testimonial-avatar" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div className="testimonial-info">
                                    <h1 className="testimonial-name">Robert</h1>
                                    <span className="testimonial-role">CTO, Robert Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="testimonial-user">
                                <img className="testimonial-avatar" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="testimonial-info">
                                    <h1 className="testimonial-name">Jeny Doe</h1>
                                    <span className="testimonial-role">CEO, Jeny Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p className="testimonial-text">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="testimonial-user">
                                <img className="testimonial-avatar" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div className="testimonial-info">
                                    <h1 className="testimonial-name">Ema Watson </h1>
                                    <span className="testimonial-role">Marketing Manager at Stech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}