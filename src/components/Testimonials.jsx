import testimonials from '../data/testimonials.json'

export default function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <div className="section-wrapper">
                    <header>
                        <h2 className="section-title">
                            What Our <span className="testimonial-highlight">Clients</span> Say
                        </h2>

                        <p className="section-subtitle">
                            Discover how our clients have transformed their ideas into reality with us.  
                            Real stories. Real results.
                        </p>
                    </header>
                        
                    <div className="testimonials-grid">
                        {
                            testimonials.data.map((testimonial) => (
                                <div 
                                    id={testimonial.id} 
                                    className="testimonial-card"
                                >
                                    <p className="testimonial-text">{testimonial.text}</p>

                                    <div className="testimonial-user">
                                        <img
                                            src={testimonial.avatar}
                                            className="testimonial-avatar"
                                            alt={`Image of ${testimonial.name}`} 
                                        />

                                        <div className="testimonial-info">
                                            <h1 className="testimonial-name">{testimonial.name}</h1>
                                            <span className="testimonial-role">{testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
